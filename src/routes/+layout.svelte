<script lang="ts">
	import { dev } from "$app/environment";
	import { SidebarNav, SiteHeader, TailwindIndicator } from "@/components";
	import { setInitialClassState } from "@/components/light-switch/light-switch";
	import { navigation } from "@/config";
	import "@/styles/app.postcss";
</script>

<svelte:head>
	<!-- This causes the new eslint-plugin-svelte: https://github.com/sveltejs/eslint-plugin-svelte/issues/492 -->
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<SiteHeader />
<main class="min-h-[calc(100vh-64px)]">
	<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
		<div class="grid lg:grid-cols-10 lg:gap-10">
			<div class="lg:col-span-2">
				<SidebarNav items={navigation.sidebar} />
			</div>
			<div class="lg:col-span-8">
				<div class="grid lg:grid-cols-10 lg:gap-8">
					<div class="lg:col-span-8">
						<slot />
					</div>
					<div class="lg:col-span-2 order-first lg:order-last" />
				</div>
			</div>
		</div>
	</div>
</main>

{#if dev}
	<TailwindIndicator />
{/if}
