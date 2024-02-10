import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card className="rounded-md">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-semibold tracking-tighter">20</span>
        <p className="text-xs text-muted-foreground">
          <span className="font-bold text-emerald-500 dark:text-emerald-400">
            - 7%
          </span>{' '}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
