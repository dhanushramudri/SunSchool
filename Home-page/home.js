// MNNU STARTS
// Get references to the elements
const aboutPage = document.getElementById("aboutPage");
const aboutChilds = document.getElementById("AboutChilds");
aboutChilds.style.display = "none";

// Add a click event listener to the aboutPage element
aboutPage.addEventListener("click", function () {
  // Toggle the display property of the AboutChilds element
  if (aboutChilds.style.display === "none") {
    aboutChilds.style.display = "block";
  } else {
    aboutChilds.style.display = "none";
  }
});
// Academics
const academicsPage = document.getElementById("academicsPage");
const AcademicsChilds = document.getElementById("AcademicsChilds");
AcademicsChilds.style.display = "none";

// Add a click event listener to the aboutPage element
academicsPage.addEventListener("click", function () {
  // Toggle the display property of the AboutChilds element
  if (AcademicsChilds.style.display === "none") {
    AcademicsChilds.style.display = "block";
  } else {
    AcademicsChilds.style.display = "none";
  }
});
// Facilities
const facilitiesPage = document.getElementById("facilitiesPage");
const FacilitiesChilds = document.getElementById("FacilitiesChilds");
FacilitiesChilds.style.display = "none";

// Add a click event listener to the aboutPage element
facilitiesPage.addEventListener("click", function () {
  // Toggle the display property of the AboutChilds element
  if (FacilitiesChilds.style.display === "none") {
    FacilitiesChilds.style.display = "block";
  } else {
    FacilitiesChilds.style.display = "none";
  }
});
// MArgin Button

//  MEnu Ends
jQuery(document).ready(function (e) {
  function t(t) {
    e(t).bind("click", function (t) {
      t.preventDefault();
      e(this).parent().fadeOut();
    });
  }
  e(".dropdown-toggle").click(function () {
    var t = e(this)
      .parents(".button-dropdown")
      .children(".dropdown-menu")
      .is(":hidden");
    e(".button-dropdown .dropdown-menu").hide();
    e(".button-dropdown .dropdown-toggle").removeClass("active");
    if (t) {
      e(this)
        .parents(".button-dropdown")
        .children(".dropdown-menu")
        .toggle()
        .parents(".button-dropdown")
        .children(".dropdown-toggle")
        .addClass("active");
    }
  });
  e(document).bind("click", function (t) {
    var n = e(t.target);
    if (!n.parents().hasClass("button-dropdown"))
      e(".button-dropdown .dropdown-menu").hide();
  });
  e(document).bind("click", function (t) {
    var n = e(t.target);
    if (!n.parents().hasClass("button-dropdown"))
      e(".button-dropdown .dropdown-toggle").removeClass("active");
  });
});

// feedback
jQuery(document).ready(function ($) {
  var feedbackSlider = $(".feedback-slider");
  feedbackSlider.owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
    responsive: {
      // breakpoint from 767 up
      767: {
        nav: true,
        dots: false,
      },
    },
  });

  feedbackSlider.on("translate.owl.carousel", function () {
    $(".feedback-slider-item h3")
      .removeClass("animated fadeIn")
      .css("opacity", "0");
    $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
      .removeClass("animated zoomIn")
      .css("opacity", "0");
  });

  feedbackSlider.on("translated.owl.carousel", function () {
    $(".feedback-slider-item h3")
      .addClass("animated fadeIn")
      .css("opacity", "1");
    $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
      .addClass("animated zoomIn")
      .css("opacity", "1");
  });
  feedbackSlider.on("changed.owl.carousel", function (property) {
    var current = property.item.index;
    var prevThumb = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find("img")
      .attr("src");
    var nextThumb = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find("img")
      .attr("src");
    var prevRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find("span")
      .attr("data-rating");
    var nextRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find("span")
      .attr("data-rating");
    $(".thumb-prev").find("img").attr("src", prevThumb);
    $(".thumb-next").find("img").attr("src", nextThumb);
    $(".thumb-prev")
      .find("span")
      .next()
      .html(prevRating + '<i class="fa fa-star"></i>');
    $(".thumb-next")
      .find("span")
      .next()
      .html(nextRating + '<i class="fa fa-star"></i>');
  });
  $(".thumb-next").on("click", function () {
    feedbackSlider.trigger("next.owl.carousel", [300]);
    return false;
  });
  $(".thumb-prev").on("click", function () {
    feedbackSlider.trigger("prev.owl.carousel", [300]);
    return false;
  });
}); //end ready
