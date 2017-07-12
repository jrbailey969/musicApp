import artistListHtml from './artist-list.component.html';

let artistListComponent = {
  template: artistListHtml,
  controller: function(artistService) {
    const vm = this;
    vm.artists = artistService.getList();
  }
}

export default artistListComponent;
