import { createFileRoute } from '@tanstack/react-router'
import Store from '@/features/store'

export const Route = createFileRoute('/_authenticated/store/')({
  component: Store,
})
