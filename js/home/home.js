
window.onload = function(){
	var vido = document.getElementById('vido');	
	var audo = document.getElementById('audo');
	var banner = document.getElementsByClassName('banner')[0];
	vido.onended = function(){
		this.style.display = "none";
		banner.style.display = "block";
		window.audo.play();
	}
}
