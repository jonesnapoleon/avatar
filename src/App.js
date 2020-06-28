import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { Graph } from 'react-d3-graph'
import Theme from './Theme'
import { graphConfig, graphNodeColor } from "./utils"
import './App.css'

export default () => {
  const [fetchedId, setFetchedId] = useState([])
  const [data, setData] = useState(
    {
      nodes: localStorage.getItem('nodes') ? JSON.parse(localStorage.getItem('nodes')) : [],
      links: localStorage.getItem('links') ? JSON.parse(localStorage.getItem('links')) : []
    }
  )

  const handleData = (inputNode) => {
    let temp = data

    temp.nodes = Array.from(new Set([...temp.nodes, { id: inputNode.id, name: inputNode.name, element: inputNode.element }, ...inputNode.friends]))
    temp.nodes = temp.nodes.filter((node, i) => i === temp.nodes.findIndex(newNode => node.id === newNode.id))
    temp.nodes.map(node => node.color = graphNodeColor[node.element])
    temp.nodes.map(node => node.highlightStrokeColor = graphNodeColor[node.element])
    temp.nodes.map(node => node.fontColor = graphNodeColor[node.element])

    let inputToFriendNode = inputNode.friends.map(friendNode => friendNode.id !== inputNode.id ? { source: inputNode.id, target: friendNode.id } : null)
    let friendToInputNode = inputNode.friends.map(friendNode => friendNode.id !== inputNode.id ? { source: friendNode.id, target: inputNode.id } : null)
    temp.links = Array.from(new Set([...temp.links, ...inputToFriendNode, ...friendToInputNode])).filter(x => x !== null)
    temp.links = temp.links.filter((link, i) => i === temp.links.findIndex(newLink => link.source === newLink.source && link.target === newLink.target))

    localStorage.setItem('nodes', JSON.stringify(temp.nodes))
    localStorage.setItem('links', JSON.stringify(temp.links))
    setData(temp)
  }

  const handleIndex = async (id) => {
    if (fetchedId.includes(id)) { alert('Fetched before!'); return }
    const res = await fetch(`https://avatar.labpro.dev/friends/${id}`)
    const data = await res.json()
    if (data.status !== 200) { alert(data.message); return }
    handleData(data.payload)
    setFetchedId([...fetchedId, data.payload.id])
  }

  const handleSubmit = async (e) => e.key === 'Enter' && await handleIndex(e.target.value.trim())

  const handleDelete = () => {
    setData({ nodes: [], links: [] })
    localStorage.removeItem("nodes")
    localStorage.removeItem('links')
  }

  return (
    <Theme>
      <TextField label="Query ID" onKeyPress={handleSubmit} />
      {
        data && data.nodes.length > 0 &&
        <>
          <Button color='primary' onClick={handleDelete}>Remove all</Button>
          <Graph
            id="graph-id"
            data={data}
            config={graphConfig}
            onDoubleClickNode={handleIndex}
          />
        </>
      }
    </Theme>
  )
}