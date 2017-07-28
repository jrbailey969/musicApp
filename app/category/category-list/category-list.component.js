import categoryListHtml from './category-list.component.html';

let categoryListComponent = {
  template: categoryListHtml,
  controller: function(categoryService) {
    const vm = this;
    categoryService.getList().then((result) => {
      vm.categories = result;
    });
  }
}

export default categoryListComponent;
