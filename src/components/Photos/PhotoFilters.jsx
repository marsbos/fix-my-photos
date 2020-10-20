import {
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography
} from '@material-ui/core'
import React, { useCallback, useMemo } from 'react'

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.secondary.primary
  }
}))

/**
 * Filter component for filerting/searching photos.
 * When this grows larger, then it is wise to split this into multiple filter components.
 * @param {*} setFilter The callback for setting a filter on the parent.
 */
export const PhotoFilters = ({ setFilter }) => {
  const classes = useStyles()

  const setFilterValue = useCallback(
    (key) => (value) => setFilter((f) => ({ ...f, ...{ [key]: value } })),
    [setFilter]
  )
  const setFailedFilter = useMemo(() => setFilterValue('failed'), [
    setFilterValue
  ])

  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={(evt) => setFailedFilter(evt.target.checked)}
          color='secondary'
        />
      }
      label={
        <Typography variant='body1' color='primary' className={classes.label}>
          Broken photos only
        </Typography>
      }
    />
  )
}
