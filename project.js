$(function () {
  new TypeIt('#element', {
    speed: 45
  })
    .type('I am a')
    .pause(300)
    .options({ speed: 200 })
    .delete(3)
    .options({ speed: 45 })
    .pause(300)
    .type('m\ a Software Develooer')
    .pause(500)
    .options({ speed: 200 })
    .delete(7)
    .type('veloper.')
    .pause(500)
    .break()
    .options({ speed: 45 })
    .type('I love Developing <em>"Web and Android Applications</em>"')
  $('#element').find('.ti-cursor').addClass('is-hidden')


});

$(function () {
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});

