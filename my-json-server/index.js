
//import json-server
const jsonServer = require("json-server")
//create a server for running json dxata
const EmpServer = jsonServer.create()
//set up path
const router = jsonServer.router("db.json")
//returns middlewares used by json server

const middlewares = jsonServer.defaults()

//set up port number
const port = 4000 || process.env.port

//use middlewatr anfd router to server

EmpServer.use(middlewares)
EmpServer.use(router)

//to listen sever app to resoolve request
EmpServer.listen(port,()=>
{"media player started at port and waiting for requast"})