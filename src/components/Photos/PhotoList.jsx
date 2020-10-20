import React, { useCallback, useEffect, useState } from 'react'
import { useFetchWithProgress } from '../../hooks/useFetchWithProgress'
import { photoService } from '../../service/photoService'
import { PhotoGrid } from './PhotoGrid'

/**
 * Container for photo components.
 * It is responsible for orchestrating the components by maintaining & providing specific minimal state.
 */
export const PhotoList = () => {
  const [getPhotos, status, photosFromfetch] = useFetchWithProgress(
    photoService.getPhoto
  )
  const [photos, setPhotos] = useState()

  /**
   * Memoized callback for updating photos. It accepts an updated photo.
   */
  const updatePhoto = useCallback((updatedPhoto) => {
    console.log('Update photo', updatedPhoto)
  }, [])

  useEffect(() => {
    getPhotos()
  }, [getPhotos])
  return (
    <>
      <PhotoGrid updatePhoto={updatePhoto} photos={photosFromfetch} />
    </>
  )
}
