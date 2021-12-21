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

    userip.num1=parseInt(userip.num1);
    userip.num2=parseInt(userip.num2);

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
    document.querySelector("#onevalue").setAttribute("type","disabled");
    document.querySelector(".hider").style.display = "block";
    document.querySelector("#twovalue").setAttribute("type","button");
    document.querySelector("#singlehider1").style.display="none";
    document.querySelector("#singlehider2").style.display="none";
    document.querySelector("#singlehider3").style.display="none";
}

//Make it
//Multiple Value Calculations
var multival = () => {
    showDialog();
}

//Make it
//Back to two values
var twoval = () => {
    document.querySelector(".hider").style.display = "none";
    document.querySelector("#num2").style.display="block";
    document.querySelector("#lab2").style.display="block";
    document.querySelector("#twovalue").setAttribute("type","disabled");
    document.querySelector("#onevalue").setAttribute("type","button");
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

//Make it
/*var myDate = new Date();
myDate=myDate.getDate();
document.querySelector("#Nrupah").innerHTML = "Date : "+myDate;*/

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

    userip.num1=parseInt(userip.num1);
    switch(op) {
        case mod : abs_val();
        break;
        case log : logb10();
        break;
        case ln : logbe();
        break;
        case sqrt : sqrt();
        break;
    }
}

//Absolute Value
var abs_val = () => {
    var num3 = Math.abs(userip.num1);
    document.querySelector("#ht").innerHTML = "The Absolute Value is "+num3;
    visible();
}

//log
var logb10 = () => {
    var num3 = Math.log10(userip.num1);
    document.querySelector("#ht").innerHTML = "The Common Logarithm Value is "+num3;
    visible();
}

//ln
{
    var logbe = () => {
    var num3 = Math.log(userip.num1);
    document.querySelector("#ht").innerHTML = "The Natural Logarithm Value is "+num3;
    visible();
    }
}

//Square Root
var sqrt = () => {
    var num3 = Math.sqrt(userip.num1);
    document.querySelector("#ht").innerHTML = "The Square Root is "+num3;
    visible();
}