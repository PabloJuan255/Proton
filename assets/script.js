var socket = io()
var textarea = document.querySelector("textarea");
var menssage = document.querySelector("input");

socket.on("send", function(msg) {
    if (ready) {
        msg = menssage.textContent;
        textarea.textContent = textarea.textContent + msg;
        delete msg;
    }
});

function send(){  
  var msg = menssage.textContent;
  socket.emit("send",socket.id +": "+ text);
  console.log(msg)
}