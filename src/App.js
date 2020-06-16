import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';

const App = () => {
  const [graph, setGraph] = useState([])
  const [query, setQuery] = useState('')

  const handleSubmit = async () => {
    const res = await fetch(`https://avatar.labpro.dev/friends/${query}`)
    const data = await res.json()
    data.status === 200 && setGraph([...graph, data.payload])
  }

  useEffect(() => {
    
    console.log(graph)
  }, [graph])

  return (
    <main>
        <TextField label="Query ID" onChange={e => setQuery(e.target.value)} value={query}/>
        <Button variant="contained" onClick={handleSubmit}>Fetch</Button>
    </main>
  );
}

export default App;
