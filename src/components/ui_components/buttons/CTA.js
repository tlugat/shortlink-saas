import cx from 'classnames';

import styles from './CTA.module.scss';

const CTA = ({value, light, onClickMethod}) => {

  const classes = cx(styles.cta, light && styles.light);

  return <button onClick={onClickMethod} className={classes}>{value}</button>
}

export default CTA