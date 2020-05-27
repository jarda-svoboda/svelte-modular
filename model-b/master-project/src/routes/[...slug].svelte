<script context="module">
  import config from '../modules';

  const filterPath = (route = '', path = '') => {
    const data = route.split('/');
    const slug = path.split('/');
    return route === path || (
      data.length === slug.length && !data.filter((s, i) => !(s === slug[i] || (slug[i] && s === '*'))).length
    );
  }

  export async function preload(page, session) {
    let component, modulePreload, props = {};
    console.log(page);
    const { path } = page;
    try {
      const name = Object.keys(config).find((route) => filterPath(route, path));
      component = config[name].component;
      modulePreload = config[name].preload;
    } catch (error) {
      this.error(404, error.message);
    }
    if(modulePreload) {
      props = await modulePreload(page, session); 
    }
    return { component, props };
  }
</script>

<script>
  export let component;
  export let props;
</script>

<svelte:component this={component} {...props} />