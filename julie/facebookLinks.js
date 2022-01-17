const facebookLinks = [
    { text: 'Lost Cats Arkansas',                 uri: 'https://www.facebook.com/LostCatsArkansas' },
    { text: 'Lost Cats Kansas',                   uri: 'https://www.facebook.com/LostCatsKansas' },
    { text: 'Lost Cats Kentucky',                 uri: 'https://www.facebook.com/LostCatsKentucky' },
    { text: 'Lost Cats Maryland',                 uri: 'https://www.facebook.com/LostCatsMaryland' },
    { text: 'Lost Cats Missouri',                 uri: 'https://www.facebook.com/LostCatsMissouri' },
    { text: 'Lost Cats Nebraska',                 uri: 'https://www.facebook.com/LostCatsofNebraska' },
    { text: 'Lost Cats Nevada',                   uri: 'https://www.facebook.com/LostCatsNevada' },
    { text: 'Lost Cats New Hampshire',            uri: 'https://www.facebook.com/LostCatsNewHampshire' },
    { text: 'Lost Cats New Jersey',               uri: 'https://www.facebook.com/LostCatsNewJersey' },
    { text: 'Lost Cats New Mexico',               uri: 'https://www.facebook.com/LostCatsNewMexico' },
    { text: 'Lost Cats New York',                 uri: 'https://www.facebook.com/LostCatsNewYork' },
    { text: 'Lost Cats North Carolina',           uri: 'https://www.facebook.com/LostCatsNorthCarolina' },
    { text: 'Lost Cats North Dakota',             uri: 'https://www.facebook.com/LostCatsNorthDakota' },
    { text: 'Lost Cats Oregon',                   uri: 'https://www.facebook.com/LostCatsOregon' },
    { text: 'Lost Cats Pennsylvania',             uri: 'https://www.facebook.com/LostCatsPennsylvania' },
    { text: 'Rhode Island Lost Pets',             uri: 'https://www.facebook.com/RI.Lost.Pets' },
    { text: 'Lost Cats South Carolina',           uri: 'https://www.facebook.com/LostCatsSouthCarolina' },
    { text: 'Lost Cats South Dakota',             uri: 'https://www.facebook.com/Lost-Cats-South-Dakota-1618102758476110' },
    { text: 'Lost Cats Tennessee',                uri: 'https://www.facebook.com/LostCatsTennessee' },
    { text: 'Lost Cats Texas',                    uri: 'https://www.facebook.com/LostCatsTexas' },
    { text: 'Lost Cats Vermont',                  uri: 'https://www.facebook.com/Lostcatsvermont' },
    { text: 'Lost Cats Washington',               uri: 'https://www.facebook.com/LostCatsWashington' },
    { text: 'Lost Cats Alabama',                  uri: 'https://www.facebook.com/LostCatsAlabama/' },
    { text: 'Lost Cats Arizona',                  uri: 'https://www.facebook.com/lostcatsaz/' },
    { text: 'California Lost Cats',               uri: 'https://www.facebook.com/californialostcats/' },
    { text: 'Lost Cats Colorado',                 uri: 'https://www.facebook.com/LostCatsColorado/' },
    { text: 'Lost and Found Cats of Connecticut', uri: 'https://www.facebook.com/Lost-Found-Cats-of-Connecticut-847469515324198/' },
    { text: 'Lost and Found Cats of Delaware',    uri: 'https://www.facebook.com/Lost-Found-Cats-of-Delaware-890096977680460/' },
    { text: 'Lost Cats Florida',                  uri: 'https://www.facebook.com/LostCatsFlorida/' },
    { text: 'Lost Cats Georgia',                  uri: 'https://www.facebook.com/LostCatsGeorgia/' },
    { text: 'Lost Cats Idaho',                    uri: 'https://www.facebook.com/LostCatsIdaho/' },
    { text: 'Lost Cats Illinois',                 uri: 'https://www.facebook.com/LostCatsIllinois/' },
    { text: 'Lost Cats Indiana',                  uri: 'https://www.facebook.com/LostCatsIndiana/' },
    { text: 'Lost Cats Iowa',                     uri: 'https://www.facebook.com/LostCatsIowa/?modal=admin_todo_tour' },
    { text: 'Lost Cats Louisiana',                uri: 'https://www.facebook.com/lostcatsla/' },
    { text: 'Lost Cats Maine',                    uri: 'https://www.facebook.com/LostCatsMaine/' },
    { text: 'MA Lost Pets',                       uri: 'https://www.facebook.com/MA.Lost.Pets' },
    { text: 'Lost Cats Michigan',                 uri: 'https://www.facebook.com/LostCatsMichigan/' },
    { text: 'Lost Cats Minnesota',                uri: 'https://www.facebook.com/LostCatsMinnesota/' },
    { text: 'Lost Cats Mississippi',              uri: 'https://www.facebook.com/LostCatsMississippi/' },
    { text: 'Lost Cats Montana',                  uri: 'https://www.facebook.com/LostCatsMontana/' },
    { text: 'Lost Cats Ohio',                     uri: 'https://www.facebook.com/LostCatsOhio/' },
    { text: 'Lost Cats of Wisconsin',             uri: 'https://www.facebook.com/LostCatsofWisconsin/' }
];

function addFacebookLinksToPage() {
    const container = document.getElementById('facebookLinks');
    facebookLinks.sort((a, b) => {
        return a.text.localeCompare(b.text);
    }).forEach(link => {
        const newLink = document.createElement('A');
        newLink.setAttribute('href', link.uri);
        newLink.setAttribute('target', '_blank');
        newLink.innerText = link.text;
        container.appendChild(newLink);

        const newBreak = document.createElement('BR');
        container.appendChild(newBreak);
    });
}