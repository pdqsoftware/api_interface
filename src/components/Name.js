import React from 'react'

class UserName extends React.Component {

    render() {
        return (
            <div id="enter_name">
                <label className="user_input">Enter name: </label>
                <input className="user_input" type="text" id="name_input" name="nameText"
                    onChange={ e => this.props.nameChange(e.target.value) }
                ></input>
            </div>
        )
     } 
 }

 export default UserName