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
		<span>{appID.toString().toUpperCase()[0] + appID.toString().substring(1)}</span>
	</button>
{:else}
	<a href="https://github.com/NSVEGUR/carnetOS-web" target="_blank">
		<button {...$$props}>
			<slot />
			<span>{appID.toString().toUpperCase()[0] + appID.toString().substring(1)}</span>
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
			top: 25px;
			position: absolute;
			display: none;
			font-size: 0.8rem;
			width: 120px;
			background-color: var(--system-text-color);
			color: var(--system-text-color-op);
			text-align: center;
			border-radius: 6px;
			padding: 5px 0;
			position: absolute;
			z-index: 1;
			top: -20%;
			left: 50%;
			margin-left: -60px;
			&::after {
				content: '';
				position: absolute;
				top: 100%;
				left: 50%;
				margin-left: -5px;
				border-width: 5px;
				border-style: solid;
				border-color: var(--system-text-color) transparent transparent transparent;
			}
		}
		&:hover span {
			display: block;
		}
	}
</style>
