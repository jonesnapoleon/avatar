import React, { useState, useEffect } from 'react'
import { Loading, getRandomInt, isSafe, createNewLine, refreshLine, X_MULTIPLIER, Y_MULTIPLIER, GOD_NAME } from './utils'

export const Draw = ({graph, people, connections}) => {
    const [positions, setPositions] = useState([])

    useEffect(() => {
        if(graph && graph.getNumberOfVertices() > 0 && graph.getNumberOfVertices() !== positions.length && connections > 0){
            let temp = []
            for(let i = 0 ; i < people; i ++){
                let x, y
                do {
                    x = getRandomInt(1, 14)
                    y = getRandomInt(1, 14)
                } while(!isSafe(temp, x, y))
                temp.push([x, y])
            }
            setPositions(temp)
        }
    }, [graph, positions, people, connections])

    useEffect(() => {
        if(graph && graph.getNumberOfVertices() > 0 && positions.length > 0 && connections > 0){
            refreshLine()
        }
    }, [graph, positions, connections, ])

    return(
        graph && graph.getNumberOfVertices() > 0 && graph.getNumberOfVertices() === positions.length && positions.length > 0 ?
        <div className='viz'>
            {
                positions.length === graph.getNumberOfVertices() && positions.length !== 0 &&
                graph.getAllVertices().map((vertex, i) => {
                    return(
                        positions && positions[i][0] && positions[i][1] &&
                        <div key={i} className='dot' id={'id-'+vertex} style={{ marginLeft: positions[i][0] * X_MULTIPLIER, marginTop: positions[i][1] * Y_MULTIPLIER, marginBottom: 3 }}>
                            {vertex}
                        </div>
                    )
                })
            }
        </div>
        :
        <Loading />
    )
}