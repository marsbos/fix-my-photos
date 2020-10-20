import { IconButton, LinearProgress, makeStyles } from '@material-ui/core'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import BuildIcon from '@material-ui/icons/Build'
import DoneIcon from '@material-ui/icons/Done'
import React from 'react'
import { ApiProgressWrapper } from '../ApiProgress/ApiProgressWrapper'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px'
  },
  img: {
    filter: 'invert(100%)'
  },
  fix: {
    filter: 'invert(10%)'
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

  return (
    <>
      <GridListTile key={photo.id} className={classes.root}>
        <img
          src={photo.src}
          className={`${photo.failed ? classes.img : ''}`}
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
                  loader={<LinearProgress color='primary' />}
                  loading={status}
                  render={<></>}
                />
              </>
            ) : (
              <DoneIcon color='secondary' />
            )
          }
          actionIcon={
            photo.failed && (
              <IconButton
                className={classes.checkbox}
                onClick={() => updatePhoto(photo)}
              >
                <BuildIcon className={classes.icon} />
              </IconButton>
            )
          }
        />
      </GridListTile>
    </>
  )
}
