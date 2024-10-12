import styles from "./ProfileCardStyle.module.css";
import ProfileSocials from "./ProfileSocials";
import LearnMoreBtn from "./LearnMoreBtn";



const profileCard = () => {
  return (
    <>
    <div className={styles.profileCard}>
        <div className={styles.profileImage}></div>
        <b className={styles.profileName}>Siah Curry</b>
        <b className={styles.role}><u>Artist</u></b>
        <LearnMoreBtn/>
    </div>
    <ProfileSocials/>
    </>
  )
};
export default profileCard;
