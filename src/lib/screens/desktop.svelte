<script lang="ts" context="module">
	import Splash from './../components/Splash/Splash.svelte';
	import Duplicates from './../components/Duplicates/Duplicates.svelte';
	import Dock from './../components/Dock/Dock.svelte';
	import Menubar from './../components/Menubar/Menubar.svelte';
	import Context from './../components/Context/Context.svelte';
	import { loadDesktop, manageFullScreen } from './../utils/desktop';
	import Apps from './../apps/apps.svelte';
</script>

<svelte:window on:load={loadDesktop} on:dblclick={manageFullScreen} />
<Splash />
<main>
	<Duplicates />
	<Menubar />
	<Dock />
	<Context />
	<Apps />
</main>

<style lang="scss">
	main {
		height: 100vh;
		width: 100vw;
		display: none;
		background: var(--desktop-wallpaper) center center no-repeat;
		background-size: cover;
		transition: background 0.3s ease;
		overflow: hidden;
	}
</style>
