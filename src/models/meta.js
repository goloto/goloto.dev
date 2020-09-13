let meta = {
	'@context': 'http://schema.org/',
	'@type': 'Person',
	givenName: 'Mikhail',
	familyName: 'Goloto',
	description: '',
	nationality: {
		'@type': 'Country',
		name: 'Russia'
	},
	jobTitle: 'web developer (junior)',
	url: 'https://goloto.dev',
	email: 'mikhail@goloto.dev',
	telephone: '+7 (916) 744-58-08',
	address: {
		'@type': 'PostalAddress',
		addressCountry: {
			'@type': 'Country',
			name: 'Russia'
		},
		addressRegion: 'Moscow oblast',
		addressLocality: 'Dubna',
	},
	knowsLanguage: [{
		'@type': 'Language',
		name: 'russian'
	}, {
		'@type': 'Language',
		name: 'english'
	}]
};

module.exports = meta;