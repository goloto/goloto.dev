let meta = [{
    person: {
        "@context": "http://schema.org/",
        "@type": "Person",
        "givenName": "Mikhail",
        "familyName": "Goloto",
        "nationality": {
            "@type": "Country",
            "name": "Russia"
        },
        "jobTitle": "Web developer",
        "url": "https://goloto.dev",
        "email": "mailto:mikhail@goloto.dev",
        "telephone": "+7 (916) 744-58-08",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": {
                "@type": "Country",
                "name": "Russia"
            },
            "addressRegion": "Moscow oblast",
            "addressLocality": "Dubna",
            "streetAddress": "Entuziastov",
            "postalCode": "141981"
        },
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Full stack developer",
            "skills": [
                {"name": "PHP"},
                {"name": "JavaScript"},
                {"name": "Node.js"},
                {"name": "Express"},
                {"name": "Pug"},
                {"name": "Git"},
                {"name": "Bitrix"},
            ],
            "estimatedSalary": "",
            "occupationLocation": "Dubna"
        },
        "knowsLanguage": [{
            "@type": "Language",
            "name": "russian"
        }, {
            "@type": "Language",
            "name": "english"
        }]
    },
    index: {},
    me: {}
}];