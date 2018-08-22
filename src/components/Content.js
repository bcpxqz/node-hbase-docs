import React, {Component} from 'react'

class Content extends Component {
  styles = {
    container: {
      maxWidth: 800,
      '@media (max-width: 960px)': {
        margin: '1rem',
      },
      '@media (min-width: 960px)': {
        margin: '0 2rem 0 15%',
        textAlign: 'justify',
      },
    }
  }
  render () {
    const {children} = this.props
    return (
      <article css={this.styles.container}>
        {children}
      </article>
    )
  }
} 

export default Content
