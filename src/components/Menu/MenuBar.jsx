import { makeStyles, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
    padding: '24px',
    flexGrow: 1,
    gap: '12px'
  }
}))

/**
 * Component menu placeholder for menu-items.
 * @param {*} title The title to display.
 * @param {*} searchPhoto The search photo component.
 * @param {*} addPhoto The add photo component.
 */
export const MenuBar = ({ title, photoFilters, addPhoto }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction='row'
        justify='space-between'
        alignItems='center'
      >
        <Grid item xs={2}>
          <Typography color='secondary' variant='h5'>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          {photoFilters}
        </Grid>
        <Grid item xs={3}>
          {addPhoto}
        </Grid>
      </Grid>
    </div>
  )
}
