<script>
	import modules from '../modules.js';
	export let segment;
	
	const nav = Object.keys(modules).filter(
		path => modules[path].title
	).map(
		path => ({ title: modules[path].title, path, segment: path.replace('/', '')})
	);

</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
	{#each [{title: 'Home', path: '/'}, ...nav] as {title, segment: s, path}}
		<li><a aria-current='{segment === s ? "page" : undefined}' href={path}>{title}</a></li>
	{/each}
	</ul>
</nav>
