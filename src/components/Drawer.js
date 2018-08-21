import React, {Component} from 'react'
import classNames from 'classnames'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'

const styles = theme => ({
  aside: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '-250px',
    width: '250px',
    backgroundColor: '#ccc',
    // height: '100%',
    overflow: 'auto',
  },
  asideOpen: {
    left: 0,
    width: '250px',
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  overflowOpen: {
    '@media (max-width: 800px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .6)'
    },
  },
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    // right: 0,
    width: '100%',
    bottom: 0,
    // height: '100%',
    overflow: 'auto',
    backgroundColor: "#F2F2F2"
  },
  mainOpen: {
    left: '250px',
    transition: theme.transitions.create('left', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '@media (min-width: 800px)': {
      left: '250px',
    },
  }
})

class Drawer extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { open: false };
  //   // this.toggle = this.toggle.bind(this)
  // }
  // componentDidMount(){
  //   const {open} = this.props;
  //   if(open !== undefined && window.innerWidth > 800){
  //     this.setState({ open: open })
  //   }
  // }
  // <div className={classNames({[classes.overflowOpen]: open})} onClick={ this.props.onModalClose } />
  // <aside className={classNames(classes.aside, { [classes.asideOpen]: open })}>
  //   <AsideProps />
  // </aside>
  render() {
    const { aside, main, open, classes } = this.props
    const AsideProps = aside
    const MainProps = main
    console.log('this.props.open', open)
    return (
      <div>
        <main className={classNames(classes.main, { [classes.mainOpen]: open })}>
          <MainProps />
        </main>
        <div className={classNames(classes.overflow, { [classes.overflowOpen]: open })} onClick={ this.props.onClickModal } />
        <aside className={classNames(classes.aside, { [classes.asideOpen]: open })}>
          <AsideProps />
        </aside>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Drawer)
