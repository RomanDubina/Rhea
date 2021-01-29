$(function () {
    $('.places__slider').slick({
        slidesToShow: 2,
        slidesToScroll:1,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        centerPadding: 0,
        // autoplay: true\
        arrows: true
    })

    $("#rate-nepal").rateYo({
        starWidth: "21px",
    rating: 3,
    readOnly: true,
    normalFill: "#3984f3",
    ratedFill: "#3984f3",
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"' +
      'viewBox="0 0 24 24">' +
      "<title>star_outline</title>" +
      '<path d="M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"></path>' +
      "</svg>",
      });

      $("#rate-indonesia").rateYo({
        starWidth: "21px",
    rating: 4,
    readOnly: true,
    normalFill: "#3984f3",
    ratedFill: "#3984f3",
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"' +
      'viewBox="0 0 24 24">' +
      "<title>star_outline</title>" +
      '<path d="M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"></path>' +
      "</svg>",
      })
      $("#rate-maldives").rateYo({
        starWidth: "21px",
    rating: 5,
    readOnly: true,
    normalFill: "#3984f3",
    ratedFill: "#3984f3",
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"' +
      'viewBox="0 0 24 24">' +
      "<title>star_outline</title>" +
      '<path d="M12 15.422l3.75 2.25-0.984-4.266 3.328-2.906-4.406-0.375-1.688-4.031-1.688 4.031-4.406 0.375 3.328 2.906-0.984 4.266zM21.984 9.234l-5.438 4.734 1.641 7.031-6.188-3.75-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609z"></path>' +
      "</svg>",
      })
})