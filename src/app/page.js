import Banner from '@/components/body/Banner'
import Posts from '@/components/body/Posts'
import React, { Suspense } from 'react'
import MyPosts from './posts/page'

function page() {
  return (
   <>
   <Banner />
      <Posts />
   </>
  )
}

export default page