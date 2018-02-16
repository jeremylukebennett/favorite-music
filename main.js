let songs = ["song 1", "song 2", "song 3", "song 4", "song 5", "song 6", "song 7", "song 8", "song 9", "song 10"];
let artists = ["artist 1", "artist 2", "artist 3", "artist 4", "artist 5", "artist 6", "artist 7", "artist 8", "artist 9", "artist 10"];
let albums = ["album 1", "album 2", "album 3", "album 4", "album 5", "album 6", "album 7", "album 8", "album 9", "album 10"];

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
    console.log(e.srcElement.id);

    switch(e.srcElement.id) {
        case "songBtn":
            songs.push(userSongSbmt.value);
            songsToDOM.innerHTML = songs;
            var category = "songOutputs";
            var headerSet = `<h3>Vertical Reverse Songs</h3>`;
            var storeId = "songOutpus"
            makeReverseVertical(songs, category, headerSet);
            break;

        case "artistBtn":
            artists.push(userArtistSbmt.value);      
            artistsToDOM.innerHTML = artists;
            var category = "artistOutputs";
            var headerSet = `<h3>Vertical Reverse Artists</h3>`;
            var storeId = "artistOutpus"
            makeReverseVertical(artists, category, headerSet);
            break;

        case "albumBtn":
            albums.push(userAlbumSbmt.value);  
            albumsToDOM.innerHTML = albums; 
            var category = "albumOutputs";
            var headerSet = `<h3>Vertical Reverse Albums</h3>`;
            var storeId = "albumOutpus"

            makeReverseVertical(albums, category, headerSet);
        break;
    }
}


function makeReverseVertical(userArray, userCat, catHeader){
    var rvrsVert = document.createElement("div");
    rvrsVert.innerHTML = catHeader + userArray.sort().reverse().join(`<br>`);
    document.getElementById(userCat).appendChild(rvrsVert);
}















songButton.addEventListener("click", addInput);
albumButton.addEventListener("click", addInput);
artistButton.addEventListener("click", addInput);










// let songs = ["song 1", "song 2", "song 3", "song 4", "song 5", "song 6", "song 7", "song 8", "song 9", "song 10"];
// let artists = ["artist 1", "artist 2", "artist 3", "artist 4", "artist 5", "artist 6", "artist 7", "artist 8", "artist 9", "artist 10"];
// let albums = ["album 1", "album 2", "album 3", "album 4", "album 5", "album 6", "album 7", "album 8", "album 9", "album 10"];

// let songsToDOM = document.getElementById("songs");
// let artistsToDOM = document.getElementById("artists");
// let albumsToDOM = document.getElementById("albums");

// songsToDOM.innerHTML = songs.join(", ");
// artistsToDOM.innerHTML = artists.join(", ");
// albumsToDOM.innerHTML = albums.join(", ");

// let songButton = document.getElementById("songBtn");
// let artistButton = document.getElementById("artistBtn");
// let albumButton = document.getElementById("albumBtn");

// let userSongSbmt = document.getElementById("userSong");
// let userArtistSbmt = document.getElementById("userArtist");
// let userAlbumSbmt = document.getElementById("userAlbum");



// let addInput = function(e) {
//     e.preventDefault();
//     console.log(e.srcElement.id);

//     switch(e.srcElement.id) {
//         case "songBtn":
//             songs.push(userSongSbmt.value);
//             songsToDOM.innerHTML = songs;
//             var category = "songOutputs";
//             var headerSet = `<h3>Vertical Reverse Songs</h3>`;
//             var storeId = "songOutpus"
//             makeReverseVertical(songs, category, headerSet);
//             break;

//         case "artistBtn":
//             artists.push(userArtistSbmt.value);      
//             artistsToDOM.innerHTML = artists;
//             var category = "artistOutputs";
//             var headerSet = `<h3>Vertical Reverse Artists</h3>`;
//             var storeId = "artistOutpus"
//             makeReverseVertical(artists, category, headerSet);
//             break;

//         case "albumBtn":
//             albums.push(userAlbumSbmt.value);  
//             albumsToDOM.innerHTML = albums; 
//             var category = "albumOutputs";
//             var headerSet = `<h3>Vertical Reverse Albums</h3>`;
//             var storeId = "albumOutpus"

//             makeReverseVertical(albums, category, headerSet);
//         break;
//     }
// }


// function makeReverseVertical(userArray, userCat, catHeader){
//     var rvrsVert = document.createElement("div");
//     rvrsVert.innerHTML = catHeader + userArray.sort().reverse().join(`<br>`);
//     document.getElementById(userCat).appendChild(rvrsVert);
// }















