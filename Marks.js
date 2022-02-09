document.querySelector('button').addEventListener('click',function () {
  let name= document.querySelector('#name').value;
  let mark= document.querySelector('#mark').value;
  let point= '';
  if (0 < mark && mark < 33){
    point=',You have got F'
  }else if (32 < mark && mark < 40){
    point=',You have got D'
  }else if (39 < mark && mark < 50) {
    point = ',You have got C'
  }else if (49 < mark && mark < 60) {
    point = ',You have got B'
  }else if (59 < mark && mark < 70) {
    point = ',You have got A'
  }else if (69 < mark && mark < 80) {
    point = ',You have got A-'
  }else if (79 < mark && mark < 100) {
    point = ',You have got A+'
  }else{
    point= 'Please,enter accurate figure'
  }
  
  
  
  
  
  
  
  


  document.querySelector('h4').innerHTML= 'Hi ' + name + point;
})