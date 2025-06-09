import PropTypes from "prop-types";
import styles from "./MenuTitle.module.css";

function MenuTitle(props) {
  return (
    <div className={styles.sectionTitle}>
      <h2 className={styles.titleHeading}>{props.title}</h2>
      <p className={styles.titleSubHeading}>{props.description}</p>
    </div>
  );
}

MenuTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MenuTitle;
