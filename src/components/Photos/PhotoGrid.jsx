import { Grid } from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { PhotoGridItem } from './PhotoGridItem'

const useStyles = makeStyles(() => ({
  photoContainer: {
    marginTop: '12px',
    padding: '24px',
    alignItems: 'center'
  },
  gridList: {
    width: '100vw',
    height: '80vh'
  }
}))

/**
 * Component for displaying a grid with photo items.
 * @param {*} photos A list of photo objects.
 */
export const PhotoGrid = ({ photos, updatePhoto }) => {
  const classes = useStyles()

  return (
    <div className={classes.photoContainer}>
      <Grid container justify='space-evenly' alignItems='center'>
        <GridList cellHeight={180} className={classes.gridList}>
          {photos &&
            photos.map((photo, idx) => (
              <PhotoGridItem
                updatePhoto={updatePhoto}
                key={idx}
                photo={photo}
              />
            ))}
        </GridList>
      </Grid>
    </div>
  )
}
