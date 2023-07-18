import { writable } from 'svelte/store';

const create = () => {
	const selectedSpace = writable<number | null>(Number(localStorage.getItem('selectedSpace')) ?? null);
	const selectedHouse = writable<number | null>(Number(localStorage.getItem('selectedHouse')) ?? null);
	const { set: setSpaces } = selectedSpace;
	const { set: setHouses } = selectedHouse;

	const selectSpace = (value) => {
		if (value !== null) {
			value = typeof value !== 'number' ? Number(value) : value;
			localStorage.setItem('selectedSpace', JSON.stringify(value));
		}
		setSpaces(value);
	};

	const selectHouse = (value) => {
		if (value !== null) {
			value = typeof value !== 'number' ? Number(value) : value;
			localStorage.setItem('selectedHouse', JSON.stringify(value));
		}
		setHouses(value);
	};

	return {
		selectedSpace: {
			...selectedSpace,
			set: selectSpace,
		},
		selectedHouse: {
			...selectedHouse,
			set: selectHouse,
		},
	};
};

export default create;
