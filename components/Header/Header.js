import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Fab, Grid } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
    whitespace: 'nowrap',
  },
  leftMostGridItem: {
    textAlign: 'left',
  },
  rightMostGridItem: {
    textAlign: 'right',
  },
  clickableSubheaderText: {
    cursor: 'pointer',
    fontWeight: 600,
    textDecoration: 'underline',
  },
  closeDialogX: {
    float: 'right',
    cursor: 'pointer',
  },
  subheaderText: {
    textAlign: 'center',
    backgroundColor: '#5073B3',
    padding: '20px 0px',
    color: 'white',
  },
  dialogOkButtonContainer: {
    textAlign: 'center',
  },
  dialogTitle: {
    textAlign: 'center',
  },
};

const MOBILE_WIDTH_MAX = 1000;

const redTheme = createMuiTheme({ palette: { primary: red } });

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      width: MOBILE_WIDTH_MAX,
      isDisclaimerDialogOpen: false,
      isUserPrivacyStatementDialogOpen: false,
    };

    this.openDisclaimerDialog = this.openDisclaimerDialog.bind(this);
    this.closeDisclaimerDialog = this.closeDisclaimerDialog.bind(this);

    this.closeUserPrivacyStatement = this.closeUserPrivacyStatement.bind(this);
    this.openUserPrivacyStatement = this.openUserPrivacyStatement.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.handleWindowSizeChange();
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  closeDisclaimerDialog() {
    this.setState({
      isDisclaimerDialogOpen: false,
    });
  }

  openDisclaimerDialog() {
    this.setState({
      isDisclaimerDialogOpen: true,
    });
  }

  closeUserPrivacyStatement() {
    this.setState({
      isUserPrivacyStatementDialogOpen: false,
    });
  }

  openUserPrivacyStatement() {
    this.setState({
      isUserPrivacyStatementDialogOpen: true,
    });
  }

  componentDidUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  render() {
    const { classes } = this.props;
    const {
      isDisclaimerDialogOpen,
      isUserPrivacyStatementDialogOpen,
      width,
    } = this.state;

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
        <Grid container>
          <Grid item xs={12} className={classes.subheaderText}>
            Asylum seekers contact service providers at their own risk.
            <br />
            Please read our complete&nbsp;
            <a
              className={classes.clickableSubheaderText}
              onClick={this.openDisclaimerDialog}
            >
              Disclaimer
            </a>
            &nbsp;and&nbsp;
            <a
              className={classes.clickableSubheaderText}
              onClick={this.openUserPrivacyStatement}
            >
              User Privacy Statement
            </a>
            &nbsp;before using our catalog.
          </Grid>
        </Grid>

        <Dialog
          onClose={this.closeDisclaimerDialog}
          open={isDisclaimerDialogOpen}
        >
          <DialogTitle
            onClose={this.closeDisclaimerDialog}
            className={classes.dialogTitle}
          >
            AsylumConnect Disclaimer
            <div
              className={classes.closeDialogX}
              onClick={this.closeDisclaimerDialog}
            >
              x
            </div>
          </DialogTitle>
          <DialogContent>
            The AsylumConnect team will do its best to confirm basic facts about service providers listed on this
            website. However, we lack the necessary resources to fully vet service providers and make no representations
            regarding the viability or capabilities of any such providers. Consequently, AsylumConnect assumes no
            responsibility for the actions of providers listed on this website and asylum seekers who contact any such
            providers do so at their own risk.
          </DialogContent>
          <DialogContent className={classes.dialogOkButtonContainer}>
            <MuiThemeProvider theme={redTheme}>
              <Fab
                color="primary"
                size="small"
                style={{ width: '100px' }}
                onClick={this.closeDisclaimerDialog}
                variant="extended"
              >
                Ok
              </Fab>
            </MuiThemeProvider>
          </DialogContent>
        </Dialog>

        <Dialog
          onClose={this.closeUserPrivacyStatement}
          open={isUserPrivacyStatementDialogOpen}
        >
          <DialogTitle
            onClose={this.closeUserPrivacyStatement}
            className={classes.dialogTitle}
          >
            AsylumConnect User Privacy Statement
            <div
              className={classes.closeDialogX}
              onClick={this.closeUserPrivacyStatement}
            >
              x
            </div>
          </DialogTitle>
          <DialogContent>
            The AsylumConnect catalog uses Google Analytics with <a href="https://support.google.com/analytics/answer/2763052?hl=en">anonymized IP addresses</a> to help
            analyze how visitors use this site. Google Analytics uses cookies, which are small text files placed on your computer, to collect
            standard visitor behavior information in an anonymous form. No personally identifiable information is
            collected about you, unless you explicitly submit that information on this website. If you would like to
            opt-out of Google Analytics, you may do so by clicking <a href="https://tools.google.com/dlpage/gaoptout">here</a>.
          </DialogContent>
          <DialogContent className={classes.dialogOkButtonContainer}>
            <MuiThemeProvider theme={redTheme}>
              <Fab
                color="primary"
                onClick={this.closeUserPrivacyStatement}
                size="small"
                style={{ width: '100px' }}
                variant="extended"
              >
                Ok
              </Fab>
            </MuiThemeProvider>
          </DialogContent>
        </Dialog>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
