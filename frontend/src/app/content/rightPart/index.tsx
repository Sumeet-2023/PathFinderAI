import React from 'react'

const RightSide = ({ selectedTab }) => {
  return (
    <div>
      {selectedTab === 'Jump to' && <div>Jump to Content</div>}
      {selectedTab === 'Recent' && <div>Recent Content</div>}
      {selectedTab === 'Shared with me' && <div>Shared with me Content</div>}
      {selectedTab === 'Projects' && <div>Projects Content</div>}
      {selectedTab === 'Templates' && <div>Templates Content</div>}
      {selectedTab === 'People' && <div>People Content</div>}
    </div>
  )
}

export default RightSide
