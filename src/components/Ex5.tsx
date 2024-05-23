import React from 'react'

export default function Ex5() {
  return (
    <div>Ex5
        <div className="rounded-3xl w-[200px] h-[200px] bg-blue-500 relative">
        <p>Relative parent</p>
        <div className="absolute rounded-3xl bottom-0 right-0 bg-white p-1">
        <p>Absolute child</p>
        </div>
      </div>
    </div>
  )
}
