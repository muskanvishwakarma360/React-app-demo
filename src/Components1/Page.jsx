import React from 'react'
import TopMetrics from './TopMetrics'
import TrafficChart from './TrafficChart'
import CampaignChart from './CampaignChart'
import EmailStats from './EmailStats'
import SocialStats from './SocialStats'
import ConversionFunnel from './ConversionFunnel'
import SourcePie from './SourcePie'
import LeadsTable from './LeadsTable'

export default function Page() {
    return (
        <div className=' '>
            <div>
                <TopMetrics />
            </div>

            <div className='flex sm:flex-row'>
                <div className=' w-[50%] p-4'>
                    <TrafficChart />
                </div>
                <div className=' w-[50%] p-4'>
                    <CampaignChart />
                </div>
            </div>

            <div className='flex sm:flex-row' >
                <div className=' w-[50%] p-4'>
                    <EmailStats />
                </div>
                <div className=' w-[50%] p-4'>
                    <SocialStats />
                </div>
            </div>
            <div className='flex sm:flex-row'>
                <div className=' w-[50%] p-4'>
                    <ConversionFunnel />
                </div>
                <div className=' w-[50%] p-4'>
                    <SourcePie />
                </div>
            </div>
            <div>
                <LeadsTable />
            </div>
        </div>
    )
}
