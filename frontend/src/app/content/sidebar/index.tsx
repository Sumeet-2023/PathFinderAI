import React from 'react'

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const menuItems = [
    { name: 'Jump to', icon: '🔍' },
    { name: 'Recent', icon: '⏱️' },
    { name: 'Shared with me', icon: '👥' },
    { name: 'Projects', icon: '📦' },
    { name: 'Templates', icon: '📋' },
    { name: 'People', icon: '👤' },
  ]

  return (
    <div className="w-64 h-screen bg-gray-100 border-r border-gray-300 flex flex-col p-4">
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-500 text-white font-bold text-sm w-10 h-10 flex justify-center items-center rounded-full">
          SM
        </div>
        <span className="text-gray-700 font-medium">Sumeet Mourya</span>
      </div>

      {/* Menu Section */}
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                selectedTab === item.name ? 'bg-gray-200' : 'hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTab(item.name)}
            >
              <span className="text-gray-500 text-xl">{item.icon}</span>
              <span className="text-gray-700">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
