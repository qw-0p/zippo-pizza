import { Product } from '@prisma/client'
import axios from './instance'
import { ApiRoutes } from './constants'

export const search = async (query: string): Promise<Product[]> => {
	return (
		await axios.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
			params: { query },
		})
	).data
}
