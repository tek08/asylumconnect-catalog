import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from '../routes';

import Header from '../components/Header';
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
        <Header />
        <h1>Asylum Connect Catalog</h1>
        {/* Just render the JWT for now */}
        <h3>{jwt}</h3>
        <Link route="/account">
          <a>Account page link</a>
        </Link>
        {/* Sticking a temporary form in here until we have a modal working */}
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">
            Username
            <input type="text" id="username" onChange={this.onInputChange} />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              onChange={this.onInputChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default connect((state) => ({
  jwt: state.account.jwt,
}))(IndexPage);
