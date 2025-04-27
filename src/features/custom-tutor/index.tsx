import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

type Tutor = {
  id: number
  name: string
  role: string
  description: string
  example: string
  symbol: string
  primaryColor: string
  image: string
}

const tutors: Tutor[] = [
  {
    id: 1,
    name: 'Lumen',
    role: 'El tutor neutro-alegre',
    description:
      'Positivo, sereno, motivador pero sin exagerar. Ideal para usuarios que solo quieren calma y motivación tranquila.',
    example:
      '¡Vamos paso a paso! Cada pequeño avance cuenta, y hoy ya diste uno más. 🚀',
    symbol: '⭐',
    primaryColor: '#50B4F2',
    image: 'https://mindbreeze.vercel.app/images/lumen.png',
  },
  {
    id: 2,
    name: 'Blaze',
    role: 'El tutor "cool" deportivo',
    description:
      'Competitivo, enérgico, estilo "coach de equipo". Perfecto para enganchar a los estudiantes competitivos o que les gusta la emoción.',
    example:
      "Recuerda que puedes remontar ese parcial de Cálculo... como el Madrid en el 90'. ¡Nunca se rinde quien lucha hasta el final! ⚽🔥",
    symbol: '⚡',
    primaryColor: '#FF5F2D',
    image: 'https://mindbreeze.vercel.app/images/blaze.png',
  },
  {
    id: 3,
    name: 'Nova',
    role: 'El tutor creativo y curioso',
    description:
      'Curioso, creativo, te motiva a pensar "fuera de la caja". Ideal para estudiantes que aman pensar diferente o buscan inspiración.',
    example:
      '¿Sabías que la mente se fortalece igual que los músculos? Cada reto nuevo que enfrentas es como descubrir un nuevo planeta. 🚀✨',
    symbol: '🌙',
    primaryColor: '#9C6AFF',
    image: 'https://mindbreeze.vercel.app/images/nova.png',
  },
  {
    id: 4,
    name: 'Sage',
    role: 'El tutor serio y sabio (pero amigable)',
    description:
      'Mentor experimentado, sabio pero cercano. Para los que buscan estructura, claridad y respeto máximo.',
    example:
      'La perseverancia no garantiza el éxito inmediato, pero sí construye el carácter que te llevará más lejos que cualquier atajo. 📚🧠',
    symbol: '📖',
    primaryColor: '#2E7D32',
    image: 'https://mindbreeze.vercel.app/images/sage.png',
  },
]

