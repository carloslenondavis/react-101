// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// #endregion
// #region antd
import {
  Skeleton,
  List,
  Avatar,
} from 'antd';
// #endregion
// #region components
// #endregion

/**
 * @file components/containers/Todo/index.js
 * @class components/containers/Todo
 * @extends React.Component
 * @classdesc This is the main layout component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <Todo />
 */
class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: true,
      list: [
        {
          name: 'create-react-app',
        },
      ],
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
    const {
      list,
    } = this.state;

    return (
      <List
        className="app-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<a href="https://github.com/facebook/create-react-app">view</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://github.com/facebook/create-react-app">{item.name}</a>}
                description="Create React App is a command line interface created by Facebook developers that enables you to easily create a React.js project"
              />
              <div>content</div>
            </Skeleton>
          </List.Item>
        )}
      />
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
const mapStateToProps = () => ({});

Todo.propTypes = {};

Todo.defaultProps = {};

export default withRouter(connect(mapStateToProps)(Todo));
