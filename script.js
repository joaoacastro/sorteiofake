function runRaffle(){
  random=Math.round(Math.random()*10)

  guess=prompt(`Digite um número para sorteio entre 0 e 10.`)
  
  while(guess>10||guess<0){
    guess=prompt("Você digitou o número " + guess + ". Por favor tente novamente, porém desta vez digite um numero entre 0 e 10 e clique em Ok")
    paragraphResult.style.backgroundColor=`yellow`;
    paragraphResult.style.color=`black`;
  }
    
  rightNumber=guess==random
  
  if(rightNumber){
    paragraphResult.innerHTML=`PARABÉNS! Se realmente fosse um sorteio você teria ganho. rsrs`;
    paragraphResult.style.color=`black`;
    paragraphResult.style.backgroundColor=`lightgreen`;
  }
  
  if(!rightNumber){
    paragraphResult.innerHTML=`Poxa, que pena, o número sorteado foi ${random}. Não foi desta vez, mas continue tentando.`;
    paragraphResult.style.backgroundColor=`red`;
    paragraphResult.style.color=`white`;
  }
}
function resetPag(){
  window.location.href="index.html";
}