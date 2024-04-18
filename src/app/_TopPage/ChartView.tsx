'use client'

import { selectedTotalPrefListSelector } from '@/store'
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useRecoilValue } from 'recoil'

type Props = {
  className?: string
}

export default function ChartView({ className }: Props) {
  const selectedTotalPrefList = useRecoilValue(selectedTotalPrefListSelector)
  const LINE_STROKE_COLORS = [
    '#ef4444',
    '#84cc16',
    '#06b6d4',
    '#ec4899',
    '#f97316',
    '#6b7280',
    '#8b5cf6',
    '#fde047',
    '#155e75',
  ]

  return (
    <div className={className}>
      <div>
        <ResponsiveContainer width='100%' aspect={2}>
          <LineChart margin={{ left: 5, right: 50 }}>
            {selectedTotalPrefList.map((v, i) => (
              <Line
                key={v.prefCode}
                type='basis'
                data={v.data}
                name={v.prefName}
                label={v.prefName}
                xAxisId={1}
                unit='人'
                dataKey='value'
                stroke={LINE_STROKE_COLORS[i % LINE_STROKE_COLORS.length]}
                strokeWidth={2}
              />
            ))}
            <CartesianGrid stroke='#ccc' strokeDasharray='3 3' />
            <XAxis
              dataKey='year'
              type='category'
              allowDuplicatedCategory={false}
              allowDecimals={false}
              xAxisId={1}
              fontSize={14}
            />
            <YAxis tickFormatter={(v) => `${v / 10000}`}>
              <Label position='insideLeft' angle={270} value='人口（万人）' />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign='bottom' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
