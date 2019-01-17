// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// #endregion
// #region components
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
// #endregion

const {
  Header,
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
      collapsed: false,
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
    const { toggleMenu } = this;
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: '#fff', padding: 0 }}
          >
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggleMenu}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
          >
            <h1>Content</h1>
            {children}
          </Content>
          <Footer>
            <h1>Footer</h1>
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
