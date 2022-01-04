//JSON Object Creation
var userip ={}

// x^y and yth root of x bhi banana hoga.

//Reading the User Input Data for two values
var readVal = (op) => {
    userip.num1=document.querySelector("#num1").value;
    userip.num2=document.querySelector("#num2").value;

    if(userip.num1=="" && userip.num2==""){
        err1();
        err2();
        document.querySelector(".inputbox").style.height = "110px";
        return;
    }
    else{
        document.querySelector("#err1").style.display = "none";
        document.querySelector("#err2").style.display = "none";
        document.querySelector(".inputbox").style.height = "65px";
    }

    if(userip.num1=="") {
        err1();
        return;
    }
    else{
        document.querySelector("#err1").style.display = "none";
        document.querySelector(".inputbox").style.height = "65px";
    }

    if(userip.num2=="") {
        err2();
        return;
    }
    else{
        document.querySelector("#err2").style.display = "none";
        document.querySelector(".inputbox").style.height = "65px";
    }

    userip.num1=parseFloat(userip.num1);
    userip.num2=parseFloat(userip.num2);

    switch(op) {
        case add : add();
        break;
        case sub : sub();
        break;
        case multi : multi();
        break;
        case divide : divide();
        break;
        case quot : quot();
        break;
        case rem : rem();
        break;
    }
}

//Checking if input is number or not
var checkNum = (event, id) => {
    //console.log("hello");
    //console.log(event);
    //console.log(id);
    if (event.charCode >= 48 && event.charCode <= 57){
        document.querySelector(id).style.display = 'none';
        document.querySelector(".inputbox").style.height = "65px";
        return true;
    } else {
        document.querySelector(id).style.display = 'block';
        document.querySelector(".inputbox").style.height = "110px";
        return false;
    }
}

//Addition
var add = () => {
    var num3=userip.num1+userip.num2;
    document.querySelector("#ht").innerHTML = "The Sum is "+num3;
    visible();
}

//Subtraction
var sub = () => {
    var num3=userip.num1-userip.num2;
    document.querySelector("#ht").innerHTML = "The Difference is "+num3;
    visible();
}

//Multiplication
var multi = () => {
    var num3=userip.num1*userip.num2;
    document.querySelector("#ht").innerHTML = "The Product is "+num3;
    visible();
}

//Division
var divide = () => {
    var num3=userip.num1/userip.num2;
    document.querySelector("#ht").innerHTML = "The Division is "+num3;
    visible();
}

//Quotient
var quot = () => {
    var num3=userip.num1/userip.num2;
    num3=Math.floor(num3);
    document.querySelector("#ht").innerHTML = "The Quotient is "+num3;
    visible();
}

//Remainder
var rem = () => {    
    var num3=userip.num1%userip.num2;
    document.querySelector("#ht").innerHTML = "The Remainder is "+num3;
    visible();
}

//Make it
//Single Value Calculations
var oneval = () => {
    document.querySelector("#num2").style.display="none";
    document.querySelector("#lab2").style.display="none";
    //document.querySelector("#num1").style.position="relative";
    //document.querySelector("#num1").style.top="20px";
    //document.querySelector("#lab1").style.position="relative";
    //document.querySelector("#lab1").style.top="15px";
    document.querySelector("#lab1").innerText="Enter the number : ";
    //document.querySelector("#lab1").style.fontSize="25px";
    //document.querySelector("#onevalue").setAttribute("type","disabled");
    document.querySelector("#onevalue").disabled = true;
    document.querySelector(".hider").style.display = "block";
    //document.querySelector("#twovalue").setAttribute("type","button");
    document.querySelector("#twovalue").disabled = false;
    document.querySelector("#singlehider1").style.display="none";
    document.querySelector("#singlehider2").style.display="none";
    document.querySelector("#singlehider3").style.display="none";
}

//Make it
//Multiple Value Calculations
var multival = () => {
    /*document.querySelector("#lab1").style.display = "none";
    document.querySelector("#num1").style.display = "none";
    document.querySelector("#lab2").style.display = "none";
    document.querySelector("#num2").style.display = "none";
    document.querySelector(".inputbox").createElement("textbox");*/
    showDialog();
}

