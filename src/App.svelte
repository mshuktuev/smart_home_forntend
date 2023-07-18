<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import './app.postcss';
	import './main.css';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { Router } from 'svelte-navigator';
	import AuthProvider from './lib/providers/AuthProvider.svelte';
	import MainRouter from './lib/routes/MainRouter.svelte';

	const queryClient = new QueryClient();

	import { io } from 'socket.io-client';

	const socket = io('http://localhost:1337', {
		path: '/socket.io/',
	});
	socket.on('room', (e) => {
		console.log(e);
	});
</script>

<Router>
	<QueryClientProvider client={queryClient}>
		<AuthProvider>
			<MainRouter />
		</AuthProvider>
	</QueryClientProvider>
</Router>
