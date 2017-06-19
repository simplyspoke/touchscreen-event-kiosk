(function() {

  angular
    .module('app')
    .controller('GalleryController', [
      '$mdDialog',
      '$state',
      'Lightbox',
      GalleryController
    ]);

  function GalleryController($mdDialog, $state, Lightbox) {
    var vm = this;
    vm.openLightboxModal = openLightboxModal;
    vm.currentPage = $state.current.data.class;
    vm.count = $state.current.data.photoCount;
    vm.photos = [];
    for (var i = 1; i <= vm.count; i++) {
      vm.photos.push({
        id: i,
        url: 'assets/images/' + vm.currentPage + '/' + vm.currentPage + '-' + i + '.jpg',
        thumbUrl: 'assets/images/' + vm.currentPage + '/thumbs/' + vm.currentPage + '-' + i + '.jpg',
        caption: 'Photo' + i
      });
    }

    function openLightboxModal(index) {
      Lightbox.openModal(vm.photos, index);
    };
  }

})();
