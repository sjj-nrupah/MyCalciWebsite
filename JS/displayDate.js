var showdate = () => {
    var date = new Date();
    console.log(date);
    var disdate = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
    console.log(disdate);
}
