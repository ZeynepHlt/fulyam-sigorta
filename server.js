var express = require("express");
var app = express();
var http = require("http").createServer(app);
var mysql = require("mysql");
var bodyParser = require("body-parser");
var cors = require("cors");
var port = 3000;
var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"fulyamsigorta",
    password:"",
});
db.connect((err)=>{
    if(err)
    console.log("db error!")
    else
    console.log("db success!")
});
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("API")
});
app.get('/araclar',(req,res)=>{
    var sql = 'select * from araclar where araclar_aktif=1 order by araclar_name asc';
    db.query(sql,(err,araclar)=>{
        res.send(araclar);
    });
});
app.get('/arac_model',(req,res)=>{
    var sql = 'select * from arac_model where model_aktif=1 order by model_name asc';
    db.query(sql,(err,arac_model)=>{
        res.send(arac_model);
    });
});
app.get('/meslek',(req,res)=>{
    var sql = 'select * from meslek where meslek_aktif=1 order by meslek_name asc';
    db.query(sql,(err,meslek)=>{
        res.send(meslek);
    });
});
app.get('/yil',(req,res)=>{
    var sql = 'select * from yil order by yil desc';
    db.query(sql,(err,yil)=>{
        res.send(yil);
    });
});

app.post('/userData',(req,res)=>{
    var sql;
    var teklif=0;
    var kampanya=0;
    var komut=false;
    if (req.body.kampanya) {
        kampanya=1;
    }
    if (req.body.cins=="Kasko" || req.body.cins=="Trafik") {
        if (req.body.teklif) {
            teklif=1;
        }
        sql = `insert into teklif(t_mail,t_name,t_phone,t_surname,t_tc,t_marka,t_model,t_yil,t_asbis,t_meslek,t_plaka,t_serino,t_vno,t_cins,t_teklif,t_kampanya,t_aktif) values 
        ("${req.body.email}","${req.body.name}","${req.body.phone}","${req.body.surname}","${req.body.tc}",
        "${req.body.aracmarka}","${req.body.aracmodel}","${req.body.aracyil}","${req.body.asbis}",
        "${req.body.meslek}","${req.body.plaka}","${req.body.serino}","${req.body.vno}","${req.body.cins}","${teklif}","${kampanya}",1)`;
        komut=true;
        teklif=0;
        kampanya=0;
    }
    else if (req.body.cins=="Bireysel Emeklilik") {
        sql = `insert into teklif(t_mail,t_name,t_phone,t_surname,t_tc,t_vno,t_cins,t_kampanya,t_aktif) values 
        ("${req.body.email}","${req.body.name}","${req.body.phone}","${req.body.surname}","${req.body.tc}",
        "${req.body.vno}","${req.body.cins}","${kampanya}",1)`;
        komut=true;
        kampanya=0;
    }
    if (komut) {
        db.query(sql,(err,giris)=>{
            console.log(giris);
        });
        komut=false;
    }
});

app.get("/girdi",(req,res)=>{
    //burda denemeleri yap
});

http.listen(port,()=>{
    console.log(`Server is running on ${port} PORT`)
});