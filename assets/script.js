var socket = io.connect("https://Proton-Chat.pablojuan.repl.run")
var textarea = document.querySelector("textarea");
var menssage = document.querySelector("input");

socket.on("update", function(msg) {
    if (ready) {
        $('.chat').append('<li class="info">' + msg + '</li>')
    }
});

textarea.addEventListener("keypress",function(x){
  key = x.key
  if(key == 'Enter'|| key == 'enter'){
    var text = menssage.textContent;
    socket.emit("send",socket.id +" "+ text)
  }
}