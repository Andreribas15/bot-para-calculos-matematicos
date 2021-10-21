/*CMD
  command: /tabuada
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Qual multiplicação da tabuada você deseja?
  keyboard: 
  aliases: 
CMD*/

var nu = message
Bot.sendMessage(
  "Resultado: \n" +
    nu +
    "×2= " +
    nu * 2 +
    "\n" +
    nu +
    "×3= " +
    nu * 3 +
    "\n" +
    nu +
    "×4= " +
    nu * 4 +
    "\n" +
    nu +
    "×5= " +
    nu * 5 +
    "\n" +
    nu +
    "×6= " +
    nu * 6 +
    "\n" +
    nu +
    "×7= " +
    nu * 7 +
    "\n" +
    nu +
    "×8= " +
    nu * 8 +
    "\n" +
    nu +
    "×9= " +
    nu * 9 +
    "\n\n_Você escolheu a multiplicação de " +
    nu +
    " da tabuada. Pressione /start para tentar novamente_"
)

