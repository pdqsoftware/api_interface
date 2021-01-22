import React from 'react'

import Header from './Header'
import Button from './Button'
import Score from './Score'
import Name from './Name'
import Result from './Result'

class ApiInterface extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameText: "",
            scoreText: "0",
            allScoresRaw: [],
            allScoresFormatted: []
        }

        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleScoreChange=this.handleScoreChange.bind(this)

        this.getallScoresFormatted=this.getallScoresFormatted.bind(this)
        this.putNewScore=this.putNewScore.bind(this)

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

    getallScoresFormatted() {
        const request = new XMLHttpRequest()
    
        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                // callback(undefined, data)
                console.log(data)
                // Store in state
                this.setState(() => ({
                    allScoresRaw: data,
                    allScoresFormatted: this.storeInArray(data.Items)
                }))
                // allScoresFormatted: this.storeInArray(data.Items)
            } else if (e.target.readyState === 4) {
                // callback('An error has taken place', undefined)
                console.log('An error has occured!')
            }
        })
    
        request.open('GET', 'https://t71yer9m3m.execute-api.eu-west-1.amazonaws.com/public/list')
        request.send()
    }

    storeInArray(objectIn) {
        // Converts incoming object to an array and returns it
        let arrayOut = []
        let countString
        console.log(objectIn)
        console.log(objectIn.length)

        for (let i = 0; i < objectIn.length; i++) {
            console.log(objectIn[i])

            countString=`User: ${objectIn[i].user_name}  Score: ${objectIn[i].score}  Input count: ${objectIn[i].count}`
            arrayOut.push(countString)
        }
        console.log(`Item 0: ${arrayOut[0]}`)
        return arrayOut
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
        request.setRequestHeader("Access-Control-Allow-Header", "*");
        request.setRequestHeader("X-Amzn-Trace-Id", "Root=1-60099694-49cfc61715c4e87af2c2eb0d;Sampled=0");
        request.send(body)
    }

    // {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","X-Amzn-Trace-Id":"Root=1-60099694-49cfc61715c4e87af2c2eb0d;Sampled=0","Content-Type":"application/json"}

    render() {
        return (
            <div>
                <Header />
                <Button buttonType="link" buttonAref="https://userid-pdqsoftware.auth.eu-west-1.amazoncognito.com/login?client_id=564nbglbvffhsnbpgrbdv0msr8&response_type=code&scope=email+openid&redirect_uri=https://elegant-boyd-f4a57e.netlify.app"  buttonText="Login" />
                <div className="centre user_data">
                    <Name nameChange={ this.handleNameChange } />
                    <Score scoreChange={ this.handleScoreChange }/>
                </div>
                <Button buttonType="http" buttonAction={ this.putNewScore }  buttonText="Add this Score/Test" />
                <Button buttonType="http" buttonAction={ this.getallScoresFormatted }  buttonText="Get All Scores" />
                { this.state.allScoresRaw.length === 0 ? '' : `Returns: ${JSON.stringify(this.state.allScoresRaw)}` }
                <Result allScores={ this.state.allScoresFormatted } />
            </div>
        )

    }

}

export default ApiInterface