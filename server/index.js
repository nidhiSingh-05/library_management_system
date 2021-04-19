const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { query } = require('express');

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root",
    database:"mydatabase"
});
//app.use(bodyParser.urlencoded({extended:true}));

app.post('/register',(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password= req.body.password
    const confirmPassword = req.body.confirmPassword
    //console.log(username);
    db.query("insert into student(username,email,password,confirmPassword) values(?,?,?,?)",
    [username,email,password,confirmPassword],(err,result)=>{
        // if(err)throw err
         console.log(err);
         res.send(result);
        // console.log(result);
    });
});

app.post('/login',(req,res)=>{
    const userName = req.body.userName;
    const password = req.body.password;

    db.query("select * from student where userName=? AND password=?",[userName,password],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length >0){
            if(password == result[0].password){
                res.json({loggedIn:true,userName:userName});
                
            }
            else{
                res.json({loggedIn:false,message:"Wrong username password...!"});
            }
        }
        else{
            res.json({loggedIn:false,message:"user doesn't exist"});
        }
    
    });
});

app.get('/user',(req,res)=>{
    
    db.query("select * from student",(err,result)=>{
       if(err)
       {
           res.send({err:err})
       }
       if(result.length>0)
       {
        res.send(result)
       }
        else{
            res.send({message:"No data"})
        }
      
    })

})

app.post('/home/insert',(req,res)=>{
    // console.log( " in data insert")
    const bookName=req.body.bookName;
    const autherName=req.body.autherName;
    const cost = req.body.cost;
    const quantity = req.body.quantity;
    console.log(bookName,autherName,cost,quantity);
    const sqlInsert = "insert into book (bookName,autherName,cost,quantity) values(?,?,?,?)";
    db.query(sqlInsert,[bookName,autherName,cost,quantity],(err,result)=>{
    //    console.log("hello ")
        if(err)
        {
        console.log(err);
        }
        else{
        res.send(result);
        }
       
    });
});
app.get('/home/get',(req,res)=>{
    const sqlSelect="select * from book";
    db.query(sqlSelect,(err,result)=>{
        if(err)
        {
        console.log(result);
        }
        else{
        res.send(result);
        }
    });
});

app.get('/home/get/:bookId',(req,res)=>{
    const bookId=req.params.bookId;
    const sqlSelect="select * from book where bookId =?";
    db.query(sqlSelect,bookId,(err,result)=>{
        if(err)
        {
        console.log(result);
        }
        else{
        res.send(result);
        }
    });
});

app.put('/home/update/:bookId',(req,res)=>{
    const bookName= req.body.bookName;
    const autherName=req.body.autherName;
    const cost = req.body.cost;
    const bookId=req.params.bookId;
    const quantity = req.body.quantity;
    console.log(bookId)

    const sqlUpdate= "update book set  bookName=?,autherName=?,cost=?,quantity= ? where bookId = ? ";
    db.query(sqlUpdate,[bookName,autherName,cost,quantity,bookId],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result)

           // res.json({updateData : 'update success'});
          // res.redirect();
        }
    });
    const sqlSelect="select * from book";
    db.query(sqlSelect,(err,result)=>{
        if(err)
        {
        console.log(result);
        }
        else{
        res.send(result);
        }
    });
});

app.delete('/home/delete/:bookId',(req,res)=>{
    const bookId=req.params.bookId;
   // const sqlDelete="delete from book where bookId = ? ";
    db.query("delete from book where bookId = ? ",bookId,(err,result)=>{
       if(err)
       { 
           console.log(err);
       }
       else
       {
            res.send(result);
       }
    })
})
app.get('/home/get/:bookId',(req,res)=>{
    const bookId=req.params.bookId;
    const bookName= req.body.bookName;
    const autherName=req.body.autherName;
    const sqlSelect="select bookName=?,autherName=? from book where bookId=?";
    db.query(sqlSelect,[bookId,bookName,autherName],(err,result)=>{
        if(err)
        {
        console.log(result);
        }
        else{
        res.send(result);
        }
    });
});
app.post('/book/issue/:bookId',(req,res)=>{
    const bookId = req.params.bookId;
    const bookName =req.body.bookName;
    const autherName= req.body.autherName;
    const cost = req.body.cost;
    const newDate = req.body.fromDate;
    const date2 = req.body.toDate;
    const noOfDays = req.body.noOfDays;
    // console.log(newDate);
    // console.log(date2);
    const sqlInsert = "insert into issueBook (bookName,autherName,cost,fromDate,toDate,noOfDays) values (?,?,?,?,?,?)";
    db.query(sqlInsert,[bookName,autherName,cost,newDate,date2,noOfDays,bookId],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);
        }
    });
    const sqlSelect="select * from issuebook";
    db.query(sqlSelect,(err,result)=>{
        if(err)
        {
        console.log(result);
        }
        else{
        res.send(result);
        }
    });
});

app.get('/myBook/get',(req,res)=>{
    const bookId = req.params.bookId;
    const bookName= req.body.bookName;
    const autherName = req.body.autherName;
    const cost = req.body.cost;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const noOfDays = req.body.noOfDays;
    const sqlSelect = "select * from issueBook";
    db.query(sqlSelect,[bookId,bookName,autherName,cost,fromDate,toDate,noOfDays],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})

app.put('/myBook/fineInfo/:bookId',(req,res)=>{
    const bookId = req.params.bookId;
    const bookName= req.body.bookName;
    const newDate = req.body.newDate;
    const date2 = req.body.date2;
    const sqlUpdate = "update issueBook set bookName=? ,fromDate=? ,toDate=? where bookId =?";
    db.query(sqlUpdate,[bookName,newDate,date2,bookId],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);
           // res.send(result);
        }
    })
    const sqlSelect="select * from issuebook";
    db.query(sqlSelect,(err,result)=>{
        if(err)
        {
        console.log(result);
        }
        else{
        res.send(result);
        }
    });
});


app.get('/myBook/get',(req,res)=>{
    const bookId = req.params.bookId;
    const bookName= req.body.bookName;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const sqlSelect = "select * from issueBook";
    db.query(sqlSelect,[bookId,bookName,fromDate,toDate,],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})

app.listen(3001,()=>{
    console.log("running server");
});
cors()
