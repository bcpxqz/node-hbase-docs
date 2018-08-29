

import Typography from "typography";
import theme from 'typography-theme-grand-view'

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'article h1': {
    textAlign: 'center',
  },
  'article h2': {
    borderBottom: '.5rem solid #fff',
    lineHeight: rhythm(1.5),
  },
  'article a': {
    textDecoration: 'underline',
    color: '#000',
  },
  'article a:hover,a:active': {
    color: '#d65947',
  },
})

const typography = new Typography(theme)

export default typography;
