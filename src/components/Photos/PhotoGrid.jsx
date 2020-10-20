import { Grid, Typography } from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

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
export const PhotoGrid = ({ photos }) => {
  const classes = useStyles()
  console.log('PhotoGrid', photos)

  return (
    <div className={classes.photoContainer}>
      <Grid container justify='space-evenly' alignItems='center'>
        <GridList cellHeight={180} className={classes.gridList}>
          <Typography variant='body1' color='primary'>
            My photos
          </Typography>
          {photos && photos.map((photo) => <p>{photo.title}</p>)}
        </GridList>
      </Grid>
    </div>
  )
}
