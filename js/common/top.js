
window.onload = function(){
	
	var logo = document.getElementsByClassName("logo")[0];
	logo.onmouseover = function(){
		this.style.animation = "logoBigAnimation 0.2s linear 0 1 forwards";		
	}
	logo.onmouseout = function(){
		this.style.animation = "logoSmallAnimation 0.2s linear 0 1 forwards";
	}
	
	var bq = document.getElementsByClassName("bq")[0];
	bq.onmouseover = function(){
		this.setAttribute('src','img/bq01.png');
	}
	bq.onmouseout = function(){
		if(Math.random()*10 > 8){
			this.setAttribute('src','img/bq02.png');	
		}else{
			this.setAttribute('src','img/bq03.png');
		}	
	}
	
	var nav_texts = document.getElementsByClassName("nav-text");
	for(let i = 0; i < nav_texts.length; i++){
		nav_texts[i].onmouseover = function(){
			nav_texts[i].style.color = "red";
		}
		nav_texts[i].onmouseout = function(){
			nav_texts[i].style.color = "#000000";
		}
	}
	
}