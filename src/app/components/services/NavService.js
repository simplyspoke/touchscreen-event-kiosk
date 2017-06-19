(function() {
  'use strict';

  angular.module('app')
    .service('navService', [
      '$q',
      '$state',
      navService
    ]);

  function navService($q) {
    var menuItems = [{
      name: 'Home',
      icon: 'home',
      sref: '.landing',
      class: 'all'
    }, {
    //   name: 'One Global',
    //   icon: 'public',
    //   sref: '.one',
    //   class: 'landing'
    // }, {
      name: 'One Global',
      icon: 'language',
      sref: '.one',
      class: 'all'
    }, {
    //   name: 'Videos',
    //   icon: 'video_library',
    //   sref: '.one-videos',
    //   class: 'one-child'
    // }, {
      name: 'Testimonials',
      icon: 'people_outline',
      sref: '.one-testimonials',
      class: 'one-child'
    }, {
    //   name: 'Warrenty',
    //   icon: 'format_align_justify',
    //   sref: '.one-warranty',
    //   class: 'one'
    // }, {
      name: 'Eclipse 550',
      icon: 'flight',
      sref: '.eclipse',
      class: 'all'
    }, {
      name: 'Eclipse Performance',
      icon: 'equalizer',
      sref: '.eclipse-performance',
      class: 'eclipse-child'
    }, {
      name: 'Eclipse Specs',
      icon: 'format_list_bulleted',
      sref: '.eclipse-specs',
      class: 'eclipse-child'
    }, {
      name: 'Kestrel 350',
      icon: 'flight',
      sref: '.kestrel',
      class: 'all'
    }, {
      name: 'Kestrel Performance',
      icon: 'equalizer',
      sref: '.kestrel-performance',
      class: 'kestrel-child'
    }, {
      name: 'Kestrel Specs',
      icon: 'format_list_bulleted',
      sref: '.kestrel-specs',
      class: 'kestrel-child'
    }, {
      name: 'Canada',
      icon: 'flight',
      sref: '.canada',
      class: 'all'
    }, {
      name: 'Canada Performance',
      icon: 'equalizer',
      sref: '.canada-performance',
      class: 'canada-child'
    }, {
      name: 'Canada Specs',
      icon: 'format_list_bulleted',
      sref: '.canada-specs',
      class: 'canada-child'
    }];

    return {
      loadAllItems: function() {
        return $q.when(menuItems);
      }
    };
  }

})();
