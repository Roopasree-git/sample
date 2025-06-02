function showQRCode(plant) {
    let qrCodeURL;
    if (plant === 'african pine') {
        qrCodeURL = 'CHE QR/African Pine.jpg';
    } else if (plant === 'amla tree') {
        qrCodeURL = 'CHE QR/Amla Tree.jpg';
    } else if (plant === 'arabian jasmine') {
        qrCodeURL = 'CHE QR/Arabian Jasmine.jpg';
    } else if (plant === 'arjun tree') {
        qrCodeURL = 'CHE QR/Arjun Tree.jpg';
    } else if (plant === 'ashoka tree') {
        qrCodeURL = 'CHE QR/Ashoka Tree.jpg';
    } else if (plant === 'banyan tree') {
        qrCodeURL = 'CHE QR/Banyan Tree.jpg';
    } else if (plant === 'birdlime tree') {
        qrCodeURL = 'CHE QR/Birdlime Tree.jpg';
    } else if (plant === 'blackboard tree') {
        qrCodeURL = 'CHE QR/Blackboard Tree.jpg';
    } else if (plant === 'bottle brush') {
        qrCodeURL = 'CHE QR/Bottle Brush.jpg';
    } else if (plant === 'camphor tree') {
        qrCodeURL = 'CHE QR/Camphor Tree.jpg';
    } else if (plant === 'chinaberry') {
        qrCodeURL = 'CHE QR/Chinaberry.jpg';
    } else if (plant === 'chinese chaste') {
        qrCodeURL = 'CHE QR/Chinese Chaste.jpg';
    } else if (plant === 'chinese flame tree') {
        qrCodeURL = 'CHE QR/Chinese Flame Tree.jpg';
    } else if (plant === 'date palm') {
        qrCodeURL = 'CHE QR/Date Palm.jpg';
    } else if (plant === 'east indian walnut') {
        qrCodeURL = 'CHE QR/East Indian Walnut.jpg';
    } else if (plant === 'eastern cottonwood') {
        qrCodeURL = 'CHE QR/Eastern Cottonwood.jpg';
    } else if (plant === 'fire bush') {
        qrCodeURL = 'CHE QR/Fire Bush.jpg';
    } else if (plant === 'fortunes spindle') {
        qrCodeURL = 'CHE QR/Fortunes Spindle.jpg';
    } else if (plant === 'gamhar') {
        qrCodeURL = 'CHE QR/Gamhar Tree.jpg';
    } else if (plant === 'hongkong orchid tree') {
        qrCodeURL = 'CHE QR/Hong Kong Orchid Tree.jpg';
    } else if (plant === 'indian rosewood') {
        qrCodeURL = 'CHE QR/Indian Rosewood.jpg';
    } else if (plant === 'jamal gota') {
        qrCodeURL = 'CHE QR/Jamal Gota.jpg';
    } else if (plant === 'jamun tree') {
        qrCodeURL = 'CHE QR/Jamun Tree.jpg';
    } else if (plant === 'japanese holly') {
        qrCodeURL = 'CHE QR/Japanese Holly.jpg';
    } else if (plant === 'jor tor tree') {
        qrCodeURL = 'CHE QR/Jor Tor Tree.jpg';
    } else if (plant === 'kachnar') {
        qrCodeURL = 'CHE QR/Kachnar.jpg';
    } else if (plant === 'kadam') {
        qrCodeURL = 'CHE QR/Kadam.jpg';
    } else if (plant === 'karanja') {
        qrCodeURL = 'CHE QR/Karanja.jpg';
    } else if (plant === 'mahua tree') {
        qrCodeURL = 'CHE QR/Mahua Tree.jpg';
    } else if (plant === 'moulsari') {
        qrCodeURL = 'CHE QR/Moulsari.jpg';
    } else if (plant === 'moutan peony') {
        qrCodeURL = 'CHE QR/Moutan Peony.jpg';
    } else if (plant === 'nagkesar') {
        qrCodeURL = 'CHE QR/Nagkesar.jpg';
    } else if (plant === 'paradise tree') {
        qrCodeURL = 'CHE QR/Paradise Tree.jpg';
    } else if (plant === 'peepal tree') {
        qrCodeURL = 'CHE QR/Peepal Tree.jpg';
    } else if (plant === 'pinwheel tree') {
        qrCodeURL = 'CHE QR/Pinwheel Flower.jpg';
    } else if (plant === 'ponytail palm') {
        qrCodeURL = 'CHE QR/Ponytail Palm.jpg';
    } else if (plant === 'rangoon creeper') {
        qrCodeURL = 'CHE QR/Rangoon Creeper.jpg';
    } else if (plant === 'red cedar') {
        qrCodeURL = 'CHE QR/Red Cedar.jpg';
    } else if (plant === 'rose') {
        qrCodeURL = 'CHE QR/Rose.jpg';
    } else if (plant === 'safeda tree') {
        qrCodeURL = 'CHE QR/Safeda Tree.jpg';
    } else if (plant === 'silver buttonwood') {
        qrCodeURL = 'CHE QR/Silver Buttonwood.jpg';
    } else if (plant === 'silver oak') {
        qrCodeURL = 'CHE QR/Silver Oak.jpg';
    } else if (plant === 'singapore graveyard flower') {
        qrCodeURL = 'CHE QR/Singapore Graveyard Flower.jpg';
    } else if (plant === 'taiwan cycad') {
        qrCodeURL = 'CHE QR/Taiwan Cycad.jpg';
    } else if (plant === 'the false ashoka') {
        qrCodeURL = 'CHE QR/The False Ashoka.jpg';
    } else if (plant === 'trumpet vine') {
        qrCodeURL = 'CHE QR/Trumpet Vine.jpg';
    } else if (plant === 'weeping fig') {
        qrCodeURL = 'CHE QR/Weeping Fig.jpg';
    } else if (plant === 'white fig') {
        qrCodeURL = 'CHE QR/White Fig.jpg';
    } else if (plant === 'yellow flame tree') {
        qrCodeURL = 'CHE QR/Yellow Flame Tree.jpg';
    } else if (plant === 'yellow oleander') {
        qrCodeURL = 'CHE QR/Yellow Oleander.jpg';
    }
    if (qrCodeURL) {
        window.open(qrCodeURL, '_blank');
    }
}

window.addEventListener('scroll', ()=> {
    const navbar = document.getElementById('navbar');
    if (window.scrollY>50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function toggleMenu() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
