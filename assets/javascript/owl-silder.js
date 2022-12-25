$('.main-content .owl-carousel').owlCarousel({
    stagePadding: 170,
    loop: false,
    margin: 25,
    nav: true,
	dots:false,
    navText: [
        '<i class="fas fa-arrow-left font-w" aria-hidden="true"></i>',
        '<i class="fas fa-arrow-right font-w" aria-hidden="true"></i>'
    ],
    navContainer: '.main-content .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        },
		1500:{
            items: 3
        },
		2000:{
            items: 4
        }
    }
});

$('.store-content .owl-carousel').owlCarousel({
    stagePadding: 200,
	dots:false,
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<i class="fas fa-arrow-left font-w" aria-hidden="true"></i>',
        '<i class="fas fa-arrow-right font-wt" aria-hidden="true"></i>'
    ],
    navContainer: '.store-content .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        
    }
});



