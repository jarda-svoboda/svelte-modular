import About from '../../module-simple/src/routes/index.svelte';
import Blog, { preload as BlogPreload } from '../../module-advanced/src/routes/index.svelte';
import BlogPost, { preload as PostPreload } from '../../module-advanced/src/routes/[slug].svelte';

export default {
  '/about': {
    component: About,
  },
  '/blog': {
    component: Blog,
    preload: BlogPreload,
  },
  '/blog/*': {
    component: BlogPost,
    preload: PostPreload,
  },
}