<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../tailwind.css'
	import '$lib/styles.css'


</script>



<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
@import "https://unpkg.com/open-props";

</style>
