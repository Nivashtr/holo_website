// tailwind.config.js
module.exports = {
	content: ["./**/*.{html,js}"],
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
	theme: { extend: {} },
	plugins: [],
	theme: {
        extend: {
			colors: {
			  'holo-blue': '#004A86',
			  'holo-light-blue': '#0070BA',
			}
		  },
	  screens:{
		sm:"340px",
		md:"540px",
		lg:"768px",
		xl:"1180px",
	  }
	},
	plugins: [],
	// For pure HTML/CSS projects, minimal plugins are needed
  }

