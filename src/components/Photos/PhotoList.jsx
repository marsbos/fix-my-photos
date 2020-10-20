import { CircularProgress } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useFetchWithProgress } from '../../hooks/useFetchWithProgress'
import { photoService } from '../../service/photoService'
import { ApiProgressWrapper } from '../ApiProgress/ApiProgressWrapper'
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
    if (photosFromfetch) {
      setPhotos([...photosFromfetch])
    }
  }, [photosFromfetch])

  useEffect(() => {
    getPhotos()
  }, [getPhotos])
  return (
    <>
      <ApiProgressWrapper
        loading={status}
        loader={<CircularProgress color='secondary' />}
        render={<PhotoGrid updatePhoto={updatePhoto} photos={photos} />}
      />
    </>
  )
}
