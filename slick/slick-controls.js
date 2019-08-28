$(document).ready(function(){
    $('.storiesContainer').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
          {
              breakpoint: 801,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
    });
  });