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

document.addEventListener("keydown",function(x){
  key = x.key;
  console.log(key)
  if(key == '\n'|| key == 'enter'){
    var msg = menssage.textContent;
    socket.emit("send",socket.id +": "+ text);
    console.log(msg)
  }
}