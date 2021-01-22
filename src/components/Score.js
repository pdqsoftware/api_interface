import React from 'react'

class UserScore extends React.Component {

    render() {
        return (
            <div id="enter_score">
                <label className="user_input">Enter score: </label>
                <input className="user_input" type="text" id="score_input" name="scoreText"
                    onChange={ e => this.props.scoreChange(e.target.value) }
                ></input>
            </div>
        )
     } 
 }

 export default UserScore