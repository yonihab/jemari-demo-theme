
function getEle(id){
	return document.getElementById(id);
}


var navbar = getEle('navbarID');
var regExLetter = /^[a-zA-Z]+$/;

function navPop(){
	var yValue = window.pageYOffset;

	if (yValue > 100) {
		navbar.classList.add('nav-active');
		navbar.classList.add('bounceInDown')

	} else {
		navbar.classList.remove('nav-active');
		navbar.classList.remove('bounceInDown');
		


	}
}
window.onscroll = function() {
	navPop();
}

// Slider


var slider = document.getElementById('slidingImages');

var sliderInterval = setInterval(theSlider, 6000);

function theSlider() {
	var sliding = document.querySelector('li.is-active');
	var slidingNext = sliding.nextElementSibling;
	
	if(slidingNext == null) {
		slidingNext = slider.firstElementChild;
	}
	
	sliding.classList.add('fadeOut');
	sliding.classList.remove('is-active');
	slidingNext.classList.add('is-active');
	slidingNext.classList.add('fadeIn');
	
	setTimeout(function(){
		sliding.classList.remove('fadeOut');
		slidingNext.classList.remove('fadeIn');
	}, 800);
}
var left = document.querySelector('span.left'),
	right = document.querySelector('span.right');

function slidHundler(direction) {
	var sliding = document.querySelector('li.is-active');
	var slidingNext = null;
	
	switch(direction) {
		case 'left':
			slidingNext = sliding.previousElementSibling;
			if(slidingNext == null) {
				slidingNext = slider.lastElementChild;
			}
			break;
		case 'right':
			slidingNext = sliding.nextElementSibling;
			if(slidingNext == null) {
				slidingNext = slider.firstElementChild;
			}
			break;
	}
	
	sliding.classList.add('fadeOut');
	sliding.classList.remove('is-active');
	slidingNext.classList.add('is-active');
	slidingNext.classList.add('fadeIn');
	
	setTimeout(function(){
		sliding.classList.remove('fadeOut');
		slidingNext.classList.remove('fadeIn');
	}, 800);
	
	clearInterval(sliderInterval);
	sliderInterval = setInterval(theSlider, 6000);
}

left.onclick = function(){slidHundler('left');};
right.onclick = function(){slidHundler('right');};







// **************************** //
// Our Awesome Simple Validator //
// **************************** //


function checkIfEmpty(ele){
	// Checks if an input is empty
	if(ele.value === ""){
		return true;
	}

	return false;
		
}
function checkIfLetter(id){
	var ele = getEle(id);
	if(!ele.value.match(regExLetter)){
		console.log("Bitch");
	}else{
		console.log("good boy");
	}
}
// Alert function

function alertInput(ele, tr){
	if(tr){
		ele.style.background = "rgba(255,0,0,0.21)";
	}else{
		ele.style.background = "rgba(255,255,255,0.4)";
		
	}

}

function afterError(ele){
	ele.addEventListener("keypress", function(){
		if(checkIfEmpty(ele)){
			alertInput(ele, true);
		}else{
			alertInput(ele, false);
		}
	})
}


function validate(id){
	var ele = getEle(id);
	
	ele.addEventListener("blur", function(){
		
		if(checkIfEmpty(ele)){
			alertInput(ele, true);
			afterError(ele);

			
		}

	});


}

// Password Strength
function str(txt, color){
	var str = getEle('str');
	str.style.color = color;
	str.innerHTML = txt;

}

function passStrenght(id){
	var ele = getEle(id);
	
	ele.addEventListener("keypress", function(){
		console.log(ele.value.length)
		if(ele.value.length <= 5){
			str("Week Password", "#fd0202")
			return;
		}
		else if(ele.value.length > 5 && ele.value.length <= 8 ){
			str("Strong password", "#e2ac0e")
			return;
		}else if (ele.value.length > 8) {}{
			str("Very Strong password", "#14ff14")
			return;
		}


	})
}



