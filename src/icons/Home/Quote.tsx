import { IconProps } from "@typed/icon.types";

function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" {...props}>
      <g filter="url(#filter0_d_7_14647)">
        <circle cx="28" cy="28" r="16" fill="url(#paint0_linear_7_14647)"/>
      </g>
      <g clip-path="url(#clip0_7_14647)">
        <path d="M27 25.2643C27 24.6017 26.7947 23.9541 26.4101 23.4032C26.0256 22.8523 25.4789 22.4229 24.8394 22.1694C24.1999 21.9159 23.4961 21.8495 22.8172 21.9788C22.1383 22.108 21.5146 22.4271 21.0251 22.8956C20.5356 23.364 20.2023 23.9609 20.0673 24.6107C19.9322 25.2605 20.0015 25.9341 20.2664 26.5462C20.5313 27.1583 20.9799 27.6815 21.5555 28.0496C22.1311 28.4176 22.8078 28.6141 23.5 28.6141C23.8532 28.6091 24.2036 28.5527 24.539 28.4466C24.1084 29.6957 23.3842 30.8335 22.422 31.7725C22.3279 31.8618 22.2532 31.9681 22.2024 32.0853C22.1516 32.2024 22.1256 32.3281 22.126 32.4549C22.1264 32.5818 22.1531 32.7073 22.2046 32.8241C22.2561 32.941 22.3313 33.0469 22.4259 33.1357C22.5206 33.2245 22.6327 33.2944 22.7558 33.3414C22.8789 33.3883 23.0105 33.4114 23.143 33.4092C23.2755 33.4071 23.4063 33.3797 23.5276 33.3288C23.649 33.2778 23.7586 33.2043 23.85 33.1125C25.8736 31.1492 27.0056 28.5007 27 25.7428C26.9937 25.6887 26.9823 25.6352 26.966 25.583C26.9829 25.4774 26.9943 25.371 27 25.2643Z" fill="#FFF9ED"/>
        <path d="M35.9996 25.2641C36.0137 24.5404 35.7871 23.8311 35.3525 23.2387C34.9179 22.6464 34.2979 22.2015 33.582 21.9684C32.866 21.7353 32.0912 21.726 31.3693 21.9419C30.6475 22.1578 30.016 22.5877 29.5661 23.1695C29.1162 23.7512 28.8711 24.4548 28.8663 25.1786C28.8614 25.9024 29.0971 26.609 29.5392 27.1962C29.9812 27.7835 30.6069 28.2211 31.3258 28.4458C32.0447 28.6705 32.8196 28.6707 33.5386 28.4464C33.108 29.6954 32.3838 30.8333 31.4216 31.7723C31.3275 31.8616 31.2528 31.9679 31.202 32.0851C31.1512 32.2022 31.1252 32.3279 31.1256 32.4547C31.126 32.5815 31.1527 32.707 31.2042 32.8239C31.2556 32.9408 31.3309 33.0467 31.4255 33.1355C31.5202 33.2243 31.6323 33.2942 31.7554 33.3412C31.8785 33.3881 32.0101 33.4112 32.1426 33.409C32.2751 33.4069 32.4059 33.3795 32.5272 33.3286C32.6486 33.2776 32.7582 33.2041 32.8496 33.1123C34.8732 31.1489 36.0052 28.5005 35.9996 25.7426C35.9933 25.6885 35.9819 25.635 35.9656 25.5828C35.9825 25.4771 35.9939 25.3708 35.9996 25.2641Z" fill="#FFF9ED"/>
      </g>
      <defs>
        <filter id="filter0_d_7_14647" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.929412 0 0 0 0 0.564706 0 0 0 0 0.2 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_14647"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_14647" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_7_14647" x1="12" y1="28.0001" x2="44" y2="28.0001" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FCB60A"/>
          <stop offset="0.115" stop-color="#F69319"/>
          <stop offset="0.305" stop-color="#EF6D2A"/>
          <stop offset="0.727" stop-color="#ED5332"/>
          <stop offset="1" stop-color="#ED6A32"/>
        </linearGradient>
        <clipPath id="clip0_7_14647">
          <rect width="16" height="15.3136" fill="white" transform="translate(20 20)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default QuoteIcon;