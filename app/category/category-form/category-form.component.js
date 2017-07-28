import categoryFormHtml from './category-form.component.html';

let categoryFormComponent = {
  bindings: {
      'categoryId': '<',
  },
  template: categoryFormHtml,
  controller: function ($state, categoryService) {
    const vm = this;

    vm.$onInit = function () {
        if (!vm.category) {
            vm.category = categoryService.createNew();
        }

        categoryService.getCategoryTypeInfo().then((result) => {
            vm.categoryTypeInfo = result;
        });
    }

    vm.$onChanges = function (changesObj) {
        if (vm.categoryId) {
            categoryService.getById(vm.categoryId).then((result) => {
                vm.category = result;
            });
        }
    }

    vm.addNewTag = function(name) {
        let tag = categoryService.createNewTag();
        tag.name = name;
        vm.category.tags.push(tag);
    }

    vm.save = function() {
        let promise;
        if (vm.isNew()) {
            promise = categoryService.add(vm.category);
        }
        else {
            promise = categoryService.update(vm.category);
        }

        promise.then(() => {
            $state.go('^', null, { reload: true});
        });
    }

    vm.delete = function() {
        categoryService.delete(vm.category).then(() => {
            $state.go('^', null, { reload: true});
        });
    }

    vm.isNew = function () {
        return (!vm.category.id);
    }
  }
}

export default categoryFormComponent;
