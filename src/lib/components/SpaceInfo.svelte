<script lang="ts">
	import { getContext } from 'svelte';
	import type { IHouse, ISelectedDataStore, ISelectedStore, ISpaceWithRooms } from '../types/types';
	import EditIcon from './icons/EditIcon.svelte';
	import Select from './Select.svelte';
	import type { Writable } from 'svelte/store';
	import AddIcon from './icons/AddIcon.svelte';
	import RemoveIcon from './icons/RemoveIcon.svelte';

	const { selectedHouseData, selectedSpaceData } = getContext<ISelectedDataStore>('selectedData');
	const { selectedHouse, selectedSpace } = getContext<ISelectedStore>('selectedId');
	const spaces = getContext<Writable<ISpaceWithRooms[]>>('spaces');
	const houses = getContext<Writable<IHouse[]>>('houses');
</script>

<div class="flex justify-between w-full">
	<div class="flex flex-col gap-6">
		<div class="flex flex-col items-start gap-2">
			<span>Выберите область</span>
			<div class="flex gap-2">
				<Select values={$spaces} selectedValue={$selectedSpace} on:select={(e) => selectedSpace.set(e.detail)} />
				<button type="button" class="btn p-0 w-12 h-10" disabled={!$selectedSpace}><AddIcon classes="w-4 h-4" /></button>
				<button type="button" class="btn p-0 w-12 h-10" disabled={!$selectedSpace}><EditIcon classes="w-4 h-4" /></button>
				<button type="button" class="btn p-0 w-12 h-10" disabled={!$selectedSpace}><RemoveIcon classes="w-4 h-4" /></button>
			</div>
		</div>
		<div class="flex flex-col items-start gap-2">
			<span>Выберите дом</span>
			<div class="flex gap-2">
				<Select values={$houses} selectedValue={$selectedHouse} on:select={(e) => selectedHouse.set(e.detail)} />
				<button type="button" class="btn p-0 w-12 h-10" disabled={!$selectedHouse}><AddIcon classes="w-4 h-4" /></button>
				<button type="button" class="btn p-0 w-12 h-10" disabled={!$selectedHouse}><EditIcon classes="w-4 h-4" /></button>
				<button type="button" class="btn p-0 w-12 h-10" disabled={!$selectedHouse}><RemoveIcon classes="w-4 h-4" /></button>
			</div>
		</div>
	</div>
</div>
