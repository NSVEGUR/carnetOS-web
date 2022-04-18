<script lang="ts">
	import type { AppID } from 'src/types';
	import { Apps } from '../../utils/app/apps';
	export let appID: AppID;
	function openApp(e: any) {
		const appID = e.target.closest('button').dataset.appid;
		$Apps[appID].open();
	}
</script>

{#if appID != 'source'}
	<button
		{...$$props}
		on:click={openApp}
		data-appid={appID.toString().toUpperCase()[0] + appID.toString().substring(1)}
	>
		<slot />
		<span>{appID}</span>
	</button>
{:else}
	<a href="https://github.com/NSVEGUR/carnetOS-web" target="_blank">
		<button {...$$props}>
			<slot />
			<span>{appID}</span>
		</button>
	</a>
{/if}

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
			background: var(--system-primary-color);

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
