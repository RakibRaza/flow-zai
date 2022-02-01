$(function () {
  "use strict";

  /*-------------------------------------------
   Sticky Header
   --------------------------------------------- */
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
      $("#sticky").addClass("stick");
    } else {
      $("#sticky").removeClass("stick");
    }
  });


  /*-------------------------------------------
  js wow active
  --------------------------------------------- */
  new WOW().init();

  /*-------------------------------------------
   js scrollup
   --------------------------------------------- */
  $.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: "linear",
    scrollSpeed: 200,
    animation: "fade",
  });

  /*---------------------------------
 offcanvase menu active
 -----------------------------------*/
  jQuery(".menu-bar span").on("click", function () {
    jQuery('.mobile-menu').addClass('open-menu');
    jQuery('.menu-overlay').addClass('open')
  });

  jQuery('.menu-overlay').on('click', function () {
    jQuery('.mobile-menu').removeClass('open-menu')
    jQuery('.menu-overlay').removeClass('open')
  });

  /*--------------------------------------
  Smooth Scroll Up Active
----------------------------------------*/
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 77
        }, 200);
        return false;
      }
    }
  });

});
function sendMail() {
  const tempPrams = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }

  emailjs.send("flow_zai_123", "template_k42oxag", tempPrams, "user_eihYX2s93jUM4PSdei0wy")
    .then(res => {
      if (res.status === 200) {
        var sucessTost = document.getElementById('sucess-tost')

        sucessTost.style.display = "block";
        setTimeout(() => {
          sucessTost.style.display = "none";
        }, 2000);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      }
    })
}
document.getElementById("from-submit").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    sendMail()
  } else {
    var errorTost = document.getElementById('error-tost')

    errorTost.style.display = "block";
    setTimeout(() => {
      errorTost.style.display = "none";
    }, 2000);
  }
})

