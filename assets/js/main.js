$(document).ready(function () {
  var sidebar = $('.sidebar')[0];

  $('.wrapper').click(function () {
    if($('#toggle-fixed-plugin').parent().hasClass('open')) {
      $('#toggle-fixed-plugin').parent().removeClass('open');
    }
  });

  $('#toggle-fixed-plugin').click(function () {
    if($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    } else {
      $(this).parent().addClass('open');
    }
  });

  $('.fixed-plugin .active-color span').click(function () {
    var activeColors = $('.fixed-plugin .active-color span');
    var color = $(this)[0].getAttribute('data-color');
    activeColors.siblings().removeClass('active');
    $(this).addClass('active');
    sidebar.setAttribute('data-active-color', color);
  });

  $('.fixed-plugin .background-color span').click(function () {
    var activeColors = $('.fixed-plugin .background-color span');
    var color = $(this)[0].getAttribute('data-color');
    activeColors.siblings().removeClass('active');
    $(this).addClass('active');
    sidebar.setAttribute('data-background-color', color);
  });

  $('.fixed-plugin a.img-holder').click(function () {
    var bgImg = $(this).find('img').attr('src');
    $(this).parent('li').siblings().removeClass('active');
    $(this).parent('li').addClass('active');
    sidebar.setAttribute('data-image', bgImg);
    document.getElementsByClassName('sidebar-background')[0].style.backgroundImage = 'url("' + bgImg + '")';
  });

  $('.fixed-plugin .switch-sidebar-mini input').change(function () {
    var body = $('body');
    !$(this)[0].checked ? body.removeClass('sidebar-mini') : body.addClass('sidebar-mini');
  });

  $('#toggle-sidebar').click(function () {
    var body = $('body');
    if($(this).hasClass('toggled')) {
      $(this).removeClass('toggled');
      body.removeClass('nav-open');
    } else {
      $(this).addClass('toggled');
      body.addClass('nav-open');
    }
  });

  const ps = new PerfectScrollbar('#scroll-content', {
    wheelSpeed: 2,
    suppressScrollX: true
  })

});
