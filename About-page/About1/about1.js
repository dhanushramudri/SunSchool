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

// Get a reference to the video element
var video = document.getElementById("myVideo");

// Set the volume (a value between 0 and 1, where 0 is muted and 1 is full volume)
video.volume = 0; // Set the volume to 50%

// You can also adjust the volume dynamically
function setVolume(volumeLevel) {
  video.volume = volumeLevel;
}

// Example of changing the volume to 70%
setVolume(0);

var video = document.getElementById("myVideo1");

// Set the volume (a value between 0 and 1, where 0 is muted and 1 is full volume)
video.volume = 0; // Set the volume to 50%

// You can also adjust the volume dynamically
function setVolume(volumeLevel) {
  video.volume = volumeLevel;
}

// Example of changing the volume to 70%
setVolume(0);
