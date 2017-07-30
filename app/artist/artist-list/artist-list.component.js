import artistListHtml from './artist-list.component.html';
import './artist-list.component.scss';

let artistListComponent = {
  template: artistListHtml,
  controller: function(artistService) {
    const vm = this;
    artistService.getList().then((result) => {
      vm.artists = result;
    });

    vm.search = () => {
      artistService.search(vm.searchCriteria).then((result) => {
        vm.artists = result;
      });
    };
  }
}

export default artistListComponent;
