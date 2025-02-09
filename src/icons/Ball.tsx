import { IconProps } from "@typed/icon.types";

function BallIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <g filter="url(#filter0_d_1_2289)">
        <circle cx="20" cy="20" r="8" fill="url(#paint0_linear_1_2289)"/>
      </g>
      <defs>
        <filter id="filter0_d_1_2289" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.929412 0 0 0 0 0.564706 0 0 0 0 0.2 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2289"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2289" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1_2289" x1="12" y1="20" x2="28" y2="20" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FCB60A"/>
          <stop offset="0.115" stop-color="#F69319"/>
          <stop offset="0.305" stop-color="#EF6D2A"/>
          <stop offset="0.727" stop-color="#ED5332"/>
          <stop offset="1" stop-color="#ED6A32"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BallIcon;