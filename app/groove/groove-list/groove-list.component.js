import grooveListHtml from './groove-list.component.html';
import './groove-list.component.scss';

let grooveListComponent = {
  bindings: {
    artists: '<'
  },
  template: grooveListHtml,
  controller: function(artistService) {
    const vm = this;

    vm.$onInit = () => {
      if (!vm.artists) {
        vm.artists = [];
      }
    };

    vm.$onChanges = (changesObj) => {
      console.log(vm.artists);
    }

  }
}

export default grooveListComponent;
