import React, {Component} from 'react'
// import { Link } from 'gatsby'
// Material UI
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  content: {
    maxWidth: 800
  }
})

class Content extends Component {
  render () {
    const {classes, children} = this.props
    return (
      <div>
        <Grid container>
          <Grid item xs={2} />
          <Grid item xs={10}>
            <article className={classes.content}>
              {children}
            </article>
          </Grid>
        </Grid>
      </div>
    )
  }
} 

export default withStyles(styles)(Content)
