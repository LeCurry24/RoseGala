import styles from "./ProfileCardStyle.module.css"
import ProfileCard from "./ProfileCard";
import ProfileGalleryCard from "./ProfileGalleryCard";

const Profile = () => {
  return (
    <div>
      <div className={styles.proCard}>
        <ProfileCard />
      </div>
        <b className={styles.yourGallery}><u>Your Gallery</u></b>
      <div className={styles.profileGalleryCard}>
        <ProfileGalleryCard />
      </div>
    </div>
  );
};

export default Profile;
