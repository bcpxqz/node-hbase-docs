import React, {Component} from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'
// Material UI
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
// Local
import Logo from './Logo'
import { FaBug, FaGithub, FaBars } from 'react-icons/fa';

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
      },
      '& a': {
        color: '#000',
        ':hover': {
          color: '#34BF1C',
        },
      },
    },
    grow: {
      flex: '1 1 auto',
    },
    icon: {
      marginLeft: '1rem !important',
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
          <Link to="/"><Logo /></Link>
        </div>
        <div css={[styles.item, styles.mainItem]}>
          <div css={[styles.mainContainer]}>
            <div css={styles.title}><Link to="/">Node.js HBase</Link></div>
            <div css={styles.grow} />
            <Tooltip id="header-bug" title="Report an issue" enterDelay={300}>
              <IconButton
                color="inherit"
                aria-labelledby="header-bug"
                href='https://github.com/adaltas/node-hbase/issues'
                target="_blank"
                rel="noopener"
                className={css(styles.icon).toString()}
              >
                <FaBug css={styles.menu} />
              </IconButton>
            </Tooltip>
            <Tooltip id="header-github" title="Project on GitHub" enterDelay={300}>
              <IconButton
                color="inherit"
                aria-labelledby="header-github"
                href='https://github.com/adaltas/node-hbase'
                target="_blank"
                rel="noopener"
                className={css(styles.icon).toString()}
              >
                <FaGithub css={styles.menu} />
              </IconButton>
            </Tooltip>
            <Tooltip id="header-menu" title="Toggle the menu" enterDelay={300}>
              <IconButton
                color="inherit"
                aria-labelledby="header-menu"
                onClick={onMenuClick}
                className={css(styles.icon).toString()}
              >
                <FaBars css={styles.menu} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    )
  }
} 

export default Header
