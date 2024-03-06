export default function PersonalInfo(){
  return (
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
  );
}