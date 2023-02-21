function greeting(req, res){
    var fn = req.query.firstname;
    res.send("Greetings,"+fn);
}

const path = require('path');
function addition(req, res){
    var n1 = req.body.num1;
    var n2 = req.body.num2;
    sum = parseInt(n1)+parseInt(n2);
    res.send(Number(n1) + 'plus'+ Number(n2)+ '=' + Number(sum));
}

var attachService = function(app){
    app.get('/svc/greeting', greeting);
    app.post('/svc/add', addition);
};

function attachService(app){

}

exports.attachService = attachService;