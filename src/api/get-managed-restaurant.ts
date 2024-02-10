import { api } from '@/lib/axios'

export interface GetManagedRestaurantRequest {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurantRequest(): Promise<GetManagedRestaurantRequest> {
  const response = await api.get('/managed-restaurant')
  return response.data
}
