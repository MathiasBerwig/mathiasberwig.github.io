---
layout: null
---
$(document).ready(function() {
    $('a.blog-button').click(function(e) {
      if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
      currentWidth = $('.panel-cover').width();
      if (currentWidth < 960) {
          $('.panel-cover').addClass('panel-cover--collapsed');
          $('.content-wrapper').addClass('animated slideInRight');
      } else {
          $('.panel-cover').css('max-width', currentWidth);
          $('.panel-cover').animate({
              'max-width': '530px',
              'width': '40%'
          }, 400, swing = 'swing', function() {
              updateAnimation();
          })
      }
  });

  // Colapsa o painel principal quando na url /#blog 
  if (window.location.hash && window.location.hash == '#blog') {
      $('.panel-cover').addClass('panel-cover--collapsed');
      updateAnimation();
  }

  // Colapsa o painel principal na url / (ou suas variantes em outros idiomas)
  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}' + site_active_lang + '/') {
      $('.panel-cover').addClass('panel-cover--collapsed');
      updateAnimation();
  }

  // OnClick do botão de menu mobile
  $('.btn-mobile-menu').click(function() {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  // OnClick do botão
  $('.navigation-wrapper .blog-button').click(function() {
      $('.navigation-wrapper').toggleClass('visible');
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });  
});

function updateAnimation() {
    // Refresh the particles.js container
    window.pJSDom[0].pJS.fn.particlesRefresh();
}