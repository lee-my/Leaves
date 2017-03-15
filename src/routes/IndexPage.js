import React from 'react';
import { connect } from 'dva';
import { Link } from 'react-router';
import styles from './IndexPage.less';

function IndexPage(props) {
  return (
    <div>
      <div className={styles.mainTop}>
        <div className={styles.center}>
          <Link to="/" className={styles.logo}>Home</Link>
          <Link to="/home" activeClassName={styles.cur}>首页</Link>
          <Link to="/h5" activeClassName={styles.cur}>H5案例</Link>
          <Link to="/about" activeClassName={styles.cur}>关于</Link>
          <Link to="/contact" activeClassName={styles.cur}>加入我们</Link>
        </div>

      </div>
      {props.children}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
