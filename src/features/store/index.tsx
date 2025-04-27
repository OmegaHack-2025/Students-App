import { useState } from 'react'
import {
  IconStar,
  IconTicket,
  IconShoppingBag,
  IconCoffee,
  IconBook,
  IconTruck,
  IconPrinter,
  IconArrowDown,
  IconCategory,
  IconSearch,
  IconAdjustmentsHorizontal,
} from '@tabler/icons-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

// Tipos para las recompensas
type Reward = {
  id: number
  title: string
  description: string
  starCost: number
  category: 'food' | 'store' | 'academic' | 'service'
  image: string
  icon: React.ReactNode
  discount: string
  expirationDays: number
  available: boolean
  popular: boolean
}

// Usuario
const user = {
  name: 'Alejandro López',
  stars: 450,
  level: 3,
  avatar: 'https://i.pravatar.cc/150?img=12',
  recentlyRedeemed: 3,
}

// Datos de ejemplo para las recompensas
const rewards: Reward[] = [
  {
    id: 1,
    title: 'Descuento en Almuerzo Cafetería Central',
    description:
      'Obtén un 30% de descuento en cualquier almuerzo ejecutivo en la Cafetería Central del campus.',
    starCost: 100,
    category: 'food',
    image: 'https://placehold.co/300x200/5DADE2/FFF?text=Almuerzo',
    icon: <IconCoffee />,
    discount: '30%',
    expirationDays: 30,
    available: true,
    popular: true,
  },
  {
    id: 2,
    title: 'Café y Postre Gratis',
    description:
      'Un café y un postre a elección en cualquiera de las cafeterías del campus.',
    starCost: 75,
    category: 'food',
    image: 'https://placehold.co/300x200/F4D03F/FFF?text=Café',
    icon: <IconCoffee />,
    discount: '100%',
    expirationDays: 15,
    available: true,
    popular: true,
  },
  {
    id: 3,
    title: 'Descuento en Librería Universitaria',
    description:
      'Obtén un 25% de descuento en cualquier libro o material académico en la librería universitaria.',
    starCost: 150,
    category: 'store',
    image: 'https://placehold.co/300x200/58D68D/FFF?text=Librería',
    icon: <IconBook />,
    discount: '25%',
    expirationDays: 60,
    available: true,
    popular: false,
  },
  {
    id: 4,
    title: 'Créditos de Impresión',
    description:
      '100 páginas de impresión gratuita en cualquier centro de impresión del campus.',
    starCost: 80,
    category: 'service',
    image: 'https://placehold.co/300x200/EC7063/FFF?text=Impresión',
    icon: <IconPrinter />,
    discount: '100 Páginas',
    expirationDays: 90,
    available: true,
    popular: true,
  },
  {
    id: 5,
    title: 'Descuento en Tienda Deportiva',
    description:
      '20% de descuento en artículos deportivos o ropa de la universidad en la tienda deportiva.',
    starCost: 120,
    category: 'store',
    image: 'https://placehold.co/300x200/AF7AC5/FFF?text=Deportes',
    icon: <IconShoppingBag />,
    discount: '20%',
    expirationDays: 45,
    available: true,
    popular: false,
  },
  {
    id: 6,
    title: 'Descuento en Biblioteca',
    description:
      'Extensión de préstamo de libros por 2 semanas adicionales sin recargos.',
    starCost: 60,
    category: 'academic',
    image: 'https://placehold.co/300x200/7DCEA0/FFF?text=Biblioteca',
    icon: <IconBook />,
    discount: '2 Semanas Extra',
    expirationDays: 30,
    available: true,
    popular: false,
  },
  {
    id: 7,
    title: 'Acceso a Eventos Exclusivos',
    description:
      'Entrada gratuita a conferencias, talleres y eventos académicos exclusivos.',
    starCost: 200,
    category: 'academic',
    image: 'https://placehold.co/300x200/5499C7/FFF?text=Eventos',
    icon: <IconTicket />,
    discount: 'Entrada Gratuita',
    expirationDays: 60,
    available: true,
    popular: true,
  },
  {
    id: 8,
    title: 'Envío Gratuito en Tienda en Línea',
    description:
      'Envío gratuito en tu próxima compra en la tienda en línea de la universidad.',
    starCost: 50,
    category: 'service',
    image: 'https://placehold.co/300x200/EB984E/FFF?text=Envío',
    icon: <IconTruck />,
    discount: 'Envío Gratis',
    expirationDays: 45,
    available: true,
    popular: false,
  },
]

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('popular')
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null)
  const [isRedeemDialogOpen, setIsRedeemDialogOpen] = useState(false)
  const [redeemSuccess, setRedeemSuccess] = useState(false)

  // Filtrar y ordenar recompensas
  const filteredRewards = rewards
    .filter((reward) => reward.available)
    .filter((reward) => {
      if (selectedCategory === 'all') return true
      return reward.category === selectedCategory
    })
    .filter((reward) => {
      const term = searchTerm.toLowerCase()
      return (
        reward.title.toLowerCase().includes(term) ||
        reward.description.toLowerCase().includes(term)
      )
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.starCost - b.starCost
        case 'price-high':
          return b.starCost - a.starCost
        case 'popular':
          return Number(b.popular) - Number(a.popular)
        default:
          return 0
      }
    })

  const handleRedeemClick = (reward: Reward) => {
    setSelectedReward(reward)
    setIsRedeemDialogOpen(true)
    setRedeemSuccess(false)
  }

  const handleRedeem = () => {
    // Aquí iría la lógica para redimir la recompensa con el backend
    setTimeout(() => {
      setRedeemSuccess(true)
    }, 1000)
  }

  // Porcentaje para el próximo nivel
  const nextLevelProgress = 65

  return (
    <>
      <Header>
        <Search />
        <div className='ml-auto flex items-center gap-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-8 flex flex-col items-start justify-between gap-6 md:flex-row'>
          {/* Panel de usuario y estrellas */}
          <Card className='w-full shrink-0 md:w-80'>
            <CardHeader className='pb-2'>
              <CardTitle className='flex items-center justify-between text-xl'>
                <span>Tus Estrellas</span>
                <div className='flex items-center gap-1 text-amber-500'>
                  <IconStar size={20} fill='currentColor' stroke={1.5} />
                  <span>{user.stars}</span>
                </div>
              </CardTitle>
              <CardDescription>
                Acumula estrellas y redímelas por beneficios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='mb-4 flex items-center gap-4'>
                <Avatar className='border-primary h-12 w-12 border-2'>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className='font-medium'>{user.name}</h3>
                  <span className='text-muted-foreground text-sm'>
                    Nivel {user.level}
                  </span>
                </div>
              </div>

              <div className='mb-4'>
                <div className='mb-1 flex items-center justify-between text-sm'>
                  <span>Progreso al siguiente nivel</span>
                  <span>{nextLevelProgress}%</span>
                </div>
                <Progress value={nextLevelProgress} className='h-2' />
              </div>

              <div className='bg-muted/40 rounded-lg p-3 text-sm'>
                <h4 className='mb-2 font-medium'>Actividad reciente</h4>
                <p className='text-muted-foreground'>
                  Has redimido {user.recentlyRedeemed} recompensas este mes.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant='outline' className='w-full'>
                <IconStar className='mr-1 h-4 w-4 text-amber-500' />
                Ver historial de estrellas
              </Button>
            </CardFooter>
          </Card>

          {/* Contenido principal */}
          <div className='flex-1'>
            <div className='mb-4 flex flex-col items-center justify-between gap-3 sm:flex-row'>
              <h1 className='text-2xl font-bold tracking-tight'>
                Tienda de Beneficios
              </h1>
              <div className='flex items-center gap-2'>
                <span className='text-muted-foreground text-sm whitespace-nowrap'>
                  Tus estrellas:
                </span>
                <Badge
                  variant='secondary'
                  className='flex items-center gap-1 px-3 py-1'
                >
                  <IconStar className='h-3.5 w-3.5 text-amber-500' />
                  <span className='text-lg font-semibold'>{user.stars}</span>
                </Badge>
              </div>
            </div>

            <div className='mb-6 grid gap-4'>
              <div className='flex flex-col items-start gap-2 sm:flex-row'>
                <div className='relative flex-1'>
                  <IconSearch className='text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4' />
                  <Input
                    placeholder='Buscar beneficios...'
                    className='pl-8'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className='w-full sm:w-40'>
                    <div className='flex items-center'>
                      <IconCategory className='mr-2 h-4 w-4' />
                      <SelectValue placeholder='Categoría' />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='all'>Todas</SelectItem>
                    <SelectItem value='food'>Alimentación</SelectItem>
                    <SelectItem value='store'>Tiendas</SelectItem>
                    <SelectItem value='academic'>Académico</SelectItem>
                    <SelectItem value='service'>Servicios</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className='w-full sm:w-40'>
                    <div className='flex items-center'>
                      <IconAdjustmentsHorizontal className='mr-2 h-4 w-4' />
                      <SelectValue placeholder='Ordenar por' />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='popular'>Populares</SelectItem>
                    <SelectItem value='price-low'>Menor precio</SelectItem>
                    <SelectItem value='price-high'>Mayor precio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />
            </div>

            {filteredRewards.length > 0 ? (
              <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {filteredRewards.map((reward) => (
                  <Card
                    key={reward.id}
                    className='overflow-hidden transition-shadow hover:shadow-md'
                  >
                    <div className='relative h-40'>
                      <img
                        src={reward.image}
                        alt={reward.title}
                        className='h-full w-full object-cover'
                      />
                      <div className='absolute top-2 right-2'>
                        <Badge variant='default' className='bg-primary/90'>
                          {reward.discount}
                        </Badge>
                      </div>
                      {reward.popular && (
                        <div className='absolute top-2 left-2'>
                          <Badge
                            variant='secondary'
                            className='bg-amber-500/90 text-white hover:bg-amber-500/90'
                          >
                            Popular
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className='pb-2'>
                      <div className='flex items-start justify-between'>
                        <CardTitle className='text-lg'>
                          {reward.title}
                        </CardTitle>
                        <div className='mt-1 flex items-center gap-1 whitespace-nowrap text-amber-500'>
                          <IconStar
                            size={18}
                            fill='currentColor'
                            stroke={1.5}
                          />
                          <span className='font-semibold'>
                            {reward.starCost}
                          </span>
                        </div>
                      </div>
                      <CardDescription className='line-clamp-2'>
                        {reward.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex justify-between pt-0'>
                      <div className='text-muted-foreground text-xs'>
                        Validez: {reward.expirationDays} días
                      </div>
                      <Button
                        size='sm'
                        onClick={() => handleRedeemClick(reward)}
                        disabled={user.stars < reward.starCost}
                      >
                        Redimir
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className='bg-muted/20 rounded-lg py-12 text-center'>
                <IconSearch className='text-muted-foreground mx-auto mb-4 h-10 w-10' />
                <h2 className='mb-2 text-xl font-semibold'>
                  No se encontraron beneficios
                </h2>
                <p className='text-muted-foreground'>
                  Intenta con otra búsqueda o categoría
                </p>
              </div>
            )}
          </div>
        </div>
      </Main>

      {/* Diálogo de redención */}
      {selectedReward && (
        <Dialog open={isRedeemDialogOpen} onOpenChange={setIsRedeemDialogOpen}>
          <DialogContent className='sm:max-w-md'>
            <DialogHeader>
              <DialogTitle>
                {redeemSuccess ? '¡Redención Exitosa!' : 'Confirmar Redención'}
              </DialogTitle>
              <DialogDescription>
                {redeemSuccess
                  ? 'Has redimido tu beneficio correctamente'
                  : 'Estás a punto de redimir el siguiente beneficio:'}
              </DialogDescription>
            </DialogHeader>

            {redeemSuccess ? (
              <div className='flex flex-col items-center py-4'>
                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100'>
                  <IconTicket className='h-8 w-8 text-green-600' />
                </div>
                <h3 className='mb-2 text-lg font-semibold'>
                  {selectedReward.title}
                </h3>
                <p className='text-muted-foreground mb-4 text-center text-sm'>
                  Utiliza este beneficio antes de{' '}
                  {new Date(
                    Date.now() +
                      selectedReward.expirationDays * 24 * 60 * 60 * 1000
                  ).toLocaleDateString()}
                </p>
                <div className='bg-muted/30 w-full rounded-lg p-3 text-center'>
                  <p className='text-sm font-medium'>Código de redención:</p>
                  <p className='mt-1 font-mono text-xl font-semibold'>
                    UNIV-
                    {Math.random().toString(36).substring(2, 8).toUpperCase()}
                  </p>
                </div>
              </div>
            ) : (
              <div className='flex items-center gap-4 py-4'>
                <div className='h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg'>
                  <img
                    src={selectedReward.image}
                    alt={selectedReward.title}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-semibold'>{selectedReward.title}</h3>
                  <div className='mt-1 flex items-center gap-1 text-amber-500'>
                    <IconStar size={16} fill='currentColor' stroke={1.5} />
                    <span className='text-sm font-medium'>
                      {selectedReward.starCost} estrellas
                    </span>
                  </div>
                </div>
              </div>
            )}

            <DialogFooter className={redeemSuccess ? 'sm:justify-center' : ''}>
              {redeemSuccess ? (
                <Button onClick={() => setIsRedeemDialogOpen(false)}>
                  Cerrar
                </Button>
              ) : (
                <>
                  <Button
                    variant='outline'
                    onClick={() => setIsRedeemDialogOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleRedeem}
                    disabled={user.stars < selectedReward.starCost}
                  >
                    {user.stars < selectedReward.starCost
                      ? 'Estrellas insuficientes'
                      : 'Confirmar Redención'}
                  </Button>
                </>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
