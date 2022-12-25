// var $dashOffset = $("path").css("stroke-dashoffset");

// $(window).scroll(function() { 
//   var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
//   var $newUnit = parseInt($dashOffset, 10);
//   var $offsetUnit = $percentageComplete * ($newUnit / 100);
//   $("path").css("stroke-dashoffset", $newUnit - $offsetUnit);
//   $("polygon").css("stroke-dashoffset", $newUnit - $offsetUnit);
// });

gsap.registerPlugin(ScrollTrigger);



gsap.to(".animation-blog-layer", {
    y: 500,
    duration: .2,
    // delay: 2,
    // ease: "power4.out",
    // ease: "layer",
    ease: "power4.in",

    scrollTrigger: {
      trigger: ".blog-div",
      start: "top 50%",
    //   toggleActions: "play reverse play reverse",
    //   markers: {startColor: "green", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
  });

  gsap.to(".aby2", {
    y: 500,
    duration: .3,
    // delay: 2,
    // ease: "power4.out",
    // ease: "layer",
    ease: "power4.in",

    scrollTrigger: {
      trigger: ".blog-div",
      start: "top 50%",
    //   toggleActions: "play reverse play reverse",
    //   markers: {startColor: "green", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
  });

  gsap.to(".aby3", {
    y: 500,
    duration: .4,
    // delay: 2,
    // ease: "power4.out",
    // ease: "layer",
    ease: "power4.in",

    scrollTrigger: {
      trigger: ".blog-div",
      start: "top 50%",
    //   toggleActions: "play reverse play reverse",
    //   markers: {startColor: "green", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20}
    },
  });


  gsap.to(".blog-img", {
    scale: 1.1,
    duration: .3,
    // delay: .3,
    ease:"layer",
  
    scrollTrigger: {
      trigger: ".blog-div",
      start: "top 50%",
    //   toggleActions: "play reverse play reverse",
    //   markers: {startColor: "black", endColor: "orange", fontSize: "18px", fontWeight: "bold", indent: 40}
    },
  });

  