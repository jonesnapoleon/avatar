import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { Graph } from 'react-d3-graph'
import { graphConfig, graphNodeColor } from "./utils"
import './App.css'

export default () => {
  const [query, setQuery] = useState('')
  const [fetchedId, setFetchedId] = useState([])
  const [data, setData] = useState({ nodes: [], links: [] })

  const handleData = (inputNode) => {
    let temp = data
    temp.nodes = Array.from(new Set([...temp.nodes, { id: inputNode.id, name: inputNode.name, element: inputNode.element }, ...inputNode.friends]))
    temp.nodes.map(node => node.color = graphNodeColor[node.element])
    temp.nodes.map(node => node.highlightStrokeColor = graphNodeColor[node.element])
    let inputToFriendNode = inputNode.friends.map(friendNode => friendNode.id !== inputNode.id ? { source: inputNode.id, target: friendNode.id } : null)
    let friendToInputNode = inputNode.friends.map(friendNode => friendNode.id !== inputNode.id ? { source: friendNode.id, target: inputNode.id } : null)
    temp.links = Array.from(new Set([...temp.links, ...inputToFriendNode, ...friendToInputNode])).filter(x => x !== null)
    setData(temp)
  }

  const handleIndex = async (id) => {
    if (fetchedId.includes(id)) { alert('Fetched before!'); return }
    const res = await fetch(`https://avatar.labpro.dev/friends/${id}`)
    const data = await res.json()
    if (data.status === 200) {
      handleData(data.payload)
      setFetchedId([...fetchedId, data.payload.id])
    } else {
      alert(data.message)
    }
  }
  const handleSubmit = async () => await handleIndex(query.trim())

  return (
    <main id='girlfriends'>
      <TextField label="Query ID" type='number' onChange={e => setQuery(e.target.value)} value={query} />
      <Button variant="contained" color='primary' onClick={handleSubmit}>Fetch</Button>
      {
        data && data.nodes.length > 0 &&
        <Graph
          id="graph-id"
          data={data}
          config={graphConfig}
          onDoubleClickNode={handleIndex}
        />
      }
    </main >
  )
}