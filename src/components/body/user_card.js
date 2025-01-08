import React from 'react'

function UserCardBanner() {
  return (
    <div>
      <div className="bg-[#391965] justify-items-center items-center p-5 rounded-xl shadow-lg ">
                <div className="w-[max-content]  border-b-4 p-3 border-white " >
                  <img src="banner/new.png" />
                </div>
                  <h4 className="text-white text-lg p-4">29,991</h4>
                  <h4 className="text-white " >Member in total</h4>
              </div>
    </div>
  )
}

export default UserCardBanner
