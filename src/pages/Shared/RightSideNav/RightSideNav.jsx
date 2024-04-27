import { Button } from '@/components/ui/button'
import React from 'react'
// import BrandCarousel from '../BrandCarousel/BrandCarousel'

const RightSideNav = () => {
  return (
    <div className='pl-24 space-y-5'>
        <div className='grid gap-1 w-[40%]'>
            <Button variant='outline'>Login with Google</Button>
            <Button variant='outline'>Login with Github</Button>
        </div>
        <div className='grid gap-2 pr-8 '>
            <h3 className='text-lg font-medium'>Find us on</h3>
            <Button variant='secondary'>Facebook</Button>
            <Button variant='secondary'>Whats app</Button>
            <Button variant='secondary'>Twitter</Button>
            <Button variant='secondary'>Instagram</Button>
            <Button variant='secondary'>Twitch</Button>
            <Button variant='secondary'>Pinterest</Button>
        </div>
        <div>
            {/* <BrandCarousel/> */}
            <div className='w-full h-[150px] bg-blue-200'>
              <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default RightSideNav