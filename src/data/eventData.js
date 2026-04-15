export const eventData = {
	ceremony: {
		title: 'Brahmopadesham',
		subtitle: 'Upanayanam Ceremony',
		boyName: 'Deva',
		familyName: 'Vyshampayana',
		age: 11,
	},
	date: {
		day: 'Thursday',
		date: 'April 23, 2026',
		location: 'Bangalore',
	},
	venue: {
		name: 'Sri Radhakrishna Convention Hall',
		address:
			'No 8, Dattatreya Road, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004',
		phone: '080 2660 7748',
		contact: {
			name: 'Ananth',
			phone: '9845615810',
		},
	},
	schedule: [
		{
			time: '7:30 AM',
			event: 'Matru Bhojana',
			description: [
				'She is his first guru. Before any priest, before any mantra, it was her voice that taught him, her hands that fed him, her presence that made him feel safe in the world.',
				'In this ritual, the boy sits with his mother and eats from her hands — as her child, as he always has. It is a celebration of everything she has given him, and a joyful blessing as he steps forward — into the Vedas, into the light of Gayatri, into the life she always knew he was ready for.',
			],
		},
		{
			time: '8:00 AM',
			event: 'Breakfast',
			description: 'The day begins with the warmth of gathered family.',
		},
		{
			time: '9:30 AM',
			event: 'The Muhurta Begins',
			description:
				'We gather in stillness — waiting for the blessings of the Divine to enter our family.',
			highlight: true,
		},
		{
			time: '10:30 AM',
			event: 'Brahmopadesham',
			description:
				'The cloth is drawn. The Gayatri Mantra is whispered. The boy becomes Dvija.',
			highlight: true,
		},
		{
			time: '11:00 AM',
			event: 'Surya Darshanam · Samidhadanam · Bhiksha Vandana',
			description:
				'The newly initiated student meets the sun, offers his first oblation, and begs his first alms.',
		},
		{
			time: '12:30 PM',
			event: 'Ashirvadam & Sacred Feast',
			description:
				'Every elder places their hands on his head. Then we eat together, with gratitude and joy.',
		},
	],
	family: {
		parents: [
			{ name: 'Shreyas Ananth', role: 'Father' },
			{ name: 'Preethi Shreyas', role: 'Mother' },
		],
		grandparents: [
			{ name: 'Ananth S', relation: 'Grandfather' },
			{ name: 'Geetha Ananth', relation: 'Grandmother' },
		],
		lateGrandparents: [{ name: 'ShivaPrakash JD', relation: 'Grandfather' }],
		maternalGrandmother: { name: 'Uma ShivaPrakash', relation: 'Grandmother' },
		relatives: [
			{ name: 'Shruthi Sridharan & Sridharan Padmanaban' },
			{ name: 'Shruthi Desai & Prakash Desai' },
			{ name: 'Sandesh & Priyanka' },
		],
		cousins: [
			{ name: 'Vihaan Desai', relation: 'Cousin' },
			{ name: 'Rishaan Desai', relation: 'Cousin' },
		],
	},
	gayatri: {
		lines: [
			{
				devanagari: 'ॐ भूर् भुवः स्वः',
				meaning:
					'Om — The primordial sound. The universe before language.\nBhur Bhuvah Svah — The earth, the atmosphere, the heavens. All three planes of existence, addressed at once.',
			},
			{
				devanagari: 'तत् सवितुर् वरेण्यम्',
				meaning:
					'That divine light of the Sun — the source of all illumination — which is worthy of our deepest reverence.',
			},
			{
				devanagari: 'भर्गो देवस्य धीमहि',
				meaning: 'We meditate upon the brilliant light of that divine Sun.',
			},
			{
				devanagari: 'धियो यो नः प्रचोदयात्',
				meaning: 'May that light guide and inspire our intellect.',
			},
		],
		fullDevanagari:
			'ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यम्। भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्।।',
		transliteration:
			'Om Bhur Bhuvah Svah. Tat Savitur Varenyam. Bhargo Devasya Dhimahi. Dhiyo Yo Nah Prachodayat.',
	},
};
