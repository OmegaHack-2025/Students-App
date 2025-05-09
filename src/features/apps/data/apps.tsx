import {
  IconTrophy,
  IconAward,
  IconMedal,
  IconCertificate,
  IconStar,
  IconConfetti,
  IconBulb,
  IconBrain,
  IconHeartHandshake,
  IconPuzzle,
  IconBooks,
  IconSchool,
  IconDeviceAnalytics,
  IconFlame,
  IconPodium,
} from '@tabler/icons-react'

export const congratulations = [
  {
    id: 1,
    studentName: 'María González',
    senderName: 'Prof. Carlos Rodríguez',
    message:
      '¡Felicitaciones por obtener la nota más alta en el examen final de Cálculo III! Tu dedicación y esfuerzo han dado frutos excelentes.',
    achievement: 'Nota más alta en Cálculo III',
    date: '2023-12-15',
    icon: <IconTrophy className='text-amber-500' />,
    likes: 47,
    department: 'Matemáticas',
    isPublic: true,
  },
  {
    id: 2,
    studentName: 'Alejandro Martínez',
    senderName: 'Daniela Vega',
    message:
      'Felicidades por tu brillante presentación en el congreso de ingeniería. Representaste a nuestra universidad con excelencia y profesionalismo.',
    achievement: 'Presentación destacada en congreso',
    date: '2023-11-28',
    icon: <IconPodium className='text-blue-500' />,
    likes: 35,
    department: 'Ingeniería',
    isPublic: true,
  },
  {
    id: 3,
    studentName: 'Sofia Ramírez',
    senderName: 'Grupo de Investigación Biomédica',
    message:
      'Tu contribución al proyecto de investigación ha sido fundamental. ¡Gracias por tu compromiso y brillantes ideas!',
    achievement: 'Contribución destacada en investigación',
    date: '2024-01-10',
    icon: <IconBulb className='text-yellow-500' />,
    likes: 29,
    department: 'Ciencias Médicas',
    isPublic: true,
  },
  {
    id: 4,
    studentName: 'Gabriel Herrera',
    senderName: 'Departamento de Artes',
    message:
      'Tu exposición artística no solo impresionó a los jueces sino que inspiró a muchos estudiantes. ¡Felicidades por tu talento y creatividad!',
    achievement: 'Exposición artística premiada',
    date: '2024-02-05',
    icon: <IconConfetti className='text-pink-500' />,
    likes: 52,
    department: 'Artes y Diseño',
    isPublic: true,
  },
  {
    id: 5,
    studentName: 'Valentina Torres',
    senderName: 'Adrián Mendoza',
    message:
      'Tu liderazgo en el proyecto comunitario ha impactado positivamente a muchas personas. Eres un ejemplo de compromiso social.',
    achievement: 'Liderazgo en proyecto comunitario',
    date: '2023-10-20',
    icon: <IconHeartHandshake className='text-red-500' />,
    likes: 43,
    department: 'Ciencias Sociales',
    isPublic: true,
  },
  {
    id: 6,
    studentName: 'Diego Sánchez',
    senderName: 'Equipo Olimpiadas de Programación',
    message:
      '¡Felicidades por el primer lugar en la hackathon nacional! Tu solución fue innovadora y efectiva. ¡Sigamos trabajando juntos!',
    achievement: 'Primer lugar en hackathon nacional',
    date: '2024-03-02',
    icon: <IconBrain className='text-purple-500' />,
    likes: 64,
    department: 'Ciencias',
    isPublic: true,
  },
  {
    id: 7,
    studentName: 'Natalia López',
    senderName: 'Prof. Alicia Morales',
    message:
      'Tu tesis de grado no solo mereció una calificación sobresaliente, sino que aporta significativamente al campo. ¡Excelente trabajo!',
    achievement: 'Tesis de grado sobresaliente',
    date: '2023-12-08',
    icon: <IconBooks className='text-green-500' />,
    likes: 38,
    department: 'Ciencias Ambientales',
    isPublic: true,
  },
  {
    id: 8,
    studentName: 'Javier Méndez',
    senderName: 'Asociación Estudiantil',
    message:
      'Tu dedicación organizando el congreso estudiantil hizo que fuera todo un éxito. Gracias por tu compromiso con nuestra comunidad académica.',
    achievement: 'Organización exitosa de congreso',
    date: '2024-01-25',
    icon: <IconCertificate className='text-teal-500' />,
    likes: 31,
    department: 'Administración',
    isPublic: true,
  },
  {
    id: 9,
    studentName: 'Carolina Ortiz',
    senderName: 'Equipo de Debate',
    message:
      'Tu elocuencia y argumentos brillantes nos llevaron a la victoria en el torneo internacional de debate. ¡Eres una estrella!',
    achievement: 'Victoria en torneo de debate',
    date: '2024-02-18',
    icon: <IconStar className='text-amber-500' />,
    likes: 45,
    department: 'Derecho',
    isPublic: true,
  },
  {
    id: 10,
    studentName: 'Mateo Rivera',
    senderName: 'Laboratorio de Química',
    message:
      'Tu descubrimiento durante las prácticas de laboratorio ha abierto nuevas posibilidades de investigación. ¡Felicidades por tu perspicacia científica!',
    achievement: 'Descubrimiento en laboratorio',
    date: '2023-11-05',
    icon: <IconFlame className='text-orange-500' />,
    likes: 33,
    department: 'Química',
    isPublic: true,
  },
  {
    id: 11,
    studentName: 'Lucía Paredes',
    senderName: 'Equipo de Robótica',
    message:
      'Tu diseño innovador del robot nos permitió clasificar a la final internacional. ¡Tu creatividad e ingeniería son excepcionales!',
    achievement: 'Diseño de robot premiado',
    date: '2023-09-30',
    icon: <IconPuzzle className='text-blue-500' />,
    likes: 40,
    department: 'Ingeniería Electrónica',
    isPublic: true,
  },
  {
    id: 12,
    studentName: 'Santiago Vargas',
    senderName: 'Departamento de Economía',
    message:
      'Tu análisis económico presentado en el simposio ha recibido elogios de expertos internacionales. ¡Un orgullo para nuestra universidad!',
    achievement: 'Análisis económico destacado',
    date: '2024-02-28',
    icon: <IconDeviceAnalytics className='text-indigo-500' />,
    likes: 37,
    department: 'Economía',
    isPublic: true,
  },
  {
    id: 13,
    studentName: 'Mariana Castro',
    senderName: 'Prof. Roberto Jiménez',
    message:
      'Obtener una beca internacional es el resultado de tu excelencia académica constante. ¡Sigue brillando en tu nuevo destino académico!',
    achievement: 'Obtención de beca internacional',
    date: '2024-01-15',
    icon: <IconSchool className='text-green-500' />,
    likes: 62,
    department: 'Relaciones Internacionales',
    isPublic: true,
  },
  {
    id: 14,
    studentName: 'Eduardo Flores',
    senderName: 'Equipo de Atletismo',
    message:
      'Romper el récord universitario en los 400 metros es un logro extraordinario. ¡Tu disciplina y entrenamiento han dado frutos!',
    achievement: 'Récord universitario en atletismo',
    date: '2023-10-12',
    icon: <IconAward className='text-yellow-500' />,
    likes: 54,
    department: 'Educación Física',
    isPublic: true,
  },
  {
    id: 15,
    studentName: 'Isabel Navarro',
    senderName: 'Centro de Innovación',
    message:
      'Tu startup ha sido seleccionada entre miles para recibir financiamiento. ¡Tu visión empresarial y tu proyecto son extraordinarios!',
    achievement: 'Financiamiento para startup',
    date: '2024-03-05',
    icon: <IconMedal className='text-amber-500' />,
    likes: 49,
    department: 'Emprendimiento',
    isPublic: true,
  },
]
