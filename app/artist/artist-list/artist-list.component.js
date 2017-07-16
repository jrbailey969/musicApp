import artistListHtml from './artist-list.component.html';

let artistListComponent = {
  template: artistListHtml,
  controller: function(artistService) {
    const vm = this;
    artistService.getList().then((result) => {
      vm.artists = result;
    });
  }
}

export default artistListComponent;
