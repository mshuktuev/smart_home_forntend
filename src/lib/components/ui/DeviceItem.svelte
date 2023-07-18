<script lang="ts">
	import type { IDevice } from '../../types/types'

	export let data: IDevice
</script>

<div class="flex flex-col bg-surface-700 relative rounded-lg py-2 px-4">
	<div class="flex gap-2 flex-col items-start">
		<span>{data.name}</span>
		<span class="text-gray-400">{data.type}</span>
	</div>
</div>
