<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { ctx } from "../ctx.js";
	import type { PortalProps } from "../types.js";

	type $$Props = PortalProps;
	export let asChild = false;
	const {
		elements: { portalled },
		states: { open }
	} = ctx.get();
</script>

{#if asChild}
	{@const builder = $portalled}
	<slot {builder} />
{:else}
	{@const builder = $portalled}
	<div use:melt={builder} {...$$restProps}>
		<slot {builder} />
	</div>
{/if}
