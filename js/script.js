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
	GoodEnd: {
		title: "You finished the game and got a perfect score!",
		body: `
			<p style="text-align: center; font-size: 85%"><b>Congratulations!</b></p>
			<p style="text-align: center; font-size: 80%">Thanks for playing the game and learning about the Tajima Yahei Sericulture Farm. Why don't you let us know about your perfect score? Or if you have any comments about the game, let us know!</p>
			<p style="text-align: center; font-size: 70%"><a href='https://sites.google.com/isesaki-school.ed.jp/impress/contact'><b>Contact Us</b></a></p>
			<p style="text-align: center; font-size: 80%">If you want to play again, click the link below!</p>
			<p style="text-align: center; font-size: 70%"><a href='index.html'><b>Start Again</b></a></p>
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
	mainTheme: "1-efek-sound-1-220034-bgm.mp3",
	quiz1Theme: "cool-hip-hop-loop-251857.mp3",
	quiz2Theme: "funky-and-jazzy-gang-loop-251858.mp3",
	drumRoll: "drum-roll-2-228358-loop.mp3",
	thinkingTheme: "1-efek-sound-5-220035-thinking.mp3",
});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {
	drumRollEnd: "drum-roll-2-228358-end.mp3",
	wrongAnswer: "error-8-206492.mp3",
	rightAnswer: "1-efek-sound-3-220030-right.mp3",
});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
	// Start
	q0: "0-start.jpg",
	q1: "1-microscope.JPG",
	q2: "2-shibusawa.JPG",
	q3: "3-mulberries.JPG",
	q4: "4-medals.JPG",
	q5: "5-buhei.JPG",
	q6: "6-besso.JPG",
	q7: "7-storage.JPG",
	q8: "8-barrier.JPG",
	q9: "9-house.JPG",
	q10: "10-farm.JPG",
});

// Define the Characters
monogatari.characters({
	p: {
		name: "Player",
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
			sorry: "ayamaru.png",
			good: "kuwamaru_jisin.png",
			great: "kuwamaru_gokigen.png",
			learning: "kyouiku.png",
			silkworm: "mayukara.png",
			mulberry: "mulberry.png",
			reading: "dokusho1.png",
			OK: "kuwamaru_tereru.png",
			go: "matoi.png",
		},
	},
});

const { Storage } = monogatari;

monogatari.script({
	// The game starts here.
	Start: [
		"clear",
		"play music mainTheme with volume 30 loop",
		"show scene black with fadeIn",

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
		"show scene s0 with fadeIn",
		//'show notification Welcome',

		"hide particles",

		"k:reading Hi! Welcome to our quiz!",
		"k:reading Today, we're going to quiz you about the Tajima Yahei Sericulture Farm.",
		"k:reading There are just 10 questions.",

		"jump Quiz-Start",
	],

	"Quiz-Start": [
		"show scene s0 with fadeIn",

		{
			Choice: {
				Dialog: "k:reading Are you ready for the quiz? ",

				Yes: {
					Text: "Yes, let's start the quiz!",
					Do: "jump Quiz1",
				},
				No: {
					Text: "No, I don't want to play.",
					Do: "jump Quiz-Stop",
				},
				Repeat: {
					Text: "Could you say that again?",
					Do: "jump Quiz-Start",
				},
			},
		},
	],

	Quiz1: [
		"stop music mainTheme with fade 2",
		"play music quiz1Theme with volume 30 fade 0 loop",
		"show scene q1 with fadeIn",
		"k:normal OK, time for question one.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal This is Tajima Yahei's microscope.",
		"k:normal Where did he get it?",

		{
			Choice: {
				Dialog: "k:normal Where did Tajima Yahei get his microscope?",

				1: {
					Text: "He got it in Italy.",
					Do: "jump Quiz1-Right",
				},
				2: {
					Text: "He got it in Spain.",
					Do: "jump Quiz1-Wrong",
				},
				3: {
					Text: "He got it in Portugal.",
					Do: "jump Quiz1-Wrong",
				},
			},
		},
	],

	"Quiz1-Right": [
		"stop music drumRoll",
		"play sound drumRollEnd with volume 15",
		"play sound rightAnswer with volume 30",
		"show scene q1 with fadeIn",
		"k:great That's right! Good job!",
		"k:silkworm Tajima Yahei learned about silkworms in Italy.",
		"k:silkworm He took the microscope home and used it to study silkworms in Japan.",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						microscopePoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz2",
	],

	"Quiz1-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q1 with fadeIn",
		"k:normal Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz2",
	],

	Quiz2: [
		"stop music quiz1Theme with fade 2",
		"play music quiz2Theme with volume 30 fade 0 loop",
		"show scene q2 with fadeIn",
		"k:normal OK, time for question two.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal Shibusawa Eiichi was a member of Tajima Yahei’s family.",
		"k:normal His face is now on Japanese money.",
		"k:normal Which note, or which bill, does Shibusawa Eiichi appear on?",

		{
			Choice: {
				Dialog: "k:normal Which note does Shibusawa Eiichi appear on?",

				1: {
					Text: "On the 1,000 yen note.",
					Do: "jump Quiz2-Wrong",
				},
				2: {
					Text: "On the 5,000 yen note.",
					Do: "jump Quiz2-Wrong",
				},
				3: {
					Text: "On the 10,000 yen note.",
					Do: "jump Quiz2-Right",
				},
			},
		},
	],

	"Quiz2-Right": [
		"stop music drumRoll",
		"play sound rightAnswer with volume 30",
		"show scene q2 with fadeIn",
		"k:great That's right! Good job!",
		"k:normal Shibusawa Eiichi's cousin Shige was the wife of Tajima Buhei, who is from the same Tajima family as Tajima Yahei.",
		"k:normal In fact, Tajima Buhei's house is right next to Tajima Yahei's house!",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						shibusawaPoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz3",
	],

	"Quiz2-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q2 with fadeIn",
		"k:normal Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz3",
	],

	Quiz3: [
		"stop music quiz2Theme with fade 2",
		"play music quiz1Theme with volume 30 fade 0 loop",
		"show scene q3 with fadeIn",
		"k:normal OK, time for question three.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:mulberry You can see many berries on the farm.",
		"k:mulberry Which berries can you see?",

		{
			Choice: {
				Dialog:
					"k:mulberry What kind of berries can you see at the Tajima Yahei Sericulture Farm?",

				1: {
					Text: "You can see strawberries.",
					Do: "jump Quiz3-Wrong",
				},
				2: {
					Text: "You can see mulberries.",
					Do: "jump Quiz3-Right",
				},
				3: {
					Text: "You can see blueberries.",
					Do: "jump Quiz3-Wrong",
				},
			},
		},
	],

	"Quiz3-Right": [
		"stop music drumRoll",
		"play sound drumRollEnd with volume 15",
		"play sound rightAnswer with volume 30",
		"show scene q3 with fadeIn",
		"k:silkworm That's right! Good job!",
		"k:silkworm Silkworms love to eat mulberry leaves.",
		"k:silkworm There's also an English song that you might know, <i>Here We Go Round The Mulberry Bush</i>.",
		"k:go Check it out sometime!",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						berryPoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz4",
	],

	"Quiz3-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q3 with fadeIn",
		"k:silkworm Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz4",
	],

	Quiz4: [
		"stop music quiz1Theme with fade 2",
		"play music quiz2Theme with volume 30 fade 0 loop",
		"show scene q4 with fadeIn",
		"k:normal OK, time for question four.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal Tajima Yahei went to Europe to learn about silkworms.",
		"k:normal He also went there to sell silkworms.",
		"k:normal He got some medals for those silkworms in Europe.",
		"k:normal These are Tajima Yahei’s medals.",
		"k:normal Where did he get them?",

		{
			Choice: {
				Dialog: "k:normal In which city did Tajima Yahei receive his medals?",

				1: {
					Text: "He received them in Berlin.",
					Do: "jump Quiz4-Wrong",
				},
				2: {
					Text: "He received them in Paris.",
					Do: "jump Quiz4-Right",
				},
				3: {
					Text: "He received them in London.",
					Do: "jump Quiz4-Wrong",
				},
			},
		},
	],

	"Quiz4-Right": [
		"stop music drumRoll",
		"play sound rightAnswer with volume 30",
		"show scene q4 with fadeIn",
		"k:great That's right! Good job!",
		"k:normal If you look at the medals, they say 'Paris' on them.",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						medalPoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz5",
	],

	"Quiz4-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q4 with fadeIn",
		"k:normal Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz5",
	],

	Quiz5: [
		"stop music quiz2Theme with fade 2",
		"play music quiz1Theme with volume 30 fade 0 loop",
		"show scene q5 with fadeIn",
		"k:normal OK, time for question five.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal This is Tajima Yahei's house.",
		"k:normal You can see it right next to Tajima Yahei's house.",
		"k:normal When was it built?",

		{
			Choice: {
				Dialog: "k:normal When was Tajima Buhei’s house built?",

				1: {
					Text: "It was built in 1853.",
					Do: "jump Quiz5-Wrong",
				},
				2: {
					Text: "It was built in 1863.",
					Do: "jump Quiz5-Right",
				},
				3: {
					Text: "It was built in 1873.",
					Do: "jump Quiz5-Wrong",
				},
			},
		},
	],

	"Quiz5-Right": [
		"stop music drumRoll",
		"play sound drumRollEnd with volume 15",
		"play sound rightAnswer with volume 30",
		"show scene q5 with fadeIn",
		"k:great That's right! Good job!",
		"k:normal Tajima Buhei's house is called the <i>Somakan</i>.",
		"k:normal There is a museum inside it, too!",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						buheiPoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz6",
	],

	"Quiz5-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q5 with fadeIn",
		"k:normal Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz6",
	],

	Quiz6: [
		"stop music quiz1Theme with fade 2",
		"play music quiz2Theme with volume 30 fade 0 loop",
		"show scene q6 with fadeIn",
		"k:normal OK, time for question six.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal There are many buildings at the Tajima Yahei Sericulture Farm.",
		"k:normal One of these is the <i>besso</i>.",
		"k:normal What does <i>besso</i> mean?",

		{
			Choice: {
				Dialog: "k:normal What does <i>besso</i> mean?",

				1: {
					Text: 'It means "vacation house."',
					Do: "jump Quiz6-Right",
				},
				2: {
					Text: 'It means "old house."',
					Do: "jump Quiz6-Wrong",
				},
				3: {
					Text: 'It means "my house."',
					Do: "jump Quiz6-Wrong",
				},
			},
		},
	],

	"Quiz6-Right": [
		"stop music drumRoll",
		"play sound rightAnswer with volume 30",
		"show scene q6 with fadeIn",
		"k:great That's right! Good job!",
		"k:normal Many people have <i>besso</i> vacation houses in Japan.",
		"k:normal You can see a lot of them in Karuizawa, Nagano. People use them in the winter when they go skiing or in the summer when they want to escape the heat.",
		"k:normal But the <i>besso</i> at the Tajima Yahei Sericulture Farm was used for work.",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						bessoPoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz7",
	],

	"Quiz6-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q6 with fadeIn",
		"k:normal Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz7",
	],

	Quiz7: [
		"stop music quiz2Theme with fade 2",
		"play music quiz1Theme with volume 30 fade 0 loop",
		"show scene q7 with fadeIn",
		"k:normal OK, time for question seven.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal This was a cold storage place.",
		"k:normal They used it to keep silkworm cocoons cold.",
		"k:normal Cold silkworm cocoons don't hatch and become silkworm moths, so they can be sold or saved for next year.",
		"k:normal Where did they bring ice from to keep the silkworms cool?",

		{
			Choice: {
				Dialog:
					"k:normal What kind of berries can you see at the Tajima Yahei Sericulture Farm?",

				1: {
					Text: "They brought ice from Tokyo.",
					Do: "jump Quiz7-Wrong",
				},
				2: {
					Text: "They brought ice from Sapporo.",
					Do: "jump Quiz7-Wrong",
				},
				3: {
					Text: "They brought ice from Karuizawa.",
					Do: "jump Quiz7-Right",
				},
			},
		},
	],

	"Quiz7-Right": [
		"stop music drumRoll",
		"play sound drumRollEnd with volume 15",
		"play sound rightAnswer with volume 30",
		"show scene q7 with fadeIn",
		"k:great That's right! Good job!",
		"k:normal There are many other buildings you can see at the Tajima Yahei Sericulture Farm.",
		"k:go Why don't you go see them sometime?",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						storagePoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz8",
	],

	"Quiz7-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q7 with fadeIn",
		"k:normal Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz8",
	],

	Quiz8: [
		"stop music quiz1Theme with fade 2",
		"play music quiz2Theme with volume 30 fade 0 loop",
		"show scene q8 with fadeIn",
		"k:normal OK, time for question eight.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal This was a barrier to protect the farm. ",
		"k:normal The river was close, so it was good for growing mulberry trees.",
		"k:normal Using boats on the river, it was also easy to move silkworm cocoons from here to the ocean, and then the cocoons could be sent to other countries on big ships.",
		"k:normal But the river often flooded and damaged the buildings, so they built a barrier to protect the farm.",
		"k:normal Which river flooded this area many years ago?",

		{
			Choice: {
				Dialog:
					"k:normal Which river flooded the Tajima Yahei Sericulture Farm?",

				1: {
					Text: "The Hayakawa River did.",
					Do: "jump Quiz8-Wrong",
				},
				2: {
					Text: "The Tonegawa River did.",
					Do: "jump Quiz8-Right",
				},
				3: {
					Text: "The Shimano River did.",
					Do: "jump Quiz8-Wrong",
				},
			},
		},
	],

	"Quiz8-Right": [
		"stop music drumRoll",
		"play sound rightAnswer with volume 30",
		"show scene q8 with fadeIn",
		"k:great That's right! Good job!",
		"k:normal The Tonegawa River was very useful. It was one part of the <i>Jobu</i> silk road.",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						riverPoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz9",
	],

	"Quiz8-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q8 with fadeIn",
		"k:normal Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz9",
	],

	Quiz9: [
		"stop music quiz2Theme with fade 2",
		"play music quiz1Theme with volume 30 fade 0 loop",
		"show scene q9 with fadeIn",
		"k:normal OK, time for question nine.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal This is Tajima Yahei’s house.",
		"k:normal It's called the Tajima Yahei Former Residence (<i>Tajima Yahei Kyuutaku</i>).",
		"k:normal It's usually closed because the Tajima family still lives there.",
		"k:normal But sometimes you can go inside.",
		"k:normal When can you go inside to see the first floor?",

		{
			Choice: {
				Dialog:
					"k:normal On what days can you go inside to see the first floor?",

				1: {
					Text: "On special Saturdays.",
					Do: "jump Quiz9-Wrong",
				},
				2: {
					Text: "On special Sundays.",
					Do: "jump Quiz9-Right",
				},
				3: {
					Text: "On special Mondays.",
					Do: "jump Quiz9-Wrong",
				},
			},
		},
	],

	"Quiz9-Right": [
		"stop music drumRoll",
		"play sound rightAnswer with volume 30",
		"show scene q9 with fadeIn",
		"k:great That's right! Good job!",
		"k:normal The Tajima family opens the house on one special Sunday each month.",
		"k:normal You can see some of Tajima Yahei's special tools inside.",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						housePoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz10",
	],

	"Quiz9-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q9 with fadeIn",
		"k:normal Sorry, that's not right!",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal Let's go to the next question.",
		"jump Quiz10",
	],

	Quiz10: [
		"stop music quiz1Theme with fade 2",
		"play music quiz2Theme with volume 30 fade 0 loop",
		"show scene q9 with fadeIn",
		"k:normal OK, time for the last question.",
		"play music drumRoll with volume 10 fade 0 loop",
		"k:normal Many people worked at the Tajima Yahei Sericulture Farm.",
		"k:normal It made a lot of money, and silk was very important for our city.",
		"k:normal At its peak, how many people worked at the farm?",

		{
			Choice: {
				Dialog:
					"k:normal How many people worked at the Tajima Yahei Sericulture Farm?",

				1: {
					Text: "About 100.",
					Do: "jump Quiz10-Right",
				},
				2: {
					Text: "About 200.",
					Do: "jump Quiz10-Wrong",
				},
				3: {
					Text: "About 300.",
					Do: "jump Quiz10-Wrong",
				},
			},
		},
	],

	"Quiz10-Right": [
		"stop music drumRoll",
		"play sound rightAnswer with volume 30",
		"show scene q9 with fadeIn",
		"k:great That's right! Good job!",

		// Add a knowledge point
		{
			Function: {
				Apply: () => {
					const {
						inventory: { knowledge, unknownKnowledge },
					} = monogatari.storage("stats");
					monogatari.storage({
						stats: {
							inventory: {
								knowledge: knowledge + 1,
								unknownKnowledge: unknownKnowledge - 1,
							},
						},
						farmPoint: true,
					});
				},
			},
		},

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal That was the last question.",
		"jump Quiz-End",
	],

	"Quiz10-Wrong": [
		"stop music drumRoll",
		"play sound wrongAnswer with volume 30",
		"show scene q9 with fadeIn",
		"k:normal Sorry, that's not right!",

		"k:normal That was the last question.",

		// Display progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge == 1) {
						return "Single";
					} else {
						return "NotSingle";
					}
				},
				Single:
					"k:learning You got {{stats.inventory.knowledge}} question right so far.",
				NotSingle:
					"k:learning You got {{stats.inventory.knowledge}} questions right so far.",
			},
		},

		"k:normal That was the last question.",
		"jump Quiz-End",
	],

	"Quiz-End": [
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

		"stop music quiz2Theme",
		"play music thinkingTheme with volume 30 fade 0 loop",
		"show scene q0 with fadeIn",
		"k:reading Now let's check your score!",

		// Check Q1
		{
			Conditional: {
				Condition: function () {
					if (this.storage().microscopePoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that Tajima Yahei's microscope was from Italy.",
				Incorrect:
					"k:reading You didn't know that Tajima Yahei's microscope was from Italy.",
			},
		},

		// Check Q2
		{
			Conditional: {
				Condition: function () {
					if (this.storage().shibusawaPoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that Shibusawa Eiichi is on the 10,000 yen bill (or 10,000 yen note).",
				Incorrect:
					"k:reading You didn't know that Shibusawa Eiichi is on the 10,000 yen bill (or 10,000 yen note).",
			},
		},

		// Check Q3
		{
			Conditional: {
				Condition: function () {
					if (this.storage().berryPoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that you can see mulberries at the Tajima Yahei Sericulture Farm.",
				Incorrect:
					"k:reading You didn't know that you can see mulberries at the Tajima Yahei Sericulture Farm.",
			},
		},

		// Check Q4
		{
			Conditional: {
				Condition: function () {
					if (this.storage().medalPoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that Tajima Yahei got medals from Paris.",
				Incorrect:
					"k:reading You didn't know that Tajima Yahei got medals from Paris.",
			},
		},

		// Check Q5
		{
			Conditional: {
				Condition: function () {
					if (this.storage().buheiPoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that Tajima Buhei's <i>Somakan</i> was built in 1863.",
				Incorrect:
					"k:reading You didn't know that Tajima Buhei's <i>Somakan</i> was built in 1863.",
			},
		},

		// Check Q6
		{
			Conditional: {
				Condition: function () {
					if (this.storage().bessoPoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					'k:reading You were right that <i>besso</i> means "vacation house."',
				Incorrect:
					'k:reading You didn\'t know <i>besso</i> means "vacation house."',
			},
		},

		// Check Q7
		{
			Conditional: {
				Condition: function () {
					if (this.storage().storagePoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that ice for keeping silkworms cool came from Karuizawa.",
				Incorrect:
					"k:reading You didn't know that ice for keeping silkworms cool came from Karuizawa.",
			},
		},

		// Check Q8
		{
			Conditional: {
				Condition: function () {
					if (this.storage().riverPoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that the Tonegawa River flooded the Tajima Yahei Sericulture Farm.",
				Incorrect:
					"k:reading You didn't know that the Tonegawa River flooded the Tajima Yahei Sericulture Farm.",
			},
		},

		// Check Q9
		{
			Conditional: {
				Condition: function () {
					if (this.storage().housePoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that you can see the first floor of the Tajima Yahei Former Residence on special Sundays.",
				Incorrect:
					"k:reading You didn't know that you can see the first floor of the Tajima Yahei Former Residence on special Sundays.",
			},
		},

		// Check Q10
		{
			Conditional: {
				Condition: function () {
					if (this.storage().farmPoint == true) {
						return "Correct";
					} else {
						return "Incorrect";
					}
				},
				Correct:
					"k:reading You were right that about 100 people worked at the Tajima Yahei Sericulture Farm at its peak.",
				Incorrect:
					"k:reading You didn't know that about 100 people worked at the Tajima Yahei Sericulture Farm at its peak.",
			},
		},

		// Check progress
		{
			Conditional: {
				Condition: function () {
					if (this.storage().stats.inventory.knowledge < 5) {
						return "OK";
					} else if (this.storage().stats.inventory.knowledge < 10) {
						return "Good";
					} else {
						return "Perfect";
					}
				},
				OK: "jump OK-End",
				Good: "jump Good-End",

				Perfect: "jump Perfect-End",
			},
		},
	],

	"OK-End": [
		"k:OK You didn't get so many questions right.",
		"k:OK But that's OK! You can always try again.",
		"k:OK You'll learn some new things if you do!",

		{
			Choice: {
				Dialog: "k:OK Do you want to try again?",

				Yes: {
					Text: "Yes",
					Do: "jump Quiz-Start",
				},
				No: {
					Text: "No",
					Do: "jump Quiz-Stop",
				},
			},
		},
	],

	"Good-End": [
		"k:good You got a lot of questions right!",
		"k:good Do you want to try again and get a perfect score?",
		"k:good You might learn some new things if you do!",

		{
			Choice: {
				Dialog: "k:good Do you want to try again?",

				Yes: {
					Text: "Yes",
					Do: "jump Quiz-Start",
				},
				No: {
					Text: "No",
					Do: "jump Quiz-Stop",
				},
			},
		},
	],

	"Perfect-End": [
		"k:great You got everything right!",
		"k:great You sure know a lot about the Tajima Yahei Sericulture Farm!",
		"k:great Thanks for playing our game!",
		"k:great Why don't you tell us at <i>Impress</i> about your score?",

		"show message GoodEnd",

		"end",
	],

	"Quiz-Stop": [
		"k:sorry You really don't want to play our game?",

		{
			Choice: {
				Dialog: "k:sorry Do you want to try the quiz?",

				Yes: {
					Text: "Yes",
					Do: "jump Quiz1",
				},
				No: {
					Text: "No",
					Do: "jump No-End",
				},
			},
		},
			],

	"No-End": [
		"k:sorry OK, well, see you sometime again!",
		"k:go Please visit the Tajima Yahei Sericulture Farm sometime!",
		"k:normal Thanks for playing our game!",

		"end",
	],
});
