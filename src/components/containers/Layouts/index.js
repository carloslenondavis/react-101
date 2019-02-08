// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
// #endregion
// #region antd
import {
  Layout,
  Menu,
  Icon,
  // Avatar,
} from 'antd';
// #endregion
// #region components
import Footers from '../../presentational/Footers';
import Avatar from '../../presentational/Avatar';
import PartialView from '../../presentational/PartialView';
// #endregion

const {
  // Header,
  Sider,
  Content,
  Footer,
} = Layout;

/**
 * @file components/containers/Layouts/index.js
 * @class components/containers/Layouts
 * @extends React.Component
 * @classdesc This is the main layout component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <Layouts>
 * </Layouts>
 */
class Layouts extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
    };
  }

  componentDidMount() {}

  toggleMenu = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  }

  /**
   * @function
   * @name render
   * @memberof components/containers/Layouts
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const { children } = this.props;
    const { collapsed } = this.state;

    return (
      <Layout
        className="full-height"
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Avatar
            photoUrl="hhttps://avatars1.githubusercontent.com/u/1390475?s=460&v=4"
            isPhotoSmall
            showName={false}
            showContactInfo={false}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <NavLink to="/profile">Who</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="ordered-list" />
              <NavLink to="/todo">ToDo</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="app-partial-view-container"
          >
            <PartialView>
              {children}
            </PartialView>
          </Content>
          <Footer>
            <Footers />
          </Footer>
        </Layout>
      </Layout>
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

Layouts.propTypes = {
  // dispatch: PropTypes.func,
  children: PropTypes.node,
};

Layouts.defaultProps = {
  // dispatch: '',
  children: [],
};

export default withRouter(connect(mapStateToProps)(Layouts));
