$(function (){

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  console.log("funciona 1")

  $(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    })
  })

  console.log("funciona 2")

  $('a[data-slide="prev"]').click(function() {
    $('#myCarousel').carousel('prev')
  })
  
  $('a[data-slide="next"]').click(function() {
    $('#myCarousel').carousel('next')
  })

})