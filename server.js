const { response } = require("express");
const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h2>Hello</h2></br><p>my message</p>");
});

app.get("/contact", function(request, response){
    response.send("<h2>williamsiebold@gmail.com</h2>");
});

app.get("/about", function(request, response){
    response.send("<h2>It's all about me</h2>");
});

app.get("/pets", function(request, response){
    response.send("<ul><li>Django</li><li>Tundra</li><ul>");
});

app.get("/music", function(request, response){
    response.send("<h2><ul><li>bass guitar</li><li>piano</li><li>flute</li></ul></h2>");
});

app.get("/cats", function(request, response){
    response.send("<h2><ul><li>Moondance</li><li>Agostino</li><li>Esperanza</li><li>Mozart</li><li>Romeo</li><li>Fat Boy</li><li>Rocket</li></ul></h2>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});