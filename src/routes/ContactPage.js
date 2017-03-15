import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

function ContactPage() {
  return (
    <div className={styles.normal}>

    </div>
  );
}

ContactPage.propTypes = {
};

export default connect()(ContactPage);
