import React from 'react'
import galleryImages from './galleryImages'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
const MonsoryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1rem'>
            {
                galleryImages.map((item, ind)=>(
                    <img 
                        className='masonry__img'
                    src={item} key={ind} alt="" style={{'width' : "100%", 'display':'block', 'borderRadius':'10px'}}/>
                ))
            }
        </Masonry>
      
    </ResponsiveMasonry>
  )
}

export default MonsoryImagesGallery
