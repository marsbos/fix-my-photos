import { CircularProgress } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useFetchWithProgress } from '../../hooks/useFetchWithProgress'
import { photoService } from '../../service/photoService'
import { ApiProgressWrapper } from '../ApiProgress/ApiProgressWrapper'
import { MenuBar } from '../Menu/MenuBar'
import { PhotoGrid } from './PhotoGrid'
import { PhotoFilters } from './PhotoFilters'
import { photoFilter } from '../filters/photoFilters'

/**
 * Container for photo components.
 * It is responsible for orchestrating the components by maintaining & providing specific minimal state.
 */
export const PhotoList = () => {
  const [getPhotos, status, photosFromFetch] = useFetchWithProgress(
    photoService.getPhoto
  )
  const [photos, setPhotos] = useState()

  // The filter is an object containing keys which are the same as the photo object keys/fields.
  // The photoFilter function accepts this filter as an argument.
  // When dealing with large lists, filtering and sorting should be moved to the backend.
  const [filter, setFilter] = useState()

  /**
   * Memoized callback for updating photos. It accepts an updated photo.
   */
  const updatePhoto = useCallback((updatedPhoto) => {
    console.log('Update photo', updatedPhoto)
  }, [])

  useEffect(() => {
    if (photosFromFetch) {
      if (filter) {
        setPhotos([...photosFromFetch.filter(photoFilter(filter))])
      } else {
        setPhotos([...photosFromFetch])
      }
    }
  }, [photosFromFetch, filter])

  useEffect(() => {
    getPhotos()
  }, [getPhotos])

  return (
    <>
      <MenuBar
        title='Fix-My-Photos'
        photoFilters={<PhotoFilters setFilter={setFilter} />}
      />
      <ApiProgressWrapper
        loading={status}
        loader={<CircularProgress color='secondary' />}
        render={<PhotoGrid updatePhoto={updatePhoto} photos={photos} />}
      />
    </>
  )
}
