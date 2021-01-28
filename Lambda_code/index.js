const DB = require('./dynamo');
const Dynamo = new DB();

exports.handler = async (event) => {
    console.log(event);
    if (event.httpMethod === 'PUT') {
        let response = await putNameScore(event)
        return done(response);
    } else if (event.httpMethod === 'GET') {
        let response = await getCount(event);
        return done(response);
    }
};

const done = response => {
    return {
        statusCode: '200',
        body: JSON.stringify(response),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': '*'
        }
    }
}

const getCount = event => {
    // Returns a count of records in DB
    return Dynamo.scan('score', 0, 'speechgraphics');
}

const putNameScore = async event => {
    // Adds, or updates, a score into DynamoDB table
    console.log('Output from putNameScore()');
    console.log(event.body);
    
    let { user_name, score } = JSON.parse(event.body);
    console.log(`Name: ${user_name}, Score: ${score}`);
    
    return Dynamo.addScore(user_name, score, 'speechgraphics');
}