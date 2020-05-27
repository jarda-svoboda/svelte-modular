<script context="module">
  import About from '../../../module-simple/src/routes/index.svelte';
  import Blog, {preload as BlogPreload} from '../../../module-advanced/src/routes/index.svelte';

  export async function preload(page, session) {
    const { params } = page;
    const { slug } = params;
    let component = About;
    let props = {};
    if(slug[0] === 'blog') {
      props = await BlogPreload(page);
      component = Blog;
    }
    return { slug, component: {component, props} };
  }
</script>

<script>
  export let component;
  export let slug = [];
  $: console.log(slug);
</script>

<svelte:component this={component.component} {...component.props} />