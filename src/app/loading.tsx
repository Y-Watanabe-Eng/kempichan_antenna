"use client"

import './globals.css'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function Loading() {

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div id='spiner' className='w-full h-screen flex-col flex items-center justify-center'>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      <div className='pt-4'>
        <span className='animate-pulse'>Loading...</span>
      </div>
    </div>
    </>
  );
}