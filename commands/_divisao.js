/*CMD
  command: /divisao
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Envie a divisão.
Ex.: 6÷2
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var nu1 = message.replace("/", "÷")
var nu2 = message.replace("÷", "/")
var nu = nu2.split("/")
var res = nu[0]/nu[1];
Bot.sendMessage("Resultado: \n" + nu1 + "= ```" + res + "```")
