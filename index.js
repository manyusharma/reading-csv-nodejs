const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

//ESTABLISHING THE CONNECTION B/W SQL DATABASE AND NODEJS FILE 

var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"jp"
});



//starting the server
app.listen(3000,()=>console.log('Express server is running at port no. : 3000')); //3000 is the port number




//Query for printing all the data in console

app.get('/jp',(req,res)=>{              //here jp means the place where data will be get so  are supposed to right localhost/jp
    mysqlConnection.query('SELECT * FROM data',(err,rows,fields)=>{                 
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});


//FINDING SUM OF EST. HRS , ACTUAL HRS, FISXED COST

mysqlConnection.connect((err) => {
    if (err){
        throw err;
    }
    mysqlConnection.query("SELECT SUM(ACTUALHRS) FROM data",function(err,result,fields){   //here data is the table name not the database name
        console.log(result);
    })
    mysqlConnection.query("SELECT SUM(ESTHRS) FROM data",function(err,result,fields){   //here data is the table name not the database name
        console.log(result);
    })
    mysqlConnection.query("SELECT SUM(FIXEDCOST) FROM data",function(err,result,fields){   //here data is the table name not the database name
        console.log(result);
    })
});


































