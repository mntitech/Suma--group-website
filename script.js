document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");

    });

  });


  const phoneNumber = "7856039079";

  console.log("Suma Group website loaded.");
  console.log("Contact:", phoneNumber);

});
