class Project {
	constructor(name, code, url, date, description, tags) {
		this.name = name;
		this.code = code;
		this.url = url;
		this.date = date;
		this.description = description;
		this.tags = tags;
	}
}

let tags = {
	bitrix: {
		name: 'Bitrix',
		code: 'bitrix'
	},
	modx: {
		name: 'ModX',
		code: 'modx'
	},
	laravel: {
		name: 'Laravel',
		code: 'laravel'
	},
	integration: {
		name: 'CMS integration',
		code: 'integration'
	},
	ui: {
		name: 'UI fixes',
		code: 'ui'
	},
	seo: {
		name: 'SEO',
		code: 'seo'
	},
	features: {
		name: 'new features',
		code: 'features'
	},
	deploy: {
		name: 'deploying/backup',
		code: 'deploy'
	},
	specification: {
		name: 'specification',
		code: 'spec'
	}
};

let projects = [

	new Project(
		'vulkana.ru',
		'vulcana',
		'https://www.vulkana.ru/',
		{start: new Date(2020, 7),},
		'E-commerce website • UI bugs fixed • New features developed • Basic SEO work',
		[tags.ui, tags.features, tags.seo,],),

	new Project(
		'razo10.ru',
		'razo10',
		'https://razo10.ru/',
		{start: new Date(2020, 7), end: new Date(2020, 8),},
		'Brochure website • UI bugs fixed • Basic SEO work',
		[tags.laravel, tags.ui, tags.seo,],),

	new Project(
		'potencia.expert',
		'potencia',
		'https://potencia.expert/',
		{start: new Date(2020, 6), end: new Date(2020, 7),},
		'Brochure website • UI bugs fixed • Basic SEO work',
		[tags.modx, tags.ui, tags.seo,],),

	new Project(
		'tessa.ru',
		'tessa',
		'http://tessa.ru/',
		{start: new Date(2020, 5), end: new Date(2020, 6),},
		'Brochure website • Fully developed from layout',
		[tags.bitrix, tags.ui, tags.features,],),

	new Project(
		'vegatyres-shop.ru',
		'vegatyres-shop',
		'https://vegatyres-shop.ru/',
		{start: new Date(2020, 5), end: new Date(2020, 6),},
		'E-commerce website • Many UI fixes • New pages developed • Basic SEO work',
		[tags.bitrix, tags.ui, tags.features, tags.seo,],),

	new Project(
		'orgsoft.ru',
		'orgsoft',
		'http://orgsoft.ru/',
		{start: new Date(2020, 5), end: new Date(2020, 6),},
		'Business website • Backed up and moved project to another hosting',
		[tags.bitrix, tags.deploy,],),

	new Project(
		'redbee.ru',
		'redbee',
		'https://www.redbee.ru/',
		{start: new Date(2020, 5), end: new Date(2020, 6),},
		'Business website • New pages developed • Integrated new pages into Bitrix CMS',
		[tags.bitrix, tags.integration, tags.ui, tags.features,],),

	new Project(
		'acare.ru',
		'acare',
		'https://www.acare.ru/ru/homepage.html#',
		{start: new Date(2020, 4), end: new Date(2020, 5),},
		'Business website • Created terms of reference for basic SEO work',
		[tags.bitrix, tags.specification,],),

	new Project(
		'dcd.ru',
		'dcd',
		'https://www.dcd.ru/',
		{start: new Date(2020, 4), end: new Date(2020, 5),},
		'E-commerce website • Backed up and moved project to another hosting',
		[tags.bitrix, tags.deploy,],),

	new Project(
		'i3d.ru',
		'i3d',
		'https://i3d.ru/',
		{start: new Date(2020, 4), end: new Date(2020, 7),},
		'E-commerce website • Dived into a lot of legacy to set and fix SEO • Set up pagination for all numbered pages',
		[tags.bitrix, tags.ui, tags.seo,],),

	new Project(
		'securitysmokescreen.ru',
		'securitysmokescreen',
		'https://securitysmokescreen.ru/',
		{start: new Date(2020, 4), end: new Date(2020, 8),},
		'Business website • UI bugs fixed • New features developed • Backed up and moved project to another hosting',
		[tags.bitrix, tags.ui, tags.features, tags.deploy,],),

	new Project(
		'my-safe.ru',
		'my-safe',
		'https://www.my-safe.ru/',
		{start: new Date(2020, 2), end: new Date(2020, 3),},
		'Business website • New pages developed • New cost calculator developed • Few bugs fixed',
		[tags.bitrix, tags.ui, tags.features,],),

	new Project(
		'f-karting.ru',
		'f-karting',
		'https://f-karting.ru/',
		{start: new Date(2020, 1), end: new Date(2020, 2),},
		'Brochure website • Backed up and moved project to another hosting',
		[tags.bitrix, tags.deploy,],),

	new Project(
		'liston.ru / listonlab.com',
		'liston',
		'https://www.listonlab.com/',
		{start: new Date(2020, 1),},
		'Business website • Integrated into Bitrix CMS • New design implemented • UI bugs fixed',
		[tags.bitrix, tags.integration, tags.ui,],),

	new Project(
		'1oknaveka.ru',
		'1oknaveka',
		'https://1oknaveka.ru/',
		{start: new Date(2020, 1), end: new Date(2020, 6),},
		'Business website • ~200 old html-pages integrated into Bitrix CMS • New design implemented • Many bugs fixed • New features and pages developed • Basic SEO work',
		[tags.bitrix, tags.integration, tags.ui, tags.seo, tags.features,],),

	new Project(
		'cropscience.bayer.ru',
		'cropscience',
		'https://www.cropscience.bayer.ru/',
		{start: new Date(2019, 10), end: new Date(2020, 3),},
		'Business website • Created terms of reference for basic SEO work',
		[tags.bitrix, tags.specification,],),

	new Project(
		'bystrumgel.com',
		'bystrumgel',
		'https://www.bystrumgel.com/',
		{start: new Date(2019, 9), end: new Date(2020, 0),},
		'Brochure website • Integrated into Bitrix CMS • Few bugs fixed • Basic SEO work',
		[tags.bitrix, tags.integration, tags.ui, tags.seo,],),

	new Project(
		'omez.ru',
		'omez',
		'https://omez.ru/',
		{start: new Date(2019, 9),},
		'Brochure website • Integrated into Bitrix CMS • UI bugs fixed • New features and pages developed • Basic SEO work',
		[tags.bitrix, tags.integration, tags.ui, tags.seo,],),

	new Project(
		'baikalelectronics.ru / baikalelectronics.com',
		'baikalelectronics',
		'https://baikalelectronics.com/',
		{start: new Date(2019, 7),},
		'Business website • Several new pages developed',
		[tags.bitrix, tags.ui, tags.features, tags.deploy,],),

	new Project(
		'aquadetrim.com',
		'aquadetrim',
		'https://aquadetrim.com/',
		{start: new Date(2019, 6), end: new Date(2020, 0),},
		'Brochure website • Integrated into Bitrix CMS • New pages developed • UI bugs fixed • Basic SEO work',
		[tags.bitrix, tags.integration, tags.ui, tags.features, tags.seo,],),

	new Project(
		'fitolizin.ru',
		'fitolizin',
		'https://www.fitolizin.ru/',
		{start: new Date(2019, 6), end: new Date(2020, 0),},
		'Brochure website • Integrated into Bitrix CMS • New pages developed • UI bugs fixed • Basic SEO work',
		[tags.bitrix, tags.integration, tags.ui, tags.features, tags.seo,],),

];

projects = projects.sort((a, b) => b.date.start - a.date.start);

module.exports = projects;