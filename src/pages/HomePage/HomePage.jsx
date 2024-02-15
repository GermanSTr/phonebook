import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.card}>
      <h1>WELCOME</h1>
      <p>
        Dear user, welcome to this page. You have a great opportunity to create
        your own phonebook that will be accessible at any time. To create your
        personal profile, you need to register on the "Register" page. You can
        view your contacts on the "Contacts" page after authorization. Enjoy
        your experience.
      </p>
    </div>
  );
};

export default HomePage;
