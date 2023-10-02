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
