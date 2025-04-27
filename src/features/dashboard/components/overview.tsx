import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Ene',
    gpa: 3.8,
  },
  {
    name: 'Feb',
    gpa: 3.6,
  },
  {
    name: 'Mar',
    gpa: 3.9,
  },
  {
    name: 'Abr',
    gpa: 3.7,
  },
  {
    name: 'May',
    gpa: 3.5,
  },
  {
    name: 'Jun',
    gpa: 3.8,
  },
  {
    name: 'Jul',
    gpa: 4.0,
  },
  {
    name: 'Ago',
    gpa: 3.9,
  },
  {
    name: 'Sep',
    gpa: 3.7,
  },
  {
    name: 'Oct',
    gpa: 3.8,
  },
  {
    name: 'Nov',
    gpa: 3.9,
  },
  {
    name: 'Dic',
    gpa: 4.0,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toFixed(1)}`}
          domain={[0, 4]}
        />
        <Bar
          dataKey='gpa'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
