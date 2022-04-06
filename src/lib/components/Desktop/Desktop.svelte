<script lang="ts" context="module">
	import Splash from '../Splash/Splash.svelte';
	import Duplicates from '../Duplicates/Duplicates.svelte';
	import Dock from '../Dock/Dock.svelte';
	import Menubar from '../Menubar/Menubar.svelte';
	import Context from '../Context/Context.svelte';
	import { loadDesktop, manageFullScreen } from '../../utils/desktop';
</script>

<svelte:window on:load={loadDesktop} on:dblclick={manageFullScreen} />
<Splash />
<main>
	<Duplicates />
	<Menubar />
	<Dock />
	<Context />
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
