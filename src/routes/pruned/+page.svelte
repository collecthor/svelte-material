<script lang="ts">
    import Abacus from "$lib/generated/Abacus.svelte";
	import AbjadArabic from "$lib/generated/AbjadArabic.svelte";
	import IconStack from "$lib/IconStack.svelte";
	import { onMount, SvelteComponent } from "svelte";

    function randomColor():string {
        const color = Math.floor(Math.random()*16777215).toString(16);
        return `#${color}`;
    }

    let loadedIcons: SvelteComponent[] = [];

    let components: Record<string, () => Promise<{ default: SvelteComponent}>> = {};

    async function regenerate() {
        console.log("Regenerating");
        const icons = Object.values(components);
        const chosenIcons: Promise<{ default: SvelteComponent }>[] = [];
        let count = 0;
        while(count < 10) {
            chosenIcons.push(icons[Math.floor(Math.random() * icons.length)]());
            count++;
        }


        loadedIcons = (await Promise.all(chosenIcons)).map((module) => module.default);
    }
    onMount(async () => {


        components = await import.meta.glob<{ default: SvelteComponent }>('$lib/generated/*.svelte');
        regenerate();
    });


</script>
<IconStack/>
<h1>Below are 10 random icons, rendered using their specific (generated) components</h1>
<h2>It loads quite slowly because it is iterating all files in the onMount; however they are not actually sent to the browser.</h2>
{#each loadedIcons as icon}
<svelte:component this={icon} />
{/each}
<button on:click={regenerate}>Pick different icons</button>