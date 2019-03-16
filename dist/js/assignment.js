var headerJourney = new Vue({
  el: 'header',
  data: {
    destination: 'Seoul',
    title: 'My first new year trip',
    duration: '2019.12.29 - 2020.1.2 (5 nights)',
    avatar_1: '/dist/images/assignment/avatar-1.jpg',
    avatar_2: '/dist/images/assignment/avatar-2.jpg',
    avatar_3: '/dist/images/assignment/avatar-3.jpg'
  }
});

var scheduleDay1 = new Vue({
  el: '.timeline-journey__spot-group__day1',
  data: {
    items: [
      { spot: 'Namdaemun Market', location: 'Jung-gu, Hoehyeon Station (Exit 7)' },
      { spot: 'Myeongdong Cathedral', location: 'Jung-gu, Myeongdong Station (Exit 7)' },
      { spot: 'Wangbijib', location: 'Jung-gu, Myeongdong Station (Exit 9)' }
    ]
  }
})

var scheduleDay2 = new Vue({
  el: '.timeline-journey__spot-group__day2',
  data: {
    items: [
      { spot: 'Namdaemun Market', location: 'Jung-gu, Hoehyeon Station (Exit 7)' },
      { spot: 'Myeongdong Cathedral', location: 'Jung-gu, Myeongdong Station (Exit 7)' },
      { spot: 'Wangbijib', location: 'Jung-gu, Myeongdong Station (Exit 9)' }
    ]
  }
})

Vue.component('edit-schedule', {
  template: '<div> Hello!</div>',
  // props: ['name'],
  // template: '<div> Hello, {{ name }}!</div>',
  // props: ['name'],
});

// auto save?
$("button.btn-settings__edit--auto").click(function() {
  // $('.edit-panel').toggleClass("is-active");
  $('.timeline-journey__spot__edit-panel').fadeToggle("fast");
  $('.content::before').fadeToggle("fast");

  $(".btn-text--auto").fadeOut(function () {
    $(".btn-text--auto").text(($(".btn-text--auto").text() == 'Save') ? 'Edit' : 'Save').fadeIn("fast");
  })
});