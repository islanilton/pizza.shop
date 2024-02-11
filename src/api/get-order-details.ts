import { api } from '@/lib/axios'

interface GetOrderDetailsParams {
  orderId: string
}

interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({
  orderId,
}: GetOrderDetailsParams): Promise<GetOrderDetailsResponse> {
  const response = await api.get(`/orders/${orderId}`)
  return response.data
}
