import { createFileRoute } from '@tanstack/react-router'
import Habits from '@/features/habits'

export const Route = createFileRoute('/_authenticated/habits/')({
  component: Habits,
})
