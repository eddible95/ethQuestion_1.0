// Provides common logging method for logging every transactions
const logging = (message) => {
    let today = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = months[today.getMonth()]+" "+today.getDate()+" "+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time+": "+message;
    return dateTime;
}

export { logging };
