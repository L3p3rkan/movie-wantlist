import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function App(){
  const [q, setQ] = useState('')
  const [results, setResults] = useState([])

  async function search(){
    if(!q) return
    const res = await axios.get(`/api/search?q=${encodeURIComponent(q)}`)
    setResults(res.data || [])
  }

  return (
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>Movie Wantlist</h1>
      <div>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." />
        <button onClick={search}>Search</button>
      </div>
      <ul>
        {results.map(r=> <li key={r.imdbID}>{r.Title} ({r.Year})</li>)}
      </ul>
    </div>
  )
}
