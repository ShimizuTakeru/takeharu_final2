/*function kotae02(){
  if(document.getElementById('answer1').value=='正しい'){
    alert('正解は「誤り」です');}
    else if(document.getElementById('answer1').value=='誤り'){
      alert('正解です！');}
  else{
    alert('不正解・・・');}
}*/

function sentaku01(){document.getElementById('sentakushi').innerHTML='瀞峡・瀞八丁';}
function sentaku02(){document.getElementById('sentakushi').innerHTML='狭山湖';}
function sentaku03(){document.getElementById('sentakushi2').innerHTML='長瀞';}
function sentaku04(){document.getElementById('sentakushi').innerHTML='行田';}
function kaitou02(){
  if(document.getElementById('sentakushi2').innerHTML){
    alert('正解！');}
  else{
    alert('不正解・・・');}
}
