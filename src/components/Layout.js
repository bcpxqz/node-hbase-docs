import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Local
import Header from './Header'
import Content from './Content'
import Drawer from './Drawer'
import Menu from './Menu'

class Layout extends Component {
  styles = {
    drawer: {
      backgroundColor: '#EBEBEB',
    }
  }
  constructor(props) {
    super(props);
    this._drawer = React.createRef();
    this.toggle = this.toggle.bind(this)
    this.state = {open: true, breakpoint: 960}
  }
  componentDidMount(){
    if(window.innerWidth < this.state.breakpoint){
      this.setState({ open: false })
    }
  }
  toggle() {
    this.setState({open: !this.state.open})
  }
  render() {
    const { children, data } = this.props
    const {styles} = this
    const toggle = this.toggle
    const clickLink = () => {
      if(window.innerWidth < this.state.breakpoint){
        this.setState({ open: false })
      }
    }
    const pages = data.pages.edges.map( (page) => {
      return {...page.node.fields, ...page.node.frontmatter}
    })
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
          breakpoint={this.state.breakpoint}
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
          drawer={ () => (
            <Menu pages={pages} styles={styles.drawer} onClickLink={ clickLink } />
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
        site: site {
          siteMetadata {
            title
          }
        }
        pages: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___sort] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                sort
              }
              fields {
                slug
              }
            }
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
