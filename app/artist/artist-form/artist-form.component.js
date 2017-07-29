import artistFormHtml from './artist-form.component.html';

let artistFormComponent = {
  bindings: {
      'artistId': '<',
      'categories': '<',
      'categoryTypeInfo': '<'
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

    vm.updateClassifications = function (categoryId, classifications) {
        vm.artist.classifications
            .filter((c) => c.classificationCategoryId === categoryId)
            .forEach((c) => {
                vm.artist.classifications.splice(vm.artist.classifications.indexOf(c), 1);
            })

        vm.artist.classifications.push(...classifications);
    };

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
