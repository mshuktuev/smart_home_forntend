<script lang="ts">
	import { getContext } from 'svelte'
	import SpaceInfo from './SpaceInfo.svelte'
	import RoomsList from './RoomsList.svelte'
</script>

<div class="flex bg-surface-900 w-[400px] h-screen p-6 flex-col gap-6">
	<SpaceInfo />
	<hr />
	<RoomsList />
</div>
