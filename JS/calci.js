//JSON Object Creation
var userip ={}

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
    document.querySelector("#ht").style.visibility = "visible";
}

//Subtraction
var sub = () => {
    var num3=userip.num1-userip.num2;
    document.querySelector("#ht").innerHTML = "The Difference is "+num3;
    document.querySelector("#ht").style.visibility = "visible";
}

//Multiplication
var multi = () => {
    var num3=userip.num1*userip.num2;
    document.querySelector("#ht").innerHTML = "The Product is "+num3;
    document.querySelector("#ht").style.visibility = "visible";
}

//Division
var divide = () => {
    var num3=userip.num1/userip.num2;
    document.querySelector("#ht").innerHTML = "The Division is "+num3;
    document.querySelector("#ht").style.visibility = "visible";
}

//Quotient
var quot = () => {
    var num3=userip.num1/userip.num2;
    num3=Math.floor(num3);
    document.querySelector("#ht").innerHTML = "The Quotient is "+num3;
    document.querySelector("#ht").style.visibility = "visible";
}

//Remainder
var rem = () => {    
    var num3=userip.num1%userip.num2;
    document.querySelector("#ht").innerHTML = "The Remainder is "+num3;
    document.querySelector("#ht").style.visibility = "visible";
}

//Make it
//Single Value Calculations
function oneval() {
    document.querySelector("#num2").style.display="none";
    document.querySelector("#lab2").style.display="none";
    document.querySelector("#num1").style.position="relative";
    document.querySelector("#num1").style.top="20px";
    document.querySelector("#lab1").style.position="relative";
    document.querySelector("#lab1").style.top="15px";
    document.querySelector("#lab1").innerText="Enter the value : ";
    document.querySelector("#lab1").style.fontSize="25px";
    document.querySelector("#onevalue").style.display="none";
    document.querySelector("#num2").setAttribute("value","0");
    document.querySelector(".hider").style.display = "block";
}

//Make it
//Multiple Value Calculations
var multival = () => {
    showDialog();
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

//Dialog box
var showDialog = () => {
    document.querySelector(".maskBlock").style.display = 'block';
    document.querySelector(".dialogContainer").style.display = 'block';
}
var closeDialog = () => {
    document.querySelector(".maskBlock").style.display = 'none';
    document.querySelector(".dialogContainer").style.display = 'none';
}