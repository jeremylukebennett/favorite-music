let songs = ["Ubik", "Get Things Straight", "Release", "Space Oddity", "Great Day", "So What", "A1", "Auditorium", "A Joy", "Opal"];
let artists = ["Icarus", "LB Lynam", "Pangaea", "David Bowie", "Madvillain", "Miles Davis", "Willow", "Mos Def", "Four Tet", "Bicep"];
let albums = ["Squid Ink", "Get Things Straight", "Release", "Space Oddity", "Madvillainy", "Kind of Blue", "Willow EP", "The Ecstatic", "Everything Ecstatic", "Bicep LP"];

let songsToDOM = document.getElementById("songs");
let artistsToDOM = document.getElementById("artists");
let albumsToDOM = document.getElementById("albums");

songsToDOM.innerHTML = songs.join(", ");
artistsToDOM.innerHTML = artists.join(", ");
albumsToDOM.innerHTML = albums.join(", ");

let songButton = document.getElementById("songBtn");
let artistButton = document.getElementById("artistBtn");
let albumButton = document.getElementById("albumBtn");

let userSongSbmt = document.getElementById("userSong");
let userArtistSbmt = document.getElementById("userArtist");
let userAlbumSbmt = document.getElementById("userAlbum");



let addInput = function(e) {
    e.preventDefault();

    switch(e.srcElement.id) {
        case "songBtn":
            var submittedSong = userSongSbmt.value;
            songs.push(submittedSong[0].toUpperCase() + submittedSong.substring(1));  
            songsToDOM.innerHTML = songs;
            var category = "songOutputs";
            makeReverseVertical(songs, category);
            makeForwardVertical(songs, category);
            makeOriginal(songs, category);
            makeOriginalReverse(songs, category);
            makeHorizontalDescendingAlphabetical(songs, category);
            makeHorizontalAscendingAlphabetical(songs, category);
            makeAsAdded(songs, category);
            makeAsAddedReversed(songs, category);
        break;

        case "artistBtn":
            var submittedArtist = userArtistSbmt.value;
            artists.push(submittedArtist[0].toUpperCase() + submittedArtist.substring(1));     
            artistsToDOM.innerHTML = artists;
            var category = "artistOutputs";
            makeReverseVertical(artists, category);
            makeForwardVertical(artists, category);
            makeOriginal(artists, category);
            makeOriginalReverse(artists, category);
            makeHorizontalDescendingAlphabetical(artists, category);
            makeHorizontalAscendingAlphabetical(songs, category);
            makeAsAdded(songs, category);
            makeAsAddedReversed(songs, category);
        break;

        case "albumBtn":
            var submittedAlbum = userAlbumSbmt.value;
            albums.push(submittedAlbum[0].toUpperCase() + submittedAlbum.substring(1));
            albumsToDOM.innerHTML = albums; 
            var category = "albumOutputs";
            makeReverseVertical(albums, category);
            makeForwardVertical(albums, category);
            makeOriginal(albums, category);
            makeOriginalReverse(albums, category);
            makeHorizontalDescendingAlphabetical(albums, category);
            makeHorizontalAscendingAlphabetical(songs, category);
            makeAsAdded(songs, category);
            makeAsAddedReversed(songs, category);
        break;
    }
}


function makeReverseVertical(userArray, inputId){
    var uniqueId = "rvrs-vert" + inputId;
    if(document.getElementById(uniqueId) != null){
        var deleteMe = document.getElementById(uniqueId);
        deleteMe.parentNode.removeChild(deleteMe);
    }
    
    var landingDiv = document.createElement("div");
    landingDiv.setAttribute("id", uniqueId);
    landingDiv.innerHTML = `<h3>Descending Alphabetically - Vertical</h3>` + userArray.slice().sort().reverse().join(`<br>`);
    document.getElementById(inputId).appendChild(landingDiv);
}

