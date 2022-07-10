<script lang="ts">
	export let indev: boolean;
	export let meta: AppMeta;
</script>

<main>
	{#if indev}
	<h1> This is still WIP!</h1>
	{/if}
	<p>Visit the <a href="{meta.github}">GitHub Repository</a> for more.</p>
</main>

<style>

</style>