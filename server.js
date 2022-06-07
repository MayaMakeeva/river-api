const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())

const river = {
    'enisey':{
        'origine': 'Siberia',
        'waterTemp': 8,
        'frozen': false,
        'size': 'big',
    },
    'unknown':{
        'origine': 'unknown',
        'waterTemp': 0,
        'frozen': true,
        'size': 'unknown'
    },
    'volga':{
        'origine': 'Ural',
        'waterTemp': 20,
        'frozen': true,
        'size': 'huge'
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const riverName = request.params.name.toLowerCase()
    if( river[riverName] ){
        response.json(river[riverName])
    }else{
        response.json(river['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})