<script lang="ts">
	import { writable } from 'svelte/store'
	import type { IModalSettings, IModalShowParams } from '../../types/types'
	import { setContext } from 'svelte'
	import {
		modalStore,
		type ModalSettings,
		type ModalComponent,
	} from '@skeletonlabs/skeleton'

	import Modal from '../../components/Modal.svelte'
	import { variantsValues, typesValues, typesTranslate } from './modalTypes'

	const submit = () => {
		console.log('submit')
	}

	const show = ({
		variant = null,
		type = null,
		initialData,
	}: IModalShowParams) => {
		if (!variant || !type) {
			return
		}
		const [variantData, typeData] = [variantsValues[variant], typesValues[type]]
		const typesTranslation = typesTranslate[type]
		const modalComponent: ModalComponent = {
			ref: Modal,
			props: {
				typeData,
				variant,
				initialData,
				title: `${variantData.title} ${typesTranslation}`,
				buttonText: variantData.buttonText,
				onSubmit: submit,
			},
		}

		const modalSettings: ModalSettings = {
			type: 'component',
			component: modalComponent,
		}
		modalStore.trigger(modalSettings)
	}

	const modalConfig = writable<IModalSettings>({
		show: show,
		close: () => {
			modalStore.close()
		},
	})

	setContext('modalConfig', modalConfig)
</script>

<slot />
