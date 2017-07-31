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

        if (!vm.selectedCategories) {
            vm.selectedCategories = [];
        }
    }

    vm.getCategoryOptions = () => {
        return vm.categories.filter((c) => vm.selectedCategories.find((sc) => sc === c) === undefined);
    }

    vm.selectCategory = () => {
        if (vm.selectedCategory) {
            vm.selectedCategories.push(vm.selectedCategory);
        }
    };

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
            vm.artists = result;
        });
    }

    vm.clear = () => {
        vm.selectedCategories = [];
        vm.classifications = [];
        vm.artists = undefined;
    }
  }
}

export default grooveFormComponent;
