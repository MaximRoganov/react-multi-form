import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  return (
      <div className={styles.app}>
        <Sidebar/>
        <div className={styles.main_info}>
          <h1 className={"main_info_title"}>Personal info</h1>
          <p className={"main_info_description"}>Please provide your name, email address, and phone number.</p>

          <form className={"main_info_form"}>
            <label className={"main_info_form_block"}>
              <div>Name</div>
              <input type="text" placeholder="e.g. Stephen King" />
            </label>

            <label className={"main_info_form_block"}>
              <div>Email Address</div>
              <input type="text" placeholder="e.g. stephenking@lorem.com" />
            </label>

            <label className={"main_info_form_block"}>
              <div>Phone Number</div>
              <input type="text" placeholder="e.g. +1 234 567 890" />
            </label>
          </form>
          <button className={"main_info_next_button"}>Next Step</button>
        </div>
      </div>
  )
}

export default App
