import styles from "./UserList.module.css";
import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";
import { AnimatePresence } from "framer-motion";
const UserList = () => {
  const user = useSelector((state) => state.data);
  return (
    <>
      <div className={styles.userList}>
        <div>
          <div className={styles.header}>
            <p className={styles.name}>Name</p>
            <p className={styles.status}>Status</p>
            <p>Access</p>
          </div>
          <div className={styles.list}>
            <AnimatePresence>
              {user.map((item) => {
                return <UserItem key={item.id} data={item} />;
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserList;
