module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'serif'],
			},
			transitionProperty: {
				'bg-color': 'background-color',
				'text-color': 'color',
			},
			transitionDuration: {
				'300': '300ms',
			},
		},
	},
	plugins: [],
};