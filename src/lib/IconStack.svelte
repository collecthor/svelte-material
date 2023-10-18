<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	const icons: Record<string, string> = {};
	const reactiveIcons = writable<Record<string, string>>({});

	export function registerIcon(name: string, path: string): void {
		icons[name] = path;
		reactiveIcons.set(icons);
	}
</script>

<script lang="ts">
</script>

<div style="display: none" class="iconStack">
	<svg>
		<defs>
			{#each Object.entries($reactiveIcons) as [name, path]}
				<symbol id={name} viewBox="0 0 24 24">
					<path d={path} />
				</symbol>
			{/each}
		</defs>
	</svg>
</div>