export default function CustomTutor() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [primaryColor, setPrimaryColor] = useState(tutors[0].primaryColor)

  const selectedTutor = tutors[selectedIndex]

  // Esta función obtiene los índices de los tutores a la izquierda y derecha
  const getSideIndices = () => {
    const totalTutors = tutors.length
    // Índice tutor izquierdo (si es el primero, muestra el último)
    const leftIndex = selectedIndex === 0 ? totalTutors - 1 : selectedIndex - 1
    // Índice tutor derecho (si es el último, muestra el primero)
    const rightIndex = selectedIndex === totalTutors - 1 ? 0 : selectedIndex + 1

    return { leftIndex, rightIndex }
  }

  const { leftIndex, rightIndex } = getSideIndices()

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    setPrimaryColor(tutors[index].primaryColor)
  }

  const handleNext = () => {
    const nextIndex =
      selectedIndex === tutors.length - 1 ? 0 : selectedIndex + 1
    handleSelect(nextIndex)
  }

  const handlePrevious = () => {
    const prevIndex =
      selectedIndex === 0 ? tutors.length - 1 : selectedIndex - 1
    handleSelect(prevIndex)
  }

  // Actualiza la variable CSS --primary cuando cambia el color primario
  useEffect(() => {
    document.documentElement.style.setProperty('--primary', primaryColor)
  }, [primaryColor])

  return (
    <>
      <Header fixed>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='container mx-auto px-4 py-8 text-center'>
          <h1 className='mb-8 text-3xl font-bold tracking-tight'>
            Selecciona tu Tutor Personalizado
          </h1>

          <div className='mb-10 flex items-center justify-center'>
            <div className='relative flex h-full items-center justify-center'>
              {/* Tutor izquierdo */}
              <div
                className='mr-6 cursor-pointer opacity-60 transition-all hover:opacity-80'
                onClick={() => handleSelect(leftIndex)}
              >
                <div
                  className='relative h-48 w-48 overflow-hidden rounded-2xl border-4'
                  style={{ borderColor: tutors[leftIndex].primaryColor }}
                >
                  <img
                    src={tutors[leftIndex].image}
                    alt={tutors[leftIndex].name}
                    className='h-full w-full object-cover'
                  />
                  <div className='absolute bottom-2 left-0 w-full text-center'>
                    <span
                      className='inline-block rounded-full px-3 py-1 text-white'
                      style={{
                        backgroundColor: tutors[leftIndex].primaryColor,
                      }}
                    >
                      {tutors[leftIndex].symbol} {tutors[leftIndex].name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botón anterior */}
              <Button
                onClick={handlePrevious}
                variant='secondary'
                size='icon'
                className='absolute left-0 z-10 rounded-full'
              >
                <ChevronLeft className='h-6 w-6' />
              </Button>

              {/* Tutor seleccionado (central) */}
              <div
                className='relative z-20 h-64 w-64 scale-110 transform rounded-2xl border-8 shadow-xl transition-all'
                style={{ borderColor: selectedTutor.primaryColor }}
              >
                <img
                  src={selectedTutor.image}
                  alt={selectedTutor.name}
                  className='h-full w-full rounded-lg object-cover'
                />
                <div
                  className='absolute bottom-0 left-0 w-full rounded-b-lg p-3 text-white'
                  style={{ backgroundColor: `${selectedTutor.primaryColor}CC` }}
                >
                  <div className='text-2xl font-bold'>
                    {selectedTutor.symbol} {selectedTutor.name}
                  </div>
                </div>
              </div>

              {/* Botón siguiente */}
              <Button
                onClick={handleNext}
                variant='secondary'
                size='icon'
                className='absolute right-0 z-10 rounded-full'
              >
                <ChevronRight className='h-6 w-6' />
              </Button>

              {/* Tutor derecho */}
              <div
                className='ml-6 cursor-pointer opacity-60 transition-all hover:opacity-80'
                onClick={() => handleSelect(rightIndex)}
              >
                <div
                  className='relative h-48 w-48 overflow-hidden rounded-2xl border-4'
                  style={{ borderColor: tutors[rightIndex].primaryColor }}
                >
                  <img
                    src={tutors[rightIndex].image}
                    alt={tutors[rightIndex].name}
                    className='h-full w-full object-cover'
                  />
                  <div className='absolute bottom-2 left-0 w-full text-center'>
                    <span
                      className='inline-block rounded-full px-3 py-1 text-white'
                      style={{
                        backgroundColor: tutors[rightIndex].primaryColor,
                      }}
                    >
                      {tutors[rightIndex].symbol} {tutors[rightIndex].name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información del tutor */}
          <div
            className='mx-auto max-w-2xl rounded-lg p-6 transition-all'
            style={{ backgroundColor: `${selectedTutor.primaryColor}22` }}
          >
            <h2 className='mb-2 text-xl font-semibold'>{selectedTutor.role}</h2>
            <p className='text-muted-foreground mb-4'>
              {selectedTutor.description}
            </p>

            <div className='bg-background/60 mb-6 rounded-lg p-4'>
              <h3 className='mb-2 text-sm font-medium'>Ejemplo de frase:</h3>
              <blockquote
                className='italic'
                style={{ color: selectedTutor.primaryColor }}
              >
                "{selectedTutor.example}"
              </blockquote>
            </div>

            <Button
              className='mt-4 transition-all'
              style={
                {
                  backgroundColor: selectedTutor.primaryColor,
                  color: 'white',
                  '--hover-color': `${selectedTutor.primaryColor}DD`,
                } as React.CSSProperties
              }
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor =
                  target.style.getPropertyValue('--hover-color')
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = selectedTutor.primaryColor
              }}
            >
              Seleccionar a {selectedTutor.name}
            </Button>
          </div>

          {/* Miniaturas de todos los tutores */}
          <div className='mt-10 flex justify-center gap-4'>
            {tutors.map((tutor, index) => (
              <div
                key={tutor.id}
                onClick={() => handleSelect(index)}
                className={`cursor-pointer rounded-full p-1 transition-all ${
                  selectedIndex === index
                    ? 'scale-125'
                    : 'opacity-60 hover:opacity-100'
                }`}
                style={{
                  borderWidth: selectedIndex === index ? '3px' : '2px',
                  borderStyle: 'solid',
                  borderColor: tutor.primaryColor,
                }}
              >
                <div
                  className='flex h-10 w-10 items-center justify-center rounded-full text-lg'
                  style={{ backgroundColor: tutor.primaryColor }}
                >
                  {tutor.symbol}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Main>
    </>
  )
}
