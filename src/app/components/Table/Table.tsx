import { TTable } from '@/app/components/Table/Table.types'

export const Table = <T,>(props: TTable<T>) => {
	return (
		<table className='text-left text-sm text-gray-900 w-full'>
			<thead className='bg-gray-100 font-medium text-xs text-gray-700 uppercase'>
				<tr>
					{props.headers.map((header) => (
						<th
							className='px-6 py-3'
							key={header.property}
							scope='col'
						>
							{header.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{props.data.map((row, dataIndex) => {
					return (
						<tr
							className='border-b border-gray-300 bg-white'
							key={dataIndex}
						>
							{props.headers.map((header, headerIndex) => {
								const key = header.property + headerIndex
								const propertyData = row[header.property]
								return (
									<td
										className='px-6 py-3'
										key={key}
									>
										{propertyData}
									</td>
								)
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
