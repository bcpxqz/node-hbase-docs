

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
})

const typography = new Typography(theme)

export default typography;
