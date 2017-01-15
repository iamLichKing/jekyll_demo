
var logo = document.getElementsByClassName("logo")[0];
logo.onmouseover = function(){
	this.style.animation = "logoBigAnimation 0.2s linear 0 1 forwards";		
}
logo.onmouseout = function(){
	this.style.animation = "logoSmallAnimation 0.2s linear 0 1 forwards";
}
