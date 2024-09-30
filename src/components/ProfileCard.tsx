import styles from "./ProfileCardStyle.module.css"


const profileCard = () => {
    return(
<div className={styles.card}>
      <div className={styles.cardHeader}>
            <div className={styles.cardHeaderBar}>
              <a className={styles.btnMessage} href="#"><svg viewBox="0 0 16 16" className="bi bi-chat-dots-fill" fill="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
</svg><div className={styles.srOnly}>Message</div></a>
            </div>
             <div className={styles.image}>Image Here</div>  
            <div className={styles.cardHeaderSlantedEdge}>      
            </div>
      </div>
      <div className={styles.cardBody}>
          <div className={styles.Name}>John Smith</div><br />
          <div className={styles.jobTitle}><u>Product Designer</u></div>
          <div className={styles.socialAccounts}>
          </div>
      </div>
  </div>
    )
}
export default profileCard