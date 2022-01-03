var timeshower = () => {
    var date = new Date;
    var distime = date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
    postMessage(distime);
}

setInterval(() => {
    timeshower();
}, 1000);