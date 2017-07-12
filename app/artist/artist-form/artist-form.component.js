import artistFormHtml from './artist-form.component.html';

let artistFormComponent = {
  bindings: {
      'artistId': '<',
  },
  template: artistFormHtml,
  controller: function ($state, artistService) {
    const vm = this;

    vm.$onInit = function () {
        if (!vm.artist) {
            vm.artist = artistService.createNew();
        }
    }

    vm.$onChanges = function (changesObj) {
        vm.artist = artistService.getById(vm.artistId);
    }

    vm.save = function() {
        if (vm.isNew()) {
            vm.artist = artistService.add(vm.artist);
        }
        else {
            artistService.update(vm.artist);
        }
        $state.go('^', null, { reload: true});
    }

    vm.delete = function() {
        artistService.delete(vm.artist);
        $state.go('^', null, { reload: true});
    }

    vm.isNew = function () {
        return (!vm.artist.id);
    }
  }
}

export default artistFormComponent;
