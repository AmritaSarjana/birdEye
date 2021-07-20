const express = require('express');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const request = require('request');


const app= express();

app.use(bodyParser.json());

  
app.get('/crowl', function(req,res){
    let arr = [];
    const URL = req.query.url;
    // const URL = "https://www.flipkart.com/search?q=mobiles";
    console.log(URL)

    request(URL, function (err, response, body) {
        // console.log(body)
        if(err){
            console.log(err)
            res.status(400).send({error: "Error"});
        }else{
            let $ = cheerio.load(body);
            $('div._3pLy-c').each(function(index){
                // console.log(index)
                const name = $(this).find('div._4rR01T').text()
                const price = $(this).find('div._30jeq3').text()
                arr.push({name, price});
            })
            res.send(arr);
        }
    });
})


//listen for requests
app.listen(4000,function(){ 
    console.log("Now Listening for requests");
})
