var dayshower = () => {
    date = new Date;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var disday = days[date.getDay()];
    postMessage(disday);
}

setInterval(() => {
    dayshower();
}, 1800000);