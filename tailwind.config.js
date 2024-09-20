/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["selector", '[data-theme="dark"]', "class"],
	theme: {
    	extend: {
    		colors: {
    			accent: {
    				'50': '#73BBFE',
    				'100': '#5FB1FE',
    				'200': '#369DFE',
    				'300': '#0E8AFE',
    				'400': '#0175E2',
    				'500': '#0160B9',
    				'600': '#014381',
    				'700': '#002649',
    				'800': '#000912',
    				'900': '#000000',
    				'950': '#000000',
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			'accent-dark': {
    				'50': '#FFFFFF',
    				'100': '#FFFFFF',
    				'200': '#DAF3FF',
    				'300': '#B2E7FF',
    				'400': '#89DAFF',
    				'500': '#60CDFF',
    				'600': '#28BBFF',
    				'700': '#00A4EF',
    				'800': '#007DB7',
    				'900': '#00577F',
    				'950': '#004463',
    				DEFAULT: '#60CDFF'
    			},
    			gray: {
    				'50': '#CBCBCB',
    				'100': '#C1C1C1',
    				'200': '#ADADAD',
    				'300': '#989898',
    				'400': '#848484',
    				'500': '#707070',
    				'600': '#5B5B5B',
    				'700': '#474747',
    				'800': '#323232',
    				'900': '#1E1E1E',
    				'950': '#101010',
    				DEFAULT: '#1E1E1E'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
