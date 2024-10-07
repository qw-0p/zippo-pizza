import { Ingredient } from '@prisma/client'
import axios from './instance'
import { ApiRoutes } from './constants'

export const getAll = async (): Promise<Ingredient[]> => {
	return (await axios.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}