//Make it
//Back to two values
var twoval = () => {
    document.querySelector(".hider").style.display = "none";
    document.querySelector("#num2").style.display="block";
    document.querySelector("#lab2").style.display="block";
    //document.querySelector("#twovalue").setAttribute("type","disabled");
    document.querySelector("#twovalue").disabled = true;
    //document.querySelector("#onevalue").setAttribute("type","button");
    document.querySelector("#onevalue").disabled = false;
    document.querySelector("#singlehider1").style.display="block";
    document.querySelector("#singlehider2").style.display="block";
    document.querySelector("#singlehider3").style.display="block";
    document.querySelector("#lab1").innerText="Enter first number : ";
}

//Clear Values Button
var clearval = () => {
    //alert("Sorry ! Temporarily Unavailable Feature");
    document.querySelector("#num1").value="";
    document.querySelector("#num2").value="";
}

//Clear Result Button
var clearResult = () => {
    document.querySelector("#ht").innerHTML = "";
}

//Displaying Day and Date
/*window.onload = function dayDate() {
    var date = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var disday = days[date.getDay()];
    var disdate = date.getDate()+"-"+months[date.getMonth()]+"-"+date.getFullYear();
    document.querySelector("#showday").innerHTML = disday;
    document.querySelector("#showdate").innerHTML = disdate;
}*/

//Messages for no input
var err1 = () => {
    document.querySelector("#err1").style.display = "block";
    document.querySelector(".inputbox").style.height = "90px";
}
var err2 = () => {
    document.querySelector("#err2").style.display = "block";
    document.querySelector(".inputbox").style.height = "90px";
}

//Making the Result Visible
var visible = () => {
    document.querySelector("#ht").style.visibility = "visible";
}

//Dialog box
var showDialog = () => {
    document.querySelector(".maskBlock").style.display = 'block';
    document.querySelector(".dialogContainer").style.display = 'block';
    setTimeout(function selectChanger() {
        document.querySelector("select").value = "Standard";
    },1000);
}
var closeDialog = () => {
    document.querySelector(".maskBlock").style.display = 'none';
    document.querySelector(".dialogContainer").style.display = 'none';
}

//Reading values for a single input
var readSval = (op) => {
    userip.num1=document.querySelector("#num1").value;

    if(userip.num1=="") {
        err1();
        document.querySelector(".inputbox").style.height = "65px";
        return;
    }
    else{
        document.querySelector("#err1").style.display = "none";
    }

    userip.num1=parseFloat(userip.num1);
    switch(op) {
        case abs_val : abs_val();
        break;
        case logb10 : logb10();
        break;
        case logbe : logbe();
        break;
        case exp : exp();
        break;
        case reci : reci();
        break;
        case fact : fact();
        break;
        case sq : xsq();
        break;
        case cube : xcu();
        break;
        case sqrt : sqrt();
        break;
        case cbrt : cbrt();
        break;
        case adinv : adinv();
        break;
        case raddeg : raddeg();
        break;
        case sine : sine();
        break;
        case cosine : cosine();
        break;
        case tangent : tangent();
        break;
        case sininv : sininv();
        break;
        case cosinv : cosinv();
        break;
        case taninv : taninv();
        break;
    }
}

//Absolute Value
var abs_val = () => {
    var num3 = Math.abs(userip.num1);
    document.querySelector("#ht").innerHTML = "The Absolute Value of "+userip.num1+" is "+num3;
    visible();
}

//log
var logb10 = () => {
    var num3 = Math.log10(userip.num1);
    document.querySelector("#ht").innerHTML = "The Common Logarithm of "+userip.num1+" is "+num3;
    visible();
}

//ln
var logbe = () => {
    var num3 = Math.log(userip.num1);
    document.querySelector("#ht").innerHTML = "The Natural Logarithm of "+userip.num1+" is "+num3;
    visible();
}

//Exponential
var exp = () => {
    var num3 = Math.exp(userip.num1);
    document.querySelector("#ht").innerHTML = "The Exponential is "+num3;
    visible();
}

