'use client'

import Tabs from '@/components/atom/Tabs'
import Tab from '@/components/atom/Tabs/Tab'
import TabBody from '@/components/atom/Tabs/TabBody'
import TabContent from '@/components/atom/Tabs/TabContent'
import TabHeader from '@/components/atom/Tabs/TabHeader'
import PopulationChart from '@/components/usecase/PopulationChart'

type Props = {
  className?: string
}

export default function ChartView({ className }: Props) {
  return (
    <div className={className}>
      <Tabs value='total'>
        <TabHeader align='center'>
          <Tab value='total' className='text-xl'>
            総人口
          </Tab>
          <Tab value='young' className='text-xl'>
            年少人口
          </Tab>
          <Tab value='working' className='text-xl'>
            生産年齢人口
          </Tab>
          <Tab value='elderly' className='text-xl'>
            老年人口
          </Tab>
        </TabHeader>
        <TabBody className='mt-8'>
          <TabContent value='total'>
            <PopulationChart type='total' />
          </TabContent>
          <TabContent value='young'>
            <PopulationChart type='young' />
          </TabContent>
          <TabContent value='working'>
            <PopulationChart type='working' />
          </TabContent>
          <TabContent value='elderly'>
            <PopulationChart type='elderly' />
          </TabContent>
        </TabBody>
      </Tabs>
    </div>
  )
}
