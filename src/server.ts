import express from 'express';

const app = express()

const ads = (req:any, res:any) => {
    res.json('apenas ambiente')
    console.log('ok')
}
app.get('/ads', ads)


app.listen(3000)   
