import React, { PureComponent } from 'react';
import cx from 'classnames';
import styles from './ExpandableRow.css';

class ExpandableRow extends PureComponent {
  constructor() {
    super();

    this.state = { isOpen: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <div
          className={styles.itemTitle}
          onClick={this.handleClick}
          >
          {this.props.children[0] || null}
        </div>

        <div className={cx(
          styles.itemDetail,
          { [styles.itemDetail__active]: this.state.isOpen }
          )}>
          <div className={styles.itemAside}>
            {this.props.children[1] || null}
          </div>
          <div>
            {this.props.children[2] || null}
          </div>
        </div>
      </div>
    );
  }
}

export default ExpandableRow;
