import PropTypes from "prop-types";
import styles from "./MenuSubTitle.module.css";

function MenuSubTitle(props) {
  return (
    <>
      <div className={styles.titleSection}>
        <h3 className={styles.title}>{props.title}</h3>
        <h4 className={styles.subtitle}>{props.description}</h4>
      </div>
    </>
  );
}

MenuSubTitle.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default MenuSubTitle;
