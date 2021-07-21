function send_whatsapp(){
  let msg= document.getElementById("msg").value;
  var win = window.open(`https://wa.me/5491132793598?text=${msg}`, '_blank');
}