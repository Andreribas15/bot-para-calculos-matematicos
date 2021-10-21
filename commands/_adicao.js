/*CMD
  command: /adicao
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Envie o adição.
Ex.: 1+1
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var nu = message.split("+")
var res = nu[0]+nu[1];
Bot.sendMessage("Resultado: \n" + message + "= ```" + res + "```")
