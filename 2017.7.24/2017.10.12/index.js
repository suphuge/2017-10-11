var box = document.getElementById('box');
addEventListener('mousedown',down);
function down(ev){
	var disX = ev.clientX - box.offsetLeft;
	var disY = ev.clientY - box.offsetTop;
}