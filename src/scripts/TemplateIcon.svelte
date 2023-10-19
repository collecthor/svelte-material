<script lang="ts">
	import { registerIcon } from '$lib/IconStack.svelte';
	import { onMount } from 'svelte';

	// This is a placeholder import; the build script will look for mdiFolder it and replace it with the current icon name.
	import { mdiFolder as icon } from '@mdi/js';

	const name = 'mdiFolder';

	export let size = '1em';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let viewBox = '0 0 24 24';
	export let ariaLabel = void 0;
	export let ariaHidden = void 0;
	export let title: string | undefined = undefined;
	export let desc = void 0;
	let className: string | undefined = void 0;
	export { className as class };

	onMount(() => {
		// @ts-ignore
		registerIcon(name, icon);
	});
</script>

<svg
	{viewBox}
	{width}
	{height}
	class={className}
	aria-label={ariaLabel}
	aria-hidden={ariaHidden}
	fill={color}
>
	{#if desc}<desc>{desc}</desc>{/if}
	{#if title}<title>{title}</title>{/if}
	<use href="#{name}" />
</svg>
