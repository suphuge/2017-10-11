<<<<<<< HEAD
<<<<<<< HEAD
var box = document.getElementById('box');
addEventListener('mousedown',down);
function down(ev){
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;
=======
addEventListener('mousemove',move);
function move(ev){
	box.style.left = ev.clientX - disX + 'px';
	box.style.top = ev.clientY - disY + 'px';
>>>>>>> move
}
=======
adfaf
>>>>>>> up
