import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  return (
    <chakra.svg
      width="1550"
      height="1550"
      viewBox="0 0 1550 1550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="1550" height="1550" fill="#EEEEEE"/>
      <path d="M737.557 1067.45C746.42 979.472 762.69 731.49 669.33 696.007C663.786 693.899 657.729 693.257 651.834 693.908C631.943 696.105 618.907 705.295 612.241 711.429C608.455 714.912 606.396 719.703 604.751 724.578C581.934 792.19 481.238 848.509 434.273 871.625C425.963 875.715 427.072 886.993 436.264 888.126C473.844 892.756 545.823 891.197 612.717 830.83C618.924 825.229 628.998 828.477 629.689 836.809C634.213 891.372 638.966 1043.56 566.091 1151.1C554.603 1168.05 554.412 1191.04 568.17 1206.21L620.677 1264.11C683.651 1320.5 984.738 1215.98 1044.32 864.855C1103.18 517.997 861.235 344.6 769.931 292.413C761.011 287.314 752.82 297.265 758.762 305.647C987.802 628.742 925.807 880.427 755.058 1075.19C748.642 1082.51 736.582 1077.13 737.557 1067.45Z" fill="url(#paint0_radial_96_519)"/>
      <defs>
        <radialGradient id="paint0_radial_96_519" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(581.5 1190) rotate(-74.3553) scale(889.971 578.482)">
          <stop offset="0.5" stopColor="#180600"/>
          <stop offset="1" stopColor="#9100FF"/>
        </radialGradient>
      </defs>
    </chakra.svg>
  )
}
