---
layout: null
---
$(document).ready(function() {  
  // Collapse the panel when not in / (or its language variations)
  if (!isBaseUrl()) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      updateAnimation();
  }

  // OnClick for btn open navigation on mobile
  $('.btn-mobile-menu').click(function() {
      $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
      $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  // Window resize
  $( window ).resize(function() {
    windowResize();
  });

  windowResize();

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

function windowResize() {
  // Show/hide the language navigation items according to URL and body size
  if (isBaseUrl() || window.matchMedia('(min-height: 530px)').matches && !$('.btn-mobile-menu').is(':visible')) {
    $('.navigation--lang').show();
  } else {
    $('.navigation--lang').hide();
  }
}

function isBaseUrl() {
  return !(window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/pt/');
}