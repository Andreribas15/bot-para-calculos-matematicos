/*CMD
  command: /subtracao
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Envie a subtração.
Ex.: 2-8
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var nu = message.split("-")
var res = nu[0]-nu[1];
Bot.sendMessage("Resultado: \n" + message + "= ```" + res + "```")
