<script lang="ts">
	import { AppShell, Modal } from '@skeletonlabs/skeleton'
	import HouseProvider from '../providers/HouseProvider/HouseProvider.svelte'
	import Side from '../components/Side.svelte'
	import RoomsProvider from '../providers/RoomsProvider.svelte'
	import ModalProvider from '../providers/ModalProvider/ModalProvider.svelte'
</script>

<HouseProvider>
	<RoomsProvider>
		<ModalProvider>
			<AppShell>
				<svelte:fragment slot="sidebarLeft">
					<!-- Hidden below Tailwind's large breakpoint -->
					<div id="sidebar-left" class="block w-max">
						<Side />
					</div>
				</svelte:fragment>
			</AppShell>
			<Modal />
		</ModalProvider>
	</RoomsProvider>
</HouseProvider>
