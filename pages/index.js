import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Link } from '../routes';
import { accountThunks } from '../store/account';

class IndexPage extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    jwt: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmit = async (e) => {
    const { username, password } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();

    await dispatch(accountThunks.login(username, password));
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { jwt } = this.props;

    return (
      <div>
        <h1>Asylum Connect Catalog</h1>
        {/* Just render the JWT for now */}
        <h3>{jwt}</h3>
        <Link route="/account">
          <a>Account page link</a>
        </Link>
        {/* Sticking a temporary form in here until we have a modal working */}
        <form onSubmit={this.onSubmit}>
          <TextField
            required
            id="username"
            label="Username"
            onChange={this.onInputChange}
            margin="normal"
          />
          <TextField
            required
            id="password"
            label="Password"
            onChange={this.onInputChange}
            margin="normal"
            type="password"
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({
  jwt: state.account.jwt,
}))(IndexPage);
