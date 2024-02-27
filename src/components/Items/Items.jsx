import React from 'react'

const getItems = async () => {
  const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount')

  
}

export const Items = () => {
  return (
    <div>Items</div>
  )
}
