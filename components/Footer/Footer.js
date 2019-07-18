import React from 'react';
import { Link } from '../../routes';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import theme from '../theme';

const styles = {
    footerLink: {
      color: theme.palette.primary.dark
    },
    footerStrong: {
      fontWeight: '700',
      textDecoration: 'none'
    },
    footerTop: {
      padding: '30px 0',
      backgroundColor: theme.palette.background.grey,
      fontSize: '1.2em',
    },
    footerBottom: {
      padding: '30px 0px',
    }
}

const Footer = (props) => {
  const { classes } = props;

  return (
    <footer>
      <div className={classes.footerTop}>
        <Container maxWidth="md">
          <Grid container>
            <Grid container justify="flex-start" spacing={1} item xs={12} sm={3}>
              <Grid item>
                <a className={classes.footerLink} href="https://www.facebook.com/asylumconnect" target="_blank"><span aria-hidden="true" className="fa fa-facebook-f fa-lg"></span></a>
              </Grid>
              <Grid item>
                <a className={classes.footerLink} href="https://twitter.com/AsylumConnect" target="_blank"><span aria-hidden="true" className="fa fa-twitter fa-lg"></span></a>
              </Grid>
              <Grid item>
                <a className={classes.footerLink} href="https://www.linkedin.com/company/6454603/" target="_blank"><span aria-hidden="true" className="fa fa-linkedin fa-lg"></span></a>
              </Grid>
              <Grid item>
                <a className={classes.footerLink} href="mailto:catalog@asylumconnect.org" target="_blank"><span aria-hidden="true" className="fa fa-envelope-o fa-lg"></span></a>
              </Grid>
              <Grid item>
                <a className={classes.footerLink} href="https://www.instagram.com/asylumconnect/" target="_blank"><span aria-hidden="true" className="fa fa-instagram fa-lg"></span></a>
              </Grid>
              <Grid item>
                <a className={classes.footerLink} href="https://www.youtube.com/channel/UCJsVS5-0ymo40mRjCe4BIHA" target="_blank"><span aria-hidden="true" className="fa fa-youtube-play fa-lg"></span></a>
              </Grid>
            </Grid>
            <Grid container item justify="flex-end" spacing={3} xs={12} sm={9}>
              <Grid item>
                <a className={`${classes.footerLink} ${classes.footerStrong}`} href="/en_US/suggestions/new">Suggest a Resource</a>
              </Grid>
              <Grid item>
                <a className={`${classes.footerLink} ${classes.footerStrong}`} href="https://survey.az1.qualtrics.com/jfe/form/SV_4JylCyjAklvKGVL">Share Feedback</a>
              </Grid>
              <Grid item>
                <a className={`${classes.footerLink} ${classes.footerStrong}`} href="https://www.asylumconnect.org/follow-us-subscribe">Subscribe to our Newletter</a>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footerBottom}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center">AsylumConnect, Inc. 2019. All rights reserved. <a className={classes.footerLink} href="https://www.1degree.org">Powered by One Degree</a>.</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </footer>
  )

};

export default withStyles(styles)(Footer);
