(function() {

  angular
    .module('app')
    .controller('OneVideoController', [
      '$mdDialog',
      'Lightbox',
      OneVideoController
    ]);

  function OneVideoController($mdDialog, Lightbox) {
    var vm = this;
    vm.showAlert = showAlert;
    // vm.openLightboxModal = openLightboxModal;
    vm.closeDialog = closeDialog;

    vm.photos = [{
      type: 'video',
      url: 'assets/videos/one/The-Eclipse-550-Jet.mp4',
      thumbUrl: 'assets/images/videos/477570748_295x166.jpg',
      caption: 'The Eclipse 550 Jet'
    }, {
      type: 'video',
      url: 'assets/videos/one/Kestrel-in-the-Air.mp4',
      thumbUrl: 'assets/images/videos/514448539_295x166.jpg',
      caption: 'Kestrel in the Air'
    }, {
      type: 'video',
      url: 'assets/videos/one/iOS6-Home-Screen.mp4',
      thumbUrl: 'assets/images/videos/474459983_295x166.jpg',
      caption: 'iOS6 Home Screen'
    }, {
      type: 'video',
      url: 'assets/videos/one/Avio-IFMS-Flying-an-Eclipse-Jet.mp4',
      thumbUrl: 'assets/images/videos/508627380_295x166.jpg',
      caption: 'Avio IFMS: Flying an Eclipse Jet'
    }, {
      type: 'video',
      url: 'assets/videos/one/Training-to-Fly-an-Eclipse-Jet.mp4',
      thumbUrl: 'assets/images/videos/508639961_295x166.jpg',
      caption: 'Training to Fly an Eclipse Jet'
    }, {
      type: 'video',
      url: 'assets/videos/one/How-Will-You-Describe-Your-Eclipse-Jet.mp4',
      thumbUrl: 'assets/images/videos/513329179_295x166.jpg',
      caption: 'How Will You Describe Your Eclipse Jet?'
    }, {
      type: 'video',
      url: 'assets/videos/one/The-ECLIPSE-550.mp4',
      thumbUrl: 'assets/images/videos/470377706_295x166.jpg',
      caption: 'The ECLIPSE 550'
    }, {
      type: 'video',
      url: 'assets/videos/one/Anti-Skid-Brake-Testing-in-the-Eclipse-Jet.mp4',
      thumbUrl: 'assets/images/videos/470618919_295x166.jpg',
      caption: 'Anti-Skid Brake Testing in the Eclipse Jet'
    }, {
      type: 'video',
      url: 'assets/videos/one/Eclipse-The-Progress-of-Innovation.mp4',
      thumbUrl: 'assets/images/videos/470612923_295x166.jpg',
      caption: 'Eclipse: The Progress of Innovation'
    }, {
      type: 'video',
      url: 'assets/videos/one/Jeff-Pino-on-the-Eclipse-Jet.mp4',
      thumbUrl: 'assets/images/videos/470604995_295x166.jpg',
      caption: 'Jeff Sikorsky CEO, on the Eclipse Jet'
    }, {
      type: 'video',
      url: 'assets/videos/one/Eclipse-Announces-550-Production.mp4',
      thumbUrl: 'assets/images/videos/470612229_295x166.jpg',
      caption: 'Eclipse Announces 550 Production'
    }, {
      type: 'video',
      url: 'assets/videos/one/Building-the-ECLIPSE-Jet.mp4',
      thumbUrl: 'assets/images/videos/470613588_295x166.jpg',
      caption: 'Building the ECLIPSE Jet'
    }, {
      type: 'video',
      url: 'assets/videos/one/The-First-ECLIPSE-550-Delivery.mp4',
      thumbUrl: 'assets/images/videos/470376250_295x166.jpg',
      caption: 'The First ECLIPSE 550 Delivery'
    }, {
      type: 'video',
      url: 'assets/videos/one/22.1.mp4',
      thumbUrl: 'assets/images/videos/535596115_295x166.jpg',
      caption: '22.1'
    }, {
      type: 'video',
      url: 'assets/videos/one/22.3.mp4',
      thumbUrl: 'assets/images/videos/536866333_295x166.jpg',
      caption: '22.3'
    }, {
      type: 'video',
      url: 'assets/videos/one/22.5.mp4',
      thumbUrl: 'assets/images/videos/535596033_295x166.jpg',
      caption: '22.5'
    }, {
      type: 'video',
      url: 'assets/videos/one/22.7.mp4',
      thumbUrl: 'assets/images/videos/536866088_295x166.jpg',
      caption: '22.7'
    }];

    // function openLightboxModal(index) {
    //   Lightbox.openModal(vm.photos, index);
    // };

    function showAlert(index) {
      let alert = $mdDialog.alert({
        template: '<md-dialog class="" style="color: #fff">' +
          '  <md-dialog-content>' +
          '  <video flex layout="row" width="100%" autoplay>' +
          '<source src="' + vm.photos[index].url + '" type="video/mp4">' +
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