function makeForwardVertical(userArray, inputId){
    var uniqueId = "fwd-vert" + inputId;
    if(document.getElementById(uniqueId) != null){
        var deleteMe = document.getElementById(uniqueId);
        deleteMe.parentNode.removeChild(deleteMe);
    }

    var landingDiv = document.createElement("div");
    landingDiv.setAttribute("id", uniqueId);
    landingDiv.innerHTML = `<h3>Ascending Alphabetically - Vertical</h3>` + userArray.slice().sort().join(`<br>`);
    document.getElementById(inputId).appendChild(landingDiv);
}

function makeOriginal(userArray, inputId){
    var uniqueId = "org-vert" + inputId;

    if(document.getElementById(uniqueId) != null){
        var deleteMe = document.getElementById(uniqueId);
        deleteMe.parentNode.removeChild(deleteMe);
    }
    var landingDiv = document.createElement("div");
    landingDiv.setAttribute("id", uniqueId);

    landingDiv.innerHTML = `<h3>Input As Added - Vertical</h3>` + userArray.slice().join(`<br>`);
    document.getElementById(inputId).appendChild(landingDiv);
}

function makeOriginalReverse(userArray, inputId){
    var uniqueId = "org-rvrs" + inputId;

    if(document.getElementById(uniqueId) != null){
        var deleteMe = document.getElementById(uniqueId);
        deleteMe.parentNode.removeChild(deleteMe);
    }
    var landingDiv = document.createElement("div");
    landingDiv.setAttribute("id", uniqueId);

    landingDiv.innerHTML = `<h3>Input As Added Inverted- Vertical</h3>` + userArray.slice().reverse().join(`<br>`);
    document.getElementById(inputId).appendChild(landingDiv);
}

function makeHorizontalDescendingAlphabetical(userArray, inputId){
    var uniqueId = "org-rvrs-horizontal" + inputId;

    if(document.getElementById(uniqueId) != null){
        var deleteMe = document.getElementById(uniqueId);
        deleteMe.parentNode.removeChild(deleteMe);
    }
    var landingDiv = document.createElement("div");
    landingDiv.setAttribute("id", uniqueId);

    landingDiv.innerHTML = `<h3>Descending Alphabetical - Horizontal</h3>` + userArray.slice().sort().reverse().join(", ");
    document.getElementById(inputId).appendChild(landingDiv);
}

function makeHorizontalAscendingAlphabetical(userArray, inputId){
    var uniqueId = "org-fwd-horizontal" + inputId;

    if(document.getElementById(uniqueId) != null){
        var deleteMe = document.getElementById(uniqueId);
        deleteMe.parentNode.removeChild(deleteMe);
    }
    var landingDiv = document.createElement("div");
    landingDiv.setAttribute("id", uniqueId);

    landingDiv.innerHTML = `<h3>Ascending Alphabetical - Horizontal</h3>` + userArray.slice().sort().join(">> ");
    document.getElementById(inputId).appendChild(landingDiv);
}

function makeAsAdded(userArray, inputId){
    var uniqueId = "as-added-horizontal" + inputId;

    if(document.getElementById(uniqueId) != null){
        var deleteMe = document.getElementById(uniqueId);
        deleteMe.parentNode.removeChild(deleteMe);
    }
    var landingDiv = document.createElement("div");
    landingDiv.setAttribute("id", uniqueId);

    landingDiv.innerHTML = `<h3>Input As Added - Horizontal</h3>` + userArray.join(": ");
    document.getElementById(inputId).appendChild(landingDiv);
}

function makeAsAddedReversed(userArray, inputId){
    var uniqueId = "reversed-horizontal" + inputId;

    if(document.getElementById(uniqueId) != null){
        var deleteMe = document.getElementById(uniqueId);
        deleteMe.parentNode.removeChild(deleteMe);
    }
    var landingDiv = document.createElement("div");
    landingDiv.setAttribute("id", uniqueId);

    landingDiv.innerHTML = `<h3>Input As Added Inverted - Horizontal</h3>` + userArray.reverse().join("| ");
    document.getElementById(inputId).appendChild(landingDiv);
}






songButton.addEventListener("click", addInput);
albumButton.addEventListener("click", addInput);
artistButton.addEventListener("click", addInput);

