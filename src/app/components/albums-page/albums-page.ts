import {Component,NgFor} from 'angular2/angular2';
import {AlbumCover} from '../album-cover/album-cover';
import {Store} from '../../services/store/store';

@Component({
  selector: 'albums-page',
  templateUrl: 'app/components/albums-page/albums-page.html',
  styleUrls: ['app/components/albums-page/albums-page.css'],
  providers: [],
  directives: [NgFor,AlbumCover],
  pipes: []
})
export class AlbumsPage {
  albums: any = [];

  constructor(private store: Store) {
    this.store.allAlbums().subscribe(albums => this.albums = albums);
  }
}
