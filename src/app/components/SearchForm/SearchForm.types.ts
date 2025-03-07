import { ChangeEvent } from 'react'

export type TSearchForm = {
	buttonLabel: string
	htmlFor: string
	id: string
	label: string
	onButtonClick: () => void
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	placeholder: string
	value?: string
}
