import cx from 'classnames';

import styles from './CTA.module.scss';

const CTA = ({value, light, white, onClickMethod}) => {

  const classes = cx(styles.cta, (white && styles.white) || (light && styles.light));

  return <button onClick={onClickMethod} className={classes}>{value}</button>
}

export default CTA