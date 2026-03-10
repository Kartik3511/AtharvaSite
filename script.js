(function () {
  'use strict';

  window.toggleMenu = function () {
    var menu = document.querySelector('.nav-links');
    var btn  = document.querySelector('.menu-toggle');
    var isOpen = menu.classList.toggle('show');
    if (btn) btn.setAttribute('aria-expanded', String(isOpen));
  };

  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');

    // Active nav link highlighting
    var path   = window.location.pathname;
    var isHome = (path === '/' || path.endsWith('/index.html'));
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '/' && isHome) {
        link.classList.add('active');
      } else if (href === '/film.html' && path.includes('/films/')) {
        link.classList.add('active');
      } else if (href !== '/' && !path.includes('/films/') && path.endsWith(href.replace(/^\//, ''))) {
        link.classList.add('active');
      }
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.querySelector('.nav-links').classList.remove('show');
        var btn = document.querySelector('.menu-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Scroll-to-top button (skip on home page)
    if (document.body.classList.contains('home-page')) return;
    var scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '&#8593;';
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);
    window.addEventListener('scroll', function () {
      scrollTopBtn.style.display = document.documentElement.scrollTop > 100 ? 'block' : 'none';
    });
    scrollTopBtn.addEventListener('click', function () {
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

}());