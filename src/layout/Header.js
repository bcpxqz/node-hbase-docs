import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'
import ReactTooltip from 'react-tooltip'
import Button from '../components/Button'
// Local
import Logo from './Logo'
import { FaBug, FaGithub, FaBars } from 'react-icons/fa'

class Header extends Component {
  styles = {
    container: {
      display: 'flex',
      '@media (max-width: 960px)': {
        borderBottom: '1rem solid #fff',
      },
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
      },
    },
    mainItem: {
      maxWidth: '85%',
      flexBasis: '85%',
      alignSelf: 'flex-end',
      '@media (min-width: 960px)': {
        borderBottom: '1rem solid #fff',
      },
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
    button: {
      '@media (max-width: 960px)': {
        marginLeft: '0 !important',
        width: '36px !important',
        height: '36px !important',
      },
      '@media (min-width: 960px)': {
        marginLeft: '1rem !important',
      },
    },
    icon: {
      color: '#000',
      '@media (max-width: 960px)': {
        width: '1.3rem',
        height: '1.3rem',
      },
      '@media (min-width: 960px)': {
        width: '2rem',
        height: '2rem',
      },
    },
  }
  render() {
    const { onMenuClick } = this.props
    const { styles } = this
    return (
      <div css={styles.container}>
        <div css={[styles.item, styles.logoItem]}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div css={[styles.item, styles.mainItem]}>
          <div css={[styles.mainContainer]}>
            <div css={styles.title}>
              <Link to="/">Node.js HBase</Link>
            </div>
            <div css={styles.grow} />
            <Button
              color="inherit"
              aria-label="header-bug"
              data-for="header-menu"
              data-tip="Report an issue"
              href="https://github.com/adaltas/node-hbase/issues"
              target="_blank"
              rel="noopener"
              className={css(styles.button).toString()}
            >
              <FaBug css={styles.icon} />
            </Button>
            <Button
              color="inherit"
              aria-label="header-github"
              data-for="header-menu"
              data-tip="Toggle the menu"
              href="https://github.com/adaltas/node-hbase"
              target="_blank"
              rel="noopener"
              className={css(styles.button).toString()}
            >
              <FaGithub css={styles.icon} />
            </Button>
            <Button
              aria-label="header-menu"
              data-for="header-menu"
              data-tip="Toggle the menu"
              onClick={onMenuClick}
              className={css(styles.button).toString()}
            >
              <FaBars css={styles.icon} />
            </Button>
            <ReactTooltip
              id="header-menu"
              delayShow={300}
              place="bottom"
              effect="solid"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
