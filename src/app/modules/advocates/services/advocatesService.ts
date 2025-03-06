import { TAdvocateResponse } from '@/app/modules/advocates/types/api/TAdvocateResponse'

export const getAdvocates = (): Promise<{
	data: Array<TAdvocateResponse>
}> =>
	fetch('/api/advocates').then((response) =>
		response.json().then((jsonResponse) => {
			return jsonResponse
		})
	)
