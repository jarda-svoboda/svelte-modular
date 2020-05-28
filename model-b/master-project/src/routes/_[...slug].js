import About from '../../../module-simple/src/routes/index.svelte';

export async function get(req, res, next) {
	const { slug } = req.params;
  console.log(About);
  res.end(About.render().html);
  return About.$$render();
}
