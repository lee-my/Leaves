import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

function AboutPage() {
  return (
    <div className={styles.normal}>

    </div>
  );
}

AboutPage.propTypes = {
};

export default connect()(AboutPage);
