import React, {Component} from 'react'
import Modal from 'react-modal'
import {css} from 'glamor'

class Drawer extends Component {
  styles = {
    main: {
      position: 'relative',
      margin: 0,
      paddingLeft: 250,
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
        transition: 'padding-left 225ms cubic-bezier(0.0, 0, 0.2, 1)',
      },
      '@media (max-width: 960px)': {
        left: '250px',
        transition: 'left 225ms cubic-bezier(0.0, 0, 0.2, 1)',
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
      transition: 'left 225ms cubic-bezier(0.0, 0, 0.2, 1)',
    },
    asideOpenModal: {
      '.ReactModal__Content--after-open': {
        left: 0,
        transition: 'left 225ms cubic-bezier(0.0, 0, 0.2, 1)',
      }
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .6)',
    }
  }
  constructor(props) {
    super(props)
    this.state = { isMobile: false }
    this.main = React.createRef()
  }
  componentDidMount(){
      if(window.innerWidth < this.props.breakpoint){
      this.setState({ isMobile: true })
    }
  }
  render() {
    const { aside, main, open } = this.props
    const {isMobile} = this.state
    const AsideProps = aside
    const MainProps = main
    const isWindow = typeof window !== `undefined`
    return (
      <div>
        <main ref={this.main} css={[this.styles.main, isWindow && open && this.styles.mainOpen, isWindow && !open && this.styles.mainClose]}>
          <MainProps />
        </main>
        { (isWindow && isMobile) ?
          <Modal
            isOpen={ open }
            onRequestClose={ this.props.onClickModal }
            aria={{labelledby: "Menu", describedby: "Navigate through the site"}}
            appElement={this.main.current}
            className={css([this.styles.aside, isWindow && open && this.styles.asideOpenModal, isWindow && !open && this.styles.asideClose]).toString()}
            overlayClassName={css(this.styles.overlay).toString()}
          >
            <aside>
              <AsideProps />
            </aside>
          </Modal>
          :
          <aside
            css={[this.styles.aside, isWindow && open && this.styles.asideOpen, isWindow && !open && this.styles.asideClose]}
          >
            <AsideProps />
          </aside>
        }
      </div>
    )
  }
}

export default Drawer
