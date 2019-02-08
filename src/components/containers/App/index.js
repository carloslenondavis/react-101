// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
// #endregion
// #region components
import Layouts from '../Layouts';
import Avatar from '../../presentational/Avatar';
// #endregion
// #region constant
import appRouter from '../../../common/constant/routerView/app';
// #endregion

/**
 * @file components/containers/App/index.js
 * @class components/containers/App
 * @extends React.Component
 * @classdesc This is the main app component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <App />
 */
class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  /**
   * @function
   * @name render
   * @memberof components/containers/App
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const { profile: { info } } = appRouter;

    return (
      <Layouts>
        <Switch>
          <Route path={info} component={Avatar} />
        </Switch>
      </Layouts>
    );
  }
}

/**
 * @function
 * @name mapStateToProps
 * @memberof components/containers/App
 * @description Set props to state
 * @param {Object} state    - list of state
 * @return {Object} state from store
 */
const mapStateToProps = state => ({
  showProfileInfo: state.profile.showInfo,
  profileInfo: state.profile.info,
});

App.propTypes = {
  // dispatch: PropTypes.func,
};

App.defaultProps = {
  // dispatch: '',
};

export default withRouter(connect(mapStateToProps)(App));
