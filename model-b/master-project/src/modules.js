import About from '../../module-simple/src/routes/index.svelte';
import Blog, { preload as BlogPreload } from '../../module-advanced/src/routes/index.svelte';
import BlogPost, { preload as PostPreload } from '../../module-advanced/src/routes/[slug].svelte';
import Svelte from '../../module-svelte/src/App.svelte';

export default {
  '/about': {
    title: 'About',
    component: About,
  },
  '/blog': {
    title: 'Blog',
    component: Blog,
    preload: BlogPreload,
  },
  '/blog/*': {
    component: BlogPost,
    preload: PostPreload,
  },
  '/svelte': {
    title: 'Svelte',
    component: Svelte,
  },
}