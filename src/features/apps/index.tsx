import { useState } from 'react'
import {
  IconAdjustmentsHorizontal,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
  IconCalendar,
  IconHeart,
  IconHeartFilled,
  IconSend,
  IconFilter,
} from '@tabler/icons-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { congratulations } from './data/apps'

const filterText = new Map<string, string>([
  ['all', 'Todos los departamentos'],
  ['matematicas', 'Matemáticas'],
  ['ingenieria', 'Ingeniería'],
  ['ciencias', 'Ciencias'],
  ['artes', 'Artes y Diseño'],
  ['sociales', 'Ciencias Sociales'],
])

// Función para formatear fechas
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('es-ES', options)
}

// Función para obtener iniciales de un nombre
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

// Función segura para extraer el color a partir del ícono
const getColorFromIcon = (icon: React.ReactElement | null) => {
  try {
    if (!icon || !icon.props) {
      return 'border-primary' // Valor por defecto
    }

    const props = icon.props as { className?: string }
    if (!props.className || typeof props.className !== 'string') {
      return 'border-primary'
    }

    const classes = props.className.split(' ')
    for (const cls of classes) {
      if (cls.startsWith('text-')) {
        return cls.replace('text-', 'border-')
      }
    }

    return 'border-primary'
  } catch {
    // Si ocurre algún error, retornamos un valor por defecto
    return 'border-primary'
  }
}

