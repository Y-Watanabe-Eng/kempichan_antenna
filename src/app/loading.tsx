import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      <div className='pt-4'>
        <span>Loading...</span>
      </div>
    </>
  );
}