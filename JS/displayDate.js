var dateshower = () => {
    var date = new Date();
    //console.log(date);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var disdate = date.getDate()+"-"+months[date.getMonth()]+"-"+date.getFullYear();
    //console.log(disdate);
    postMessage(disdate);
}

setInterval(() => {
    dateshower();
}, 1800000);