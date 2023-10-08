$(window).scroll(function () {
  let index: number = (window).scrollTop();
  if (index >= 40) {
    $('.section1_nav').css({
      'position': 'fixed',
      'top': '0px',
      'width': '100%',
      'z-index': '521521452542145',
    });
  }
});
