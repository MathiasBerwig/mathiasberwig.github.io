---
layout: null
---
$(document).ready(function() {  
  // Collapse the panel when not in / (or its language variations)
  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}' + site_active_lang + '/') {
      $('.panel-cover').addClass('panel-cover--collapsed');
      updateAnimation();
  }

  // OnClick for btn open navigation on mobile
  $('.btn-mobile-menu').click(function() {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  // OnClick for btn close navigation on mobile
  $('.navigation-wrapper .blog-button').click(function() {
      $('.navigation-wrapper').toggleClass('visible');
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  // Window resize
  $( window ).resize(function() {
    updateFooterPos();
  });

  updateFooterPos();

  // Initializes the headroom lib
  $(".headroom").headroom({
    "offset": 205,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  });
});

function updateAnimation() {
  // Refresh the particles.js container
  window.pJSDom[0].pJS.fn.particlesRefresh();
}

function updateFooterPos() {
  // Check if the window does have a scroll bar then swap the footer position according to window size (relative or absolute)
  document.body.scrollHeight > document.body.clientHeight ? $('.footer').css('position', 'relative') : $('.footer').css('position', 'absolute');
}