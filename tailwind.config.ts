import type { Config } from "tailwindcss";

import tailwindcss_animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	fontSize: {
  		xs: '14px',
  		sm: '16px',
  		base: '18px',
  		lg: '20px',
  		xl: '24px',
  		'2xl': '28px',
  		'3xl': '30px',
  		'4xl': '34px',
  		'5xl': '40px'
  	},
  	colors: {
  		jaguar: {
  			'50': '#ece9ff',
  			'100': '#dbd6ff',
  			'200': '#c2b6ff',
  			'300': '#a28aff',
  			'400': '#8d5cff',
  			'500': '#8437ff',
  			'600': '#8415ff',
  			'700': '#7e0bf7',
  			'800': '#640dc6',
  			'900': '#51149b',
  			'950': '#0c0316'
  		},
  		revolver: {
  			'50': '#f2f0fd',
  			'100': '#e7e4fb',
  			'200': '#d5cef7',
  			'300': '#bcb0f1',
  			'400': '#a790e9',
  			'500': '#9875df',
  			'600': '#8b5bd0',
  			'700': '#7a4bb7',
  			'800': '#623f94',
  			'900': '#513976',
  			'950': '#2a1d3c'
  		},
  		victoria: {
  			'50': '#faf7fd',
  			'100': '#f2eef9',
  			'200': '#e7dff5',
  			'300': '#d5c6ec',
  			'400': '#bba1df',
  			'500': '#a07dcf',
  			'600': '#8a60bd',
  			'700': '#744ca4',
  			'800': '#5b3d7d',
  			'900': '#51366d',
  			'950': '#341e4d'
  		},
  		'biloba-flower': {
  			'50': '#f9f6fe',
  			'100': '#f1e9fe',
  			'200': '#e5d8fc',
  			'300': '#c7a9f8',
  			'400': '#b58cf4',
  			'500': '#995fed',
  			'600': '#813fde',
  			'700': '#6d2dc3',
  			'800': '#5e2a9f',
  			'900': '#4d2380',
  			'950': '#310d5e'
  		},
  		cornflower: {
  			'50': '#f1f8fe',
  			'100': '#e2f0fc',
  			'200': '#bee0f9',
  			'300': '#9ad1f7',
  			'400': '#42aaee',
  			'500': '#1a90dd',
  			'600': '#0c72bd',
  			'700': '#0b5b99',
  			'800': '#0e4d7e',
  			'900': '#114169',
  			'950': '#0b2946'
  		},
  		minsk: {
  			'50': '#eef2ff',
  			'100': '#e0e6ff',
  			'200': '#c6d1ff',
  			'300': '#a4b1fd',
  			'400': '#8088f9',
  			'500': '#6261f3',
  			'600': '#5144e7',
  			'700': '#4636cc',
  			'800': '#392fa4',
  			'900': '#312c7f',
  			'950': '#1f1a4c'
  		},
  		white: {
  			'50': '#ffffff',
  			'100': '#efefef',
  			'200': '#dcdcdc',
  			'300': '#bdbdbd',
  			'400': '#989898',
  			'500': '#7c7c7c',
  			'600': '#656565',
  			'700': '#525252',
  			'800': '#464646',
  			'900': '#3d3d3d',
  			'950': '#292929'
  		},
  		cinnabar: {
  			'50': '#fff1f1',
  			'100': '#ffdfe0',
  			'200': '#ffc5c7',
  			'300': '#ff9da0',
  			'400': '#ff656a',
  			'500': '#fe353c',
  			'600': '#ed1c23',
  			'700': '#c70e14',
  			'800': '#a41015',
  			'900': '#881418',
  			'950': '#4a0507'
  		},
  		'fun-green': {
  			'50': '#effef4',
  			'100': '#d9ffe5',
  			'200': '#b6fccd',
  			'300': '#7cf9a7',
  			'400': '#3deb79',
  			'500': '#13d457',
  			'600': '#09b044',
  			'700': '#0b8a39',
  			'800': '#0e662e',
  			'900': '#0e592b',
  			'950': '#013214'
  		}
  	},
  	extend: {
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'spinner-leaf-fade': {
  				'0%, 100%': {
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'spinner-leaf-fade': 'spinner-leaf-fade 800ms linear infinite'
  		}
  	}
  },
  plugins: [tailwindcss_animate],
} satisfies Config;
