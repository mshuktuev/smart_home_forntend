<script lang="ts">
	import { io } from 'socket.io-client';

	const socket = io('http://localhost:1337', {
		path: '/socket.io/',
	});
	socket.on('room', (e) => {
		console.log(e);
	});
</script>

<main />

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
</style>
