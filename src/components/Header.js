import React, {Component} from 'react'
// import { Link } from 'gatsby'
// Material UI
import IconButton from '@material-ui/core/IconButton'
// Local
import Logo from './Logo'
import { FaBars } from 'react-icons/fa';

class Header extends Component {
  styles = {
    container: {
      display: 'flex',
      '@media (max-width: 960px)': {
        borderBottom: "1rem solid #fff",
      }
    },
    item: {
      boxSizing: 'border-box',
    },
    logoItem: {
      flexGrow: 0,
      maxWidth: '15%',
      flexBasis: '15%',
      padding: '.5rem 2rem 0 2rem',
      '@media (max-width: 960px)': {
        padding: '.5rem .5rem 0 .5rem',
      }
    },
    mainItem: {
      maxWidth: '85%',
      flexBasis: '85%',
      alignSelf: "flex-end",
      '@media (min-width: 960px)': {
        borderBottom: "1rem solid #fff",
      }
    },
    mainContainer: {
      display: 'flex',
      maxWidth: 800,
      alignItems: 'center',
      '@media (max-width: 960px)': {
        marginRight: '1rem',
      },
      '@media (min-width: 960px)': {
        marginRight: '2rem',
      },
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      '@media (max-width: 400px)': {
        fontSize: '1.4rem',
      }
    },
    grow: {
      flex: '1 1 auto',
    },
    menu: {
      '@media (max-width: 960px)': {
        width: '1.4rem',
        height: '1.4rem',
      },
      '@media (min-width: 960px)': {
        width: '2rem',
        height: '2rem',
      },
    },
  }
  render () {
    const {onMenuClick} = this.props
    const {styles} = this
    return (
      <div css={styles.container}>
        <div css={[styles.item, styles.logoItem]}>
          <Logo />
        </div>
        <div css={[styles.item, styles.mainItem]}>
          <div css={[styles.mainContainer]}>
            <div css={styles.title}>Node.js HBase</div>
            <div css={styles.grow} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onMenuClick}
              css={styles.icon}
            >
              <FaBars css={styles.menu} />
            </IconButton>
          </div>
        </div>
      </div>
    )
  }
} 

export default Header
