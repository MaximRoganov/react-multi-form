export default function PersonalInfo({handleChangeFormData,formData}){



  return (
  <form className={"main_info_form"}>

    <label className={"main_info_form_block"}>
      <div>Name</div>
      <input onChange={(event)=>{
        handleChangeFormData('userName', event.target.value)
      }} type="text" placeholder="e.g. Stephen King" value={formData.userName} />
    </label>

    <label className={"main_info_form_block"}>
      <div>Email Address</div>
      <input onChange={(event)=>{
        handleChangeFormData('email', event.target.value)
      }} type="text" placeholder="e.g. stephenking@lorem.com" value={formData.email}/>
    </label>

    <label className={"main_info_form_block"}>
      <div>Phone Number</div>
      <input onChange={(event)=>{
        handleChangeFormData('phone', event.target.value)
      }} type="text" placeholder="e.g. +1 234 567 890" value={formData.phone}/>
    </label>
  </form>
  );
}