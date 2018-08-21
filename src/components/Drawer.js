import React, {Component} from 'react'
import classNames from 'classnames'
import Modal from 'react-modal'

// Material UI
import { withStyles } from '@material-ui/core/styles'
// import Modal from '@material-ui/core/Modal'

const styles = theme => ({
  main: {
    position: 'relative',
    margin: 0,
    paddingLeft: 250,
    // overflow: 'auto',
    backgroundColor: "#F2F2F2",
    '@media (max-width: 960px)': {
      paddingLeft: 0,
    },
  },
  mainClose: {
    paddingLeft: 0,
    left: 0,
  },
  mainOpen: {
    '@media (min-width: 960px)': {
      paddingLeft: '250px',
      transition: theme.transitions.create('padding-left', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    '@media (max-width: 960px)': {
      left: '250px',
      transition: theme.transitions.create('left', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  aside: {
    position: 'fixed',
    top: 0,
    // bottom: 0,
    height: '100vh',
    left: 0,
    width: '250px',
    backgroundColor: '#ccc',
    overflow: 'auto',
    '@media (max-width: 960px)': {
      left: '-250px',
    },
  },
  asideClose: {
    left: '-250px',
  },
  asideOpen: {
    left: 0,
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  asideOpenModal: {
    '&.ReactModal__Content--after-open': {
      left: 0,
      transition: theme.transitions.create('left', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
})

class Drawer extends Component {
  render() {
    const { aside, main, open, classes } = this.props
    const AsideProps = aside
    const MainProps = main
    const isMobile = this.props.variant === 'mobile'
    // if(isMobile){
    //   document.body.style['height'] = '100vh'
    //   document.body.style['overflow'] = this.props.open ? 'hidden' : 'auto'
    // }
    const isWindow = typeof window !== `undefined`
    return (
      <div>
        <main className={classNames(classes.main, { [classes.mainOpen]: isWindow && open, [classes.mainClose]: isWindow && !open })}>
          <MainProps />
        </main>
        { (isWindow && isMobile) ?
          <Modal
            isOpen={ open }
            onRequestClose={ this.props.onClickModal }
            className={classNames(classes.aside, { [classes.asideOpenModal]: isWindow && open, [classes.asideClose]: isWindow && !open })}
            overlayClassName={classes.overlay}
            aria={{labelledby: "Menu", describedby: "Navigate through the site"}}
          >
            <aside>
              <AsideProps />
            </aside>
          </Modal>
          :
          <aside
            className={classNames(classes.aside, { [classes.asideOpen]: isWindow && open, [classes.asideClose]: isWindow && !open })}
          >
            <AsideProps />
          </aside>
        }
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Drawer)
