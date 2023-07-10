<script lang="ts">
    import Abacus from "$lib/generated/Abacus.svelte";
	import AbjadArabic from "$lib/generated/AbjadArabic.svelte";
	import IconStack from "$lib/IconStack.svelte";

    import DynamicIcon from "$lib/DynamicIcon.svelte";
    import * as icons from '@mdi/js';

    const iconNames: (keyof typeof icons)[] = <(keyof typeof icons)[]>Object.keys(icons).slice(0, 10000)

    function randomColor():string {
        const color = Math.floor(Math.random()*16777215).toString(16);
        return `#${color}`;
    }
</script>
<IconStack/>
<h1>Below are all included icons, rendered using the DynamicIcon component</h1>
{#each iconNames as icon}
    <DynamicIcon name={icon} color={randomColor()} size=25 title={icon}/>

{/each}