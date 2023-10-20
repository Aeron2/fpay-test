import Comparison from '@/Components/Home/Comparison'
import Banner from '@/Components/PlanForMerchant/Banner'
import BusinessDashboard from '@/Components/PlanForMerchant/BusinessDashboard'
import FavoriteToMerchant from '@/Components/PlanForMerchant/FavoriteToMerchant'
import Manage from '@/Components/PlanForMerchant/Manage'
import Offer from '@/Components/PlanForMerchant/Offer'
import Pricing from '@/Components/PlanForMerchant/Pricing'
import React from 'react'

function page() {
  return (
    <div>
      <Banner />
      <Pricing />
      <FavoriteToMerchant />
      <BusinessDashboard />
      <Comparison />
      <Manage />
      <Offer/>
    </div>
  )
}

export default page