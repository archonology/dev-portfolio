import React from "react";
import Image from 'mui-image';
import photos from "../photos";


const PhotoGallery = () => {

    return (
        <>
            {photos.map((photo) => {
                return (
                    <>
                        <div className="proj-columns">
                            <div className="proj-card card-1" style={{lineHeight: 1.5}}>
                                <a href={photo.liveLink} target={'_blank'} rel={'nonreferrer'}><Image src={photo.image} style={{ borderRadius: 16, marginBottom: 17 }} className='pics' alt={photo.title} /></a>
                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default PhotoGallery;