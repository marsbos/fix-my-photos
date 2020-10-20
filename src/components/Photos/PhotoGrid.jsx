import { Grid } from '@material-ui/core'
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
 * @param {*} children The children to render.
 */
export const PhotoGrid = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.photoContainer}>
      <Grid container justify='space-evenly' alignItems='center'>
        <GridList cellHeight={180} className={classes.gridList}>
          {children}
        </GridList>
      </Grid>
    </div>
  )
}
