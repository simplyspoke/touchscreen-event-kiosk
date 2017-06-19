(function() {
  'use strict';

  angular.module('angularMaterialAdmin', ['ngIdle', 'ngAnimate', 'ngCookies',
    'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app', 'bootstrapLightbox'
  ])

  .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider,
    $mdIconProvider, IdleProvider, KeepaliveProvider, LightboxProvider) {
    // set a custom template
    LightboxProvider.templateUrl = 'app/views/partials/lightbox.html';

    $stateProvider
      .state('main', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('main.landing', {
        url: '/landing',
        templateUrl: 'app/views/landing.html',
        data: {
          title: 'Home',
          class: 'landing'
        }
      })
      .state('main.one', {
        url: '/one',
        templateUrl: 'app/views/one.videos.html',
        controller: 'OneVideoController',
        controllerAs: 'vm',
        data: {
          title: 'One Aviation',
          class: 'one'
        }
      })
      // .state('main.one-videos', {
      //   url: '/one-videos',
      //   templateUrl: 'app/views/one.videos.html',
      //   controller: 'OneVideoController',
      //   controllerAs: 'vm',
      //   data: {
      //     title: 'Dashboard',
      //     class: 'one'
      //   }
      // })
      .state('main.one-testimonials', {
        url: '/one-testimonials',
        templateUrl: 'app/views/one.testimonials.html',
        controller: 'OneTestimonialsController',
        controllerAs: 'vm',
        data: {
          title: 'Testimonials',
          class: 'one'
        }
      })
      .state('main.eclipse', {
        url: '/eclipse',
        templateUrl: 'app/views/eclipse.html',
        controller: 'GalleryController',
        controllerAs: 'vm',
        data: {
          title: 'Eclipse',
          class: 'eclipse',
          photoCount: 30
        }
      })
      .state('main.eclipse-performance', {
        url: '/eclipse-performance',
        templateUrl: 'app/views/eclipse.performance.html',
        controller: 'EclipseController',
        controllerAs: 'vm',
        data: {
          title: 'Eclipse',
          class: 'eclipse',
          performance: 'performance'
        }
      })
      .state('main.eclipse-specs', {
        url: '/eclipse-specs',
        templateUrl: 'app/views/eclipse.specs.html',
        controller: 'EclipseController',
        controllerAs: 'vm',
        data: {
          title: 'Eclipse',
          class: 'eclipse'
        }
      })
      .state('main.canada', {
        url: '/canada',
        templateUrl: 'app/views/canada.html',
        controller: 'GalleryController',
        controllerAs: 'vm',
        data: {
          title: 'Canada',
          class: 'canada',
          photoCount: 25
        }
      })
      .state('main.canada-performance', {
        url: '/canada-performance',
        templateUrl: 'app/views/canada.performance.html',
        controller: 'CanadaController',
        controllerAs: 'vm',
        data: {
          title: 'Canada',
          class: 'canada',
          performance: 'performance'
        }
      })
      .state('main.canada-specs', {
        url: '/canada-specs',
        templateUrl: 'app/views/canada.specs.html',
        controller: 'CanadaController',
        controllerAs: 'vm',
        data: {
          title: 'Canada',
          class: 'canada'
        }
      })
      .state('main.kestrel', {
        url: '/kestrel',
        templateUrl: 'app/views/kestrel.html',
        controller: 'GalleryController',
        controllerAs: 'vm',
        data: {
          title: 'Kestrel',
          class: 'kestrel',
          photoCount: 22
        }
      })
      .state('main.kestrel-performance', {
        url: '/kestrel-performance',
        templateUrl: 'app/views/kestrel.performance.html',
        controller: 'KestrelController',
        controllerAs: 'vm',
        data: {
          title: 'Kestrel',
          class: 'kestrel',
          performance: 'performance'
        }
      })
      .state('main.kestrel-specs', {
        url: '/kestrel-specs',
        templateUrl: 'app/views/kestrel.specs.html',
        controller: 'KestrelController',
        controllerAs: 'vm',
        data: {
          title: 'Kestrel',
          class: 'kestrel'
        }
      })
      .state('splash', {
        url: '/spash',
        controller: 'SplashController',
        controllerAs: 'vm',
        templateUrl: 'app/views/splash.html',
        data: {
          title: 'Discover',
          class: 'splash'
        }
      });

    $urlRouterProvider.otherwise('/spash');

    $mdThemingProvider
      .theme('default')
      .primaryPalette('grey', {
        'default': '600'
      })
      .accentPalette('teal', {
        'default': '500'
      })
      .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
      });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50': '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);

    IdleProvider.idle(300);
    IdleProvider.timeout(10);
    KeepaliveProvider.interval(10);
  });
})();
