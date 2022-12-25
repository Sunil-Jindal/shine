// sidebar script start

// open sidebar onclick hide show start
$("#openSidebar #nav-icon3").click(function () {
	$(".sidebar-menu").toggleClass("active-sidebar");
	$(".changebg").toggleClass("activenav");
	$(this).toggleClass('open');
});




// console.clear();
// var currentSection;
// var currentAnimation;
// var requestedAnimation;

// $('.bttns').each(function (i, el) {
// 	var title = $('.content > h3.title');
// 	// var desc = $('.content > span.desc');
// 	var linkside1 = $('.content > a.link1');
// 	var linkside2 = $('.content > a.link2');
// 	var linkside3 = $('.content > a.link3');
// 	var linkside4 = $('.content > a.link4');
// 	var linkside5 = $('.content > a.link5');
// 	var linkside6 = $('.content > a.link6');
// 	var linkside7 = $('.content > a.link7');
// 	var workDiv = $('#work_main' + $(this).attr('target'));
// 	var tl = new TimelineLite({
// 		paused: true,
// 		onReverseComplete: playRequestedAnimation
// 	})
// 	TweenLite.set(".targetDiv", {
// 		display: "none"
// 	})
// 	tl.set(workDiv, {
// 		display: 'none'
// 	})
// 		.set(title, {
// 			autoAlpha: 0,
// 			y: 10
// 		})
// 		// .set(desc, {
// 		// 	autoAlpha: 0,
// 		// 	y: 10
// 		// })
// 		.set(linkside1, {
// 			autoAlpha: 0,
// 			y: 10
// 		})
// 		.set(linkside2, {
// 			autoAlpha: 0,
// 			y: 10
// 		})
// 		.set(linkside3, {
// 			autoAlpha: 0,
// 			y: 10
// 		})
// 		.set(linkside4, {
// 			autoAlpha: 0,
// 			y: 10
// 		})
// 		.set(linkside5, {
// 			autoAlpha: 0,
// 			y: 10
// 		})
// 		.set(linkside6, {
// 			autoAlpha: 0,
// 			y: 10
// 		})
// 		.set(linkside7, {
// 			autoAlpha: 0,
// 			y: 10
// 		})


// 	tl.to(workDiv, .5, {
// 		display: 'block'
// 	})
// 		.to(title, 0.3, {
// 			ease: Power1.easeIn,
// 			autoAlpha: 1,
// 			y: 0
// 		})
// 		// .to(desc, 0.4, {
// 		// 	ease: Power1.easeIn,
// 		// 	autoAlpha: 1,
// 		// 	y: 0
// 		// })
// 		.to(linkside1, 0.3, {
// 			ease: Power1.easeIn,
// 			autoAlpha: 1,
// 			y: 0
// 		})
// 		.to(linkside2, 0.3, {
// 			ease: Power1.easeIn,
// 			autoAlpha: 1,
// 			y: 0
// 		})
// 		.to(linkside3, 0.3, {
// 			ease: Power1.easeIn,
// 			autoAlpha: 1,
// 			y: 0
// 		})
// 		.to(linkside4, 0.3, {
// 			ease: Power1.easeIn,
// 			autoAlpha: 1,
// 			y: 0
// 		})
// 		.to(linkside5, 0.3, {
// 			ease: Power1.easeIn,
// 			autoAlpha: 1,
// 			y: 0
// 		})
// 		.to(linkside6, 0.3, {
// 			ease: Power1.easeIn,
// 			autoAlpha: 1,
// 			y: 0
// 		})
// 		.to(linkside7, 0.3, {
// 			ease: Power1.easeIn,
// 			autoAlpha: 1,
// 			y: 0
// 		})
		
// 	this.animation = tl;
// });

// $('.bttns').on('click touchstart', function (e) {
// 	console.log("you clicked on ");
// 	console.log(e.currentTarget);
// 	console.log("the number you want is " + e.currentTarget.getAttribute("target"));

// 	requestedAnimation = this.animation;

// 	console.log("requested animation for", e.currentTarget.getAttribute("target"))

// 	var sectionNumber = e.currentTarget.getAttribute("target")
// 	$(this).removeClass("active").addClass("active");
// 	//hide the old one
// 	if (currentAnimation) {
// 		console.log("currentAnimation needs to be reversed")
// 		currentAnimation.reverse().eventCallback("onReverseComplete", function () {
// 			playRequestedAnimation(currentSection)
// 		})
// 	} else {
// 		playRequestedAnimation(currentSection)
// 	}
// 	//show the new one
// 	currentSection = $("#work_main1" + sectionNumber);
// 	$('.bttns').removeClass("active");
// 	$(this).addClass("active");

// });

// function playRequestedAnimation() {
// 	console.log("ready to play requested animation")
// 	requestedAnimation.play();
// 	currentAnimation = requestedAnimation;
// }


// sidebar script end


// index galley start

  $(".gallerimg-index").on("click", function(e){
	$(".gallerimg-index").removeClass("active-zIndex"); 
	$(this).addClass("active-zIndex");
    
  })

// index galley end


// hover Img index page start

	



// $(document).on('mouseleave', '.headinghover', function(){
// 	//$(this).attr('src', '');
// 	$('#hoverImgC').attr('src', '');
// 	$('.bghOVER1').hide();
// 	// $('#hoverImgC').css('transform','scale(1)');

// 	$('#hoverImgC').fadeOut();
// 	// $('#hoverImgC').removeClass('scaleImg');


// 	//alert()
// })


let elements = document.querySelectorAll('.rolling-text');

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';
  
  let textContainer = document.createElement('div');
  textContainer.classList.add('block');
  
  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0': letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }
  
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});





// for presentation purpose
setTimeout(() => {
  elements.forEach(element => {
    element.classList.add('play');
  })
}, 600);

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.remove('play');
  });
});


	
// // hover Img index page start $('#hoverImgC').removeClass('bghoverHid')
// let words = document.querySelectorAll(".word");
// words.forEach((word) => {
// let letters = word.textContent.split("");
// word.textContent = "";
// letters.forEach((letter) => {
// 	let span = document.createElement("span");
// 	span.textContent = letter;
// 	span.className = "letter";
// 	word.append(span);
// });
// });

var $selector = $('.mulanimaindiv .multip');
var $imgSector = $('.mulAniimgDiv img');

var counter = 0;


$(document).ready(function() {
	$($selector).click(function() {
    $selector.removeClass('activeOp');
    $selector.eq(counter++ % $selector.length).addClass('activeOp');
    $imgSector.removeClass('MultiimgZ');
    $imgSector.eq(counter++ % $imgSector.length).addClass('MultiimgZ');
	})
});



$(document).ready(function() {
	$($imgSector).click(function() {
    $selector.removeClass('activeOp');
    $selector.eq(counter++ % $selector.length).addClass('activeOp');
    $imgSector.removeClass('MultiimgZ');
    $imgSector.eq(counter++ % $imgSector.length).addClass('MultiimgZ');
	})
});




setInterval(function(){

  $selector.removeClass('activeOp');
  $selector.eq(counter++ % $selector.length).addClass('activeOp');

  $imgSector.removeClass('MultiimgZ');
  $imgSector.eq(counter++ % $imgSector.length).addClass('MultiimgZ');
}, 6000);


