const experienceLinks = [
    "https://metmuseum.org",
    "https://nybg.org",
    "https://nyaquarium.com",
    "https://centralparknyc.org",
    "https://broadway.com"
];

const foodLinks = [
    "https://tatiananyc.com",
    "https://lilianewyork.com",
    "https://lecoucou.com",
    "https://yelp.com",
    "https://momofuku.com"
];

const sightLinks = [
    "https://nps.gov",
    "https://thehighline.org",
    "https://summitov.com",
    "https://brooklynbridgepark.org",
    "https://esbnyc.com"
];

function redirectToRandomLink(linkArray) {
    if (linkArray && linkArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * linkArray.length);
        const randomLink = linkArray[randomIndex];
        
        window.open(randomLink, '_blank', 'noopener,noreferrer');
    }
}