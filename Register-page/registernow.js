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
// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Select the loaderBox by its ID
  var loaderBox = document.getElementById("loaderBox");
  var loader = document.getElementById("loader"); // Corrected variable name

  // Use setTimeout to hide the loaderBox after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    loaderBox.style.display = "none";
    loader.style.display = "none";
  }, 3000);
});
