<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let values: { name: string; id: number }[];
	export let selectedValue: number;

	const dispatch = createEventDispatcher();

	const handleSelect = (id) => {
		dispatch('select', id);
	};
</script>

<select class="select pr-0" on:change={(e) => handleSelect(e.currentTarget.value)}>
	<option disabled selected value> -- select an option -- </option>

	{#each values as value}
		<option value={value.id} selected={selectedValue === value.id}>{value.name}</option>
	{/each}
</select>
