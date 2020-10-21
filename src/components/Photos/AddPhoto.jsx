import { Button, CircularProgress } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React, { useCallback, useEffect, useState } from 'react'
import { useFetchWithProgress } from '../../hooks/useFetchWithProgress'
import { photoService } from '../../service/photoService'
import { ApiProgressWrapper } from '../ApiProgress/ApiProgressWrapper'
import { AddPhotoDialog } from './AddPhotoDialog'

/**
 * React component for handling an add photo dialog.
 * It takes care of opening and closing the dialog as well as posting to the Photo API.
 * @param {*} onAddPhoto The callback which will be called when a photo has been added.
 */
export const AddPhoto = ({ onAddPhoto }) => {
  const [
    addPhotoPostRequest,
    addPhotoPostRequestStatus,
    addedPhoto
  ] = useFetchWithProgress(photoService.addPhoto)
  const [open, setOpen] = useState(false)
  const [newPhoto, setNewPhoto] = useState()

  const closeWithCallback = useCallback(
    (closeFn) => (args) => {
      setOpen(false)
      if (closeFn) {
        closeFn(args)
      }
    },
    []
  )
  // Sets newPhoto state
  const onAddClose = useCallback((photo) => {
    setNewPhoto(photo)
  }, [])

  // Run effect with this state: newPhoto, add.
  useEffect(() => {
    if (newPhoto) {
      // post request:
      addPhotoPostRequest({
        ...newPhoto,
        ...{
          src: 'https://picsum.photos/300/180',
          failed: newPhoto.failed
        }
      })
    }
  }, [newPhoto, addPhotoPostRequest])

  // Run effect with this state: addedPhoto, onAddPhoto.
  useEffect(() => {
    if (addedPhoto) {
      onAddPhoto(addedPhoto)
    }
  }, [addedPhoto, onAddPhoto])

  return (
    <>
      <Button
        onClick={() => setOpen((opened) => !opened)}
        color='secondary'
        startIcon={<Add />}
      >
        <ApiProgressWrapper
          loading={addPhotoPostRequestStatus}
          loader={<CircularProgress fontSize='small' color='primary' />}
          render={<></>}
        />
        Add
      </Button>
      <AddPhotoDialog
        open={open}
        onCancel={closeWithCallback()}
        onAdd={closeWithCallback(onAddClose)}
      />
    </>
  )
}
