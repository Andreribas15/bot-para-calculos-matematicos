/*CMD
  command: /potenciacao
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Me envie a potenciação.
Ex.: 2²
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var nu = message.replace("¹", "®1")
var nu1 = nu.replace("²", "®2")
var nu2 = nu1.replace("³", "®3")
var nu3 = nu2.replace("⁴", "®4")
// expoente 4
var nu4 = nu3.replace("⁵", "®5")
// expoente 5
var nu5 = nu4.replace("⁶", "®6")
// expoente 6
var nu6 = nu5.replace("⁷", "®7")
// expoente 7
var nu7 = nu6.replace("⁸", "®8")
// expoente 8
var nu8 = nu7.replace("⁹", "®9")
// expoente 9
var nu9 = nu8.replace("¹⁰", "®10")
// expoente 10
var res = nu9.split("®")
Bot.sendMessage("Resultado:\n" + message + "= " + Math.pow(res[0], res[1]))

