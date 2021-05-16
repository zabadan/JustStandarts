$(document).ready(function(){
  $('.standarts_mainblock-content').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});