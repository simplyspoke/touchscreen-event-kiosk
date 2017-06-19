(function() {

  angular
    .module('app')
    .controller('SplashController', [
      '$mdDialog', '$state',
      SplashController
    ]);

  function SplashController($mdDialog, $state) {
    var vm = this;
    vm.showAlert = showAlert;
    vm.closeDialog = closeDialog;

    function showAlert() {
      let alert = $mdDialog.alert({
        template: '<md-dialog class="splash-dialog" style="color: #fff">' +
          '  <md-dialog-content>' +
          '    <img src="assets/images/logo.png" width="800px" class="logo-img">' +
          ' </md-dialog-content>' +
          '  <md-dialog-content layout="row"  layout-align="center center">' +
          '<a ng-click="dialog.hide()" class="md-raised md-large landing-button">' +
            '<img src="assets/images/start.png" width="300px"/></a>' +
          '  </md-dialog-content>' +
          '</md-dialog>',
        clickOutsideToClose: true
      });
      $mdDialog
        .show(alert)
        .finally(function() {
          $state.go('main.landing');
          $mdDialog.hide();
        });
    }

    function closeDialog() {
      $state.go('main.landing');
      $mdDialog.hide();
    }
    vm.showAlert();
    console.log('test');
  }

})();
