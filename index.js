const express = require('express')
const bodyParser = require('body-parser') 
const axios = require('axios');
var cors = require('cors')

const app = express()
const port = 3000

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/bothook', (req, res) => {
    try {
        console.log("headers ===>", req.headers);
        console.log("body ===>", req.body);
        console.log("params ===>", req.params);
        console.log("query ===>", req.query);
        res.send("get user")
        // const onechat_token = req.body
        // console.log("onechat_token ===>", onechat_token);
        // res.send(`Full name is:${req.body.test}`);
        
        // var data = JSON.stringify({"bot_id":"B06e1ba78784f59e7b7a6f8f0a9fc35ac","source":onechat_token});

        // var config = {
        // method: 'post',
        // url: 'https://chat-api.one.th/manage/api/v1/getprofile',
        // headers: { 
        //     'Authorization': 'Bearer Afa48433443b75789b529a8fcef1b4eff295a28438b524eec8ccdb3855a95a311ff240b8d6733489fa86fc17ded6c9719', 
        //     'Content-Type': 'application/json'
        // },
        // data : data
        // };

        // axios(config)
        // .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        //     console.log(error);
        //     req.status(401).json({message: err.response.data.errorMessage, status:'fail', data:''})
        // });
    } catch (err) {
        console.log(err);
        req.status(401).json({message: err.response.data.errorMessage, status:'fail', data:''})
    }
    
}) 

app.listen(port, () => console.log(`Example app listening on ${port} port!`))