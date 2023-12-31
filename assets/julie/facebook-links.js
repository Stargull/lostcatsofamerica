const facebookLinks = [
    { state: 'Arkansas', text: 'Lost Cats Arkansas', uri: 'https://www.facebook.com/LostCatsArkansas' },
    { state: 'Kansas', text: 'Lost Cats Kansas', uri: 'https://www.facebook.com/LostCatsKansas' },
    { state: 'Kentucky', text: 'Lost Cats Kentucky', uri: 'https://www.facebook.com/LostCatsKentucky' },
    { state: 'Maryland', text: 'Lost Cats Maryland', uri: 'https://www.facebook.com/LostCatsMaryland' },
    { state: 'Missouri', text: 'Lost Cats Missouri', uri: 'https://www.facebook.com/LostCatsMissouri' },
    { state: 'Nebraska', text: 'Lost Cats Nebraska', uri: 'https://www.facebook.com/LostCatsofNebraska' },
    { state: 'Nevada', text: 'Lost Cats Nevada', uri: 'https://www.facebook.com/LostCatsNevada' },
    { state: 'New Hampshire', text: 'Lost Cats New Hampshire', uri: 'https://www.facebook.com/LostCatsNewHampshire' },
    { state: 'New Jersey', text: 'Lost Cats New Jersey', uri: 'https://www.facebook.com/LostCatsNewJersey' },
    { state: 'New Mexico', text: 'Lost Cats New Mexico', uri: 'https://www.facebook.com/LostCatsNewMexico' },
    { state: 'New York', text: 'Lost Cats New York', uri: 'https://www.facebook.com/LostCatsNewYork' },
    { state: 'North Carolina', text: 'Lost Cats North Carolina', uri: 'https://www.facebook.com/LostCatsNorthCarolina' },
    { state: 'North Dakota', text: 'Lost Cats North Dakota', uri: 'https://www.facebook.com/LostCatsNorthDakota' },
    { state: 'Oregon', text: 'Lost Cats Oregon', uri: 'https://www.facebook.com/LostCatsOregon' },
    { state: 'Pennsylvania', text: 'Lost Cats Pennsylvania', uri: 'https://www.facebook.com/LostCatsPennsylvania' },
    { state: 'Rhode Island', text: 'Rhode Island Lost Pets', uri: 'https://www.facebook.com/RI.Lost.Pets' },
    { state: 'South Carolina', text: 'Lost Cats South Carolina', uri: 'https://www.facebook.com/LostCatsSouthCarolina' },
    { state: 'South Dakota', text: 'Lost Cats South Dakota', uri: 'https://www.facebook.com/Lost-Cats-South-Dakota-1618102758476110' },
    { state: 'Tennessee', text: 'Lost Cats Tennessee', uri: 'https://www.facebook.com/LostCatsTennessee' },
    { state: 'Texas', text: 'Lost Cats Texas', uri: 'https://www.facebook.com/LostCatsTexas' },
    { state: 'Vermont', text: 'Lost Cats Vermont', uri: 'https://www.facebook.com/Lostcatsvermont' },
    { state: 'Washington', text: 'Lost Cats Washington', uri: 'https://www.facebook.com/LostCatsWashington' },
    { state: 'Alabama', text: 'Lost Cats Alabama', uri: 'https://www.facebook.com/LostCatsAlabama/' },
    { state: 'Arizona', text: 'Lost Cats Arizona', uri: 'https://www.facebook.com/lostcatsaz/' },
    { state: 'California', text: 'California Lost Cats', uri: 'https://www.facebook.com/californialostcats/' },
    { state: 'Colorado', text: 'Colorado Lost & Found Pets', uri: 'https://www.facebook.com/coloradolostfoundpets' },
    { state: 'Connecticut', text: 'Lost Cats Connecticut', uri: 'https://www.facebook.com/Lost-Found-Cats-of-Connecticut-847469515324198/' },
    { state: 'Delaware', text: 'Lost Cats Delaware', uri: 'https://www.facebook.com/Lost-Found-Cats-of-Delaware-890096977680460/' },
    { state: 'Florida', text: 'Lost Cats Florida', uri: 'https://www.facebook.com/LostCatsFlorida/' },
    { state: 'Georgia', text: 'Lost Cats Georgia', uri: 'https://www.facebook.com/LostCatsGeorgia/' },
    { state: 'Idaho', text: 'Lost Cats Idaho', uri: 'https://www.facebook.com/LostCatsIdaho/' },
    { state: 'Illinois', text: 'Lost Cats Illinois', uri: 'https://www.facebook.com/LostCatsIllinois/' },
    { state: 'Indiana', text: 'Lost Cats Indiana', uri: 'https://www.facebook.com/LostCatsIndiana/' },
    { state: 'Iowa', text: 'Lost Cats Iowa', uri: 'https://www.facebook.com/LostCatsIowa/?modal=admin_todo_tour' },
    { state: 'Louisiana', text: 'Lost Cats Louisiana', uri: 'https://www.facebook.com/lostcatsla/' },
    { state: 'Maine', text: 'Lost Cats Maine', uri: 'https://www.facebook.com/LostCatsMaine/' },
    { state: 'Massachusetts', text: 'Lost & Found Cats of Massachusetts', uri: 'https://www.facebook.com/profile.php?id=100064430632108' },
    { state: 'Michigan', text: 'Lost Cats Michigan', uri: 'https://www.facebook.com/LostCatsMichigan/' },
    { state: 'Minnesota', text: 'Lost Cats Minnesota', uri: 'https://www.facebook.com/LostCatsMinnesota/' },
    { state: 'Mississippi', text: 'Lost Cats Mississippi', uri: 'https://www.facebook.com/LostCatsMississippi/' },
    { state: 'Montana', text: 'Lost Cats Montana', uri: 'https://www.facebook.com/LostCatsMontana/' },
    { state: 'Ohio', text: 'Lost Cats Ohio', uri: 'https://www.facebook.com/LostCatsOhio/' },
    { state: 'Wisconsin', text: 'Lost Cats of Wisconsin', uri: 'https://www.facebook.com/LostCatsofWisconsin/' },
    { state: 'Alaska', text: 'Lost Cats Alaska', uri: 'https://www.facebook.com/LostCatsAlaska/' },
    { state: 'Hawaii', text: 'Lost Cats Hawaii', uri: 'https://www.facebook.com/LostCatsHawaii' },
    { state: 'Oklahoma', text: 'Lost Cats Oklahoma', uri: 'https://www.facebook.com/LostCatsOklahoma'},
    { state: 'Utah', text: 'Lost Cats Utah', uri: 'https://www.facebook.com/LostCatsUtah' },
    { state: 'Virginia', text: 'Lost Cats Virginia', uri: 'https://www.facebook.com/LostCatsVirginia' },
    { state: 'West Virginia', text: 'Lost Cats West Virginia', uri: 'https://www.facebook.com/LostCatsWestVirginia' },
    { state: 'Wyoming', text: 'Lost Cats Wyoming', uri: 'https://www.facebook.com/LostCatsWyoming' },
    { state: 'Washington DC', text: 'Lost Cats DC', uri: 'https://www.facebook.com/LostCatsDC' }
];

function addFacebookLinksToPage() {
    const container = document.getElementById('facebookLinks');
    facebookLinks.sort((a, b) => {
        return a.state.localeCompare(b.state);
    }).forEach(link => {

        const outerDiv = document.createElement('DIV');
        outerDiv.setAttribute('class', 'col-lg-4 col-md-12 mt-4');
        outerDiv.setAttribute('data-aos', 'fade-up');

        const innerDiv = document.createElement('DIV');
        innerDiv.setAttribute('class', 'info-box');

        const newLink = document.createElement('A');
        newLink.setAttribute('href', link.uri);
        newLink.setAttribute('target', '_blank');
        newLink.innerText = link.text;

        innerDiv.appendChild(newLink);

        outerDiv.appendChild(innerDiv);

        container.appendChild(outerDiv);
    });
}