import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Local
import Header from './Header'
import Content from './Content'
import Drawer from './Drawer'

class Layout extends Component {
  constructor(props) {
    super(props);
    this._drawer = React.createRef();
    this.toggle = this.toggle.bind(this)
    this.state = {open: true, variant: 'screen'}
  }
  componentDidMount(){
    if(window.innerWidth < 960){
      this.setState({ variant: 'mobile' })
      this.setState({ open: false })
    }
  }
  toggle() {
    this.setState({open: !this.state.open})
  }
  render() {
    const { children, data } = this.props
    const toggle = this.toggle
    console.log('layout open', this.state.open)
    return (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Drawer
          variant={ this.state.variant }
          breakpoint={960}
          open={ this.state.open }
          onClickModal={ () => this.setState({open: false})}
          ref={ this._drawer }
          main={ () => (
            <div>
              <Header siteTitle={data.site.siteMetadata.title} onMenuClick={ toggle } />
              <Content>
                {children}
              </Content>
              <footer>
                <p>...footer...</p>
              </footer>
            </div>
          )}
          aside={ () => (
            <aside>
              <nav>
                <ul>
                  <li>Getting Started</li>
                  <li>Changelog</li>
                  <li>Getting Started</li>
                  <li>Changelog</li>
                  <li>Getting Started</li>
                  <li>Changelog</li>
                    <li>Getting Started</li>
                    <li>Changelog</li>
                    <li>Getting Started</li>
                    <li>Changelog</li>
                    <li>Getting Started</li>
                    <li>Changelog</li>
                      <li>Getting Started</li>
                      <li>Changelog</li>
                      <li>Getting Started</li>
                      <li>Changelog</li>
                      <li>Getting Started</li>
                      <li>Changelog</li>
                        <li>Getting Started</li>
                        <li>Changelog</li>
                        <li>Getting Started</li>
                        <li>Changelog</li>
                        <li>Getting Started</li>
                        <li>Changelog</li>
                          <li>Getting Started</li>
                          <li>Changelog</li>
                          <li>Getting Started</li>
                          <li>Changelog</li>
                          <li>Getting Started</li>
                          <li>Changelog</li>
                            <li>Getting Started</li>
                            <li>Changelog</li>
                            <li>Getting Started</li>
                            <li>Changelog</li>
                            <li>Getting Started</li>
                            <li>Changelog</li>
                              <li>Getting Started</li>
                              <li>Changelog</li>
                              <li>Getting Started</li>
                              <li>Changelog</li>
                              <li>Getting Started</li>
                              <li>Changelog</li>
                </ul>
              </nav>
            </aside>
          )}
        />
      </>
    )
  }
}

const QueryLayout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout data={data} {...props} />
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default QueryLayout
