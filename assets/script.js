var socket = io.connect("https://Proton-Chat.pablojuan.repl.run")
var textarea = document.querySelector("textarea");
var menssage = document.querySelector("input");

socket.on("update", function(msg) {
    if (ready) {
        msg = menssage.textContent;
        textarea.textContent = textarea.textContent + msg;
        delete msg;
    }
});

input.onchange(){
  var msg = menssage.textContent;
  socket.emit("send",socket.id +": "+ text);
  console.log(msg)
}