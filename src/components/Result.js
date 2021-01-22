import React from 'react'

function Result(props) {
    const lines = props.allScores.map((item, index) => {
        return (
            <div key={index}>
                { item }
            </div>
        )
    })

    if (lines.length === 0) {
        return (<div></div>)
    } else {

        return (
            
            <div>
                <p>Which breaks down as this:</p>
                <div>{ lines }</div>
            </div>
        )
    }
 }

 export default Result