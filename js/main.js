---
layout: null
---
$(document).ready(function() {
  updateFooterPos();

  // Colapsa o painel principal quando não estiver em / (ou suas variantes em outros idiomas)
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

  // Window resize
  $( window ).resize(function() {
    updateFooterPos();
  });
});

function updateAnimation() {
    // Refresh the particles.js container
    window.pJSDom[0].pJS.fn.particlesRefresh();
}

function updateFooterPos() {
  // Check if the window does have a scroll bar
  document.body.scrollHeight > document.body.clientHeight ? $('.footer').css('position', 'relative') : $('.footer').css('position', 'absolute');
}