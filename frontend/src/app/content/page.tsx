'use client'
import React, { useState } from 'react'
import Sidebar from './sidebar'
import RightSide from './rightPart'

const Page = () => {
  const [selectedTab, setSelectedTab] = useState('Projects') // Default tab

  return (
    <div className="flex h-screen">
      {/* Sidebar: Fixed on the left */}
      <div className="w-64 bg-gray-100 border-r border-gray-300">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      {/* Content: Fills remaining space */}
      <div className="flex-1 overflow-y-auto p-6">
        <RightSide selectedTab={selectedTab} />
      </div>
    </div>
  )
}

export default Page
