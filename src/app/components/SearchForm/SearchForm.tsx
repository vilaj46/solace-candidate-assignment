import { MouseEvent, useRef } from 'react'

import { TSearchForm } from '@/app/components/SearchForm/SearchForm.types'

const SearchIcon = () => (
	<svg
		fill='#000000'
		height='24px'
		width='24px'
		version='1.1'
		id='Capa_1'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 488.4 488.4'
	>
		<g
			id='SVGRepo_bgCarrier'
			stroke-width='0'
		></g>
		<g
			id='SVGRepo_tracerCarrier'
			stroke-linecap='round'
			stroke-linejoin='round'
		></g>
		<g id='SVGRepo_iconCarrier'>
			{' '}
			<g>
				{' '}
				<g>
					{' '}
					<path d='M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z'></path>{' '}
				</g>{' '}
			</g>{' '}
		</g>
	</svg>
)

export const SearchForm = (props: TSearchForm) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		props.onButtonClick()
	}

	const onSearchIconClick = () => inputRef.current?.focus()

	return (
		<form className='max-w-md mx-auto relative'>
			<label
				className='font-medium mb-2 sr-only text-sm text-gray-900'
				htmlFor={props.htmlFor}
			>
				{props.label}
			</label>
			<div
				className='absolute left-3 top-[50%] translate-y-[-50%]'
				onClick={onSearchIconClick}
			>
				<SearchIcon />
			</div>
			<input
				id={props.id}
				className='bg-gray-100 border border-gray-300 p-4 pl-[48px] pr-[96px] rounded text-sm w-full'
				onChange={props.onChange}
				placeholder={props.placeholder}
				ref={inputRef}
				type='search'
				value={props.value ?? ''}
			/>
			<button
				className='absolute bg-blue-700 hover:bg-blue-800 font-medium px-4 py-2 right-2 rounded text-white top-[50%] translate-y-[-50%] text-sm'
				onClick={onButtonClick}
				type='submit'
			>
				{props.buttonLabel}
			</button>
		</form>
	)
}
