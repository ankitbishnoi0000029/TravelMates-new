import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Friendlist({socket,friendslist}) {
    const router = useRouter();
    const userId = useSelector((state)=>state.MyStore.userId)
const [userDeatil ,setUserdetail] = useState()

useEffect(() => {
    if (!friendslist || friendslist.length === 0) return;
  
    const extractedData = friendslist.map(frnd => ({
      id: frnd.receiver._id,
      name: frnd.receiver.name
    }));
  
    const uniqueData = extractedData.filter(
      (value, index, self) => index === self.findIndex(obj => obj.id === value.id)
    );
  
    console.log(uniqueData);
    setUserdetail(uniqueData);
  },[]);

   
    return (

      <div className="lg:col-span-4 md:col-span-4 p-4 bg-[#391965] rounded-lg">
  <h2 className="text-lg font-semibold text-white">Friends</h2>
  <div className="col-span-1 lg:col-span-3 p-4">
            <div className="rounded-lg bg-white text-black shadow-lg p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-pink-500">
                  <img
                    src='https://unsplash.com/photos/woman-wearing-black-shirt-2rIs8OH5ng0'
                    alt="Profile Picture"
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute top-0 right-0 text-sm font-bold px-2 py-1 rounded-full">
                    ★
                  </span>
                </div>
                <h2 className="text-lg font-semibold pt-4">name</h2>
                <p className="text-gray-500 my-3 text-center">email</p>
                <p className="text-gray-500 my-3 text-center">addresh</p>
                <button
                  className="bg-pink-500 text-white px-6 py-2 rounded-full mt-3 hover:bg-pink-600 transition"
                  aria-label="Follow Jenna Smith"
                >
                  Follow
                </button>
              </div>
              
            </div>
          </div>
</div>


 
  );
}

export default Friendlist;
