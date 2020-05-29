export default {
  '/about': {
    title: 'About',
    moduleId: 'module-simple',
  },
  '/blog': {
    title: 'Blog',
    moduleId: 'module-advanced',
  },
  '/blog/*': {
    moduleId: 'module-advanced',
    name: '[slug]'
  },
}