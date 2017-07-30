import grooveFormHtml from './groove-form.component.html';

let grooveFormComponent = {
  bindings: {
      'categories': '<',
      'categoryTypeInfo': '<'
  },
  template: grooveFormHtml,
  controller: function ($state, artistService) {
    const vm = this;

    vm.$onInit = function () {
        if (!vm.classifications) {
            vm.classifications = [];
        }
    }

    vm.updateClassifications = function (categoryId, classifications) {
        vm.classifications
            .filter((c) => c.classificationCategoryId === categoryId)
            .forEach((c) => {
                vm.classifications.splice(vm.classifications.indexOf(c), 1);
            })

        vm.classifications.push(...classifications);
    };

    vm.match = function() {
        artistService.search({ classifications: vm.classifications }).then((result) => {
            vm.arists = result;
        });
    }
  }
}

export default grooveFormComponent;
