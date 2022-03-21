import styles from "./DropDownMenu.module.css";
const DropDownMenu = ({ values, name }) => {
  return (
    <select  className={styles.menu} name={name}>
      {values.map((valueName) => {
        return <option key={valueName} value={valueName}>{valueName}</option>;
      })}
     
    </select>
  );
};
export default DropDownMenu;
