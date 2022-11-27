

var el = document.getElementById('container');

el.addEventListener('click', function() {
  if(this.style.backgroundColor === 'black') {
    this.style.backgroundColor = 'white';
  }      
  else {
    this.style.backgroundColor = 'black';
  }      
});