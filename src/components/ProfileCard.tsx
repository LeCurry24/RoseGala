import styles from "./ProfileCardStyle.module.css";
import ProfileSocials from "./ProfileSocials";



const profileCard = () => {
  return (
    <>
    <div className={styles.profileCard}>
        <div className={styles.profileImage}></div>
        <b className={styles.profileName}>Siah Curry</b>
        <b className={styles.role}><u>Artist</u></b>
    </div>
    <ProfileSocials/>
    </>
  )
};
export default profileCard;
