// #region load dependencies
import React from 'react';
import moment from 'moment';
// import PropTypes from 'prop-types';
// #endregion
// #region components
import Icon from 'antd/lib/icon';
// #endregion

/**
 * @file components/presentational/Footers/index.js
 * @module components/presentational/Footers
 * @desc This is the stateless functional component for Footers.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} Footers component
 * @example
 * <Footers />
 */
const Footers = () => (
  <div className="app-footer">
    <p className="copyright txt-cntr">
      <Icon type="copyright" />
      <span>{`${moment().format('YYYY')} - coded and designed with`}</span>
      <Icon type="heart" />
      <span className="creator">
        <span>by</span>
        <span className="name">ingenierfonseca</span>
      </span>
    </p>
  </div>
);

/**
 * @name Avatar PropTypes
 * @memberof components/presentational/Footers
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
Footers.propTypes = {};

Footers.defaultProps = {};

export default Footers;
