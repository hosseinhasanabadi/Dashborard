import React from 'react'
import './Home.css'
import Widgetssm from '../../components/widgets/widgetssm'
import Chart from '../../components/Chart/Chart'
import Feature from '../../components/Feature/Feature'

import xAxisData from '../../data'
export default function Home() {
  return (
    <div className='home'>
      <Feature/>
      <Chart grid  title='Month Sale' data={xAxisData} dataKey='sale' />
      <div className="homwwidgets">
<Widgetssm/>
      </div>
    </div>
  )
}
