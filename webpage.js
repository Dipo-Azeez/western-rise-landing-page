function myFunction(){
    document.body.classList.toggle("mobile-nav-active");
}

function myFunctions() {
    var x = document.getElementById();
    x.style.display = "block";
}

function myFunctions() {
    var y = document.getElementById();
    y.style.display = "none";
    var message = document.getElementById().value;
    alert("Hey " + message + ", Thank you for subscribing")
}





// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("mobile-nav-active");
  })
);


// close menu functionality
const closeMenu = document.querySelector("#close-menu");

closeMenu.addEventListener("click", () => {
  document.body.classList.remove("mobile-nav-active");
})