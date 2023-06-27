let pointer = document.getElementById('pointer');
const move = (event) =>{
  pointer.style.left = (event.pageX - 2.5) + 'px';
  pointer.style.top = (event.pageY - 2.5) + 'px';
}
document.addEventListener('mousemove', move);