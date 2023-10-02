document.addEventListener("DOMContentLoaded", function () {
  // Select the loaderBox by its ID
  var loaderBox = document.getElementById("loaderBox");
  var loader = document.getElementById("loader"); // Corrected variable name

  // Use setTimeout to hide the loaderBox after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    loaderBox.style.display = "none";
    loader.style.display = "none";
  }, 2000);
});
