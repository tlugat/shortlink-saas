import img from '../../../assets/img/img-landing.png';
import styles from './Landing.module.scss';
import CTA from '../../../components/ui_components/buttons/CTA';

const Landing = () => {
  return (
    <article className={styles.landing}>
      <div className={styles.wrapper}>
        <h2>A easier way to share links</h2>
        <p>ShortLink vous permet de raccourcir vos liens vers votre site à des prix attractifs et avec un suivi professionnel sur les résultats de l'opération.</p>
        <div className={styles.landing__buttons}>
          <CTA white value={'Get started'}/>
          <CTA light value={'Info'}/>
        </div>
      </div>
      <img className={styles.landing__img} src={img} alt="woman scrolling on her phone"/>
    </article>
  )
}

export default Landing