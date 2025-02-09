import { IconProps } from "@typed/icon.types";

function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" {...props}>
      <g filter="url(#filter0_d_4_4507)">
        <circle cx="28" cy="28" r="16" fill="url(#paint0_linear_4_4507)"/>
      </g>
      <g clip-path="url(#clip0_4_4507)">
        <path d="M29.624 31.624L33.5 35.5L35.5 33.5L31.624 29.624" stroke="#FFF9ED" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.5 32.5C29.8137 32.5 32.5 29.8137 32.5 26.5C32.5 23.1863 29.8137 20.5 26.5 20.5C23.1863 20.5 20.5 23.1863 20.5 26.5C20.5 29.8137 23.1863 32.5 26.5 32.5Z" stroke="#FFF9ED" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <filter id="filter0_d_4_4507" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.929412 0 0 0 0 0.564706 0 0 0 0 0.2 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_4507"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_4507" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_4_4507" x1="12" y1="28.0001" x2="44" y2="28.0001" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FCB60A"/>
          <stop offset="0.115" stop-color="#F69319"/>
          <stop offset="0.305" stop-color="#EF6D2A"/>
          <stop offset="0.727" stop-color="#ED5332"/>
          <stop offset="1" stop-color="#ED6A32"/>
        </linearGradient>
        <clipPath id="clip0_4_4507">
          <rect width="16" height="16" fill="white" transform="translate(20 20)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchIcon;