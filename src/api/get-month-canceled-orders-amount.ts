import { api } from '@/lib/axios'

interface GetMonthOrdersCanceledAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<GetMonthOrdersCanceledAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )
  return response.data
}
