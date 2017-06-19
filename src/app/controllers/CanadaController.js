(function(){

  angular
    .module('app')
    .controller('CanadaController', [
      CanadaController
    ]);

  function CanadaController() {
    var vm = this;
    vm.english = true;
    vm.englishControl = englishControl;
    vm.metricControl = metricControl;

    function englishControl() {
      vm.english = !vm.english;
    }

    function metricControl() {
      vm.english = !vm.english;
    }
  }

})();
