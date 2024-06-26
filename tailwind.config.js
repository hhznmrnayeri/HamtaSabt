
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*"],
  theme: {
    extend: {
      colors:{
        "primary":"#417F56",
        "shade":{
          100:"#396F4B",
          200:"#315F41",
        },
        "black":"#0C0C0C",
        "error":{
          DEFAULT:"#C30000",
          100:"#ED2E2E",
          200:"#FFF2F2"
        },
      },
      backgroundImage:{
        // "gallery1":"url(../images/home/gallery1.jpg)",
        "header":" url(../images/header.webp)",
        "section1":"linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(../images/section1.webp)",
        "section2":"linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(../images/section2.webp)",
        "section3":"linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(../images/section3.webp)",
        "section4":"linear-gradient(0deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%), url(../images/section4.webp)",
      },
      fontFamily:{
        "estedad":"Estedad",
        "estedadMedium":"EstedadMedium",
        "estedadSemiBold":"EstedadSemiBold",
        "estedadBold":"EstedadBold",
      },
      spacing:{
        "30":"7.5rem"
      },
      boxShadow: {
        // "2":"0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        // "card":"0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0,   0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)",
      },
      fontSize: {
        "2xs": ['10px', {
          lineHeight: '14px',
        }],
      },
      borderRadius: {
        "4xl":'2rem',
        "5xl":'4rem'
      },
      container: {
        center:true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem',
        },
      },
    },
    screens: {
      'xs':'480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function({addVariant}){
      addVariant('child','&>*');
      addVariant('child-hover','&>*:hover');
    }
  ],
}
