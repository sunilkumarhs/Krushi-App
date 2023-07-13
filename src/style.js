const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold sm:text-6xl text-l text-yellow-500 sm:leading-16 leading-2 w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-sm sm:text-xl leading-2 sm:leading-8",
  error: "text-red-500 text-left mt-0 sm:mt-2 text-sm sm:text-l",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-3",
  paddingY: "sm:py-16 py-3",
  padding: "sm:px-16 px-3 sm:py-12 py-2",

  marginX: "sm:mx-16 mx-3",
  marginY: "sm:my-16 my-3",

  tdata:
    "py-1 px-1 sm:py-2 text-sm sm:text-l font-bold text-center border-y border-white",
  thead:
    "py-1 px-1 sm:py-2 sm:text-xl text-l text-center border-y border-white font-bold",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-5 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-5 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
