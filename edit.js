
/* if conditional is used to send alert message to the websit to allow or block the notification from the webstie  */

if (Notification.permission === "granted") {
    alert("Welcome to the website !")
      
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            console.log(permission);
        });
}
 
