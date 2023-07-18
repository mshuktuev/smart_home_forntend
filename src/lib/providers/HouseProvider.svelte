<script lang="ts">
	import { writable } from 'svelte/store';
	import api from '../api';
	import type { IHouse, ISpaceWithRooms } from '../types/types';
	import { onMount, setContext } from 'svelte';
	import { modalStore, type ModalSettings, type ModalComponent } from '@skeletonlabs/skeleton';
	import Modal from '../components/Modal.svelte';
	import createStores from './selectStores';
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';

	const modalComponent: ModalComponent = {
		ref: Modal,
	};

	const modalSettings: ModalSettings = {
		type: 'component',
		component: modalComponent,
	};

	const spaces = writable<ISpaceWithRooms[]>([]);
	const selectedSpaceData = writable<ISpaceWithRooms | null>(null);
	const houses = writable<IHouse[]>([]);
	const selectedHouseData = writable<IHouse | null>(null);
	const { selectedHouse, selectedSpace } = createStores();
	const client = useQueryClient();

	const loadSpaces = async () => {
		const { data: result } = await api.get('/space');
		if (result.success) {
			spaces.set(result.data);
		}
		return result;
	};

	const spacesQuery = createQuery({
		queryKey: ['spaces'],
		queryFn: loadSpaces,
	});

	const changeHouse = () => {
		if ($selectedSpace && $selectedSpaceData) {
			$houses = $selectedSpaceData.houses;
		}
	};

	const validateSpaceAndHouses = (spaces) => {
		if (!spaces.find((space) => space.id === $selectedSpace)) {
			$selectedSpace = null;
			$selectedHouse = null;
			return;
		}
		if (spaces.find((space) => space.id === $selectedSpace)) {
			const houses = spaces.find((space) => space.id === $selectedSpace).houses;
			if (!houses.find((house) => house.id === $selectedHouse)) {
				$selectedHouse = null;
			}
		}
	};

	// const openModal = () => {
	// 	modalStore.trigger(modalSettings);
	// };
	const closeModal = () => {
		modalStore.close();
	};

	$: selectedSpaceData.set($spaces.find((space) => space.id === $selectedSpace));
	$: changeHouse(), $selectedSpaceData;
	$: selectedHouseData.set($houses.find((house) => house.id === $selectedHouse)), $selectedSpaceData;

	$: if ($spacesQuery.isFetched) {
		validateSpaceAndHouses($spaces);
	}

	setContext('spaces', spaces);
	setContext('houses', houses);
	setContext('selectedId', {
		selectedHouse,
		selectedSpace,
	});
	setContext('selectedData', {
		selectedHouseData,
		selectedSpaceData,
	});
	// setContext('modal', { openModal, closeModal });

	onMount(async () => {
		await loadSpaces();
		// validateSpaceAndHouses($spaces);
	});
</script>

<slot />
