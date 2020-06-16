import React from 'react'

export const X_MULTIPLIER = 60
export const Y_MULTIPLIER = 20

export const Loading = () => <div style={{ marginTop: "2rem" }}>Loading...</div>

export const createNewLine = (x1, y1, x2, y2, emphasized) => {
    let distance = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) )
    let xmid = (x1+x2)/2
    let ymid = (y1+y2)/2

    let salopeInRadian = Math.atan2(y1 - y2, x1 - x2)
    let salopeInDegree = (salopeInRadian * 180) / Math.PI

    const viz = document.getElementsByClassName('viz')[0]
    if(viz){
        const line = `<div class='line' style="z-index: -200; width: ${distance}px; background: ${emphasized ? 'var(--ternary)' : 'green'};  margin-top: ${ymid}px; margin-left: ${xmid - distance/2}px; transform: rotate(${salopeInDegree}deg); "></div>`
        viz.innerHTML += line
    }
}

export const refreshLine = () => {
    const viz = document.getElementsByClassName('viz')[0]
    if(viz){
        let child = viz.lastElementChild
        while (child.classList.contains('line')){
            viz.removeChild(child)
            child = viz.lastElementChild
        } 
    }
}


export const isSafe = (grid, x, y) => {
    for(let i of grid){
        if(Math.abs(i[0] - x) < 3 && Math.abs(i[1] - y) < 3){
            return false
        }
    }
    return true
}

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min