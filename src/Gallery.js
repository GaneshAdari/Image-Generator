import React from 'react'

const Gallery = ({data}) => {
  return (
    <div className='gallery-container'>
      <div className="row">
        {data.map((image, index) =>
          <div key={image.id} className="gallery-item">
            <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.title} height="200" width="250" className='gallery-image'/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
