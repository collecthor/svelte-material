<script lang="ts">
	import { registerIcon } from './IconStack.svelte';
	import { onMount } from 'svelte';
	import * as icons from '@mdi/js';

	export let name: keyof typeof icons;
	export let size = '1em';
	export let width = size;
	export let height = size;
	export let color = 'currentColor';
	export let viewBox = '0 0 24 24';
	export let ariaLabel = void 0;
	export let ariaHidden = void 0;
	export let title: string | undefined = undefined;
	export let desc = void 0;
	let className = void 0;
	export { className as class };

	onMount(() => {
		// @ts-ignore
		registerIcon(name, icons[name]);
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
