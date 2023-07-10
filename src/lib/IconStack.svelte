<script lang="ts" context="module">
    import { writable } from "svelte/store"
	let count = 0;

    const icons: Record<string, string> = {};
    const reactiveIcons = writable<Record<string, string>>({});

    export function registerIcon(name: string, path:string) {
        icons[name] = path;
        reactiveIcons.set(icons);
        return count == 1;
    }
</script>
<script lang="ts">
    count++;
</script>
<div style="display: none" class="iconStack">
    <svg>
        <defs>
            {#each Object.entries($reactiveIcons) as [name, path]}
                <symbol id="{name}" viewBox="0 0 24 24">
                    <path d="{path}"/>
                </symbol>
            {/each}
        </defs>
    </svg>
</div>
