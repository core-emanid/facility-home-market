/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				facilityMarket: {
					"primary": "#ff9549",
					"secondary": "#3cbde5", 
					"accent": "#72ad49",	 
					"neutral": "#494f4f",							 
					"base-100": "#fff",							 
					"info": "#008cff",							 
					"success": "#00c39a",							 
					"warning": "#ff7600",							 
					"error": "#ff888c",
				},
			}
		]
	}
}
