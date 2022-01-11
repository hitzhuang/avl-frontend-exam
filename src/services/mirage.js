import { createServer } from 'miragejs';
import tags from './data/tags';
import followers from './data/followers';
import profiles from './data/profiles';

const getUrlQueryString = (url) => {
  let tmpArray = url.split('?');
  return tmpArray.length > 1 ? tmpArray[1] : '';
};

const getValues = (url, data) => {
  let urlParams = new URLSearchParams(getUrlQueryString(url));
  let page = urlParams.get('page');
  let pageSize = urlParams.get('pageSize');

  page = page === null ? 1 : page;
  pageSize = pageSize === null ? 0 : pageSize;

  return {
    page,
    total: data.length,
    totalPages: pageSize === 0 ? 1 : Math.ceil(data.length / pageSize),
    data:
      pageSize === 0
        ? data
        : data.slice((page - 1) * pageSize, page * pageSize),
  };
};

const getKeywordSearched = (url, data) => {
  let urlParams = new URLSearchParams(getUrlQueryString(url));
  let keyword = urlParams.get('keyword');
  console.log(keyword);
  return keyword === null
    ? data
    : data.filter(
        (d) => d.title.includes(keyword) || d.username.includes(keyword)
      );
};

createServer({
  routes() {
    this.namespace = 'api/users/';
    this.get('tags', () => tags, { timing: 0 });
    this.get('all', (schema, request) => getValues(request.url, followers), {
      timing: 0,
    });
    this.get(
      'friends',
      (schema, { url }) => {
        let friends = followers.filter((t) => t.isFollowing === true);
        return getValues(url, friends);
      },
      { timing: 0 }
    );
    this.get(
      'search',
      (schema, { url }) => {
        let search = getKeywordSearched(url, profiles);
        return getValues(url, search);
      },
      { timing: 0 }
    );
  },
});
