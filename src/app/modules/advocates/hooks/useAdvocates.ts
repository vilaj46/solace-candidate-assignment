import { useEffect, useRef, useState } from 'react'

import { createAdvocateId } from '@/app/modules/advocates/utils'
import { getAdvocates } from '@/app/modules/advocates/services/advocatesService'
import { TAdvocate } from '@/app/modules/advocates/types'

type TAdvocateHookState = {
	advocates: Array<TAdvocate>
	isError: boolean
	isLoading: boolean
}

export const useAdvocates = () => {
	const isMounted = useRef(false)

	const [state, setState] = useState<TAdvocateHookState>({
		advocates: [],
		isError: false,
		isLoading: true,
	})

	useEffect(() => {
		if (isMounted.current) {
			return
		}

		getAdvocates()
			.then((response) => {
				setState((state) => ({
					...state,
					advocates: response.data.map((advocate) => ({
						...advocate,
						id: createAdvocateId(advocate),
					})),
					isError: false,
					isLoading: false,
				}))
			})
			.catch(() => {
				setState((state) => ({
					...state,
					isError: true,
					isLoading: false,
				}))
			})
		isMounted.current = true
	}, [])

	const filterAdvocates = (filter?: string) => {
		const search = filter?.trim().toLowerCase()

		if (!search) {
			return state.advocates
		}

		let keys: Array<keyof TAdvocate> = []

		return state.advocates.filter((advocate) => {
			if (!keys.length) {
				keys = Object.keys(advocate) as Array<keyof TAdvocate>
			}

			return keys.some((key) => {
				return advocate[key].toString().toLowerCase().includes(search)
			})
		})
	}

	return {
		...state,
		filterAdvocates,
	}
}
