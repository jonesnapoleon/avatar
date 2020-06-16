import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';
import { getRandomInt, isSafe, X_MULTIPLIER, Y_MULTIPLIER, createNewLine, refreshLine } from './utils'

const App = () => {
  const [graph, setGraph] = useState([])
  const [query, setQuery] = useState('')
  const [fetchedId, setFetchedId] = useState([])
  const [existingId, setExistingId] = useState([])
  const [positions, setPositions] = useState([])

  const getDataFromId = (id) => {
    for(let vertex of graph){
      if(String(vertex.id) === String(id)){
        return Object.assign({}, vertex)
      }
      for(let friend of vertex.friends){
        if(String(friend.id) === String(id)){
          return Object.assign({}, friend)
        }
      }
    }
  }

  useEffect(() => {
    let positionHolder = []
    existingId.forEach(id => {
      let x, y
      do {
        x = getRandomInt(1, 20)
        y = getRandomInt(1, 20)
      } while(!isSafe(positionHolder, x, y))
      positionHolder.push([x, y])
    })
    setPositions(positionHolder)
  }, [fetchedId, existingId])

  const handleExisting = (payload) => {
    let recordedId = existingId
    if(!recordedId.includes(payload.id)){
      recordedId.push(payload.id)
    }
    payload.friends.forEach(friend => {
      if(!recordedId.includes(friend.id)){
        recordedId.push(friend.id)
      }
    });
    setExistingId(recordedId)
  }

  const handleIndex = async (id) => {
    console.log(id)
    if(fetchedId.includes(id)){ alert("Fetched before!"); return }
    const res = await fetch(`https://avatar.labpro.dev/friends/${id}`)
    const data = await res.json()
    if(data.status === 200){
      setGraph([...graph, data.payload])
      setFetchedId([...fetchedId, data.payload.id])
      handleExisting(data.payload)
    }
    else {
      alert(data.message)
    }
  }

  const handleSubmit = async () => {
    const trimmed = query.trim()
    if (fetchedId.includes(trimmed)){ alert("Fetched before!"); return }
    const res = await fetch(`https://avatar.labpro.dev/friends/${trimmed}`)
    const data = await res.json()
    if(data.status === 200){
      setGraph([...graph, data.payload])
      setFetchedId([...fetchedId, data.payload.id])
      handleExisting(data.payload)
    }
    else {
      alert(data.message)
    }
  }

  useEffect(() => {
    if(existingId.length > 0){
      refreshLine()
      graph.forEach(vertex => {
        const vertexIdx = existingId.indexOf(vertex.id)
        const vertexPosition = positions[vertexIdx]
        vertex.friends.forEach(friend => {
          const friendIdx = existingId.indexOf(friend.id)
          const friendPosition = positions[friendIdx]
          try {
            createNewLine(vertexPosition[0] * X_MULTIPLIER, vertexPosition[1] * Y_MULTIPLIER, friendPosition[0] * X_MULTIPLIER, friendPosition[1] * Y_MULTIPLIER, true)
          }
          catch {
            refreshLine()
          }
        })
      })
    }
  }, [graph, positions, existingId])

  return (
    <main id='girlfriends'>
        <TextField label="Query ID" type='number' onChange={e => setQuery(e.target.value)} value={query}/>
        <Button variant="contained" onClick={handleSubmit}>Fetch</Button>
        <div className='viz'>
        {
          fetchedId.length > 0 && 
          existingId.map(getDataFromId).map((data, i) => {
            return(
              positions && positions[i][0] && positions[i][1] && 
              <div key={data.id} onClick={() => handleIndex(data.id)} className={fetchedId.includes(data.id) ? 'dot king' : 'dot' } id={'id-'+i} style={{ marginLeft: positions[i][0] * X_MULTIPLIER, marginTop: positions[i][1] * Y_MULTIPLIER, marginBottom: 3 }}>
                {data.name}
              </div>
            )
          })
        }
        </div>
    </main>
  );
}

export default App;
