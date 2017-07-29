import subjectClassificationHtml from './subject-classification.component.html';

let subjectClassificationComponent = {
  bindings: {
      'category': '<',
      'subject': '<',
      'categoryTypeInfo': '<',
      'onUpdate': '&'
  },
  template: subjectClassificationHtml,
  controller: function (categoryService) {
    const vm = this;

    vm.$onInit = function () {
        if (!vm.category) {
            vm.category = categoryService.createNew();
        }

        if (!vm.classifications) {
            vm.classifications = [];
        }
    }

    vm.$onChanges = function (changesObj) {
        if (vm.subject && vm.category) {
            vm.subject.classifications = vm.subject.classifications || [];
            vm.classifications = vm.subject.classifications
                .filter((c) => c.classificationCategoryId === vm.category.id && 
                    (vm.category.classificationCategoryTypeId === vm.categoryTypeInfo.RANGE || 
                     vm.category.tags.find((t) => t.id === c.classificationTagId) !== undefined))
                .map((c) => {
                    let tag = vm.category.tags.find((t) => t.id === c.classificationTagId);
                    return {
                        id: c.classificationTagId,
                        name: tag ? tag.name : '',
                        rangeValue: c.rangeValue
                    }
                });

            if (vm.category.classificationCategoryTypeId === vm.categoryTypeInfo.RANGE &&
                vm.classifications.length === 0) {
                    vm.classifications.push({ rangeValue: vm.category.rangeMin });
            }

            vm.sliderOptions = {
                floor: vm.category.rangeMin,
                ceil: vm.category.rangeMax,
                minLimit: vm.category.rangeMin,
                maxLimit: vm.category.rangeMax,
                onChange: vm.updated
            };
        }
    }

    vm.updated = function() {
        vm.onUpdate({
            categoryId: vm.category.id, 
            classifications: vm.classifications.map((c) => {
                return {
                    classificationCategoryId: vm.category.id,
                    classificationTagId: c.id,
                    rangeValue: c.rangeValue
                };
            })
        });
    };

    vm.loadTags = (query) => vm.category.tags.filter((t) => t.name.toUpperCase().startsWith(query.toUpperCase()));
  }
}

export default subjectClassificationComponent;
