import express, { response } from 'express';

const app = express()

app.get('/games', (req,res) => {
    return response.json([])
})

app.get('/ads', (req,res) => {

})

app.get('/ads', (req,res) => {

})

app.listen(3000)   