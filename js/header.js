// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $("header").outerHeight();

// $(window).scroll(function (event) {
//   didScroll = true;
// });

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   var st = $(this).scrollTop();

//   // Make sure they scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta) return;

//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     $("header").removeClass("nav-down").addClass("nav-up");
//   } else {
//     // Scroll Up
//     if (st + $(window).height() < $(document).height()) {
//       $("header").removeClass("nav-up").addClass("nav-down");
//     }
//   }

//   lastScrollTop = st;
// }

var lastScrollTop = 0,
  delta = 15;

$(window).scroll(function () {
  var scrollTop =
    $(
      this
    ).scrollTop(); /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 스크롤바의 수직 위치를 정합니다. */
  // Math.abs: 주어진 숫자의 절대값을 반환(return)합니다.
  if (Math.abs(lastScrollTop - scrollTop) <= delta)
    // 스크롤 값을 받아서 ~
    return; // ~ 리턴

  if (scrollTop > lastScrollTop && lastScrollTop > 0) {
    /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
    $(".header").css("top", "-10rem");
  } else {
    $(".header").css("top", "0px");
  }
  lastScrollTop = scrollTop;
});
