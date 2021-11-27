const express = require("express");
var app = express ();
var cors = require("cors");
app.use(cors());

app.get("/categories",function(req,res){
    res.sendFile(__dirname + "/jsons/categories.json");
});

app.get("/categoriesinfo",function(req,res){
    res.sendFile(__dirname + "/jsons/categoriesinfo.json");
});

app.get("/publishproduct",function(req,res){
    res.sendFile(__dirname + "/jsons/publishproduct.json");
});

app.get("/products",function(req,res){
    res.sendFile(__dirname + "/jsons/products.json");
});

app.get("/productsinfo",function(req,res){
    res.sendFile(__dirname + "/jsons/productsinfo.json");
});

app.get("/productsinfocomm",function(req,res){
    res.sendFile(__dirname + "/jsons/productsinfocomm.json");
});

app.get("/cartinfo1",function(req,res){
    res.sendFile(__dirname + "/jsons/cartinfo1.json");
});

app.get("/cartbuy",function(req,res){
    res.sendFile(__dirname + "/jsons/cartbuy.json");
});

app.get("/cartinfo2",function(req,res){
    res.sendFile(__dirname + "/jsons/cartinfo2.json");
});




app.listen(3000, ()=>{
    console.log("servidor en ejecucion")});