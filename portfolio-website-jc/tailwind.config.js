module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'roboto': ['Roboto'],
			'pressStart': ['"Press Start 2P"']
		},

		colors: {
			gray: {
				darkest: '#121212',
				dark: '#212121',
				DEFAULT: '#666666',
				light: '#CBCBCB'
			},
			black: {
				DEFAULT: "#000000"
			},
			white: {
				DEFAULT: "#FFFFFF"
			},
			purple: {
				DEFAULT: "#BB86FC"
			},
			green: {
				DEFAULT: "#C7FC86"
			},
			blue: {
				DEFAULT: "#25DAC6"
			},
			red: {
				DEFAULT: "#FD4582"
			}
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
