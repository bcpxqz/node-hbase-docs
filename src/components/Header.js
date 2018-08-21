import React, {Component} from 'react'
// import { Link } from 'gatsby'
// Material UI
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
// import Tooltip from '@material-ui/core/Tooltip'
import MenuIcon from '@material-ui/icons/Menu'
// import SvgIcon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid'
// Local
import Logo from './Logo'

const styles = theme => ({
  logoCell: {
    // margin: '10px',
    padding: '.5rem 2rem 0 2rem',
    '@media (max-width: 1000px)': {
      padding: '.5rem .5rem 0 .5rem',
    }
  },
  logo: {
    width: '20%',
  },
  titleCell: {
    alignSelf: "flex-end",
    borderBottom: "1rem solid #fff",
  },
  titleCellInner: {
    maxWidth: 800,
    display: 'flex',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  grow: {
    flex: '1 1 auto',
  },
})

class Header extends Component {
  render () {
    const {classes, onMenuClick} = this.props
    // const onMenuClick = () => {
    //   console.log('onMenuClick')
    // }
    return (
      <div>
        <Grid container>
          <Grid item xs={2} className={classes.logoCell}>
            <Logo className={classes.logo} />
          </Grid>
          <Grid item xs={10} className={classes.titleCell}>
            <div className={classes.titleCellInner}>
              <div className={classes.title}>Node.js HBase</div>
              <div className={classes.grow} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onMenuClick}
                className={classes.icon}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
} 

export default withStyles(styles)(Header)
