import cx from 'classnames';
import React from 'react';

import * as styles from './Row.module.scss';

const Row = ({ children }) => <div className={cx(styles.root)}>{children}</div>;

export default Row;
