import React, { FC } from 'react'
import Pagination from '@mui/material/Pagination';

interface iPaginationComponent{
  count: number;
  shape?: 'rounded' | 'circular';
}

const PaginationComponent: FC<iPaginationComponent> = ({count, shape}) => {
  return (
    <Pagination count={10} shape={shape || 'rounded'} />
  )
}

export default PaginationComponent