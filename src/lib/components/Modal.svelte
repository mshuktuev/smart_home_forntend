<!-- <script lang="ts">
	import { getContext } from 'svelte';
	import Select from './Select.svelte';
	import type { IHouse, ISelectedStore, ISpaceWithRooms } from '../types/types';
	import type { Writable } from 'svelte/store';

	const spaces = getContext<Writable<ISpaceWithRooms[]>>('spaces');
	const houses = getContext<Writable<IHouse[]>>('houses');
	const { selectedHouse, selectedSpace } = getContext<ISelectedStore>('selectedId');
	const { closeModal } = getContext('modal') as any;
</script>

<div class="card flex flex-col gap-6">
	<h2 class="text-2xl self-start">Настройка области</h2>
	<div class="flex gap-6">
		<div class="flex flex-col w-52 items-start gap-2">
			<span>Выберите область</span>
			<Select values={$spaces} on:select={(e) => selectedSpace.set(e.detail)} />
		</div>
		<div class="flex flex-col w-52 items-start gap-2">
			<span>Выберите дом</span>
			<Select values={$houses} on:select={(e) => selectedHouse.set(e.detail)} />
		</div>
	</div>
	<button type="button" on:click={closeModal} class="btn variant-filled self-end">Сохранить</button>
</div> -->
