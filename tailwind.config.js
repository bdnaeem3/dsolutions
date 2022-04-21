const screen_sizes = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px",
};

const one_to_hundred = {
  1: "1px",
  2: "2px",
  3: "3px",
  4: "4px",
  5: "5px",
  6: "6px",
  7: "7px",
  8: "8px",
  9: "9px",
  10: "10px",
  11: "11px",
  12: "12px",
  13: "13px",
  14: "14px",
  15: "15px",
  16: "16px",
  17: "17px",
  18: "18px",
  19: "19px",
  20: "20px",
  21: "21px",
  22: "22px",
  23: "23px",
  24: "24px",
  25: "25px",
  26: "26px",
  27: "27px",
  28: "28px",
  29: "29px",
  30: "30px",
  31: "31px",
  32: "32px",
  33: "33px",
  34: "34px",
  35: "35px",
  36: "36px",
  37: "37px",
  38: "38px",
  39: "39px",
  40: "40px",
  41: "41px",
  42: "42px",
  43: "43px",
  44: "44px",
  45: "45px",
  46: "46px",
  47: "47px",
  48: "48px",
  49: "49px",
  50: "50px",
  51: "51px",
  52: "52px",
  53: "53px",
  54: "54px",
  55: "55px",
  56: "56px",
  57: "57px",
  58: "58px",
  59: "59px",
  60: "60px",
  61: "61px",
  62: "62px",
  63: "63px",
  64: "64px",
  65: "65px",
  66: "66px",
  67: "67px",
  68: "68px",
  69: "69px",
  70: "70px",
  71: "71px",
  72: "72px",
  73: "73px",
  74: "74px",
  75: "75px",
  76: "76px",
  77: "77px",
  78: "78px",
  79: "79px",
  80: "80px",
  81: "81px",
  82: "82px",
  83: "83px",
  84: "84px",
  85: "85px",
  86: "86px",
  87: "87px",
  88: "88px",
  89: "89px",
  90: "90px",
  91: "91px",
  92: "92px",
  93: "93px",
  94: "94px",
  95: "95px",
  96: "96px",
  97: "97px",
  98: "98px",
  99: "99px",
  100: "100px",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      ...one_to_hundred,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#e93100",
      text: "#333",
      offWhite: "#f5f5f5",
      white: "white",
    },
    container: {
      center: true,
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
      padding: {
        DEFAULT: "10px",
      },
    },
    fontSize: {
      ...one_to_hundred,
    },
    letterSpacing: {
      ...one_to_hundred,
    },
    minWidth: {
      ...one_to_hundred,
    },
    screens: {
      ...screen_sizes,
    },
    extend: {
      boxShadow: {
        progress: "inset 0 -1px 0 rgb(0 0 0 / 15%);",
        progressBG: "inset 0 1px 2px rgb(0 0 0 / 10%);",
      },
      lineHeight: {
        ...one_to_hundred,
      },
      spacing: {
        ...one_to_hundred,
      },
    },
  },
  plugins: [],
};
