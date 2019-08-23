import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Fab, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    whiteSpace: 'nowrap',
  },
  viewYourFavoritesLink: {
    color: '#5073B3',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
  },
  findResourcesButton: {
    width: '200px',
    textAlign: 'center',
  },
  loginAndSignUpLink: {
    color: 'black',
    fontWeight: 400,
    fontSize: '13px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
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

const MOBILE_WIDTH_MAX = 1000;

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      width: MOBILE_WIDTH_MAX,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.handleWindowSizeChange();
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

    const isWideEnoughToShowHeaderLinks = width >= MOBILE_WIDTH_MAX;

    return (
      <header>
        <Grid container className={classes.headerGrid}>
          <Grid item xs={1}>
            <img
              src="/images/asylum-connect-logo.png"
              title="Asylum Connect"
              alt="Asylum Connect"
              style={{ width: '65px' }}
            />
          </Grid>

          {isWideEnoughToShowHeaderLinks && (
            <Grid item xs={4}>
              <List component="nav">
                <ListItem component="div">
                  <ListItemText>
                    <a href="/aboutUs" className={classes.headerLink}>
                      About Us
                    </a>
                  </ListItemText>

                  <ListItemText>
                    <a href="/takeAction" className={classes.headerLink}>
                      Take Action
                    </a>
                  </ListItemText>

                  <ListItemText>
                    <a href="/getHelp" className={classes.headerLink}>
                      Get Help
                    </a>
                  </ListItemText>

                  <ListItemText>
                    <a href="/contactUs" className={classes.headerLink}>
                      Contact Us
                    </a>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          )}
          {isWideEnoughToShowHeaderLinks && (
            <Grid item xs={1}>
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
          <Grid item xs={isWideEnoughToShowHeaderLinks ? 1 : 4}>
            {/* TODO(tek08): Add translate object here */}
          </Grid>
          <Grid item xs={isWideEnoughToShowHeaderLinks ? 3 : 5}>
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
          <Grid item xs={2} className={classes.rightMostGridItem}>
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
