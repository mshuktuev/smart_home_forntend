<script lang="ts">
	import Input from './ui/Input.svelte'

	export let title: string = ''
	export let buttonText: string = ''
	export let variant: 'create' | 'update' = 'create'
	export let onSubmit = () => {}
	export let initialData: any = {}
	export let typeData: {
		[key: string]: {
			placeholder: string
		}
	} = {}

	let formData = {}

	const handleSubmit = (e: Event) => {
		e.preventDefault()
		onSubmit()
	}
</script>

<form class="card flex flex-col gap-6 min-w-[350px]" on:submit={handleSubmit}>
	<h2 class="text-2xl self-start">{title}</h2>
	{#each Object.entries(typeData) as [key, value]}
		<div class="flex gap-6">
			<Input
				bind:value={formData[key]}
				placeholder={value.placeholder}
				defaultValue={initialData?.[key]}
			/>
		</div>
	{/each}
	<button class="btn variant-filled self-end">
		{buttonText}
	</button>
</form>
