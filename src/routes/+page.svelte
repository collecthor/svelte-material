<script lang="ts">
	import IconStack from '$lib/IconStack.svelte';

	import DynamicIcon from '$lib/DynamicIcon.svelte';
	import * as icons from '@mdi/js';

	const iconNames: (keyof typeof icons)[] = <(keyof typeof icons)[]>(
		Object.keys(icons).slice(0, 10000)
	);

	function randomColor(): string {
		const color = Math.floor(Math.random() * 16777215).toString(16);
		return `#${color}`;
	}
</script>

<IconStack />
<h1>Below are all included icons, rendered using the DynamicIcon component</h1>
<p>
	While this approach is flexible you should probably not use it if you know which icons you'll use
	during compilation.
</p>
<p>Every icon in the library is part of your build even if you only render 1 icon</p>
{#each iconNames as icon, i}
	<DynamicIcon name={icon} color={randomColor()} size="25" title={icon} />
{/each}
