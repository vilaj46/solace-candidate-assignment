export type TTableHeader = {
	label: string
	property: string
}

export type TTable<T> = {
	data: Array<Record<string, any>>
	headers: Array<TTableHeader>
}
