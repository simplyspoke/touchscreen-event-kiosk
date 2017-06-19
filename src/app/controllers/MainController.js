(function() {

  angular
    .module('app')
    .controller('MainController', [
      'navService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast', '$scope', 'Idle', 'Keepalive',
      MainController
    ]);

  function MainController(navService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast, $scope, Idle) {
    var vm = this;

    vm.menuItems = [];
    vm.selectItem = selectItem;
    vm.toggleItemsList = toggleItemsList;
    // vm.actionsToggled = false;
    vm.title = $state.current.data.title;
    vm.toggleRightSidebar = toggleRightSidebar;
    // console.log($state);
    $scope.currentPage = $state.current.data.class;
    $scope.performance = $state.current.data.performance;
    $scope.startIdle = startIdle;

    navService
      .loadAllItems()
      .then(function(menuItems) {
        vm.menuItems = [].concat(menuItems);
      });

    function toggleRightSidebar() {
      $mdSidenav('right').toggle();
    }

    function toggleItemsList() {
      // let pending = $mdBottomSheet.hide() || $q.when(true);

      // pending.then(function() {
      //   $mdSidenav('left').toggle();
      // });
    }

    function selectItem(item) {
      vm.title = item.name;
      vm.toggleItemsList();
    }

    function startIdle() {
      Idle.watch();
    }

    $scope.startIdle();

    $scope.$on('IdleTimeout', function() {
      // alert('this has triggered');
      Idle.unwatch();
      $state.go('splash');
      // closeModals();
      // $scope.timedout = $modal.open({
      //   templateUrl: 'timedout-dialog.html',
      //   windowClass: 'modal-danger'
      // });
    });
  }

})();
