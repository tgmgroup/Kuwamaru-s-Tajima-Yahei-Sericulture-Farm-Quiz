/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
	Help: {
		title: "Help",
		subtitle: "Some useful Links",
		body: `
			<p style="text-align: center"><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p style="text-align: center"><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
	},
	BadEnd: {
		title: "Bad Ending",
		subtitle: "Something bad happened to you.",
		body: `
			<p style="text-align: center">Why don't you start again and try to find the good ending?</p>
			<p style="text-align: center">Click the link below:</p>
			<p style="text-align: center"><a href='index.html'>Start Again</a></p>
		`,
	},
	GoodEnd: {
		title: "Good Ending",
		subtitle: "You finished the game!",
		body: `
			<p style="text-align: center">Congratulations!</p>
			<p style="text-align: center">Thanks for playing the game and learning about the Tajima Yahei Sericulture Farm.</p>
			<p style="text-align: center">If you want to play again, click the link below!</p>
			<p><a href='index.html'>Start Again</a></p>
		`,
	},
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
	Welcome: {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: "",
	},
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({
	universe: {
		autoPlay: true,
		background: {
			color: {
				value: "transparent",
			},
			image: "",
			position: "",
			repeat: "",
			size: "",
			opacity: 1,
		},
		backgroundMask: {
			composite: "destination-out",
			cover: {
				color: {
					value: "#fff",
				},
				opacity: 1,
			},
			enable: false,
		},
		clear: true,
		defaultThemes: {},
		delay: 0,
		fullScreen: {
			enable: true,
			zIndex: 0,
		},
		detectRetina: true,
		duration: 0,
		fpsLimit: 120,
		interactivity: {
			detectsOn: "window",
			events: {
				onClick: {
					enable: true,
					mode: "push",
				},
				onDiv: {
					selectors: [],
					enable: false,
					mode: [],
					type: "circle",
				},
				onHover: {
					enable: true,
					mode: "repulse",
					parallax: {
						enable: false,
						force: 2,
						smooth: 10,
					},
				},
				resize: {
					delay: 0.5,
					enable: true,
				},
			},
			modes: {
				trail: {
					delay: 1,
					pauseOnStop: false,
					quantity: 1,
				},
				attract: {
					distance: 200,
					duration: 0.4,
					easing: "ease-out-quad",
					factor: 1,
					maxSpeed: 50,
					speed: 1,
				},
				bounce: {
					distance: 200,
				},
				bubble: {
					distance: 200,
					duration: 0.4,
					mix: false,
					divs: {
						distance: 200,
						duration: 0.4,
						mix: false,
						selectors: [],
					},
				},
				connect: {
					distance: 80,
					links: {
						opacity: 0.5,
					},
					radius: 60,
				},
				grab: {
					distance: 100,
					links: {
						blink: false,
						consent: false,
						opacity: 1,
					},
				},
				push: {
					default: true,
					groups: [],
					quantity: 4,
				},
				remove: {
					quantity: 2,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: "ease-out-quad",
					divs: {
						distance: 200,
						duration: 0.4,
						factor: 100,
						speed: 1,
						maxSpeed: 50,
						easing: "ease-out-quad",
						selectors: [],
					},
				},
				slow: {
					factor: 3,
					radius: 200,
				},
				light: {
					area: {
						gradient: {
							start: {
								value: "#ffffff",
							},
							stop: {
								value: "#000000",
							},
						},
						radius: 1000,
					},
					shadow: {
						color: {
							value: "#000000",
						},
						length: 2000,
					},
				},
			},
		},
		manualParticles: [],
		particles: {
			bounce: {
				horizontal: {
					value: 1,
				},
				vertical: {
					value: 1,
				},
			},
			collisions: {
				absorb: {
					speed: 2,
				},
				bounce: {
					horizontal: {
						value: 1,
					},
					vertical: {
						value: 1,
					},
				},
				enable: false,
				maxSpeed: 10,
				mode: "bounce",
				overlap: {
					enable: true,
					retries: 0,
				},
			},
			color: {
				value: "#ff0000",
				animation: {
					h: {
						count: 0,
						enable: true,
						speed: 20,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
					s: {
						count: 0,
						enable: false,
						speed: 1,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
					l: {
						count: 0,
						enable: false,
						speed: 1,
						decay: 0,
						delay: 0,
						sync: true,
						offset: 0,
					},
				},
			},
			effect: {
				close: true,
				fill: true,
				options: {},
				type: [],
			},
			groups: {},
			move: {
				angle: {
					offset: 0,
					value: 90,
				},
				attract: {
					distance: 200,
					enable: false,
					rotate: {
						x: 3000,
						y: 3000,
					},
				},
				center: {
					x: 50,
					y: 50,
					mode: "percent",
					radius: 0,
				},
				decay: 0,
				distance: {},
				direction: "none",
				drift: 0,
				enable: true,
				gravity: {
					acceleration: 9.81,
					enable: false,
					inverse: false,
					maxSpeed: 50,
				},
				path: {
					clamp: true,
					delay: {
						value: 0,
					},
					enable: false,
					options: {},
				},
				outModes: {
					default: "out",
					bottom: "out",
					left: "out",
					right: "out",
					top: "out",
				},
				random: false,
				size: false,
				speed: 1,
				spin: {
					acceleration: 0,
					enable: false,
				},
				straight: false,
				trail: {
					enable: false,
					length: 10,
					fill: {},
				},
				vibrate: false,
				warp: false,
			},
			number: {
				density: {
					enable: true,
					width: 1920,
					height: 1080,
				},
				limit: {
					mode: "delete",
					value: 0,
				},
				value: 80,
			},
			opacity: {
				value: 0.5,
				animation: {
					count: 0,
					enable: false,
					speed: 2,
					decay: 0,
					delay: 0,
					sync: false,
					mode: "auto",
					startValue: "random",
					destroy: "none",
				},
			},
			reduceDuplicates: false,
			shadow: {
				blur: 0,
				color: {
					value: "#000",
				},
				enable: false,
				offset: {
					x: 0,
					y: 0,
				},
			},
			shape: {
				close: true,
				fill: true,
				options: {},
				type: "circle",
			},
			size: {
				value: {
					min: 1,
					max: 3,
				},
				animation: {
					count: 0,
					enable: false,
					speed: 5,
					decay: 0,
					delay: 0,
					sync: false,
					mode: "auto",
					startValue: "random",
					destroy: "none",
				},
			},
			stroke: {
				width: 0,
			},
			zIndex: {
				value: 0,
				opacityRate: 1,
				sizeRate: 1,
				velocityRate: 1,
			},
			destroy: {
				bounds: {},
				mode: "none",
				split: {
					count: 1,
					factor: {
						value: 3,
					},
					rate: {
						value: {
							min: 4,
							max: 9,
						},
					},
					sizeOffset: true,
					particles: {},
				},
			},
			roll: {
				darken: {
					enable: false,
					value: 0,
				},
				enable: false,
				enlighten: {
					enable: false,
					value: 0,
				},
				mode: "vertical",
				speed: 25,
			},
			tilt: {
				value: 0,
				animation: {
					enable: false,
					speed: 0,
					decay: 0,
					sync: false,
				},
				direction: "clockwise",
				enable: false,
			},
			twinkle: {
				lines: {
					enable: false,
					frequency: 0.05,
					opacity: 1,
				},
				particles: {
					enable: false,
					frequency: 0.05,
					opacity: 1,
				},
			},
			wobble: {
				distance: 5,
				enable: false,
				speed: {
					angle: 50,
					move: 10,
				},
			},
			life: {
				count: 0,
				delay: {
					value: 0,
					sync: false,
				},
				duration: {
					value: 0,
					sync: false,
				},
			},
			rotate: {
				value: 0,
				animation: {
					enable: false,
					speed: 0,
					decay: 0,
					sync: false,
				},
				direction: "clockwise",
				path: false,
			},
			orbit: {
				animation: {
					count: 0,
					enable: false,
					speed: 1,
					decay: 0,
					delay: 0,
					sync: false,
				},
				enable: false,
				opacity: 1,
				rotation: {
					value: 45,
				},
				width: 1,
			},
			links: {
				blink: false,
				color: {
					value: "#ffffff",
				},
				consent: false,
				distance: 150,
				enable: false,
				frequency: 1,
				opacity: 0.4,
				shadow: {
					blur: 5,
					color: {
						value: "#000",
					},
					enable: false,
				},
				triangles: {
					enable: false,
					frequency: 1,
				},
				width: 1,
				warp: false,
			},
			repulse: {
				value: 0,
				enabled: false,
				distance: 1,
				duration: 1,
				factor: 1,
				speed: 1,
			},
		},
		pauseOnBlur: true,
		pauseOnOutsideViewport: true,
		responsive: [],
		smooth: false,
		style: {},
		themes: [],
		zLayers: 100,
		name: "Basic",
		motion: {
			disable: false,
			reduce: {
				factor: 4,
				value: true,
			},
		},
	},
});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {
	Artists: {
		Credits:
			'The quiz was created by Nick Hopkins. Pictures were taken by George Liu. Kuwamaru images are from the City of Isesaki. The rest of the art was generated by AI. Find more details on our ReadMe on our <a href="https://github.com/tgmgroup/Kuwamaru-s-Halloween-Adventure" target="_blank">Github Page</a>.',
	},
	Audio: {
		Credits:
			'Most of the music was produced by artists at Pixabay. Find a full list of sources on our ReadMe on our <a href="https://github.com/tgmgroup/Kuwamaru-s-Halloween-Adventure" target="_blank">Github Page</a>.',
	},
});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {
	mainTheme: "ambient-piano-peaceful-and-relaxing-music-237007.mp3",
	farmTheme: "beautiful-emotional-soft-piano-259946.mp3",
	goodEndingTheme: "peaceful-piano-background-music-218762.mp3",
});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {

	learningPoint: "logo-corporate-152477.mp3",


});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
	// Start
	"s1": "1-microscope.JPG",
	"s2": "1-shibusawa.JPG",
	"s3": "1-mulberries.JPG",
	"s4": "1-medals.JPG",
	"s5": "1-buhei.JPG",
	"s6": "1-storage.JPG",
	"s7": "1-barrier.JPG",
	"s8": "1-house.JPG",
	"s9": "1-farm.JPG",

});

// Define the Characters
monogatari.characters({
	p: {
		name: "{{player.name}}",
		color: "#ff3951",
		directory: "Player",
		sprites: {
			normal: "player (1).png",
			running: "player (2).png",
		},
		expressions: {
			normal: "player (1).png",
			running: "player (2).png",
		},
	},
	k: {
		name: "Kuwamaru",
		color: "#5bcaff",
		directory: "Kuwamaru",
		sprites: {
			normal: "tatii.png",
			running: "kuwamaru_hashiru.png",
		},
		expressions: {
			normal: "tatii.png",
			running: "kuwamaru_hashiru.png",
		},
	},
	
	
	
});

const { Storage } = monogatari;

monogatari.script({
	// The game starts here.
	Start: [
		"clear",
		"show scene black with fadeIn",
		//'show scene #f7f6f6 with fadeIn',
		"show particles universe",
		"hide particles",
		{
			Function: {
				Apply: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = true;
					return true;
				},
				Reverse: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = false;
					return true;
				},
			},
		},
		"show particles universe",
		"show scene visitor-center-entrance with fadeIn",
		//'show notification Welcome',
		"play music mainTheme with volume 30 fade 2 loop",
		{
			Input: {
				Text: "What is your name?",
				Validation: function (input) {
					return input.trim().length > 0;
				},
				Save: function (input) {
					this.storage({
						player: {
							name: input,
						},
					});
					return true;
				},
				Revert: function () {
					this.storage({
						player: {
							name: "",
						},
					});
				},
				Warning: "You must enter a name!",
			},
		},

		//'centered Welcome to Kuwamaru\'s Halloween Adventure',

		"hide particles",

		"k:normal Hi {{player.name}}! Welcome to our adventure!",
		"p:normal Hi, Kuwamaru!",
		"k:normal Today we are going to the Tajima Yahei Sericulture Farm.",
		"k:normal We are at the Visitor Center now.",
		"k:normal Let's go meet up with Nick.",

		"show scene visitor-center-entrance with fadeIn",
		{
			Choice: {
				//'Dialog': 'centered Do you know Nick? <br><br><br><br><br><br><br><br><br><br>',
				Dialog: "k:normal Do you know Nick? ",

				Yes: {
					Text: "Yes, let's say hello to Nick.",
					Do: "jump Start-Hello-Nick-Yes",
				},
				No: {
					Text: "No, who is Nick?",
					Do: "jump Start-Hello-Nick-No",
				},
			},
		},
	],

	"Quiz1": [
		"show scene s1 with fadeIn",
		"p:normal Hi, Nick!",
		"n:normal Hello, {{player.name}}!",
		"n:normal It's good to see you again!",
		"n:normal Let's get going on our adventure today!",
		"jump Welcome-Center-1",
	],

	"Start-Hello-Nick-No": [
		"show scene visitor-center-entrance with fadeIn",
		"p:normal Ummm... who is Nick?",
		"show scene visitor-center-nick with fadeIn",
		"n:normal Hello, {{player.name}}!",
		"k:normal Nick is a teacher at Goshi Elementary and Sakai Nishi Junior High.",
		"n:normal It's a pleasure to meet you!",
		"p:normal Oh, nice to meet you, too, Nick!",
		"jump Welcome-Center-1",
	],

	// Foreshadow Monsters

	"Welcome-Center-1": [
		"show scene visitor-center-nick with fadeIn",
		"n:normal So this is the entrance to the visitor center.",
		"k:normal Let's go in.",
		"stop music mainTheme with fade 2",

		"play sound monsterRoar with volume 20",
		"show scene visitor-center-nick with shake .5s",
		"k:normal !! What was that?!",
		"play music mainTheme with volume 30 fade 2 loop",
		"show scene visitor-center-nick with fadeIn",

		"p:normal I don't know.",
		"n:normal Was it a dog?",
		"k:normal Maybe. I guess its OK.",
		"k:normal So... lets go in.",
		"p:normal OK. After you!",

		"jump Welcome-Center-2-Silkworms",
	],

	// Going inside the visitor center
	"Welcome-Center-2-Silkworms": [
		// Introduce silkworms
		"show scene visitor-center-silkworms with fadeIn",
		"k:normal These are silkworms.",
		"k:normal Silkworms are caterpillars.",
		"n:normal Just like the Hungry, Hungry Caterpillar!",
		"k:normal Yes... but we can use the thread from silkworm cocoons to make silk.",

		// Show silkworms close up
		"show scene visitor-center-silkworms-closeup with fadeIn",
		"k:normal Here they are! Aren't they cute?",
		"p:normal Ummm... sure.",
		"n:normal Yes, of course.",

		// Add a knowledge point for seeing silkworms
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						silkwormPoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} thing so far today.",

		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Choice": [
		"show scene visitor-center-silkworms with fadeIn",
		// Decide whether to watch the video or the exhibits
		{
			Choice: {
				Dialog:
					"k:normal What do you want to do? Do you want to see a video or see some exhibits? Or do you want to go to the Tajima Yahei Sericulture Farm?",

				Video: {
					Text: "Umm, let's go watch the video.",
					Do: "jump Welcome-Center-2-Video-Check",
				},
				Exhibits: {
					Text: "Umm, let's go see the exhibits.",
					Do: "jump Welcome-Center-2-Exhibits-Check",
				},
				Farm: {
					Text: "Umm, let's go to the farm.",
					Do: "jump Welcome-Center-2-Final-Check",
				},
			},
		},
	],

	"Welcome-Center-2-Video-Check": [
		// Check to see if exhibits have been seen already

		{
			Conditional: {
				Condition: function () {
					return this.storage("videoPoints");
				},
				True: "jump Welcome-Center-2-Video-Repeated",
				False: "jump Welcome-Center-2-Video",
			},
		},
	],

	"Welcome-Center-2-Video": [
		// Introduce silkworms
		"show scene visitor-center-video with fadeIn",
		"k:normal Silk has a lot of history in Japan.",
		"p:normal That's true.",
		"k:normal Japan made a lot of money with silk.",

		"show scene visitor-center-video-kuwamaru with fadeIn",
		"k:normal Shimamura was a good place for mulberry trees and silkworms.",
		"n:normal Oh, I see. So that's why the Tajima family became silkworm farmers.",
		"k:normal Yes, and Tajima Yahei learned a lot about silkworms.",

		"show scene visitor-center-video-tajima with fadeIn",
		"k:normal He went to Europe to learn about them and studied them here in Japan, too.",
		"k:normal He helped people all over Japan to grow silkworms.",
		"n:normal He created <i>yagura</i>, right?",
		"k:normal Yes! <i>Yagura</i> kept silkworm farms cool, so silkworms didn't get sick.",
		"p:normal That's the reason the Tajima Yahei Sericulture Farm is a world heritage site, then.",

		// Add a knowledge point for watching the video

		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						videoPoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",
		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Video-Repeated": [
		"p:normal Didn't we watch the video already?",
		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Exhibits-Check": [
		// Check to see if exhibits have been seen already

		{
			Conditional: {
				Condition: function () {
					return this.storage("exhibitPoints");
				},
				True: "jump Welcome-Center-2-Exhibits-Repeated",
				False: "jump Welcome-Center-2-Exhibits",
			},
		},
	],

	"Welcome-Center-2-Exhibits": [
		// Show exhbits
		"k:normal Let's look at some exhibits.",
		"show scene visitor-center-exhibithouse with fadeIn",

		"k:normal This is a model of Tajima Yahei Sericulture Farm.",
		"p:normal Oh, there are a lot of buildings there.",
		"k:normal Yes, but some of the buildings are not there anymore.",
		"k:normal We'll learn more when we go see the farm later today.",
		"p:normal OK!",

		"show scene visitor-center-exhibitbook with fadeIn",
		"k:normal This are some of the books Tajima Yahei wrote.",
		"p:normal Wow, there are a lot!",

		"show scene visitor-center-exhibitmicroscope with fadeIn",
		"k:normal This is the microscope Tajima Yahei got in Italy.",
		"p:normal Oh, he used it to study silkworms, right?",
		"k:normal Yes. He learned how to keep silkworms healthy.",
		"k:normal That's why he could write so many books.",

		"show scene visitor-center-exhibitshibusawa with fadeIn",
		"k:normal Did you know that Shibusawa Eiichi and Tajima Yahei are relatives?",
		"n:normal Who is Shibusawa Eiichi?",
		"p:normal He's on the new Japanese 10,000 yen bill, isn't he?",
		"k:normal Yes! He helped many people make money with his ideas.",
		"k:normal He helped the silk industry, too. He helped build the Tomioka Silk Mill.",
		"k:normal He talked with Tajima Yahei about going to Europe to sell silkworms.",
		"n:normal Oh, I didn't know that.",

		// Add a knowledge point for going through the exhibits
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						exhibitPoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Exhibits-Repeated": [
		"p:normal Didn't we see the exhibits already?",
		"jump Welcome-Center-2-Choice",
	],

	// Exiting the Welcome Center
	"Welcome-Center-2-Final-Check": [
		// Check to see if exhibits and videos have been seen already

		{
			Conditional: {
				Condition: function () {
					if (this.storage("videoPoints") == false) {
						return "NotReady";
					} else if (this.storage("exhibitPoints") == false) {
						return "NotReady";
					} else {
						return "Ready";
					}
				},
				NotReady: "jump Welcome-Center-2-Final-NotReady",
				Ready: "jump Welcome-Center-2-Final",
			},
		},
	],

	"Welcome-Center-2-Final-NotReady": [
		"show scene visitor-center-entrance with fadeIn",
		// Check to see if exhibits and videos have been seen already

		"k:normal Wait, we're not ready to go yet!",
		"jump Welcome-Center-2-Choice",
	],

	"Welcome-Center-2-Final": ["k:normal Now let's go to the farm!", "jump Path"],

	Path: [
		// Path to Tajima House
		"stop music mainTheme with fade 2",
		"play music farmTheme with volume 30 fade 2 loop",

		"show scene visitor-center-oldvisitorcenter with fadeIn",
		"k:normal This is the old visitor center.",
		"p:normal Oh, can we go inside?",
		"k:normal I don't think so....",
		"n:normal Let's keep going.",

		"show scene path1d-mulberries with fadeIn",
		"k:normal These are mulberries.",
		"p:normal And silkworms eat mulberry leaves, right?",
		"k:normal Yes! The're so good!",
		"p:normal I think... I don't want to eat them.",
		"k:normal That's OK! More for me! (munch munch)",

		"n:normal Do you know the song <i>Here We Go Round the Mulberry Bush</i>?",
		"stop music farmTheme with fade 2",
		"play sound mulberryBush with volume 50 loop",
		"n:normal <i>Here we go round the mulberry bush,</i>",
		"k:normal <i>the mulberry bush, the mulberry bush.</i>",
		"n:normal <i>Here we go round the mulberry bush,</i>",
		"k:normal <i>so early in the morning!</i>",
		"p:normal O...K... Thanks for singing it for me.",
		"stop sound mulberryBush with volume 50 loop",

		"play music farmTheme with volume 30 fade 2 loop",

		"show scene path1c-acrosstheroad with fadeIn",
		"k:normal We have to cross the road here.",
		"p:normal Let's be careful!",
		"k:normal Look left, look right, look left... it's OK!",
		"n:normal Yes, the guide also said it's OK to cross.",

		"show scene path1b-signboard with fadeIn",
		"n:normal The guide said the main gate is over there.",
		"p:normal It's OK. Let's look at the sign!",
		"k:normal It says that the Tajima Yahei Sericulture Farm is just one part of Tomioka Silk Mill World Heritage.",
		"n:normal I want to go see the other places some day.",

		"show scene path1a-backgate with fadeIn",
		"n:normal This is the back gate. Let's go to the main gate.",
		"k:normal OK! Turn left, go straight, then turn right.",

		"show scene tajima1-maingate with fadeIn",
		"jump Tajima-Residence-Main-Choice",
	],

	"Tajima-Residence-Main-Choice": [
		"show scene tajima1-maingate with fadeIn",
		{
			Choice: {
				Dialog:
					"k:normal Do you want to look outside or look inside the farm? Or do you want to go back to the visitor center?",

				Outside: {
					Text: "Let's look around outside.",
					Do: "jump Tajima-Residence-Outside-Main-Check",
				},
				Inside: {
					Text: "Let's look inside the farm.",
					Do: "jump Tajima-Residence-Inside-Main-Check",
				},
				Back: {
					Text: "Let's go back to the visitor center.",
					Do: "jump Path-Back-Check",
				},
			},
		},
	],

	"Tajima-Residence-Outside-Main-Check": [
		// Check to see the outside area has been seen already

		{
			Conditional: {
				Condition: function () {
					return this.storage("outsidePoints");
				},
				True: "jump Tajima-Residence-Outside-Main-Repeated",
				False: "jump Tajima-Residence-Outside-Main",
			},
		},
	],

	"Tajima-Residence-Outside-Main": [
		// Tajima Residence

		"show scene tajima2-outside with fadeIn",
		"p:normal Let's walk around outside a little.",
		"k:normal OK! I'll show you around.",
		"k:normal Let's go to the left.",

		"show scene tajima2-buheihouse with fadeIn",
		"p:normal Oh, this is a nice house!",
		"k:normal Yes! This was Tajima Buhei's house.",
		"k:normal It was built in 1863.",
		"k:normal It's called the <i>Soumakan</i>.",
		"k:normal Tajima Buhei was Tajima Yahei's relative.",
		"k:normal The Tajima families all raised silkworms in this area.",
		"k:normal There is a little museum about mulberries inside this house, too.",
		"n:normal Let's go inside another time.",
		"n:normal My friends are waiting for us in the farm, so we shouldn't take too long.",
		"p:normal Oh, OK.",

		"show scene tajima2-relatives with fadeIn",
		"k:normal This is another Tajima family house.",
		"p:normal It's very pretty.",
		"k:normal Yes, it is!",
		"k:normal This is the <i>Taiseiro</i>.",
		"k:normal It was built in 1866.",
		"k:normal And it's a Japanese national cultural property.",

		"show scene tajima2-outside with fadeIn",
		"k:normal Actually, there are about 70 other Tajima family houses here in the Shimamura area.",
		"p:normal That's a lot.",
		"k:normal If you go past the <i>Soumakan</i>, you can see the <i>Eiseikan</i>, <i>Yurinkan</i>, and <i>Shinseikan</i>.",
		"p:normal What are those?",

		"k:normal The <i>Eiseikan</i> is is a house with three <i>yagura</i> towers.",
		"k:normal It was built in 1861.",
		"p:normal Oh, that's old.",

		"k:normal The <i>Yurinkan</i> is another national cultural property.",
		"k:normal It also has three <i>yagura</i> towers.",
		"k:normal It was built in 1868.",
		"p:normal Oh, I see.",

		"k:normal The <i>Shinseikan</i> is the third national cultural property here.",
		"p:normal Oh, so many!",
		"k:normal Its <i>yagura</i> roof is a long single piece, so it works better than the <i>yagura</i> roof parts.",
		"p:normal Oh, so you can see how the <i>yagura</i> changed over the years.",
		"k:normal Yes, that's right!",

		// Add a knowledge point for going outside

		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						outsidePoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Tajima-Residence-Main-Choice",
	],

	"Tajima-Residence-Outside-Main-Repeated": [
		"p:normal Didn't we go outside already?",
		"jump Tajima-Residence-Main-Choice",
	],

	"Tajima-Residence-Inside-Main-Check": [
		// Check to see if the inside places have been seen already

		{
			Conditional: {
				Condition: function () {
					if (
						this.storage("museumPoints") == true &&
						this.storage("guidePoints") == true &&
						this.storage("storagePoints") == true &&
						this.storage("factoryPoints") == true &&
						this.storage("housePoints") == true
					) {
						return "Repeated";
					} else {
						return "Ready";
					}
				},

				Repeated: "jump Tajima-Residence-Inside-Main-Repeated",
				Ready: "jump Tajima-Residence-Inside-Start-Check",
			},
		},
	],

	"Tajima-Residence-Inside-Main-Repeated": [
		"p:normal We already went inside!",
		"jump Tajima-Residence-Main-Choice",
	],

	"Tajima-Residence-Inside-Start-Check": [
		// Check to see if G and D have been met already

		{
			Conditional: {
				Condition: function () {
					if (this.storage("gAnddPoints") == true) {
						return "Repeated";
					} else {
						return "Ready";
					}
				},

				Repeated: "jump Tajima-Residence-Inside-Choice",
				Ready: "jump Tajima-Residence-Inside-Start",
			},
		},
	],

	"Tajima-Residence-Inside-Start": [
		// Tajima Residence
		"show scene tajima1-maingate with fadeIn",
		"k:normal This is the main gate to the Tajima Yahei Sericulture Farm.",
		"k:normal Let's go inside.",
		"n:normal I hope my friends are still here",

		"show scene tajima1-everyonetogether with fadeIn",
		"n:normal Hello, it's George and David!",

		{
			Choice: {
				Dialog: "k:normal Do you know George or David?",

				George: {
					Text: "I know George.",
					Do: "jump Tajima-Residence-Inside-George",
				},
				David: {
					Text: "I know David.",
					Do: "jump Tajima-Residence-Inside-David",
				},
				Both: {
					Text: "I know both George <i>and</i> David.",
					Do: "jump Tajima-Residence-Inside-Both",
				},
			},
		},
	],

	"Tajima-Residence-Inside-George": [
		"show scene tajima1-everyonetogether with fadeIn",
		"g:normal Hey, it's Nick, {{player.name}}, and Kuwamaru.",
		"g:normal What's happening?",
		"n:normal Oh, we just came to see the Tajima Yahei Sericulture Farm.",

		"n:normal By the way, this is my other friend, David.",
		"d:normal Hey, {{player.name}}.",
		"d:normal Nice to meet you!",
		"p:normal Nice to meet you, too!",

		"jump Tajima-Residence-Inside-Start-Leaving",
	],

	"Tajima-Residence-Inside-David": [
		"show scene tajima1-everyonetogether with fadeIn",
		"d:normal Hey, Nick, {{player.name}}, and Kuwamaru.",
		"d:normal What's up?",
		"n:normal Oh, we just came to see the Tajima Yahei Sericulture Farm.",

		"n:normal By the way, this is my other friend, George.",
		"g:normal Hey, {{player.name}}.",
		"g:normal Nice to meet you!",
		"p:normal Nice to meet you, too!",

		"jump Tajima-Residence-Inside-Start-Leaving",
	],

	"Tajima-Residence-Inside-Both": [
		"show scene tajima1-everyonetogether with fadeIn",
		"d:normal Hey, it's Nick, {{player.name}}, and Kuwamaru.",
		"g:normal Hi guys, what's up?",
		"n:normal Oh, we just came to see the Tajima Yahei Sericulture Farm.",

		"g:normal Oh yeah, us, too.",

		"jump Tajima-Residence-Inside-Start-Leaving",
	],

	"Tajima-Residence-Inside-Start-Leaving": [
		"show scene tajima1-everyonetogether with fadeIn",

		"d:normal Hey, you just got here, but it's getting dark.",
		"g:normal And a little scary.",
		"d:normal We already saw everything, so we'll go back first and wait for you at the Visitor Center.",
		"g:normal Don't stay here too long! It gets dark very quickly these days.",

		"k:normal OK, see you later!",

		{
			Function: {
				Apply: () => {
					monogatari.storage({
						gAnddPoints: true,
					});
				},
			},
		},

		"jump Tajima-Residence-Inside-Choice",
	],

	"Tajima-Residence-Inside-Choice": [
		"show scene tajima1-houseandgarden with fadeIn",

		"k:normal This is the Tajima Yahei Sericulture Farm.",

		{
			Choice: {
				Dialog: "k:normal What do you want to see here?",

				Museum: {
					Text: "The museum.",
					Do: "jump Tajima-Residence-Inside-Museum-Check",
				},
				Buildings: {
					Text: "The buildings.",
					Do: "jump Tajima-Residence-Inside-Buildings-Check",
				},
				House: {
					Text: "The house.",
					Do: "jump Tajima-Residence-Inside-House-Check",
				},
				Outside: {
					Text: "I want to go back outside.",
					Do: "jump Tajima-Residence-Main-Choice",
				},
			},
		},
	],

	"Tajima-Residence-Inside-Museum-Check": [
		{
			Conditional: {
				Condition: function () {
					if (this.storage("museumPoints") == true) {
						return "Repeated";
					} else {
						return "Ready";
					}
				},

				Repeated: "jump Tajima-Residence-Inside-Museum-Repeated",
				Ready: "jump Tajima-Residence-Inside-Museum",
			},
		},
	],

	"Tajima-Residence-Inside-Museum-Repeated": [
		"p:normal We already went here and met the nice lady.",
		"jump Tajima-Residence-Inside-Choice",
	],

	"Tajima-Residence-Inside-Museum": [
		"show scene tajima1-houseandgarden with fadeIn",

		"k:normal OK, let's go to the museum!",
		"k:normal It's to our left.",

		"show scene tajima1-museumandbuildings with fadeIn",
		"guide:normal Welcome to the Tajima Yahei Sericulture Farm!",
		"n:normal Oh, thanks!",

		"guide:normal You can put your umbrellas here.",
		"guide:normal It's starting to rain a little, so let's go inside.",

		"show scene tajima1-museum1 with fadeIn",
		"guide:normal This used to be the <i>Kuwaba</i>.",
		"guide:normal This is where they gave food to the silkworms.",
		"guide:normal They have to cut the mulberry leaves up to feed so many silkworms.",
		"guide:normal This building also has two <i>yagura</i> towers, so they kept silkworms here, too.",

		"guide:normal Now it is a musuem. You can see some of the tools they used here.",
		"guide:normal These are some tools for making silk from silkworms.",

		"show scene tajima1-museum2 with fadeIn",
		"guide:normal These are some other tools for making silk from silkworms.",

		"show scene tajima1-museum3 with fadeIn",
		"guide:normal These are some tools for boiling the silkworms.",
		"k:normal Wait, what?",
		"guide:normal You have to boil silkworm cocoons to get the silk.",
		"k:running Oh, no!",

		"show scene tajima1-parismedals with fadeIn",
		"guide:normal These are some medals that Tajima Yahei got in Paris.",
		"n:normal He went to Paris?",
		"guide:normal Yes, Paris in France. He went to Europe a few times to learn about and sell silkworms.",

		"show scene tajima1-museumandbuildings with fadeIn",
		"guide:normal Thanks for coming to the museum!",
		"n:normal No, thank you! We learned a lot!",

		// Add a knowledge point for seeing the museum

		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 2,
							},
						},
						museumPoints: true,
						guidePoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned a lot of things!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Tajima-Residence-Inside-Choice",
	],

	"Tajima-Residence-Inside-Buildings-Check": [
		{
			Conditional: {
				Condition: function () {
					if (this.storage("storagePoints") == true) {
						return "Repeated";
					} else {
						return "Ready";
					}
				},

				Repeated: "jump Tajima-Residence-Inside-Buildings-Repeated",
				Ready: "jump Tajima-Residence-Inside-Buildings",
			},
		},
	],

	"Tajima-Residence-Inside-Buildings-Repeated": [
		"p:normal We already went and saw all the buildings!",
		"jump Tajima-Residence-Inside-Choice",
	],

	"Tajima-Residence-Inside-Buildings": [
		"show scene tajima1-houseandgarden with fadeIn",

		"k:normal Let's look around and see some of the things here.",
		"k:normal First, let's see the <i>Besso</i>.",

		"show scene tajima1-workbuilding with fadeIn",
		"n:normal Hey, doesn't <i>besso</i> mean <i>vacation house</i> in English?",
		"k:normal Yes, but people used it as a work building, too.",
		"k:normal This is the oldest two-story house here.",
		"k:normal They used it to raise silkworms.",
		"k:normal There is one <i>yagura</i> tower on the building.",

		"p:normal Hey, what is this?",
		"show scene tajima1-workbuildingbathroom with fadeIn",
		"k:normal That is a bathroom.",
		"n:normal Yes, that looks like a very, very old toilet.",
		"p:normal Aha...",

		"show scene tajima1-coldstorage with fadeIn",
		"k:normal This is a cold storage place.",
		"k:normal This is the first concrete cold storage of the era.",
		"n:normal That's cool.",
		"p:normal Ahem.",
		"k:normal Yes, they used to bring ice from Karuizawa in Nagano over here to keep silkworm cocoons cold.",
		"p:normal Why did they need to keep silkworm cocoons cold?",
		"k:normal Because if you keep the cocoons cold, you can keep them from becoming silkworm moths.",
		"n:normal It's like when caterpillars become butterflies, right? Like the <i>Hungry, Hungry Caterpillar</i> becomes a butterfly.",
		"p:normal Oh, I see.",
		"k:normal Yes, they can move and sell the silkworm cocoons.",
		"k:normal And they can keep the silkworm cocoons until the weather gets better, too.",

		"show scene tajima1-retainingwall with fadeIn",
		"k:normal This is a barrier to protect the Tajima Yahei Sericulture Farm.",

		"p:normal To protect it from what?",
		"k:normal A long time ago, the Tonegawa River was not so gentle.",
		"k:normal The river often flooded the area, so it's good for mulberry trees but not for people.",
		"p:normal Oh, that's too bad.",
		"k:normal Yes, but the wall helped them protect the buildings.",

		// Add a knowledge point for seeing the buildings

		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 2,
							},
						},
						storagePoints: true,
						factoryPoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned a lot of things!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Tajima-Residence-Inside-Choice",
	],

	"Tajima-Residence-Inside-House-Check": [
		{
			Conditional: {
				Condition: function () {
					if (this.storage("housePoints") == true) {
						return "Repeated";
					} else {
						return "Ready";
					}
				},

				Repeated: "jump Tajima-Residence-Inside-House-Repeated",
				Ready: "jump Tajima-Residence-Inside-House",
			},
		},
	],

	"Tajima-Residence-Inside-House-Repeated": [
		"p:normal We already went to the house!",
		"jump Tajima-Residence-Inside-Choice",
	],

	"Tajima-Residence-Inside-House": [
		"show scene tajima1-houseandgarden with fadeIn",

		"k:normal Let's look around the main house.",
		"k:normal This is the <i>Omoya</i>, the former Tajima Yahei residence.",
		"n:normal Can we go inside?",
		"k:normal Sorry, but no. The Tajima family still lives here.",
		"p:normal That's too bad.",
		"k:normal Yes, but on special Sundays, you can go in and see the first floor and some of Tajima Yahei's tools.",
		"n:normal OK.",
		"k:normal There's a <i>tatami room</i> called the <i>Shinzashiki</i> inside.",
		"k:normal And's there's a storage place for Tajima Yahei's things in the main house.",

		"show scene tajima2-backside with fadeIn",
		"k:normal There is another building behind the main house, too. ",

		"k:normal This is a storage room for special paper.",
		"p:normal Paper? Isn't this story about silk?",
		"k:normal Yes, paper! Silkworm moths laid their eggs on the paper.",
		"k:normal And then the Tajima family could sell the egg paper to other silkworm farmers.",
		"n:normal Oh, that's interesting.",

		"show scene tajima1-well with fadeIn",
		"k:normal This is the well for the house.",
		"n:normal A well?",
		"k:normal Yes, they got water from under the ground here.",

		"show scene tajima1-houseandgarden with fadeIn",
		"k:normal That's about everything here.",
		"n:normal This farm was very successful, right?",
		"k:normal Yes! About 100 people worked here, and it made millions in today's money.",
		"p:normal That's cool.",

		// Add a knowledge point for seeing the house

		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
							},
						},
						housePoints: true,
					});
				},
			},
		},

		"play sound learningPoint with volume 30",
		"p:normal Hey, I learned something!",
		"p:normal I learned {{stats.inventory.knowledge}} things so far today.",

		"jump Tajima-Residence-Inside-Choice",
	],

	// Exiting the Tajima Yahei Sericulture Farm

	"Path-Back-Check": [
		// Check to see if the farm's places have been seen already

		{
			Conditional: {
				Condition: function () {
					if (this.storage("museumPoints") == false) {
						return "NotReady";
					} else if (this.storage("guidePoints") == false) {
						return "NotReady";
					} else if (this.storage("storagePoints") == false) {
						return "NotReady";
					} else if (this.storage("factoryPoints") == false) {
						return "NotReady";
					} else if (this.storage("housePoints") == false) {
						return "NotReady";
					} else if (this.storage("outsidePoints") == false) {
						return "NotReady";
					} else {
						return "Ready";
					}
				},

				NotReady: "jump Path-Back-NotReady",
				Ready: "jump Path-Back-Start",
			},
		},
	],

	"Path-Back-NotReady": [
		"show scene visitor-center-entrance with fadeIn",
		// Check to see if exhibits and videos have been seen already

		"k:normal Wait, we're not ready to go yet!",
		"k:normal There's something we didn't see yet.",

		"jump Tajima-Residence-Main-Choice",
	],

	"Path-Back-Start": [
		// Path back to Visitor Center

		"k:normal Now we're ready to go!",
		"k:normal Let's go out the back gate.",
		"show scene tajima1-houseandgarden with fadeIn",
		"n:normal Here's the house again. It's getting kind of dark...",

		"stop music farmTheme with fade 2",
		"show scene path1a-backgate with fadeIn",
		"play music scaryTheme with volume 30 fade 2 loop",

		"k:normal Hmmmm...",
		"p:normal Something is different...",

		"show scene path1b-signboard with fadeIn",
		"n:normal Something sure <i>is</i> different...",
		"play sound monsterRoar with volume 20",
		"k:normal Let's hurry up...",
		"play sound monsterRoar with volume 30",

		"n:normal What's that?",
		"show scene zombie1 with fadeIn",
		"show scene zombie1 with shake .5s",
		"k:normal Oh, no!",
		"p:normal Zombies! Run!",

		"stop music scaryTheme with fade 2",
		"play music runningTheme with volume 30 fade 2 loop",

		{
			Choice: {
				Dialog: "k:running The zombies are coming! What should we do?",

				Run: {
					Text: "Hurry up! We have to run across the road!",
					Do: "jump Path-Back-Choice-1-Bad",
				},
				Look: {
					Text: "Look carefully, then cross!",
					Do: "jump Path-Back-Choice-1-Good",
				},
			},
		},
	],

	// Bad Ending 1: Got hit by a car and then the zombies ate you.

	"Path-Back-Choice-1-Bad": [
		"stop music runningTheme with fade 2",
		"play sound carCrash with volume 30",

		"play music badEndingTheme with volume 30 fade 2 loop",
		"show scene zombie1 with fadeIn",
		"show scene zombie1 with shake 1s",
		"z1:normal You were not careful.",
		"z1:normal You should look left and right before you cross the road.",
		"z1:normal You were hit by a car and then the zombies ate you.",
		"z1:normal Dee-li-cioussssssss.",

		"hide particles",
		{
			Function: {
				Apply: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = true;
					return true;
				},
				Reverse: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = false;
					return true;
				},
			},
		},
		"show particles universe",

		"show message BadEnd",

		"end",
	],

	"Path-Back-Choice-1-Good": [
		"play sound carSqueal with volume 30",
		"show scene path1c-acrosstheroad with fadeIn",
		"k:running Whoah! We almost got hit by that car!",
		"p:running We have to be careful!",

		"play sound monsterRoar with volume 30",
		"show scene zombie2 with shake .5s",
		"z1:normal Rrrraaaaaaaaarrrrggggghhhhh...",
		"n:running The zombies are still coming!",
		"play sound monsterRoar with volume 30",

		"show scene path1d-mulberries with fadeIn",
		"k:running Hey, these are mulberries! ",
		"k:running Maybe they like to eat mulberries!",

		{
			Choice: {
				Dialog: "k:running Let's throw some mulberries at them!",

				No: {
					Text: "No, let's keep running!",
					Do: "jump Path-Back-Choice-2-Good",
				},
				Yes: {
					Text: "Yes! Let's try it!",
					Do: "jump Path-Back-Choice-2-Bad",
				},
			},
		},
	],

	// Bad Ending 2: Took too much time throwing mulberries and got eaten.

	"Path-Back-Choice-2-Bad": [
		"show scene path1d-mulberries with fadeIn",
		"play sound monsterRoar with volume 30",
		"show scene path1d-mulberries with shake .5s",
		"show scene zombie1 with shake .5s",
		"k:running Hey! Take that! (throws a mulberry)",
		"play sound throwBerries with volume 30",
		"z1:normal Oouuuuuchhhhhhhh...",
		"play sound throwBerries with volume 30",
		"show scene zombie2with shake .5s",
		"p:running Here's another one!",
		"play sound monsterRoar with volume 30",
		"play sound throwBerries with volume 30",

		"show scene zombie3 with shake .5s",
		"k:running There's too many!",
		"show scene zombie4 with shake .5s",
		"play sound throwBerries with volume 35",
		"play sound monsterRoar with volume 35",
		"play sound throwBerries with volume 40",
		"play sound monsterRoar with volume 40",
		"play sound throwBerries with volume 40",
		"play sound throwBerries with volume 50",
		"play sound monsterRoar with volume 50",

		"stop music runningTheme with fade 2",
		"show scene zombie2 with fadeIn",
		"show scene zombie2 with shake 1s",
		"play music badEndingTheme with volume 30 fade 2 loop",

		"z2:normal You took too long.",
		"z2:normal You didn't run, so the zombies caught you.",
		"z2:normal And then they ate you.",
		"z1:normal Dee-li-cioussssssss.",

		"hide particles",
		{
			Function: {
				Apply: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = true;
					return true;
				},
				Reverse: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = false;
					return true;
				},
			},
		},
		"show particles universe",

		"show message BadEnd",

		"end",
	],

	"Path-Back-Choice-2-Good": [
		"show scene path1d-mulberries with fadeIn",
		"k:running We are almost there!",
		"n:running Keep running!",
		"show scene zombie2 with shake .5s",
		"play sound monsterRoar with volume 30",
		"show scene zombie3 with shake .5s",
		"p:running But there are so many of them!",
		"show scene zombie4 with shake .5s",

		"p:running What should we do?",
		"k:running We can go to the park!",
		"k:running We can get on a bus there!",
		"k:running Just go straight!",
		"n:running We should go to the visitor center!",
		"n:running David and George are there!",
		"n:running They will help us if we turn right!",

		{
			Choice: {
				Dialog: "k:running What should we do?",

				VisitorCenter: {
					Text: "Go straight!",
					Do: "jump Path-Back-Choice-3-Bad",
				},
				Park: {
					Text: "Turn right",
					Do: "jump Path-Back-Choice-3-Good",
				},
			},
		},
	],

	// Bad Ending 3: The bus didn't come in time.

	"Path-Back-Choice-3-Bad": [
		"stop music runningTheme with fade 2",
		"show scene zombie3 with fadeIn",
		"show scene zombie3 with shake 1s",
		"play music badEndingTheme with volume 30 fade 2 loop",

		"z3:normal You forgot that there aren't many buses here.",
		"z3:normal The bus didn't come, and the zombies caught you.",
		"z3:normal And then they ate you.",
		"z1:normal Dee-li-cioussssssss.",

		"hide particles",
		{
			Function: {
				Apply: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = true;
					return true;
				},
				Reverse: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = false;
					return true;
				},
			},
		},
		"show particles universe",

		"show message BadEnd",

		"end",
	],

	"Path-Back-Choice-3-Good": [
		"show scene visitor-center-nick with fadeIn",
		"n:running We made it?",
		"k:running Keep going! We have to go inside!",
		"play sound monsterRoar with volume 30",
		"show scene visitor-center-silkworms with fadeIn",
		"p:running They came inside with us!",
		"show scene visitor-center-silkworms with shake .5s",

		"k:running Let's go to the school library!",
		"k:running It's just over there!",

		"n:running David and George are there!",
		"p:running Run!!!!",

		"jump End-Game",
	],

	"End-Game": [
		"stop music runningTheme with fade 2",
		"show scene welcome-end with fadeIn",

		"d:normal Hey guys, what's up?",
		"g:normal Yeah, why were you running so fast?",
		"p:running The zombies!",
		"k:running The zombies!",
		"g:normal Umm, what zombies?",
		"n:normal Aren't those zombies?",
		"d:normal No, they're just students from our schools.",

		"play music goodEndingTheme with volume 30 fade 2 loop",

		"z4:normal Hello!",
		"z1:normal We tried so hard to talk to you!",
		"z2:normal You ran so fast that we didn't get a chance to talk!",
		"z3:normal We just wanted to enjoy Halloween together!",

		"p:normal Oh! So they weren't real zombies.",
		"k:normal I'm so glad... and tired.",
		"n:normal Me, too.",

		"g:normal So do you have your candy ready?",
		"d:normal Yeah!",
		"g:normal Let's do it!",

		"show scene zombie4 with fadeIn",
		"show scene zombie4 with shake 1s",
		"play sound trickOrTreat with volume 40",
		"z4:normal Trick or Treat!",

		"hide particles",
		{
			Function: {
				Apply: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = true;
					return true;
				},
				Reverse: function () {
					this.action("particles").particles(
						"universe"
					).particles.links.enable = false;
					return true;
				},
			},
		},
		"show particles universe",

		"show message GoodEnd",

		"end",
	],
});
