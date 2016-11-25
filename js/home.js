$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var navbar = document.getElementById('navbar');
  if (scrollTop > 100) {
    navbar.classList.remove("bigger", "bg-inverse-special");
  } else {
    navbar.classList.add("bigger", "bg-inverse-special");
  }
})