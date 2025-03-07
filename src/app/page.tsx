'use client'

import { ChangeEvent, useState } from 'react'

import { Heading } from './components/Heading/Heading'
import { SearchForm } from './components/SearchForm/SearchForm'

import { TAdvocate } from '@/app/modules/advocates/types'
import { useAdvocates } from '@/app/modules/advocates/hooks/useAdvocates'

export default function Home() {
	const DEFAULT_SEARCH = ''

	const { filterAdvocates } = useAdvocates()
	const [search, setSearch] = useState(DEFAULT_SEARCH)

	const filteredAdvocates: Array<TAdvocate> = filterAdvocates(search)

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearch(e.target.value)

	const onSeachReset = () => setSearch(DEFAULT_SEARCH)

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
			<table>
				<thead>
					<th>First Name</th>
					<th>Last Name</th>
					<th>City</th>
					<th>Degree</th>
					<th>Specialties</th>
					<th>Years of Experience</th>
					<th>Phone Number</th>
				</thead>
				<tbody>
					{filteredAdvocates.map((advocate) => {
						return (
							<tr key={advocate.firstName + advocate.lastName}>
								<td>{advocate.firstName}</td>
								<td>{advocate.lastName}</td>
								<td>{advocate.city}</td>
								<td>{advocate.degree}</td>
								<td>
									{advocate.specialties.map((s) => (
										<div key={s}>{s}</div>
									))}
								</td>
								<td>{advocate.yearsOfExperience}</td>
								<td>{advocate.phoneNumber}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</main>
	)
}
