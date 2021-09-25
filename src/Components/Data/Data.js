const RichestPerson = [
    {
        name: 'Jeff Bezos',
        rank: 1,
        networth: '177B',
        source: 'Amazon',
        industry: 'Technology',
        img: 'https://tse4.mm.bing.net/th?id=OIP.jWoEK1ItEzFDETavKwogpwHaFT&pid=Api&P=0&w=227&h=163'
    },
    {
        name: 'Elon Musk',
        rank: 2,
        networth: '151B',
        source: 'Tesla, SpaceX',
        industry: 'Automotive',
        img: 'https://tse4.mm.bing.net/th?id=OIP.2Rtsx5jtXgLZk1ExNwDsmQHaEw&pid=Api&P=0&w=297&h=192'
    },
    {
        name: 'Bernard Arnault',
        rank: 3,
        networth: '150B',
        source: 'LVMH',
        industry: 'Fashion & Retail',
        img: 'https://tse3.mm.bing.net/th?id=OIP.z7e9j34Rz508fhKaRYwNUQHaEK&pid=Api&P=0&w=318&h=180'
    },
    {
        name: 'Bill Gates',
        rank: 4,
        networth: '124B',
        source: 'Microsoft',
        industry: 'Technology',
        img: 'https://tse2.mm.bing.net/th?id=OIP.pd96N3NoXHHThv8PRs7qPAHaE8&pid=Api&P=0&w=282&h=189'
    },
    {
        name: 'Mark Zuckerberg',
        rank: 5,
        networth: '97B',
        source: 'Facebook',
        industry: 'Technology',
        img: 'https://tse1.mm.bing.net/th?id=OIP.eKy6Rhw6jOMdfTKuM2XSZQHaE7&pid=Api&P=0&w=305&h=204'
    },
    {
        name: 'Warren Buffett',
        rank: 6,
        networth: '96B',
        source: 'Berkshire Hathaway',
        industry: 'Finance & Investments',
        img: 'https://tse2.mm.bing.net/th?id=OIP.97jM2jLOJQmRDC6iQ9vj_wHaFJ&pid=Api&P=0&w=232&h=162'
    },
    {
        name: 'Larry Ellison',
        rank: 7,
        networth: '93B',
        source: 'Software',
        industry: 'Technology',
        img: 'https://tse2.mm.bing.net/th?id=OIP.8znftm1nekcCsFYXDftKVAHaFB&pid=Api&P=0&w=253&h=172'
    },
    {
        name: 'Larry Page',
        rank: 8,
        networth: '91.5B',
        source: 'Google',
        industry: 'Technology',
        img: 'https://tse2.mm.bing.net/th?id=OIP.Z4Iojr6arQAiQnLgtSzoOAHaE7&pid=Api&P=0&w=289&h=193'
    },
    {
        name: 'Sergey Brin',
        rank: 9,
        networth: '89B',
        source: 'Google',
        industry: 'Technology',
        img: 'https://tse3.mm.bing.net/th?id=OIP.-Exo4gDExgkaHES81YKBzQHaFW&pid=Api&P=0&w=256&h=186'
    },
    {
        name: 'Mukesh Ambani',
        rank: 10,
        networth: '84.5B',
        source: 'Diversified',
        industry: 'Diversified',
        img: 'https://tse2.mm.bing.net/th?id=OIP.WTcMf1v-8bdsloD1Yg1gLwHaE8&pid=Api&P=0&w=317&h=212'
    },
    {
        name: 'Amancio Ortega',
        rank: 11,
        networth: '77B',
        source: 'Zara',
        industry: 'Fashion & Retail',
        img: 'https://tse2.mm.bing.net/th?id=OIP.w1nixN2PcvSNtTOsem4BBgHaEK&pid=Api&P=0&w=323&h=182'
    },
    {
        name: 'Francoise Bettencourt Meyers',
        rank: 12,
        networth: '73.6B',
        source: 'L Oréal',
        industry: 'Fashion & Retail',
        img: 'https://tse4.mm.bing.net/th?id=OIP.4ARS5lGBRZIlZcK6au1slQHaFj&pid=Api&P=0&w=228&h=172'
    },
    {
        name: 'Zhong Shanshan',
        rank: 13,
        networth: '68.9B',
        source: 'beverages, pharmaceuticals',
        industry: 'Food & Beverage',
        img: 'https://tse2.mm.bing.net/th?id=OIP.VTxnwFE0XgID5l5cvXvRxgHaEK&pid=Api&P=0&w=312&h=176'
    },
    {
        name: 'Steve Ballmer',
        rank: 14,
        networth: '68.7B',
        source: 'Microsoft',
        industry: 'Technology',
        img: 'https://tse4.mm.bing.net/th?id=OIP.Uyc95QNFyfjMFxL2xZm5NQHaE8&pid=Api&P=0&w=287&h=192'
    },
    {
        name: 'Ma Huateng',
        rank: 15,
        networth: '65.8B',
        source: 'Internet Media',
        industry: 'Technology',
        img: 'https://tse3.mm.bing.net/th?id=OIP.6PxeTHP3zpnEgtu7sLdS_gHaE8&pid=Api&P=0&w=244&h=163'
    },
    {
        name: 'Carlos Slim Helu ',
        rank: 16,
        networth: '62.8B',
        source: 'telecom',
        industry: 'Telecom',
        img: 'https://tse4.mm.bing.net/th?id=OIP.Mzk7FxwtS1aB022J6kZbcgHaFj&pid=Api&P=0&w=228&h=172'
    },
    {
        name: 'Alice Walton',
        rank: 17,
        networth: '61.8B',
        source: 'Walmart',
        industry: 'Fashion & Retail',
        img: 'https://tse1.mm.bing.net/th?id=OIP.Qqe9a06drzwhKaT-FGmnOwHaFD&pid=Api&P=0&w=296&h=203'
    },
    {
        name: 'Jim Walton',
        rank: 18,
        networth: '60.2B',
        source: 'Walmart',
        industry: 'Fashion & Retail',
        img: 'https://tse4.mm.bing.net/th?id=OIP.d5GHrtm3URCQjnTYgoHQawHaE8&pid=Api&P=0&w=254&h=170'
    },
]