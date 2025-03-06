'use client'

import { ChangeEvent, useState } from 'react'

import { TAdvocate } from '@/app/modules/advocates/types'
import { useAdvocates } from '@/app/modules/advocates/hooks/useAdvocates'

export default function Home() {
	const DEFAULT_SEARCH = ''

	const { filterAdvocates } = useAdvocates()
	const [search, setSearch] = useState(DEFAULT_SEARCH)

	const filteredAdvocates: Array<TAdvocate> = filterAdvocates(search)

	const onChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearch(e.target.value)

	const onReset = () => setSearch(DEFAULT_SEARCH)

	return (
		<main style={{ margin: '24px' }}>
			<h1>Solace Advocates</h1>
			<br />
			<br />
			<div>
				<p>Search</p>
				<p>
					Searching for: <span id='search-term'></span>
				</p>
				<input
					style={{ border: '1px solid black' }}
					onChange={onChange}
					value={search}
				/>
				<button onClick={onReset}>Reset Search</button>
			</div>
			<br />
			<br />
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
