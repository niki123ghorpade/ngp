import styles from './ContactStyles.module.css';

const MailList = () => {
  const handleSubscribe = () => {
    const email = document.getElementById("emailInput").value;
    window.location.href = `mailto:nikitaghorpade25@gmail.com?subject=Query%20from%20portfolio%20Website&body=Hello,%0D${email}`;
  };

  return (
    <section id="mail" className={styles.container}>
      <div className={styles.mail}>
        <span className={styles.mailDesc}>Please feel free to contact!</span>
        <div className={styles.mailInputContainer}>
          <input type="email" id="emailInput" placeholder="Your Query" />
          <button onClick={handleSubscribe}>Send!</button>
        </div>
      </div>
    </section>
  );
};

export default MailList;
