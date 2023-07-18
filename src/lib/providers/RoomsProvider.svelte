<script lang="ts">
	import { getContext } from 'svelte';
	import type { ISelectedStore } from '../types/types';
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';
	import api from '../api';
	import { writable } from 'svelte/store';

	const { selectedHouse, selectedSpace } = getContext<ISelectedStore>('selectedId');

	const client = useQueryClient();
	const rooms = writable([]);

	const loadRooms = async (selectedHouse) => {
		console.log(selectedHouse);

		if (selectedHouse) {
			const { data: result } = await api.get(`/house/withRooms/${selectedHouse}`);

			if (result.success && result.data?.rooms) {
				rooms.set(result.data.rooms);
			}
		}
	};

	$: console.log($rooms);

	$: loadRooms($selectedHouse);
</script>

<slot />
