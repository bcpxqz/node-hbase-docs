

import Typography from "typography";
import theme from 'typography-theme-grand-view'

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1': {
    textAlign: 'center',
  },
  'h2': {
    borderBottom: '.5rem solid #fff',
    lineHeight: rhythm(1.5),
  },
  'main a': {
    textDecoration: 'underline',
    color: '#000',
  },
  'main a:hover,a:active': {
    color: '#d65947',
  },
})

const typography = new Typography(theme)

export default typography;
