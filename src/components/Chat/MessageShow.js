import React, { useEffect, useRef } from 'react'

function MessageShow({messages,sender}) {
  // console.log(messages,"this is show message component");
  
  
  return (
   
    <div className="flex-1 p-4 bg-[#391965] rounded-lg space-y-3 flex-col w-full h-[100vh] overflow-y-auto myScroll">
        { messages?.map((item, index) => (
          <div
          key={index}
          className={`p-3 rounded-lg   ${
                        item.sender === sender
                          ? "bg-white text-pink-600 justify-self-end "
                          : "bg-pink-600 text-white justify-self-start "
                        }`}>
                        <span className="max-w-max">{item.message}</span>
                      </div>
                    ))}
              </div>
  )
}

export default MessageShow