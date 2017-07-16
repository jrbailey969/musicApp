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
        if (vm.artistId) {
            artistService.getById(vm.artistId).then((result) => {
                vm.artist = result;
            });
        }
    }

    vm.save = function() {
        let promise;
        if (vm.isNew()) {
            promise = artistService.add(vm.artist);
        }
        else {
            promise = artistService.update(vm.artist);
        }

        promise.then(() => {
            $state.go('^', null, { reload: true});
        });
    }

    vm.delete = function() {
        artistService.delete(vm.artist).then(() => {
            $state.go('^', null, { reload: true});
        });
    }

    vm.isNew = function () {
        return (!vm.artist.id);
    }
  }
}

export default artistFormComponent;
