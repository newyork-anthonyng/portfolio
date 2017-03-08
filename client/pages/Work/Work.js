import React, { PureComponent } from 'react';
import cx from 'classnames';
import styles from './Work.css';
import WorkInfo from './WorkInfo';

import ExpandableRow from '../../components/ExpandableRow/ExpandableRow';

class Work extends PureComponent {
  constructor() {
    super();
    this.renderWorkItems = this.renderWorkItems.bind(this);
  }

  renderWorkItems() {
    return WorkInfo.map((work) => {
      return (
        <ExpandableRow key={work.title}>
          <h1>{work.title}</h1>
          <p>{work.date} {work.position}</p>

          <p>{work.description}</p>
        </ExpandableRow>
      );
    });
  }

  render() {
    return (
      <div>{this.renderWorkItems()}</div>
    );
  }
}

export default Work;
