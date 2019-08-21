import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Fab, Grid } from '@material-ui/core';
import theme from '../theme';

const styles = {
  headerGrid: {
    alignItems: 'center',
    padding: '10px',
    textAlign: 'left',
  },
  headerLink: {
    color: 'rgba(29, 31, 35, 1)',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '-0.48px',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  viewYourFavoritesLink: {
    color: '#5073B3',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
  },
  findResourcesButton: {
    width: '100%',
  },
  loginAndSignUpLink: {
    color: 'black',
    fontWeight: 400,
    fontSize: '13px',
    textDecoration: 'none',
  },
  loginLinkGridItem: {
    alignItems: 'middle',
    borderRight: 'solid 0.1em rgb(0,0,0,0.12)',
    height: '2em',
    paddingRight: '5px',
    textAlign: 'right',
  },
  signupLinkGridItem: {
    paddingLeft: '5px',
  },
  leftMostGridItem: {
    textAlign: 'left',
  },
  rightMostGridItem: {
    textAlign: 'right',
  },
};

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 600,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  render() {
    const { classes } = this.props;
    const { width } = this.state;

    const isMobile = width <= 950;

    return (
      <header>
        <Grid container className={classes.headerGrid}>
          <Grid item xs={!isMobile ? 1 : 3}>
            <img
              src="/images/asylum-connect-logo.png"
              title="Asylum Connect"
              alt="Asylum Connect"
              style={{ width: '65px' }}
            />
          </Grid>
          {!isMobile && (
            <Grid item xs={1}>
              <a href="/aboutUs" className={classes.headerLink}>
                About Us
              </a>
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={1}>
              <a href="/takeAction" className={classes.headerLink}>
                Take Action
              </a>
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={1}>
              <a href="/getHelp" className={classes.headerLink}>
                Get Help
              </a>
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={1}>
              <a href="/contactUs" className={classes.headerLink}>
                Contact Us
              </a>
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={2}>
              <Fab
                variant="extended"
                size="large"
                color="primary"
                className={classes.findResourcesButton}
              >
                Find Resources
              </Fab>
            </Grid>
          )}
          <Grid item xs={!isMobile ? 2 : 3}>
            {/* TODO(tek08): Add translate object here */}
          </Grid>
          <Grid item xs={!isMobile ? 1 : 3}>
            <Grid container>
              <Grid item xs={6} className={classes.loginLinkGridItem}>
                <a href="/" className={classes.loginAndSignUpLink}>
                  Login
                </a>
              </Grid>
              <Grid item xs={6} className={classes.signupLinkGridItem}>
                <a href="/signUp" className={classes.loginAndSignUpLink}>
                  Sign up
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={!isMobile ? 2 : 3} className={classes.rightMostGridItem}>
            <a
              href="/viewYourFavorites"
              className={classes.viewYourFavoritesLink}
            >
              View Your Favorites
            </a>
          </Grid>
        </Grid>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
