import styles from "./MenuItem.module.css";
import PropTypes from "prop-types";
function MenuItem(props) {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.additions}>{props.additions}</p>
    </div>
  );
}

MenuItem.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  additions: PropTypes.string,
};
export default MenuItem;
