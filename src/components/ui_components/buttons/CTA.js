import cx from 'classnames';

import styles from './CTA.module.scss';

const CTA = ({value, light}) => {

  const classes = cx(styles.cta, light && styles.light);

  return <button className={classes}>{value}</button>
}

export default CTA