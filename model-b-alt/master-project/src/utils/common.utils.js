import config from '../modules';

const filterPath = (route = '', path = '') => {
  const data = route.split('/');
  const slug = path.split('/');
  return route === path || (
    data.length === slug.length && !data.filter((s, i) => !(s === slug[i] || (slug[i] && s === '*'))).length
  );
}

const getRecord = (path) => Object.keys(config).find((route) => filterPath(route, path));

export const getConfig = (path) => config[getRecord(path)];