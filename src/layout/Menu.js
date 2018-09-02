import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from 'glamor'

class Menu extends Component {
  styles = {
    root: {
      position: 'relative',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      height: '100% ',
      borderRight: '1rem solid #fff',
      '& div': {
        boxSizing: 'border-box',
        width: '100%',
      },
      '& nav': {
        margin: '0 0 1rem 0',
      },
      '& h1': {
        margin: '0 0 .5rem 0',
        padding: '0 1rem 0 1rem',
        color: '#9B9B9B',
        fontFamily: 'Arvo sans-serif',
        fontWeight: 'normal',
        fontSize: '1.4rem',
        textAlign: 'left',
      },
      '& ul': {
        margin: 0,
      },
    },
    linkContainer: {
      margin: 0,
    },
    li: {
      margin: 0,
      padding: 0,
      textIndent: 0,
      listStyleType: 'none',
    },
    link: {
      display: 'block',
      padding: '0 1rem 0 1rem',
      color: 'hsla(0,0%,0%,0.8)',
      ':hover': {
        backgroundColor: '#fff',
      },
    },
    linkActive: {
      color: '#34BF1C',
      ':hover': {
        cursor: 'default',
        color: '#34BF1C',
        backgroundColor: 'inherit',
      },
    },
  }
  render() {
    const { pages, onClickLink } = this.props
    const { styles } = this
    return (
      <aside css={[styles.root, this.props.styles]}>
        <nav>
          <h1>Lean more</h1>
          <ul>
            {[
              <li key="/" css={styles.li}>
                <Link
                  to="/"
                  className={css(styles.link).toString()}
                  activeClassName={css(styles.linkActive).toString()}
                  onClick={onClickLink}
                >
                  Homepage
                </Link>
              </li>,
              ...pages.map(
                page =>
                  /^\/learn/.test(page.slug) && (
                    <li key={page.slug} css={styles.li}>
                      <Link
                        to={page.slug}
                        className={css(styles.link).toString()}
                        activeClassName={css(styles.linkActive).toString()}
                        onClick={onClickLink}
                      >
                        {page.title}
                      </Link>
                    </li>
                  )
              ),
            ]}
          </ul>
        </nav>
        <nav>
          <h1>API</h1>
          <ul>
            {pages.map(
              page =>
                /^\/api/.test(page.slug) && (
                  <li key={page.slug} css={styles.li}>
                    <Link
                      to={page.slug}
                      className={css(styles.link).toString()}
                      activeClassName={css(styles.linkActive).toString()}
                      onClick={onClickLink}
                    >
                      {page.title}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Menu
