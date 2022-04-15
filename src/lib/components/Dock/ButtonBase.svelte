<script lang="ts">
	import type { AppID } from 'src/types';
	import { App } from '../../utils/app';
	import { onMount } from 'svelte';
	export let appID: AppID;
	let app;
	const appNode: string = 'app-' + appID.toString();
	onMount(() => {
		app = new App('hey', {
			mount: document.getElementById(appNode)
		});
	});
</script>

<button
	{...$$props}
	on:click={() => {
		app.open(appID);
	}}
>
	<slot />
	<span>{appID}</span>
</button>

<style lang="scss">
	button {
		color: inherit;
		text-decoration: none;
		vertical-align: middle;

		border: 0;
		border-radius: 0;

		outline: 0;

		margin: 0;
		padding: 0;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		position: relative;

		user-select: none;

		appearance: none;

		background-color: transparent;

		-webkit-tap-highlight-color: transparent;

		&:not(:disabled) {
			cursor: pointer;
		}
		span {
			position: absolute;
			top: -1.5rem;
			color: var(--system-text-color);
			font-weight: 500;
			background: var(--system-transparent-color-primary);
			backdrop-filter: blur(5px);
			box-shadow: var(--shadow-effect);

			padding: 0.2rem 0.5rem;

			border-radius: 0.3rem;
			display: none;
			transition: all 0.3s ease;

			white-space: nowrap;
		}
		&:hover span {
			display: block;
		}
	}
</style>
