import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

function MainPage() {
  return (
    <div className={styles.normal}>

    </div>
  );
}

MainPage.propTypes = {
};

export default connect()(MainPage);
