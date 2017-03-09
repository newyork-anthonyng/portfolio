import React, { PureComponent, PropTypes } from 'react';
import Logo from '../Logo/Logo';
import WhiteAnimation from '../../assets/logo_white.gif';
import BlackAnimation from '../../assets/logo_black.gif';
import cx from 'classnames';
import styles from './HoverableLogo.css';

class HoverableLogo extends PureComponent {
  constructor() {
    super();

    this.state = { isHovering: false };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.renderAnimation = this.renderAnimation.bind(this);
  }

  handleMouseEnter() {
    this.setState({ isHovering: true });
  }

  handleMouseLeave() {
    this.setState({ isHovering: false });
  }

  renderAnimation() {
    /*
     Reset the gif animation by setting <img> src back to an empty string
    */

    let src = '';
    if (this.state.isHovering) {
      src = this.props.theme === 'white' ? WhiteAnimation : BlackAnimation;
    }

    return (
      <img
        alt="Anthony Ng"
        src={src}
        style={{
          display: `${this.state.isHovering ? '' : 'none' }`,
          height: '100%',
        }}
        />
    );
  }

  render() {
    return (
      <div
        className={styles.container}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
          <div style={{
              display: `${this.state.isHovering ? 'none' : '' }`,
              height: '100%',
            }}>
            <Logo theme={this.props.theme} />
          </div>

          {this.renderAnimation()}
      </div>
    );
  }
}

HoverableLogo.defaultProps = {
  theme: 'white',
};

HoverableLogo.propTypes = {
  theme: PropTypes.oneOf(['white', 'black']),
};

export default HoverableLogo;
