// I need to store my questions, answers, and images.
// I can use an array that holds objects--each question will
// be an object, and each question object will contain the 
// content as keys and values

'use strict';

const answerKey = [
	// Q1 content
	{
		question: 'Which POKéMON can fly to an altitude of 4,600 feet and blows out fire at very high temperatures?',
		
		choices: [
			'Salamence',
			'Charizard',
			'Moltres',
			'Dragonite'
		],

		choiceImgs: [
			'https://cdn.bulbagarden.net/upload/thumb/4/41/373Salamence.png/240px-373Salamence.png',
			'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/240px-006Charizard.png',
			'https://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/240px-146Moltres.png',
			'https://cdn.bulbagarden.net/upload/8/8b/149Dragonite.png'
		],

		imgAlt: [
			'A picture of Salamence, a dragon/flying type POKéMON from generation III',
			'A picture of Charizard, the coolest POKéMON ever from generation I',
			'A picture of Moltres, the legendary fire POKéMON from generation I',
			'A picture of Dragonite, an extremely strong POKéMON from generation I'
		],
		
		answer: 'Charizard',
		answerImg: 'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/240px-006Charizard.png',
		answerAlt: 'A picture of Charizard, the coolest POKéMON ever from generation I'	
	},
	// Q2 content
	{
	 	question: 'Which fleet-footed POKéMON is said to run over 6,200 miles in a single day and night using the fire that blazes wildly within its body as its source of power?',
	
		choices: [
			'Houndoom',
			'Rapidash',
			'Arcanine',
			'Blaziken'
		],

		choiceImgs: [
			'https://cdn.bulbagarden.net/upload/archive/5/51/20100725004331%21229Houndoom.png',
	 		'https://cdn.bulbagarden.net/upload/3/3f/078Rapidash.png',
	 		'https://cdn.bulbagarden.net/upload/thumb/b/b8/059Arcanine.png/240px-059Arcanine.png',
	 		'https://cdn.bulbagarden.net/upload/thumb/9/90/257Blaziken.png/240px-257Blaziken.png'
		],

		imgAlt: [
			'A picture of Houndoom, a preferred POKéMON of Team Rocket from generation II',
			'A picture of Rapidash, a flaming horse POKéMON from generation I',
			'A picture of Arcanine, one of the fastest POKéMON from generation I',
			'A picture of Blaziken, a POKéMON that knows martial arts from generation III'
		],
	 	
	 	answer: 'Arcanine',
	 	answerImg: 'https://cdn.bulbagarden.net/upload/thumb/b/b8/059Arcanine.png/240px-059Arcanine.png',
	 	answerAlt: 'classic Arcanine picture'
	},
	// Q3 content
	{
	 	question: 'Which POKéMON\'s pincers contain steel and can crush any hard object it gets a hold of?',
	 	
		choices: [
			'Pinsir',
	 		'Corphish',
	 		'Scizor',
	 		'Heracross'
		],

		choiceImgs: [
			'https://cdn.bulbagarden.net/upload/thumb/7/71/127Pinsir.png/240px-127Pinsir.png',
	 		'https://cdn.bulbagarden.net/upload/3/3d/341Corphish.png',
	 		'https://cdn.bulbagarden.net/upload/thumb/5/55/212Scizor.png/240px-212Scizor.png',
	 		'https://cdn.bulbagarden.net/upload/thumb/4/47/214Heracross.png/240px-214Heracross.png'
		],

		imgAlt: [
			'A picture of Pinsir, a fierce generation I bug POKéMON',
			'A picture of Corphish, a generation III POKéMON that resembles a lobster',
			'A picture of Scizor, a really cool steel type POKéMON from generation II',
			'A picture of Heracross, a POKéMON that is as strong as Hercules from generation II'
		],
	 
	 	answer: 'Scizor',
	 	answerImg: 'https://cdn.bulbagarden.net/upload/thumb/5/55/212Scizor.png/240px-212Scizor.png'
				
	},
	// Q4 content
	{
		question: 'Which POKéMON was created by a scientist after years of horrific gene splicing and DNA engineering experiments?',
		
		choices: [
			'Porygon2',
			'Machamp',
			'Deoxys',
			'Mewtwo'
		],

		choiceImgs: [
			'https://cdn.bulbagarden.net/upload/thumb/9/99/233Porygon2.png/240px-233Porygon2.png',
			'https://cdn.bulbagarden.net/upload/archive/8/8f/20091223024337%21068Machamp.png',
			'https://cdn.bulbagarden.net/upload/thumb/e/e7/386Deoxys.png/240px-386Deoxys.png',
			'https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/240px-150Mewtwo.png'
			],

		imgAlt: [
			'A picture of Porygon2, a manmade POKéMON from generation II',
			'A picture of Machamp, a four armed martial artist POKéMON from generation I',
			'A picture of Deoxys, a mythical alien like POKéMON from generation III',
			'A picture of Mewtwo, the strongest POKéMON of all time'
		],

		answer: 'Mewtwo',
		answerImg: 'https://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/240px-150Mewtwo.png'
				
	},
	// Q5 content
	{
		question: 'Which POKéMON lived for hundreds of millions of years in the earth’s ozone layer, never descending to the ground?',
		
		choices: [
			'Rayquaza',
			'Skarmory',
			'Aerodactyl',
			'Fearow'
		],
		
		choiceImgs: [
			'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/240px-384Rayquaza.png',
			'https://cdn.bulbagarden.net/upload/thumb/3/35/227Skarmory.png/240px-227Skarmory.png',
			'https://cdn.bulbagarden.net/upload/archive/e/e8/20091228170134%21142Aerodactyl.png',
			'https://cdn.bulbagarden.net/upload/archive/a/a0/20130823054412%21022Fearow.png'
		],

		imgAlt: [
			'A picture of Rayquaza, the coolest legendary POKéMON ever from generation III',
			'A picture of Skarmory, a bird POKéMON with a steel body from generation II',
			'A picture of Aerodactyl, a prehistoric POKéMON from generation I',
			'A picture of Fearow, a fierce bird POKéMON from generation I'
		],
	
		answer: 'Rayquaza',
		answerImg: 'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/240px-384Rayquaza.png'
			
	},
	// Q6 content
	{
		question: 'Which water POKéMON can ferry people across the sea on its back?',
		
		choices: [
			'Marill',
			'Sharpedo',
 			'Lapras',
			'Squirtle'
		],

		choiceImgs: [
			'https://cdn.bulbagarden.net/upload/thumb/4/42/183Marill.png/240px-183Marill.png',
			'https://cdn.bulbagarden.net/upload/thumb/a/a8/319Sharpedo.png/240px-319Sharpedo.png',
 			'https://cdn.bulbagarden.net/upload/thumb/a/ab/131Lapras.png/240px-131Lapras.png',
			'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/240px-007Squirtle.png'
		],

		imgAlt: [
			'A picture of Marill, a relatively weak generation II water POKéMON',
			'A picture of Sharpedo, a POKéMON that looks like a shark',
			'A picture of Lapras, a POKéMON that looks like a plesiosaur from generation I',
			'A picture of Squirtle, one of the three starter POKéMON from generation I'
		],
		
		answer: 'Lapras',
		answerImg: 'https://cdn.bulbagarden.net/upload/thumb/a/ab/131Lapras.png/240px-131Lapras.png'
				
	},
	// Q7 content
	{
		question: 'Which legendary POKéMON can create blizzards by freezing the air?',
		
		choices: [
			'Articuno',
	 		'Lugia',
	 		'Kyogre',
	 		'Dialga'
		],

		choiceImgs:[
			'https://cdn.bulbagarden.net/upload/archive/4/4e/20130823143011%21144Articuno.png',
	 		'https://cdn.bulbagarden.net/upload/thumb/4/44/249Lugia.png/240px-249Lugia.png',
	 		'https://cdn.bulbagarden.net/upload/thumb/4/41/382Kyogre.png/240px-382Kyogre.png',
	 		'https://cdn.bulbagarden.net/upload/8/8a/483Dialga.png'
		],

		imgAlt: [
			'A picture of Articuno, one of the three legendary bird POKéMON from generation I',
			'A picture of Lugia, a generation II legendary bird POKéMON',
			'A picture of Kyogre, a legendary water POKéMON from generation III',
			'A picture of Dialga, a legendary POKéMON from generation IV'
		],
	 	
	 	answer: 'Articuno',
	 	answerImg: 'https://cdn.bulbagarden.net/upload/archive/4/4e/20130823143011%21144Articuno.png'
			
	},
	// Q8 content
	{
	 	question: 'Which POKéMON can adapt to a variety of environments by taking on different evolutionary forms?',
		
		choices: [
			'Jirachi',
	 		'Porgyon',
	 		'Ditto',
	 		'Eevee'
		],

		choiceImgs: [
	 		'https://cdn.bulbagarden.net/upload/thumb/8/85/385Jirachi.png/240px-385Jirachi.png',
	 		'https://cdn.bulbagarden.net/upload/archive/6/6b/20111012022717%21137Porygon.png',
	 		'https://cdn.bulbagarden.net/upload/archive/3/36/20101102004128%21132Ditto.png',
	 		'https://cdn.bulbagarden.net/upload/archive/e/e2/20100626215130%21133Eevee.png'
		],

		imgAlt: [
			'A picture of Jirachi, a legendary POKéMON from generation III',
			'A picture of Porygon, a polygonal POKéMON from generation I',
			'A picture of Ditto, a generation I POKéMON that looks mimicks others',
			'A picture of Eevee, a cute generation I POKéMON'
		],

	 	answer: 'Eevee',
	 	answerImg: 'https://cdn.bulbagarden.net/upload/archive/e/e2/20100626215130%21133Eevee.png'
			
	},
	// Q9 content
	{
		question: 'Which POKéMON was discovered in the deep sea and has not changed in over 100 million years?',
		
		choices: [
			'Wailord',
			'Relicanth',
			'Kingdra',
			'Gyarados'
		],
	
		choiceImgs: [
			'https://cdn.bulbagarden.net/upload/b/b9/321Wailord.png',
			'https://cdn.bulbagarden.net/upload/7/78/369Relicanth.png',
			'https://cdn.bulbagarden.net/upload/thumb/3/3c/230Kingdra.png/240px-230Kingdra.png',
			'https://cdn.bulbagarden.net/upload/4/41/130Gyarados.png'
		],

		imgAlt: [
			'A picture of Wailord, a POKéMON that looks like a blue whale from generation III',
			'A picture of Relicanth, a prehistoric fish POKéMON from generation III',
			'A picture of Kingdra, a generation II POKéMON that has the appearance of a seahorse',
			'A picture of Gyarados, a ferocious sea serpent POKéMON from generation I'
		],


		
		answer: 'Relicanth',
		answerImg: 'https://cdn.bulbagarden.net/upload/7/78/369Relicanth.png'
			
	},
	// Q10 content
	{
		question: 'Which POKéMON is very lazy and just eats and sleeps?',
		
		choices: [
			'Snorlax',
			'Slowpoke',
			'Muk',
			'Golem'	
		],

		choiceImgs: [
			'https://cdn.bulbagarden.net/upload/archive/f/fb/20100625193150%21143Snorlax.png',
			'https://cdn.bulbagarden.net/upload/archive/7/70/20110706011428%21079Slowpoke.png',
			'https://cdn.bulbagarden.net/upload/archive/7/7c/20091205071257%21089Muk.png',
			'https://cdn.bulbagarden.net/upload/f/f2/076Golem.png',	
		],

		imgAlt: [
			'A picture of Snorlax, a giant and fat POKéMON from generation I',
			'A picture of Slowpoke, a developmentally challenged POKéMON from generation I',
			'A picture of Muk, a generation I POKéMON that is a pile of toxic filth and goo',
			'A picture of Golem, a POKéMON made entirely of a large boulder from generation I'
		],
	
		answer: 'Snorlax',
		answerImg: 'https://cdn.bulbagarden.net/upload/archive/f/fb/20100625193150%21143Snorlax.png'
			
	},

];