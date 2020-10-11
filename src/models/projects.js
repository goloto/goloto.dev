class Project {
	constructor(name, code, url, date, tasks, tags) {
		this.name = name;
		this.code = code;
		this.url = url;
		this.date = date;
		this.tasks = tasks;
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
	backend: {
		name: 'backend fixes',
		code: 'backend'
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
		{ start: new Date(2020, 7), end: new Date(2020, 8), },
		['fix displaying prices for non-auth users',],
		[tags.backend,],),

	new Project(
		'razo10.ru',
		'razo10',
		'https://razo10.ru/',
		{ start: new Date(2020, 7), end: new Date(2020, 8), },
		['fix H1', 'fix 404-links', 'fix src- and alt-attributes', 'fix layout', 'fix styles',],
		[tags.laravel, tags.ui, tags.seo,],),

	new Project(
		'potencia.expert',
		'potencia',
		'https://potencia.expert/',
		{ start: new Date(2020, 6), end: new Date(2020, 7), },
		['fix templates data output', 'integrate schema.org', 'fix layout', 'fix styles',],
		[tags.modx, tags.ui, tags.backend, tags.seo,],),

	new Project(
		'tessa.ru',
		'tessa',
		'http://tessa.ru/',
		{ start: new Date(2020, 5), end: new Date(2020, 6), },
		['develop layout', 'develop forms', 'integrate sliders', 'integrate animations', 'search and integrate icons', 'integrate content into Bitrix CMS',],
		[tags.bitrix, tags.ui, tags.integration, tags.features, tags.deploy,],),

	new Project(
		'vegatyres-shop.ru',
		'vegatyres-shop',
		'https://vegatyres-shop.ru/',
		{ start: new Date(2020, 5), end: new Date(2020, 6), },
		['develop and integrate new design', 'integrate schema.org', 'fix alt-attributes', 'add content', 'fix content',],
		[tags.bitrix, tags.ui, tags.features, tags.seo,],),

	new Project(
		'orgsoft.ru',
		'orgsoft',
		'http://orgsoft.ru/',
		{ start: new Date(2020, 5), end: new Date(2020, 6), },
		['back up and move project to different hosting',],
		[tags.bitrix, tags.deploy,],),

	new Project(
		'redbee.ru',
		'redbee',
		'https://www.redbee.ru/',
		{ start: new Date(2020, 5), end: new Date(2020, 6), },
		['develop brochure page from design model', 'integrate schema.org', 'develop forms', 'integrate content into Bitrix CMS',],
		[tags.bitrix, tags.ui, tags.integration, tags.features,],),

	new Project(
		'acare.ru',
		'acare',
		'https://www.acare.ru/ru/homepage.html#',
		{ start: new Date(2020, 4), end: new Date(2020, 5), },
		['create terms of reference for schema.org integration',],
		[tags.bitrix, tags.specification,],),

	new Project(
		'dcd.ru',
		'dcd',
		'https://www.dcd.ru/',
		{ start: new Date(2020, 4), end: new Date(2020, 5), },
		['back up and move project to different hosting',],
		[tags.bitrix, tags.deploy,],),

	new Project(
		'i3d.ru',
		'i3d',
		'https://i3d.ru/',
		{ start: new Date(2020, 4), end: new Date(2020, 7), },
		['fix turbo pages generating', 'optimize scripts and libraries loading', 'fix alt-attributes', 'develop meta-information generating', 'fix 301-, 302-, 404-links', 'integrate schema.org', 'fix layout', 'fix styles',],
		[tags.bitrix, tags.ui, tags.backend, tags.seo, tags.deploy,],),

	new Project(
		'securitysmokescreen.ru',
		'securitysmokescreen',
		'https://securitysmokescreen.ru/',
		{ start: new Date(2020, 4), end: new Date(2020, 8), },
		['integrate re-captcha', 'add content', 'fix content', 'fix layout', 'fix styles', 'fix analytic counts', 'develop meta-information generating',],
		[tags.bitrix, tags.ui, tags.backend, tags.features, tags.deploy,],),

	new Project(
		'my-safe.ru',
		'my-safe',
		'https://www.my-safe.ru/',
		{ start: new Date(2020, 2), end: new Date(2020, 3), },
		['develop new service page', 'develop new cost calculator', 'fix layout', 'fix styles', 'add new content',],
		[tags.bitrix, tags.ui, tags.backend, tags.features, tags.deploy,],),

	new Project(
		'f-karting.ru',
		'f-karting',
		'https://f-karting.ru/',
		{ start: new Date(2020, 1), end: new Date(2020, 2), },
		['integrate schema.org', 'develop forms', 'integrate re-captcha', 'back up and move project to different hosting', 'fix layout', 'fix styles',],
		[tags.bitrix, tags.ui, tags.backend, tags.features, tags.deploy,],),

	new Project(
		'liston.ru / listonlab.com',
		'liston',
		'https://www.listonlab.com/',
		{ start: new Date(2020, 1), end: new Date(2020, 8), },
		['integrate new design into sliders, forms, basket, news and product pages', 'set up products basket', 'set up breadcrumbs', 'set up analytic counts', 'fix 404 page', 'fix turbo-pages generating', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS', 'back up and move project to different hosting',],
		[tags.bitrix, tags.ui, tags.integration, tags.backend, tags.deploy,],),

	new Project(
		'1oknaveka.ru',
		'1oknaveka',
		'https://1oknaveka.ru/',
		{ start: new Date(2020, 1), end: new Date(2020, 6), },
		['integrate ~200 html-pages into Bitrix CMS', 'develop and optimize page routes', 'integrate new design', 'integrate 3-level menu', 'develop forms', 'fix 301-, 302-, 404-links', 'delete duplicated pages and set up 301-redirects', 'fix H1', 'develop turbo-pages generating', 'fix content', 'integrate schema.org', 'develop meta-information generating', 'fix layout', 'fix styles', 'back up and move project to different hosting',],
		[tags.bitrix, tags.ui, tags.integration, tags.backend, tags.seo, tags.features,],),

	new Project(
		'cropscience.bayer.ru',
		'cropscience',
		'https://www.cropscience.bayer.ru/',
		{ start: new Date(2019, 10), end: new Date(2020, 3), },
		['create terms of reference for schema.org integration, increasing page speed and turbo-pages integration',],
		[tags.bitrix, tags.specification,],),

	new Project(
		'bystrumgel.com',
		'bystrumgel',
		'https://www.bystrumgel.com/',
		{ start: new Date(2019, 9), end: new Date(2020, 0), },
		['layout validation', 'integrate schema.org', 'increase page speed', 'add article section and pages', 'fix meta-information', 'fix animations', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS',],
		[tags.bitrix, tags.ui, tags.integration, tags.backend, tags.seo, tags.deploy,],),

	new Project(
		'omez.ru',
		'omez',
		'https://omez.ru/',
		{ start: new Date(2019, 9), end: new Date(2020, 8), },
		['add turbo-pages', 'integrate schema.org', 'increase page speed', 'add article section and pages', 'fix meta-information', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS', 'back up and move project to different hosting',],
		[tags.bitrix, tags.ui, tags.integration, tags.backend, tags.seo, tags.deploy,],),

	new Project(
		'baikalelectronics.ru / baikalelectronics.com',
		'baikalelectronics',
		'https://baikalelectronics.com/',
		{ start: new Date(2019, 7), end: new Date(2020, 8), },
		['develop and integrate new product pages', 'develop and integrate new procurements page', 're-design main page', 'add content', 'fix content', 'fix layout', 'fix styles',],
		[tags.bitrix, tags.ui, tags.features, tags.backend, tags.deploy,],),

	new Project(
		'aquadetrim.com',
		'aquadetrim',
		'https://aquadetrim.com/',
		{ start: new Date(2019, 6), end: new Date(2020, 0), },
		['add content', 'fix content', 'add article section and pages', 'fix 301-, 302-, 404-links', 'fix breadcrumbs', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS',],
		[tags.bitrix, tags.ui, tags.integration, tags.backend, tags.features, tags.seo,],),

	new Project(
		'fitolizin.ru',
		'fitolizin',
		'https://www.fitolizin.ru/',
		{ start: new Date(2019, 6), end: new Date(2020, 0), },
		['add content', 'fix content', 'fix meta-information', 'develop and integrate article pages', 'fix scrolling', 'fix layout', 'fix styles', 'integrate content into Bitrix CMS',],
		[tags.bitrix, tags.ui, tags.integration, tags.features, tags.seo,],),

];

projects = projects.sort((a, b) => b.date.start - a.date.start);

module.exports = projects;