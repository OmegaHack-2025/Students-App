import {
  Clock,
  Heart,
  CheckCheck,
  ChefHat,
  BookOpen,
  Utensils,
  Armchair,
  Brain,
  Coffee,
} from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

export default function Habits() {
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
        <div className='container mx-auto space-y-6 p-4'>
          <div className='flex flex-col space-y-2'>
            <h1 className='text-3xl font-bold'>
              Hábitos Saludables para Estudiantes
            </h1>
            <p className='text-muted-foreground'>
              Mejora tu bienestar y rendimiento académico con estos consejos
            </p>
          </div>

          <Alert className='border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950'>
            <Heart className='h-4 w-4 text-green-600 dark:text-green-400' />
            <AlertTitle>Recuerda</AlertTitle>
            <AlertDescription>
              Un estilo de vida saludable mejora tu concentración, memoria y
              estado de ánimo.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue='habits' className='space-y-4'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='habits'>Hábitos Saludables</TabsTrigger>
              <TabsTrigger value='recipes'>Recetas Rápidas</TabsTrigger>
            </TabsList>

            <TabsContent value='habits' className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {/* Hábito 1: Rutina de Estudio */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>
                        Rutina de Estudio
                      </CardTitle>
                      <BookOpen className='h-5 w-5 text-blue-500' />
                    </div>
                    <CardDescription>
                      Optimiza tu tiempo y concentración
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <div className='space-y-1'>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>
                          Técnica Pomodoro (25 min de estudio, 5 min de
                          descanso)
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Estudia en el mismo lugar cada día</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Evita distracciones digitales</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Badge variant='outline' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>Implementar diariamente</span>
                    </Badge>
                  </CardFooter>
                </Card>

                {/* Hábito 2: Descanso Adecuado */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>
                        Descanso Adecuado
                      </CardTitle>
                      <Armchair className='h-5 w-5 text-indigo-500' />
                    </div>
                    <CardDescription>Mejora tu sueño y energía</CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <div className='space-y-1'>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>7-8 horas de sueño cada noche</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Horario regular para dormir y despertar</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Sin pantallas 1 hora antes de dormir</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Badge variant='outline' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>Prioridad máxima</span>
                    </Badge>
                  </CardFooter>
                </Card>

                {/* Hábito 3: Actividad Física */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>
                        Actividad Física
                      </CardTitle>
                      <Heart className='h-5 w-5 text-red-500' />
                    </div>
                    <CardDescription>
                      Actívate para mejor rendimiento
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <div className='space-y-1'>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>30 min de ejercicio 5 días a la semana</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Camina entre clases cuando sea posible</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Estiramientos durante sesiones de estudio</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Badge variant='outline' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>3-5 veces por semana</span>
                    </Badge>
                  </CardFooter>
                </Card>

                {/* Hábito 4: Hidratación */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>Hidratación</CardTitle>
                      <Coffee className='h-5 w-5 text-blue-400' />
                    </div>
                    <CardDescription>
                      Mantén tu cerebro funcionando
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <div className='space-y-1'>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>2 litros de agua al día</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Lleva siempre una botella reutilizable</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Limita bebidas con cafeína y azúcar</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Badge variant='outline' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>Durante todo el día</span>
                    </Badge>
                  </CardFooter>
                </Card>

                {/* Hábito 5: Alimentación Consciente */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>
                        Alimentación Consciente
                      </CardTitle>
                      <Utensils className='h-5 w-5 text-amber-500' />
                    </div>
                    <CardDescription>
                      Combustible para tu cerebro
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <div className='space-y-1'>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>3 comidas equilibradas al día</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Prepara snacks saludables para estudiar</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Evita comida procesada en exceso</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Badge variant='outline' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>Planifica semanalmente</span>
                    </Badge>
                  </CardFooter>
                </Card>

                {/* Hábito 6: Salud Mental */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>Salud Mental</CardTitle>
                      <Brain className='h-5 w-5 text-purple-500' />
                    </div>
                    <CardDescription>
                      Cuida tu bienestar emocional
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <div className='space-y-1'>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>5 minutos de meditación diaria</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Socialización regular con amigos</span>
                      </div>
                      <div className='flex items-center'>
                        <CheckCheck className='mr-1 h-4 w-4 text-green-500' />
                        <span>Busca ayuda cuando la necesites</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Badge variant='outline' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>Práctica constante</span>
                    </Badge>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='recipes' className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {/* Receta 1 */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>Bowl de Avena</CardTitle>
                      <ChefHat className='h-5 w-5 text-amber-500' />
                    </div>
                    <CardDescription>
                      Desayuno energético y rápido
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <p className='text-sm font-medium'>Ingredientes:</p>
                    <ul className='list-disc space-y-1 pl-5 text-sm'>
                      <li>½ taza de avena</li>
                      <li>1 taza de leche o alternativa vegetal</li>
                      <li>1 plátano</li>
                      <li>1 cucharada de mantequilla de maní</li>
                      <li>Canela al gusto</li>
                    </ul>
                    <p className='mt-2 text-sm font-medium'>Preparación:</p>
                    <p className='text-sm'>
                      Mezcla la avena con la leche y calienta en microondas 2
                      minutos. Añade los demás ingredientes y disfruta.
                    </p>
                  </CardContent>
                  <CardFooter className='flex justify-between'>
                    <Badge variant='secondary' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>5 minutos</span>
                    </Badge>
                    <Badge variant='outline'>350 calorías</Badge>
                  </CardFooter>
                </Card>

                {/* Receta 2 */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>Wrap de Atún</CardTitle>
                      <ChefHat className='h-5 w-5 text-amber-500' />
                    </div>
                    <CardDescription>
                      Almuerzo nutritivo para llevar
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <p className='text-sm font-medium'>Ingredientes:</p>
                    <ul className='list-disc space-y-1 pl-5 text-sm'>
                      <li>1 tortilla integral</li>
                      <li>1 lata de atún en agua</li>
                      <li>¼ de aguacate</li>
                      <li>Tomate en rodajas</li>
                      <li>Hojas de espinaca</li>
                      <li>1 cucharada de yogur natural</li>
                    </ul>
                    <p className='mt-2 text-sm font-medium'>Preparación:</p>
                    <p className='text-sm'>
                      Mezcla el atún con el yogur. Extiende sobre la tortilla y
                      añade los demás ingredientes. Enrolla y corta por la
                      mitad.
                    </p>
                  </CardContent>
                  <CardFooter className='flex justify-between'>
                    <Badge variant='secondary' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>7 minutos</span>
                    </Badge>
                    <Badge variant='outline'>320 calorías</Badge>
                  </CardFooter>
                </Card>

                {/* Receta 3 */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>
                        Batido Energético
                      </CardTitle>
                      <ChefHat className='h-5 w-5 text-amber-500' />
                    </div>
                    <CardDescription>
                      Perfecto para después de estudiar
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <p className='text-sm font-medium'>Ingredientes:</p>
                    <ul className='list-disc space-y-1 pl-5 text-sm'>
                      <li>1 taza de leche o alternativa vegetal</li>
                      <li>1 plátano congelado</li>
                      <li>1 cucharada de mantequilla de maní</li>
                      <li>1 cucharada de cacao en polvo</li>
                      <li>1 cucharada de avena</li>
                    </ul>
                    <p className='mt-2 text-sm font-medium'>Preparación:</p>
                    <p className='text-sm'>
                      Combina todos los ingredientes en una licuadora. Procesa
                      hasta que quede suave y sirve inmediatamente.
                    </p>
                  </CardContent>
                  <CardFooter className='flex justify-between'>
                    <Badge variant='secondary' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>3 minutos</span>
                    </Badge>
                    <Badge variant='outline'>380 calorías</Badge>
                  </CardFooter>
                </Card>

                {/* Receta 4 */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>
                        Ensalada de Quinoa
                      </CardTitle>
                      <ChefHat className='h-5 w-5 text-amber-500' />
                    </div>
                    <CardDescription>
                      Cena completa y fácil de preparar
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <p className='text-sm font-medium'>Ingredientes:</p>
                    <ul className='list-disc space-y-1 pl-5 text-sm'>
                      <li>1 taza de quinoa cocida</li>
                      <li>½ pepino en cubos</li>
                      <li>½ taza de garbanzos</li>
                      <li>¼ taza de queso feta</li>
                      <li>Aceite de oliva y limón</li>
                    </ul>
                    <p className='mt-2 text-sm font-medium'>Preparación:</p>
                    <p className='text-sm'>
                      Mezcla todos los ingredientes en un bowl. Aliña con aceite
                      de oliva, limón, sal y pimienta al gusto.
                    </p>
                  </CardContent>
                  <CardFooter className='flex justify-between'>
                    <Badge variant='secondary' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>10 minutos</span>
                    </Badge>
                    <Badge variant='outline'>400 calorías</Badge>
                  </CardFooter>
                </Card>

                {/* Receta 5 */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>
                        Tostada de Hummus
                      </CardTitle>
                      <ChefHat className='h-5 w-5 text-amber-500' />
                    </div>
                    <CardDescription>Snack rápido entre clases</CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <p className='text-sm font-medium'>Ingredientes:</p>
                    <ul className='list-disc space-y-1 pl-5 text-sm'>
                      <li>2 rebanadas de pan integral</li>
                      <li>4 cucharadas de hummus</li>
                      <li>½ aguacate en rodajas</li>
                      <li>Tomate cherry</li>
                      <li>Semillas de girasol o chía</li>
                    </ul>
                    <p className='mt-2 text-sm font-medium'>Preparación:</p>
                    <p className='text-sm'>
                      Tuesta el pan. Extiende el hummus, coloca las rodajas de
                      aguacate y tomate. Espolvorea con semillas.
                    </p>
                  </CardContent>
                  <CardFooter className='flex justify-between'>
                    <Badge variant='secondary' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>5 minutos</span>
                    </Badge>
                    <Badge variant='outline'>280 calorías</Badge>
                  </CardFooter>
                </Card>

                {/* Receta 6 */}
                <Card>
                  <CardHeader className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <CardTitle className='text-xl'>
                        Pasta con Verduras
                      </CardTitle>
                      <ChefHat className='h-5 w-5 text-amber-500' />
                    </div>
                    <CardDescription>
                      Cena rápida para noches de estudio
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <p className='text-sm font-medium'>Ingredientes:</p>
                    <ul className='list-disc space-y-1 pl-5 text-sm'>
                      <li>1 taza de pasta integral</li>
                      <li>½ taza de brócoli</li>
                      <li>½ taza de champiñones</li>
                      <li>2 cucharadas de aceite de oliva</li>
                      <li>2 cucharadas de queso parmesano</li>
                    </ul>
                    <p className='mt-2 text-sm font-medium'>Preparación:</p>
                    <p className='text-sm'>
                      Cocina la pasta. Saltea las verduras en aceite. Mezcla
                      todo y añade el queso por encima.
                    </p>
                  </CardContent>
                  <CardFooter className='flex justify-between'>
                    <Badge variant='secondary' className='flex items-center'>
                      <Clock className='mr-1 h-3 w-3' />
                      <span>15 minutos</span>
                    </Badge>
                    <Badge variant='outline'>420 calorías</Badge>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Main>
    </>
  )
}
