$(function (){

  // funcion smooth scroll
  $(".navbar-nav .nav-item a").on("click", function (e) {
    // 1
    e.preventDefault()
    // 2
    const href = $(this).attr("href")
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 1000)
  })

  // funcion tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  console.log("funciona 1")

  $("#myCarousel").carousel({
    interval: 2000,
    //pause: 'false' no me resulta y se pausa cuando se hace hover en el carousel
  })

  console.log("funciona 2")

  // controles carousel
  $('a[data-slide="prev"]').click(function() {
    $('#myCarousel').carousel('prev')
  })
  
  $('a[data-slide="next"]').click(function() {
    $('#myCarousel').carousel('next')
  })

  // funcion popover
  $('[data-toggle="popover"]').popover()



  // funcion para desparecer y aparecer navbar
  window.onscroll = function() {scrollFunction()}

  var navbar = $('.navbar')
  var lastScrollTop = 0

  $(window).scroll(function () {
    var st = $(this).scrollTop()

  // Scroll down
  if (st > lastScrollTop) {
    navbar.fadeOut()
  } 

  // Scroll up
  else if(st < lastScrollTop && st > 200) {
    navbar.fadeIn()
    navbar.removeClass('navbar-light bg-transparent').addClass('navbar-dark bg-custom')
  }

  else {
    navbar.removeClass('navbar-dark bg-custom').addClass('navbar-light bg-transparent')
  }
  lastScrollTop = st
  })

})