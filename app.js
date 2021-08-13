window.onload = function () {
  const menu = document.querySelector("#mobile-menu");
  const menuLink = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-links");
  var html = document.documentElement;
  menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLink.classList.toggle("active");
  });
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", () => {
      menu.classList.remove("is-active");
      menuLink.classList.remove("active");
    });
  });

  var top1 = $("#home-page-full").position().top;
  var top2 = $("#about-me-full-page").position().top - 200;
  var top3 = $("#projects").position().top - 200;
  var top4 = $("#contact-me").position().top - 200;
  $(".home-color").addClass("active");
  $(document).scroll(function () {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= top1 && scrollPos < top2) {
      $(".home-color").addClass("active");
      $(".about-color").removeClass("active");
      $(".works-color").removeClass("active");
      $(".contact-color").removeClass("active");
    } else if (scrollPos >= top2 && scrollPos < top3) {
      $(".home-color").removeClass("active");
      $(".works-color").removeClass("active");
      $(".contact-color").removeClass("active");
      $(".about-color").addClass("active");
    } else if (scrollPos >= top3 && scrollPos < top4) {
      $(".about-color").removeClass("active");
      $(".home-color").removeClass("active");
      $(".contact-color").removeClass("active");
      $(".works-color").addClass("active");
    } else if (scrollPos >= top4) {
      $(".works-color").removeClass("active");
      $(".about-color").removeClass("active");
      $(".home-color").removeClass("active");
      $(".contact-color").addClass("active");
    }
  });
  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = TweenMax.from("#animate", 0.5, { autoAlpha: 0, scale: 0.7 });

  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "a#top",
    duration: 200,
    triggerHook: "onLeave",
  })
    .setTween(tween)
    .addTo(controller);

  // change behaviour of controller to animate scroll instead of jump
  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, { scrollTo: { y: newpos } });
  });

  //  bind scroll to anchor links
  if ("a[href^='#']") {
    $(document).on("click", "a[href^='#']", function (e) {
      var id = $(this).attr("href");
      if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controller.scrollTo(id);
      }
    });
  }
};
