import about from '../../module-simple/src/server';
import blog from '../../module-advanced/src/server';

export default [
  {
    'expressApp': about,
    'basePath': '/about',
    
    // 'useLayout': true,
  },
  {
    'expressApp': blog,
    'basePath': '/blog',
    
    // 'useLayout': true,
  },

]