import React, { PropTypes } from 'react';

const Logo = ({ theme }) => (
  <svg version="1.1" x="0px" y="0px" viewBox="0 0 265.8 313.1" style={{height: '100%'}}>
  <g>
  	<g>
  		<path
        fill={theme}
        stroke={theme}
        d="M260.4,308.6h-56.1L96.6,6.5h55.8L260.4,308.6z"
      />
  	</g>
  	<path
      fill={theme}
      stroke={theme}
      d="M61.1,281.1c0,16.4-11.5,27.5-27.5,27.5S6.4,297.5,6.4,281.1c0-16,11.1-27.2,27.2-27.2S61.1,265.1,61.1,281.1z"
    />
  </g>
  </svg>
);

Logo.defaultProps = {
  theme: 'white',
};

Logo.propTypes = {
  theme: PropTypes.oneOf(['white', 'black']),
};

export default Logo;
