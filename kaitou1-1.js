/*「正しい」と入力すれば正解、「誤り」・無記入の場合は不正解になるよう表示*/
function kotae01(){
  if(document.getElementById('answer1').value=='正しい'){
    alert('正解は「誤り」です');}
    else if(document.getElementById('answer1').value=='誤り'){
      alert('正解です！');}
  else{
    alert('不正解・・・');}
}
