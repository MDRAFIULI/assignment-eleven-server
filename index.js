const express = require('express');
require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const app = express();
const port = process.env.PORT || 5000;




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.ASSIGNMENTELEVEN_USER}:${process.env.ASSIGNMENTELEVEN_PASSWORD}@cluster0.5tzt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const itemCollection = client.db('assignmentEleven').collection('item');
    }
    finally {

    }
}


app.get('/', (req, res) => {
    res.send('Hello world')
});
app.listen(port, (req, res) => {
    console.log('listening to port', port);
})
