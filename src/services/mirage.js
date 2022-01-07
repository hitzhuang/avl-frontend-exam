import { createServer, Response } from 'miragejs';
import tabs from './data/tabs';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/tags', () => tabs, { timing: 3000 });
  },
});
