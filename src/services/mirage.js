import { createServer } from 'miragejs';
import tags from './data/tags';

createServer({
  routes() {
    this.namespace = 'api/users';
    this.get('/tags', () => tags, { timing: 3000 });
    this.get(
      '/all',
      () => {
        return tags;
      },
      { timing: 3000 }
    );
    this.get(
      '/friends',
      () => {
        return tags;
      },
      { timing: 3000 }
    );
    this.get(
      '/search',
      () => {
        return tags;
      },
      { timing: 3000 }
    );
  },
});
