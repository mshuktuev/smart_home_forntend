<script lang="ts">
	import { AppShell, Modal } from '@skeletonlabs/skeleton';
	import HouseProvider from '../providers/HouseProvider.svelte';
	import Side from '../components/Side.svelte';
	import RoomsProvider from '../providers/RoomsProvider.svelte';
</script>

<HouseProvider>
	<RoomsProvider>
		<AppShell>
			<svelte:fragment slot="sidebarLeft">
				<!-- Hidden below Tailwind's large breakpoint -->
				<div id="sidebar-left" class="hidden lg:block w-max">
					<Side />
				</div>
			</svelte:fragment>
		</AppShell>
		<Modal />
	</RoomsProvider>
</HouseProvider>
