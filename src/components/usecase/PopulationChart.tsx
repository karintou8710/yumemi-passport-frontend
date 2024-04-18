'use client'

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

import { useScreenDetector } from '@/hooks/useScreenDetector'
import {
  selectedElderlyPrefListSelector,
  selectedTotalPrefListSelector,
  selectedWorkingPrefListSelector,
  selectedYoungPrefListSelector,
} from '@/store'

const LINE_STROKE_COLORS = [
  '#f97316',
  '#06b6d4',
  '#3f6212',
  '#ca8a04',
  '#6b7280',
  '#ef4444',
  '#8b5cf6',
  '#155e75',
]

type Props = {
  type: 'total' | 'young' | 'working' | 'elderly'
}

export default function PopulationChart({ type }: Props) {
  const selectedTotalPrefList = useRecoilValue(selectedTotalPrefListSelector)
  const selectedYoungPrefList = useRecoilValue(selectedYoungPrefListSelector)
  const selectedWorkingPrefList = useRecoilValue(selectedWorkingPrefListSelector)
  const selectedElderlyPrefList = useRecoilValue(selectedElderlyPrefListSelector)
  const { isSm } = useScreenDetector()

  const selectedData =
    type === 'total'
      ? selectedTotalPrefList
      : type === 'young'
        ? selectedYoungPrefList
        : type === 'working'
          ? selectedWorkingPrefList
          : selectedElderlyPrefList

  return (
    <ResponsiveContainer width='100%' aspect={isSm ? 1.2 : 2}>
      <LineChart margin={isSm ? { right: 10 } : { left: 5, right: 50 }}>
        {selectedData.map((v, i) => (
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
          fontSize={isSm ? 10 : 16}
        />
        <YAxis
          tickFormatter={(v) => `${v / 10000}`}
          fontSize={isSm ? 10 : 16}
          width={isSm ? 45 : 60}
        >
          <Label position='insideLeft' angle={270} value='人口（万人）' fontSize={isSm ? 8 : 16} />
        </YAxis>
        <Tooltip />
        <Legend verticalAlign='bottom' />
      </LineChart>
    </ResponsiveContainer>
  )
}