//Reciprocal
var reci = () => {
    var num3 = 1/(userip.num1);
    document.querySelector("#ht").innerHTML = "The Reciprocal of "+userip.num1+" is "+num3;
    visible();
}

//Factorial
var fact = () =>{
    var n = parseInt(userip.num1);
    var num3;
    if(n==0) {
        num3 = 1;
    }
    else {
        num3 = factorial(n);
    }
    document.querySelector("#ht").innerHTML = "The Factorial of "+n+" is "+num3;
    visible();
}
function factorial(no) {
    var i;
    var facto=1;
    for(i=1;i<=no;i++) {
        facto=facto*i;
    }
    return facto;
}

//Square
var xsq = () => {
    var num3 = userip.num1*userip.num1;
    document.querySelector("#ht").innerHTML = "The Square of "+userip.num1+" is "+num3;
    visible();
}

//Cube
var xcu = () => {
    var num3 = userip.num1*userip.num1*userip.num1;
    document.querySelector("#ht").innerHTML = "The Cube of "+userip.num1+" is "+num3;
    visible();
}

//Square Root
var sqrt = () => {
    var num3 = Math.sqrt(userip.num1);
    document.querySelector("#ht").innerHTML = "The Square Root of "+userip.num1+" is "+num3;
    visible();
}

//Cube Root
var cbrt = () => {
    var num3 = Math.cbrt(userip.num1);
    document.querySelector("#ht").innerHTML = "The Cube Root of "+userip.num1+" is "+num3;
    visible();
}

//Additive Inverse
var adinv = () => {
    var num3 = 0-userip.num1;
    document.querySelector("#ht").innerHTML = "The Additive Inverse is "+num3;
    visible();
}

//Radian to Degree
var raddeg = () => {
    var pi = Math.PI;
    var num3 = 180*(userip.num1/pi);
    document.querySelector("#ht").innerHTML = "The value of "+userip.num1+" radians is "+num3+" degrees";
    visible();
}

//Sine
var sine = () => {
    var num3 = Math.sin(userip.num1);
    document.querySelector("#ht").innerHTML = "The Sine of "+userip.num1+" Radians is "+num3;
    visible();
}

//Cosine
var cosine = () => {
    var num3 = Math.cos(userip.num1);
    document.querySelector("#ht").innerHTML = "The Cosine of "+userip.num1+" Radians is "+num3;
    visible();
}

//Tangent
var tangent = () => {
    var num3 = Math.tan(userip.num1);
    document.querySelector("#ht").innerHTML = "The Tangent of "+userip.num1+" Radians is "+num3;
    visible();
}

//Arcsine
var sininv = () => {
    var num3 = Math.asin(userip.num1);
    document.querySelector("#ht").innerHTML = "The Sine Inverse of "+userip.num1+" is "+num3+" Radians";
    visible();
}

//Arccosine
var cosinv = () => {
    var num3 = Math.acos(userip.num1);
    document.querySelector("#ht").innerHTML = "The Cosine Inverse of "+userip.num1+" is "+num3+" Radians";
    visible();
}

//Arctangent
var taninv = () => {
    var num3 = Math.atan(userip.num1);
    document.querySelector("#ht").innerHTML = "The Tangent Inverse of "+userip.num1+" is "+num3+" Radians";
    visible();
}

//Teller
var singleteller = () => {
    alert("Press the Single Number Button to use");
}
var doubleteller = () => {
    alert("Press the Two Numbers Button to use");
}

//Display Time
window.onload = function timedisplayer() {
    function timedis() {
        var datet = new Date;
        var dishour = datet.getHours();
        if(dishour<10) {
            dishour = "0"+dishour;
        }
        var dismin = datet.getMinutes();
        if(dismin<10) {
            dismin = "0"+dismin;
        }
        var dissec = datet.getSeconds();
        if(dissec<10) {
            dissec = "0"+dissec;
        }
        var distime = dishour+" : "+dismin+" : "+dissec;
        document.querySelector("#showtime").innerHTML = distime;
    }
    setInterval(() => {
        timedis();
    }, 1000);
}