// songButton.addEventListener("click", addInput);
// albumButton.addEventListener("click", addInput);
// artistButton.addEventListener("click", addInput);


















    // let songs = ["song 1", "song 2", "song 3", "song 4", "song 5", "song 6", "song 7", "song 8", "song 9", "song 10"];
    // let artists = ["artist 1", "artist 2", "artist 3", "artist 4", "artist 5", "artist 6", "artist 7", "artist 8", "artist 9", "artist 10"];
    // let albums = ["album 1", "album 2", "album 3", "album 4", "album 5", "album 6", "album 7", "album 8", "album 9", "album 10"];
    
    // let songsToDOM = document.getElementById("songs");
    // let albumsToDOM = document.getElementById("albums");
    // let artistsToDOM = document.getElementById("artists");
    
    // songsToDOM.innerHTML = songs.join(", ");
    // albumsToDOM.innerHTML = albums.join(", ");
    // artistsToDOM.innerHTML = artists.join(", ");
    
    // let songButton = document.getElementById("songBtn");
    // let albumButton = document.getElementById("albumBtn");
    // let artistButton = document.getElementById("artistBtn");
    
    // let userSongSbmt = document.getElementById("userSong");
    // let userAlbumSbmt = document.getElementById("userAlbum");
    // let userArtistSbmt = document.getElementById("userArtist");
    
    
    // let addInput = function(e) {
    //     e.preventDefault();
    //     console.log(e.srcElement.id);
    
    //     switch(e.srcElement.id) {
    //         case "songBtn":
    //             songs.push(userSongSbmt.value);
    //             songsToDOM.innerHTML = songs;
    //             let category = "songs";
    //             makeReverseVertical(songs, category);
    //             break;
    
    //         case "artistBtn":
    //             artists.push(userArtistSbmt.value);      
    //             artistsToDOM.innerHTML = artists;
    //             let category = "artists";
    //             makeReverseVertical(artists, category);
    //             break;
    
    //         case "albumBtn":
    //             albums.push(userAlbumSbmt.value);  
    //             albumsToDOM.innerHTML = albums; 
    //             let category = "albums"
    //             makeReverseVertical(albums, category);
    //             break;
    //     }
    // }
    
    
    // function makeReverseVertical(userArray, userCat){
    
    //     switch(userCat) {
    //         case "songs":
    //             var rvrsVert = document.createElement("div");
    //             // rvrsVert.id = "reverse-vertical-songs";
    //             rvrsVert.innerHTML = `<h3>Vertical Reverse Songs</h3>` + userArray.sort().reverse().join(`<br>`);
    //             document.getElementById("outputs").appendChild(rvrsVert);
    //         break;
    
    //         case "artists":
    //             var rvrsVert = document.createElement("div");
    //             // rvrsVert.id = "reverse-vertical-songs";
    //             rvrsVert.innerHTML = `<h3>Vertical Reverse Artists</h3>` + userArray.sort().reverse().join(`<br>`);
    //             document.getElementById("outputs").appendChild(rvrsVert);
    //         break;
    //     }
    
    
    
    
    
    //     }
        
    
    
    
    // // var btn = document.createElement("div");        // Create a <button> element
    // // var t = document.createTextNode("CLICK ME");       // Create a text node
    // // btn.appendChild(t);                                // Append the text to <button>
    // // document.body.appendChild(btn);  
    
    
    // songButton.addEventListener("click", addInput);
    // albumButton.addEventListener("click", addInput);
    // artistButton.addEventListener("click", addInput);

















// var btn = document.createElement("div");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);  












// let songs = ["song 1", "song 2", "song 3", "song 4", "song 5", "song 6", "song 7", "song 8", "song 9", "song 10"];
// let artists = ["artist 1", "artist 2", "artist 3", "artist 4", "artist 5", "artist 6", "artist 7", "artist 8", "artist 9", "artist 10"];
// let albums = ["album 1", "album 2", "album 3", "album 4", "album 5", "album 6", "album 7", "album 8", "album 9", "album 10"];

// let songsToDOM = document.getElementById("songs");
// let albumsToDOM = document.getElementById("albums");
// let artistsToDOM = document.getElementById("artists");

// songsToDOM.innerHTML = songs.join(", ");
// albumsToDOM.innerHTML = albums.join(", ");
// artistsToDOM.innerHTML = artists.join(", ");

// let songButton = document.getElementById("songBtn");
// let albumButton = document.getElementById("albumBtn");
// let artistButton = document.getElementById("artistBtn");

// let userSongSbmt = document.getElementById("userSong");
// let userAlbumSbmt = document.getElementById("userAlbum");
// let userArtistSbmt = document.getElementById("userArtist");





// let addInput = function(e) {
//     e.preventDefault();
//     console.log(e.srcElement.id);

//     switch(e.srcElement.id) {
//         case "songBtn":
//             songs.push(userSongSbmt.value);
//             songsToDOM.innerHTML = songs;
//             makeReverseVertical(songs);
//             break;

//         case "artistBtn":
//             artists.push(userArtistSbmt.value);      
//             artistsToDOM.innerHTML = artists;
//             makeReverseVertical(artists);
//             break;

//         case "albumBtn":
//             albums.push(userAlbumSbmt.value);  
//             albumsToDOM.innerHTML = albums; 
//             makeReverseVertical(albums);
//             break;
//     }
// }


// function makeReverseVertical(userArray){
//     document.getElementById("reverse-vertical").innerHTML = `<h3>Vertical</h3>` + userArray.sort().reverse().join(`<br>`);
    
// }


// var btn = document.createElement("div");        // Create a <button> element
// var t = document.createTextNode("CLICK ME");       // Create a text node
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn);  


// songButton.addEventListener("click", addInput);
// albumButton.addEventListener("click", addInput);
// artistButton.addEventListener("click", addInput);








