import {
  IconButton,
  LinearProgress,
  makeStyles,
  Tooltip
} from '@material-ui/core'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import BuildIcon from '@material-ui/icons/Build'
import DoneIcon from '@material-ui/icons/Done'
import React, { useEffect, useState } from 'react'
import { useFetchWithProgress } from '../../hooks/useFetchWithProgress'
import { photoService } from '../../service/photoService'
import { ApiProgressWrapper } from '../ApiProgress/ApiProgressWrapper'

const useStyles = makeStyles((theme) => ({
  [`@keyframes fixPhotoEffect`]: {
    from: {
      filter: 'invert(100%)'
    },
    to: {
      filter: 'invert(0)'
    }
  },
  root: {
    padding: '4px'
  },
  broken: {
    filter: 'invert(100%)'
  },
  fixing: {
    animation: `$fixPhotoEffect 4s ease-in-out`
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.65)'
  },
  tileBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: theme.palette.primary.contrastText
  },
  title: {
    color: theme.palette.textPrimary
  },
  subtitle: {
    color: theme.palette.primary.main
  }
}))

/**
 * React component for displaying a Photo item
 * @param {*} photo The photo to display
 * @param {*} updatePhoto Callback for updating the photo
 */
export const PhotoGridItem = ({ photo, updatePhoto }) => {
  const classes = useStyles()
  const [isFixing, setIsFixing] = useState(false)
  const [
    updatePhotosRequest,
    updatePhotosRequestStatus,
    updatedPhoto
  ] = useFetchWithProgress(photoService.updatePhoto)

  //
  const doUpdatePhotoRequest = () => {
    // set img class
    setIsFixing(true)
    updatePhotosRequest(photo.id, { ...photo, ...{ failed: false } })
  }

  // Run effect with updatedPhoto state:
  useEffect(() => {
    if (updatedPhoto) {
      updatePhoto(updatedPhoto)
    }
  }, [updatedPhoto, updatePhoto])

  return (
    <>
      <GridListTile key={photo.id} className={classes.root}>
        <img
          src={photo.src}
          className={`${photo.failed ? classes.broken : ''} ${
            isFixing ? classes.fixing : ''
          }`}
          alt={photo.title}
        />
        <GridListTileBar
          classes={{
            root: classes.tileBar,
            title: classes.title,
            subtitle: classes.subtitle
          }}
          title={photo.title}
          subtitle={
            photo.failed ? (
              <>
                <ApiProgressWrapper
                  loading={updatePhotosRequestStatus}
                  loader={<LinearProgress color='primary' />}
                  render={<></>}
                />
              </>
            ) : (
              <DoneIcon color='secondary' />
            )
          }
          actionIcon={
            photo.failed && (
              <Tooltip title='Fix this photo'>
                <IconButton
                  className={classes.checkbox}
                  onClick={() => doUpdatePhotoRequest()}
                >
                  <BuildIcon className={classes.icon} />
                </IconButton>
              </Tooltip>
            )
          }
        />
      </GridListTile>
    </>
  )
}
