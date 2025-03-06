import { TAdvocateResponse } from '@/app/modules/advocates/types'

export const createAdvocateId = (advocate: TAdvocateResponse) =>
	advocate.firstName + advocate.lastName
