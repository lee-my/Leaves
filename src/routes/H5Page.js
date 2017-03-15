import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

function H5Page() {
  return (
    <div className={styles.normal}>

    </div>
  );
}

H5Page.propTypes = {
};

export default connect()(H5Page);
