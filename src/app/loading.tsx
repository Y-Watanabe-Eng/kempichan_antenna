"use client"

import './globals.css'


export default function Loading() {

  return (
    <div id='spiner' className='w-full h-screen flex-col flex items-center justify-center'>
      <div className='pt-4'>
        <span className='animate-pulse'>Loading...</span>
      </div>
    </div>
  );

}