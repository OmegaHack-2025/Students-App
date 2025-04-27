import { createFileRoute } from '@tanstack/react-router'
import CustomTutor from '@/features/custom-tutor'

export const Route = createFileRoute('/_authenticated/')({
  component: CustomTutor,
})