export default function CongratulationsWall() {
  const [sort, setSort] = useState('descending')
  const [department, setDepartment] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [newRecipient, setNewRecipient] = useState('')
  const [newAchievement, setNewAchievement] = useState('')

  // Filtrar y ordenar felicitaciones
  const filteredCongratulations = congratulations
    .sort((a, b) => {
      // Ordenar por fecha
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sort === 'ascending' ? dateA - dateB : dateB - dateA
    })
    .filter((congrat) => {
      // Filtrar por departamento
      if (department === 'all') return true
      return congrat.department.toLowerCase().includes(department.toLowerCase())
    })
    .filter((congrat) => {
      // Buscar en nombre del estudiante, logro o mensaje
      const searchLower = searchTerm.toLowerCase()
      return (
        congrat.studentName.toLowerCase().includes(searchLower) ||
        congrat.achievement.toLowerCase().includes(searchLower) ||
        congrat.message.toLowerCase().includes(searchLower) ||
        congrat.senderName.toLowerCase().includes(searchLower)
      )
    })

  const handleLike = (id: number) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter((postId) => postId !== id))
    } else {
      setLikedPosts([...likedPosts, id])
    }
  }

  const handleSubmitMessage = () => {
    // Aquí iría la lógica para enviar el mensaje al backend
    alert('¡Felicitación enviada con éxito!')
    setNewMessage('')
    setNewRecipient('')
    setNewAchievement('')
  }

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <div className='ml-auto flex items-center gap-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Content ===== */}
      <Main fixed>
        <div className='mb-6 flex flex-col items-start justify-between md:flex-row md:items-center'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>
              Muro de Felicitaciones
            </h1>
            <p className='text-muted-foreground'>
              Celebremos juntos los logros de nuestra comunidad universitaria
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className='mt-3 md:mt-0'>
                <IconSend className='mr-2 h-4 w-4' />
                Nueva Felicitación
              </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[500px]'>
              <DialogHeader>
                <DialogTitle>Enviar una felicitación</DialogTitle>
                <DialogDescription>
                  Reconoce los logros de tus compañeros y profesores
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid items-center gap-2'>
                  <label htmlFor='recipient' className='text-sm font-medium'>
                    Destinatario
                  </label>
                  <Input
                    id='recipient'
                    placeholder='Nombre del estudiante o profesor'
                    value={newRecipient}
                    onChange={(e) => setNewRecipient(e.target.value)}
                  />
                </div>
                <div className='grid items-center gap-2'>
                  <label htmlFor='achievement' className='text-sm font-medium'>
                    Logro o motivo
                  </label>
                  <Input
                    id='achievement'
                    placeholder='Ej: Primer lugar en competencia, Nota sobresaliente, etc.'
                    value={newAchievement}
                    onChange={(e) => setNewAchievement(e.target.value)}
                  />
                </div>
                <div className='grid items-center gap-2'>
                  <label htmlFor='message' className='text-sm font-medium'>
                    Mensaje
                  </label>
                  <Textarea
                    id='message'
                    placeholder='Escribe un mensaje de felicitación'
                    rows={4}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type='submit' onClick={handleSubmitMessage}>
                  Enviar felicitación
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className='my-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center'>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Input
              placeholder='Buscar felicitaciones...'
              className='h-9 w-full sm:w-60 lg:w-[300px]'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={department} onValueChange={setDepartment}>
              <SelectTrigger className='w-full sm:w-56'>
                <div className='flex items-center'>
                  <IconFilter className='mr-2 h-4 w-4' />
                  <SelectValue>
                    {filterText.get(department) || 'Todos los departamentos'}
                  </SelectValue>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>Todos los departamentos</SelectItem>
                <SelectItem value='matematicas'>Matemáticas</SelectItem>
                <SelectItem value='ingenieria'>Ingeniería</SelectItem>
                <SelectItem value='ciencias'>Ciencias</SelectItem>
                <SelectItem value='artes'>Artes y Diseño</SelectItem>
                <SelectItem value='sociales'>Ciencias Sociales</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className='w-full sm:w-auto'>
              <div className='flex items-center'>
                <IconAdjustmentsHorizontal className='mr-2 h-4 w-4' />
                <span className='hidden sm:inline'>Ordenar por: </span>
                <SelectValue>
                  {sort === 'ascending' ? 'Más antiguos' : 'Más recientes'}
                </SelectValue>
              </div>
            </SelectTrigger>
            <SelectContent align='end'>
              <SelectItem value='ascending'>
                <div className='flex items-center gap-2'>
                  <IconSortAscendingLetters size={16} />
                  <span>Más antiguos primero</span>
                </div>
              </SelectItem>
              <SelectItem value='descending'>
                <div className='flex items-center gap-2'>
                  <IconSortDescendingLetters size={16} />
                  <span>Más recientes primero</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator className='shadow-sm' />

        <div
          className='mt-4 overflow-auto pb-16'
          style={{ maxHeight: 'calc(100vh - 240px)' }}
        >
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {filteredCongratulations.map((congrat) => (
              <div
                key={congrat.id}
                className='flex h-full flex-col overflow-hidden rounded-lg border transition-shadow hover:shadow-md'
              >
                <div className='bg-muted/30 flex items-center justify-between p-3'>
                  <div className='flex items-center gap-2'>
                    <Avatar
                      className={`h-9 w-9 border-2 ${getColorFromIcon(congrat.icon)}`}
                    >
                      <AvatarImage
                        src={`https://i.pravatar.cc/150?u=${congrat.id}`}
                        alt={congrat.studentName}
                      />
                      <AvatarFallback>
                        {getInitials(congrat.studentName)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className='leading-tight font-medium'>
                        {congrat.studentName}
                      </h3>
                      <p className='text-muted-foreground text-xs'>
                        {congrat.department}
                      </p>
                    </div>
                  </div>
                  <div className='bg-background flex items-center rounded-full px-3 py-1 text-xs'>
                    {congrat.icon}
                  </div>
                </div>

                <div className='flex-grow p-4'>
                  <h2 className='mb-2 text-lg leading-tight font-semibold'>
                    {congrat.achievement}
                  </h2>
                  <p className='text-muted-foreground mb-3 text-sm'>
                    {congrat.message}
                  </p>

                  <div className='text-muted-foreground mt-auto flex items-center justify-between text-xs'>
                    <div className='flex items-center'>
                      <span>De: {congrat.senderName}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <IconCalendar size={14} />
                      <span>{formatDate(congrat.date)}</span>
                    </div>
                  </div>
                </div>

                <div className='mt-auto flex items-center justify-between border-t p-3'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-muted-foreground flex items-center gap-1'
                    onClick={() => handleLike(congrat.id)}
                  >
                    {likedPosts.includes(congrat.id) ? (
                      <IconHeartFilled size={18} className='text-red-500' />
                    ) : (
                      <IconHeart size={18} />
                    )}
                    <span>
                      {likedPosts.includes(congrat.id)
                        ? congrat.likes + 1
                        : congrat.likes}
                    </span>
                  </Button>

                  <Button variant='ghost' size='sm'>
                    Compartir
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredCongratulations.length === 0 && (
            <div className='py-12 text-center'>
              <h2 className='mb-2 text-xl font-semibold'>
                No se encontraron felicitaciones
              </h2>
              <p className='text-muted-foreground'>
                Intenta con otros filtros o crea una nueva felicitación
              </p>
            </div>
          )}
        </div>
      </Main>
    </>
  )
}
