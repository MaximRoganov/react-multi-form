export default function Header({ activeStep, stepsListData }) {
  const title = stepsListData[activeStep - 1].header;
  const description = stepsListData[activeStep - 1].description;
  return (
    <>
      <h1 className={'main_info_title'}>{title}</h1>
      <p className={'main_info_description'}>{description}</p>
    </>
  );
}
