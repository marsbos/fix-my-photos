import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { PhotoList } from './Photos/PhotoList'

/**
 * The default theme for this app.
 * It only has 2 colors.
 */
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#777',
      contrastText: '#f5f5f5'
    },
    secondary: {
      main: '#e64a19',
      contrastText: '#ffffff'
    }
  }
})

/**
 * The App ;)
 * Wrapped inside a MuiThemeProvider.
 */
export const App = () => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <PhotoList />
    </MuiThemeProvider>
  )
}
