<script lang="ts">
	import { interpolate } from 'popmotion';
	import type { AppID } from './../../../types';
	import { spring } from 'svelte/motion';
	import ButtonBase from './ButtonBase.svelte';
	import { onMount } from 'svelte';

	export let appID: AppID;
	export let mouseX: number | null;

	let el: HTMLImageElement;
	let screenWidth: number | null = 1200;

	onMount(() => {
		screenWidth = window.innerWidth;
	});

	const baseWidth = 57.6;
	const distanceLimit = baseWidth * 6;
	const beyondTheDistanceLimit = distanceLimit + 1;
	const distanceInput = [
		-distanceLimit,
		-distanceLimit / 1.25,
		-distanceLimit / 2,
		0,
		distanceLimit / 2,
		distanceLimit / 1.25,
		distanceLimit
	];
	const widthOutput = [
		baseWidth,
		baseWidth * 1.1,
		baseWidth * 1.318,
		baseWidth * 2.318,
		baseWidth * 1.318,
		baseWidth * 1.1,
		baseWidth
	];

	let distance = beyondTheDistanceLimit;

	const widthPX = spring(baseWidth, {
		damping: 0.38,
		stiffness: 0.1
	});

	$: $widthPX = interpolate(distanceInput, widthOutput)(distance);

	let width: string;
	$: width = `${$widthPX / 13}rem`;

	let raf: number;

	function animate(mouseX: number) {
		if (el && mouseX !== null) {
			const rect = el.getBoundingClientRect();

			const imgCenterX = rect.left + rect.width / 2;

			const distanceDelta = mouseX - imgCenterX;
			distance = distanceDelta;
			return;
		}

		distance = beyondTheDistanceLimit;
	}

	$: raf = requestAnimationFrame(() => animate(mouseX));
</script>

<svelte:window
	on:resize={() => {
		screenWidth = window.innerWidth;
	}}
/>

<section>
	{#if screenWidth >= 700}
		<ButtonBase class="dock-button" name={appID}>
			<img
				bind:this={el}
				class="app-icon"
				src="/icons/{appID}.png"
				alt={appID}
				style="width: {width};"
			/>
		</ButtonBase>
	{:else}
		<ButtonBase class="dock-button" name={appID}>
			<img bind:this={el} class="app-icon" src="/icons/{appID}.png" alt={appID} />
		</ButtonBase>
	{/if}
</section>

<style lang="scss">
	.app-icon {
		width: 70px;
		height: auto;
	}
</style>
