import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  TextField,
  Typography
} from '@material-ui/core'
import React, { useState } from 'react'

/**
 * React component for displaying a photo add form dialog.
 * @param {*} open Boolean which indicates if the dialog should be opened or closed.
 * @param {*} onCancel Callback on closing the form (cancel or click away).
 * @param {*} onAdd Callback on adding a photo.
 */
export const AddPhotoDialog = ({ open, onCancel, onAdd }) => {
  const [title, setTitle] = useState()
  const [broken, setBroken] = useState()

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Add photo</DialogTitle>
      <DialogContent>
        <DialogContentText>Add your photo here</DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Title'
          fullWidth
          onChange={(e) => {
            e.persist()
            setTitle(e.target.value)
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              color='secondary'
              onChange={(e) => {
                e.persist()
                setBroken(e.target.checked)
              }}
            />
          }
          label={
            <Typography variant='body1' color='primary'>
              Broken?
            </Typography>
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onCancel()} color='primary'>
          Cancel
        </Button>
        <Button
          onClick={() => {
            setTitle(undefined)
            setBroken(undefined)
            onAdd({ title, broken })
          }}
          color='primary'
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}
