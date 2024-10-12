<script lang="ts">
	import '../app.postcss';
	import {
		AppBar,
		AppShell,
		Avatar,
		LightSwitch,
		RadioGroup,
		RadioItem,
		Toast,
		autoModeWatcher,
		initializeStores
	} from '@skeletonlabs/skeleton';
	import PageTransition from "$lib/components/transition.svelte"
import { page } from "$app/stores"
import { afterNavigate, goto } from "$app/navigation"

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	function handleNavigation(event: Event) {
		const target = event.target as HTMLInputElement
		if (target.value) {
			goto(target.value)
		}
	}

$: route = $page.url.pathname
export let data
</script>

<svelte:head>
	{@html "<script>(" + autoModeWatcher.toString() + ")();</script>"}
	<meta name="google-site-verification" content="CseTqMt48Lh5608yesp0xuVuqTa6Y_Q1yWUe6rC5gSU" />
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<nav class="container mx-auto my-8 flex justify-center items-center">
			<!-- <Avatar -->
			<!-- 	class="ml-2" -->
			<!-- 	src="/me-anime.webp" -->
			<!-- 	width="w-12" -->
			<!-- 	rounded="rounded-full" -->
			<!-- 	alt="Jimmy's Profile Pic" -->
			<!-- /> -->
			<RadioGroup
				active="variant-filled-primary"
				hover="hover:variant-soft-primary"
				class="items-center"
			>
				<RadioItem on:click={handleNavigation} name="route" bind:group={route} value="/">
					Home
				</RadioItem>
				<RadioItem on:change={handleNavigation} name="route" bind:group={route} value="/portfolio">
					Portfolio
				</RadioItem>
			</RadioGroup>
			<!-- <LightSwitch /> -->
		</nav>
	</svelte:fragment>
	<PageTransition url={data.url}>
		<main class="container mx-auto h-full">
			<slot />
		</main>
	</PageTransition>

	<svelte:fragment slot="pageFooter">
		<AppBar gridColumns="grid-cols-1" slotDefault="place-self-center" slotTrail="place-content-end">
			<!-- <div class="flex flex-col gap-4 items-center"> -->
			<!-- <MyLinks /> -->
			<!-- <Subscribe /> -->
			<!-- </div> -->
			<svelte:fragment slot="headline">
				<div class="text-center">&copy; Copyright 2024. All rights reserved.</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>
<!-- <slot /> -->
