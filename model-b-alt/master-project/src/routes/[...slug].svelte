<script context="module">
  import { getConfig } from '../utils/common.utils';
  export async function preload(page, session) {
    console.log(page);
    try {
      let props = {};
      const { path } = page;
      const { moduleId, name = 'index' } = getConfig(path);
      const moduleUrl = process.browser
			? `/${moduleId}/${name}.client.js`
      : `${process.cwd()}/../dist/${moduleId}/${name}.server.js`;
      const {default: component, preload: componentPreload} = await import(moduleUrl);
      if (componentPreload) {
        props = await componentPreload(page, session, this);
        console.log('PRELOAD', props);
      }
      return { component, props };
    } catch (error) {
      console.log(error)
      this.error(404, error.message);
    }
  }
</script>

<script>
  export let component;
  export let props;
</script>

<svelte:component this={component} {...props} />