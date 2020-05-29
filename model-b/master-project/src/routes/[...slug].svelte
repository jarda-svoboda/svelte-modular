<script context="module">
  import { getConfig } from '../utils/common.utils';
  export async function preload(page, session) {
    console.log(page);
    try {
      let props = {};
      const { path } = page;
      const { component, componentPreload } = getConfig(path);
      if (componentPreload) {
        props = await componentPreload(page, session); 
      }
      return { component, props };
    } catch (error) {
      this.error(404, error.message);
    }
  }
</script>

<script>
  export let component;
  export let props;
</script>

<svelte:component this={component} {...props} />