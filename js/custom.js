/* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function () {
  $(".preloader").fadeOut(1000); // set duration in brackets
});

// MAGNIFIC POPUP
$(".image-popup").magnificPopup({
  type: "image",
  removalDelay: 300,
  mainClass: "mfp-with-zoom",
  gallery: {
    enabled: true,
  },
  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: "ease-in-out", // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function (openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is("img")
        ? openerElement
        : openerElement.find("img");
    },
  },
});

/* Istope Portfolio
-----------------------------------------------*/
jQuery(document).ready(function ($) {
  if ($(".iso-box-wrapper").length > 0) {
    var $container = $(".iso-box-wrapper"),
      $imgs = $(".iso-box img");

    $container.imagesLoaded(function () {
      $container.isotope({
        layoutMode: "fitRows",
        itemSelector: ".iso-box",
      });

      $imgs.load(function () {
        $container.isotope("reLayout");
      });
    });

    //filter items on button click

    $(".filter-wrapper li a").click(function () {
      var $this = $(this),
        filterValue = $this.attr("data-filter");

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });

      // don't proceed if already selected

      if ($this.hasClass("selected")) {
        return false;
      }

      var filter_wrapper = $this.closest(".filter-wrapper");
      filter_wrapper.find(".selected").removeClass("selected");
      $this.addClass("selected");

      return false;
    });
  }
});

/* Navigation Bar
  -----------------------------------------------*/
$(document).ready(function () {
  "use strict";

  // Navbar Sticky

  (function () {
    var docElem = document.documentElement,
      didScroll = false,
      stickynav = 50;
    document.querySelector(".nav-container");
    function init() {
      window.addEventListener(
        "scroll",
        function () {
          if (!didScroll) {
            didScroll = true;
            setTimeout(scrollPage, 50);
          }
        },
        false
      );
    }

    function scrollPage() {
      var sy = scrollY();
      if (sy >= stickynav) {
        $(".nav-container").addClass("sticky");
      } else {
        $(".nav-container").removeClass("sticky");
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();
  })();
});

$(document).ready(function () {
  "use strict";

  $(".menu-container").each(function (index) {
    $(this).find(".circle").attr("menu-link", index);
    $(this)
      .find(".list-menu")
      .clone()
      .appendTo("body")
      .attr("menu-link", index);
  });

  $(".menu-container .circle").click(function () {
    var linkedVideo = $("section")
      .closest("body")
      .find('.list-menu[menu-link="' + $(this).attr("menu-link") + '"]');
    linkedVideo.toggleClass("reveal-modal");
  });

  $("section")
    .closest("body")
    .find(".close-iframe")
    .click(function () {
      $(this).closest(".list-menu").toggleClass("reveal-modal");
    });

  /* wow
  -------------------------------*/
  new WOW({ mobile: true }).init();
});
