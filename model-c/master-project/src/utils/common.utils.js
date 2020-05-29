import config from '../modules';

const filterPath = (route = '', path = '') => {
  const data = route.split('/');
  const slug = path.split('/');
  return route === path || (
    data.length === slug.length && !data.filter((s, i) => !(s === slug[i] || (slug[i] && s === '*'))).length
  );
}

const getComponentName = (path) => Object.keys(config).find((route) => filterPath(route, path));

export const getComponent = (path) => config[getComponentName(path)];