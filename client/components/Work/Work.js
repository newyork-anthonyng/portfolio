import React from 'react';
import cx from 'classnames';
import styles from './Work.css';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <h1>Work</h1>

        <div onClick={this.handleItemClick}>
          <h1>Geeks Rule</h1>
        </div>

        <div className={cx(
          styles.itemDetail,
          { [styles.itemDetail__active]: this.state.open }
        )}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper eget nisi rhoncus pellentesque. Phasellus tincidunt tempus lacus, eget hendrerit mi lobortis elementum. Mauris et consequat augue. Etiam dictum massa justo, in tristique nunc auctor eget. Pellentesque lacinia nibh quis orci ullamcorper, eu pretium augue feugiat. Donec mollis est ex, vitae condimentum nunc tempor ut. Duis cursus mollis consequat. Nunc a diam non leo pulvinar elementum. Suspendisse laoreet eros sit amet porta interdum. Vivamus consectetur suscipit nisl sit amet luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis elementum interdum posuere. Nunc tempus magna eros, non dapibus ipsum accumsan nec. Praesent eros nisi, imperdiet id dignissim at, gravida eu augue. Cras bibendum, libero vel porttitor tempus, dui eros dapibus sapien, id lacinia orci erat quis justo. Aliquam ullamcorper ultricies diam sit amet varius.


          </p>
        </div>
      </div>
    );
  }
}

export default Work;
