import React from 'react'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import './styles.css'

export const Locations = () => {
  return (
    <div className='location-container'>
      <div className='location'>
        <SubdirectoryArrowRightIcon className='icon-sub'/><ul>Manchester</ul>
        <SubdirectoryArrowRightIcon className='icon-sub'/><ul>New York</ul>
        <SubdirectoryArrowRightIcon className='icon-sub'/><ul>Istanbul</ul>
        <SubdirectoryArrowRightIcon className='icon-sub'/><ul>London</ul>
      </div>
    </div>
  )
}
