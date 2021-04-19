import cx from 'classnames';

import styles from './CTA.module.scss';

const CTA = ({value, light, white, onClickMethod, customStyles}) => {

  const classes = cx(styles.cta, (white && styles.white) || (light && styles.light));
  
  return <button style={customStyles} onClick={onClickMethod} className={classes}>{value}</button>
}

export default CTA