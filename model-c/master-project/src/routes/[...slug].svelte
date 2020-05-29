<script context="module">
  import { getComponent } from '../utils/common.utils';
  export async function preload(page, session) {
    console.log(page);
    try {
      let props = {};
      const { path } = page;
      const { moduleId, name = 'index' } = getComponent(path);
      const moduleUrl = process.browser
			? `/${moduleId}/${name}.client.js`
      : `${process.cwd()}/../dist/${moduleId}/${name}.server.js`;
      const component = (await import(moduleUrl)).default;
      if (component.preload) {
        props = await component.preload(page, session); 
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