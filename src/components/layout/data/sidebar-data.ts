import {
  IconCalendar,
  IconChecklist,
  IconLayoutDashboard,
  IconPackages,
} from '@tabler/icons-react'
import {
  AudioWaveform,
  GalleryVerticalEnd,
  GraduationCap,
  HeartPulse,
  House,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'MindBreeze',
      logo: GraduationCap,
      plan: '',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Inicio',
          url: '/',
          icon: House,
        },
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Hábitos',
          url: '/habits',
          icon: HeartPulse,
        },
        {
          title: 'Felicitaciones',
          url: '/apps',
          icon: IconPackages,
        },
        {
          title: 'Events',
          url: '/events',
          icon: IconCalendar,
        },
        {
          title: 'Tasks',
          url: '/tasks',
          icon: IconChecklist,
        },
      ],
    },
  ],
}
