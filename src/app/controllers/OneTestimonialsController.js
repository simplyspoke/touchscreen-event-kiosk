(function() {

  angular
    .module('app')
    .controller('OneTestimonialsController', [
      '$mdDialog',
      'Lightbox',
      OneTestimonialsController
    ]);

  function OneTestimonialsController($mdDialog, Lightbox) {
    var vm = this;
    vm.showAlert = showAlert;
    vm.openLightboxModal = openLightboxModal;
    vm.closeDialog = closeDialog;

    vm.photos = [{
      type: 'video',
      url: 'assets/videos/testimonials/Barry-Lerman.mp4',
      thumbUrl: 'assets/images/videos/testimonials/508176136_295x166.jpg',
      caption: 'Why I Fly the Eclipse Jet: Barry Lerman'
    }, {
      type: 'video',
      url: 'assets/videos/testimonials/Eric-Kobren.mp4',
      thumbUrl: 'assets/images/videos/testimonials/502681045_295x166.jpg',
      caption: 'Why I Fly the Eclipse Jet: Eric Kobren'
    }, {
      type: 'video',
      url: 'assets/videos/testimonials/Bruce-Dickinson.mp4',
      thumbUrl: 'assets/images/videos/testimonials/505968010_295x166.jpg',
      caption: 'Why I Fly the Eclipse Jet: Bruce Dickinson'
    }, {
      type: 'video',
      url: 'assets/videos/testimonials/Gordon-Feingold.mp4',
      thumbUrl: 'assets/images/videos/testimonials/470613132_295x166.jpg',
      caption: 'Why I Fly the Eclipse Jet: Gordon Feingold'
    }, {
      type: 'video',
      url: 'assets/videos/testimonials/Karen-Turk.mp4',
      thumbUrl: 'assets/images/videos/testimonials/503913058_295x166.jpg',
      caption: 'Why We Fly the Eclipse Jet: Mike and Karen Turk'
    }, {
      type: 'video',
      url: 'assets/videos/testimonials/Hudson-Nissan.mp4',
      thumbUrl: 'assets/images/videos/testimonials/470604661_295x166.jpg',
      caption: 'Why I Fly the Eclipse Jet: Hudson Nissan'
    }];

    function openLightboxModal(index) {
      Lightbox.openModal(vm.photos, index);
    };

    function showAlert(index) {
      let alert = $mdDialog.alert({
        template: '<md-dialog class="" style="color: #fff">' +
          '  <md-dialog-content>' +
          '  <video flex layout="row" width="100%" autoplay>' +
          '<source src="'+ vm.photos[index].url+'" type="video/mp4">' +
          ' </video>' +
          ' </md-dialog-content>' +
          '  <md-dialog-content layout="row"  layout-align="center center">' +
          '<md-button ng-click="dialog.hide()" class="md-raised md-large">Close</md-button>' +
          '  </md-dialog-content>' +
          '</md-dialog>',
        clickOutsideToClose: true
      });
      $mdDialog
        .show(alert)
        .finally(function() {
          $mdDialog.hide();
        });
    }

    function closeDialog() {
      $mdDialog.hide();
    }
  }

})();
