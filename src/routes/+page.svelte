<script lang="ts">
    import Abacus from "$lib/generated/Abacus.svelte";
	import AbjadArabic from "$lib/generated/AbjadArabic.svelte";
	import IconStack from "$lib/IconStack.svelte";

    import DynamicIcon from "$lib/DynamicIcon.svelte";
    import * as icons from '@mdi/js';

    const iconNames: (keyof typeof icons)[] = <(keyof typeof icons)[]>Object.keys(icons)
</script>
<IconStack/>
<div style="color: red">
<Abacus/>
<AbjadArabic/>
</div>
<h1>Below are all included icons, rendered using the DynamicIcon component</h1>
{#each iconNames as icon}
    <DynamicIcon name={icon} />

{/each}

<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
