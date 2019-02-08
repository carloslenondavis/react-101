// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion
// #region constant
// #endregion

/**
 * @file components/presentational/Avatar/index.js
 * @module components/presentational/Avatar
 * @desc This is the stateless functional component for Center.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} Avatar component
 * @example
 * <Avatar name={profileName} photoUrl={photoUrl} profEmail={emails.prof} codeEmail={emails.code} />
 */

const Avatar = ({
  name,
  photoUrl,
  email: {
    prof,
    code,
  },
  isPhotoSmall,
  showName,
  showContactInfo,
}) => (
  <div className="app-avatar">
    <img
      className={`photo ${isPhotoSmall ? 'sm' : 'xg'}-photo`}
      src={photoUrl}
      alt="Profile Name"
    />
    {
      showName && (
        <h1 className="name">{name}</h1>
      )
    }
    {
      showContactInfo && (
        <p>
          <span className="link">{prof}</span>
          <span className="devider">&nbsp;/&nbsp;</span>
          <span className="link">{code}</span>
        </p>
      )
    }
  </div>
);

/**
 * @name Avatar PropTypes
 * @memberof components/presentational/Avatar
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @param {String} name         - Profile name
 * @param {String} photoUrl     - Profile url photo
 * @param {String} profEmail    - Profile profesional email
 * @param {String} codeEmail    - Profile code email
 * @param {String} profEmail    - Profile profesional email
 * @param {Boolean} showInfo    - Show Profile info logan
 * @param {String} info         - Profile info logan
 * @return {Array} React PropTypes
 */
Avatar.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  email: PropTypes.object,
  isPhotoSmall: PropTypes.bool,
  showName: PropTypes.bool,
  showContactInfo: PropTypes.bool,
};

Avatar.defaultProps = {
  name: 'Jimmy Saenz @yesez5',
  photoUrl: 'https://avatars1.githubusercontent.com/u/1390475?s=460&v=4',
  email: {
    prof: 'jsaenzr@outlook.com',
    code: 'jimmy.saenz.rizo@gmail.com',
  },
  isPhotoSmall: false,
  showName: true,
  showContactInfo: true,
};

export default Avatar;
