'use client'

import { ChangeEvent, useState } from 'react'

import { Heading } from '@/app/components/Heading/Heading'
import { SearchForm } from '@/app/components/SearchForm/SearchForm'
import { Table } from '@/app/components/Table/Table'

import { TAdvocate } from '@/app/modules/advocates/types'
import { TTableHeader } from '@/app/components/Table/Table.types'
import { useAdvocates } from '@/app/modules/advocates/hooks/useAdvocates'

export default function Home() {
	const DEFAULT_SEARCH = ''

	const { filterAdvocates } = useAdvocates()
	const [search, setSearch] = useState(DEFAULT_SEARCH)

	const filteredAdvocates: Array<TAdvocate> = filterAdvocates(search)

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearch(e.target.value)

	const onSeachReset = () => setSearch(DEFAULT_SEARCH)

	const tableHeaders: Array<TTableHeader> = [
		{
			label: 'First Name',
			property: 'firstName',
		},
		{
			label: 'Last Name',
			property: 'lastName',
		},
		{
			label: 'City',
			property: 'city',
		},
		{
			label: 'Degree',
			property: 'degree',
		},
		{
			label: 'Specialties',
			property: 'specialties',
		},
		{
			label: 'Years of Experience',
			property: 'yearsOfExperience',
		},
		{
			label: 'Phone Number',
			property: 'phoneNumber',
		},
	]

	return (
		<main className='m-6'>
			<Heading
				className='mb-10'
				TagType='h1'
			>
				Solace Advocates
			</Heading>
			<div className='mb-10'>
				<SearchForm
					buttonLabel='Reset'
					htmlFor='advocate-search'
					id='advocate-search'
					label='Advocate Search'
					onButtonClick={onSeachReset}
					onChange={onSearchChange}
					placeholder='Start typing...'
					value={search}
				/>
			</div>
			<Table
				data={filteredAdvocates}
				headers={tableHeaders}
			/>
		</main>
	)
}
