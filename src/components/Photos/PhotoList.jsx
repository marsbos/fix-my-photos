import { CircularProgress } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useFetchWithProgress } from '../../hooks/useFetchWithProgress'
import { photoService } from '../../service/photoService'
import { ApiProgressWrapper } from '../ApiProgress/ApiProgressWrapper'
import { MenuBar } from '../Menu/MenuBar'
import { PhotoGrid } from './PhotoGrid'
import { PhotoFilters } from './PhotoFilters'
import { photoFilter } from '../filters/photoFilters'
import { AddPhoto } from './AddPhoto'
import { PhotoGridItem } from './PhotoGridItem'

/**
 * Container for photo components.
 * It is responsible for orchestrating the components,
 * by maintaining & providing specific minimal state & callback functions.
 */
export const PhotoList = () => {
  const [
    getPhotosRequest,
    getPhotosRequestStatus,
    photosFromFetch
  ] = useFetchWithProgress(photoService.getPhoto)
  const [photos, setPhotos] = useState()

  // The filter is an object containing keys which are the same as the photo object keys/fields.
  // The photoFilter function accepts this filter as an argument.
  // When dealing with large lists, filtering and sorting should be moved to the backend.
  const [filter, setFilter] = useState()

  /**
   * Memoized callback for updating photos. It accepts an updated photo.
   */
  const updatePhoto = useCallback(
    (updatedPhoto) => {
      // Photo is updated, we only need to re-fetch
      console.log('Photo is updated', updatedPhoto)
      getPhotosRequest()
    },
    [getPhotosRequest]
  )

  /**
   * Memoized callback for adding photos.
   */
  const addPhoto = useCallback(
    (addedPhoto) => {
      // New photo is added, we only need to re-fetch
      console.log('Photo is added', addedPhoto)
      getPhotosRequest()
    },
    [getPhotosRequest]
  )

  // Run effect with this state: photosFromFetch, filter.
  // If photos are being fetched, the filter is 'automatically' run because of the statefull filter.
  useEffect(() => {
    if (photosFromFetch) {
      if (filter) {
        setPhotos([...photosFromFetch.filter(photoFilter(filter))])
      } else {
        setPhotos([...photosFromFetch])
      }
    }
  }, [photosFromFetch, filter])

  // Run effect with this state: getPhotos.
  useEffect(() => {
    getPhotosRequest()
  }, [getPhotosRequest])

  return (
    <>
      <MenuBar
        title='Fix-My-Photos'
        addPhoto={<AddPhoto onAddPhoto={addPhoto} />}
        photoFilters={<PhotoFilters setFilter={setFilter} />}
      />
      <ApiProgressWrapper
        loading={getPhotosRequestStatus}
        loader={<CircularProgress color='secondary' />}
        render={
          <PhotoGrid>
            {photos &&
              photos.map((photo, idx) => (
                <PhotoGridItem
                  key={idx}
                  photo={photo}
                  updatePhoto={updatePhoto}
                />
              ))}
          </PhotoGrid>
        }
      />
    </>
  )
}
