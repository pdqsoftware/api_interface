import React from 'react'

import Header from './Header'
import Button from './Button'
import Score from './Score'
import Name from './Name'

class ApiInterface extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameText: "",
            scoreText: "0",
            selectedGenre: "A",
            lastIndex: 0,
            searchText: '',


        }
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleScoreChange=this.handleScoreChange.bind(this)

        this.getAllScores=this.getAllScores.bind(this)
        this.putNewScore=this.putNewScore.bind(this)

        // this.handleChangeGenre=this.handleChangeGenre.bind(this)
        // this.handleTextSearch=this.handleTextSearch.bind(this)

    }

    handleNameChange(value) {
        console.log(value)
        this.setState(() => ({
            nameText: value
        }))
    }
    handleScoreChange(value) {
        console.log(value)
        this.setState(() => ({
            scoreText: value
        }))
    }

    getAllScores() {
        const request = new XMLHttpRequest()
    
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                // callback(undefined, data)
                console.log(data)
            } else if (e.target.readyState === 4) {
                // callback('An error has taken place', undefined)
                console.log('An error has occured!')
            }
        })
    
        request.open('GET', 'https://t71yer9m3m.execute-api.eu-west-1.amazonaws.com/public/list')
        request.send()
    }

    putNewScore() {

        const body = {
            "user_name": "Angela",
            "score": 103
        }

        const request = new XMLHttpRequest()
    
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                // callback(undefined, data)
                console.log(data)
            } else if (e.target.readyState === 4) {
                // callback('An error has taken place', undefined)
                console.log('An error has occured!')
            }
        })
    
        request.open('PUT', 'https://t71yer9m3m.execute-api.eu-west-1.amazonaws.com/public/send')
        //Send the proper header information along with the request
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Access-Control-Allow-Origin", "*");
        request.setRequestHeader("Access-Control-Allow-Methods", "*");
        request.setRequestHeader("X-Amzn-Trace-Id", "Root=1-60099694-49cfc61715c4e87af2c2eb0d;Sampled=0");
        request.send(body)
    }

    // {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","X-Amzn-Trace-Id":"Root=1-60099694-49cfc61715c4e87af2c2eb0d;Sampled=0","Content-Type":"application/json"}

    render() {
        return (
            <div>
                <Header />
                <Button buttonType="link" buttonAref="https://userid-pdqsoftware.auth.eu-west-1.amazoncognito.com/login?client_id=564nbglbvffhsnbpgrbdv0msr8&response_type=code&scope=email+openid&redirect_uri=https://t71yer9m3m.execute-api.eu-west-1.amazonaws.com/public/list"  buttonText="Login" />
                <div className="centre user_data">
                    <Name nameChange={ this.handleNameChange } />
                    <Score scoreChange={ this.handleScoreChange }/>
                </div>
                <Button buttonType="http" buttonAction={ this.putNewScore }  buttonText="Add this Score/Test" />
                <Button buttonType="http" buttonAction={ this.getAllScores }  buttonText="Get All Scores" />
            </div>
        )

    }

}

export default ApiInterface