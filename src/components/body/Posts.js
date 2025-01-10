import React from 'react'
import PostCard from './PostCard'
import SideBar_profile from './SideBar_profile'
import './post.css'
 function Posts() {  

  return (
    <section >
        <div className='bg-[#391965] flex items-center justify-center text-white p-6' >
            <h1 className='text-lg font-sans font-bold  ' >
                All Posts 
            </h1>
        </div>
        <div className='py-4 px-12 bg-[url("/banner/banner_bg.png")]' >
        <div className="flex">
          
  <div className="w-1/4  h-[100vh] sticky  "> <SideBar_profile /></div> 
  <div className="w-3/4 h-[100vh] overflow-y-auto scroll_css "><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /><PostCard /></div>
  
</div>
        
        </div>
    </section>
  )
}

export default Posts