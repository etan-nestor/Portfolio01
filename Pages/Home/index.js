let button = document.getElementById("button");
button.addEventListener("click", function () {
  for (let i = 0; i < 50; i++) {
    let spark = document.createElement("i");
    spark.classList.add("spark");

    const randomX = (Math.random() - 0.5) * window.innerWidth;
    const randomY = (Math.random() - 0.5) * window.innerHeight;

    spark.style.setProperty("--x", randomX + "px");
    spark.style.setProperty("--y", randomY + "px");

    const duration = Math.random() * 2 + 0.5;
    spark.style.animation = `animate ${duration}s ease-out forwards`;

    const randomSize = Math.random() * 8 + 2;
    spark.style.width = randomSize + "px";
    spark.style.height = randomSize + "px";
    document.body.appendChild(spark);

    setTimeout(function () {
      spark.remove();
    }, 2000);
  }
});

// mobile menu

// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});