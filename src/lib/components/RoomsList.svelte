<script lang="ts">
	import { mockDevice } from '../providers/mockData'
	import DeviceItem from './ui/DeviceItem.svelte'
</script>

<div class="grid grid-cols-2 gap-2">
	<DeviceItem data={mockDevice} />
</div>
