import React from 'react'

const Button = ({ ...props }) => {
  return (
    <div>
      <button
        className="bg-sky-700 rounded-3xl p-2 m-4 hover:opacity-70 transition-opacity"
        {...props}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div >
  )
}

export default Button