// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion
// #region constant
// #endregion
// #region antd
import {
  Row,
  Col,
} from 'antd';
// #endregion

/**
 * @file components/presentational/PartialView/index.js
 * @module components/presentational/PartialView
 * @desc This is the stateless functional component for Center.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} PartialView component
 * @example
 * <PartialView />
 */

const PartialView = ({ children }) => (
  <Row>
    <Col
      span={8}
      offset={8}
      className="app-partial-view"
    >
      {children}
    </Col>
  </Row>
);

/**
 * @name PartialView PropTypes
 * @memberof components/presentational/PartialView
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
PartialView.propTypes = {
  children: PropTypes.node,
};

PartialView.defaultProps = {
  children: [],
};

export default PartialView;
