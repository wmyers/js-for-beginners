function doAlert() {
  alert("hello!!")
}

function changeStyle() {
  var element = document.getElementById('first-container');
  //toggle colors
  if (element.style.color === 'white' && element.style.backgroundColor === 'red') {
    element.style.color = 'red';
    element.style.backgroundColor = 'white';
  } else {
    element.style.color = 'white';
    element.style.backgroundColor = 'red';
  }
}


//jQuery functions
$(document).ready(function(){
  $('a').bind('click', function(){
    $('#first-container').toggleClass('sg-fifty').toggleClass('sg-fifty-inv');
  })
})
