//ES6/ES2015
function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json())
        .then(json => console.log(json));
}

fetchAlbums();

//ES7/ES2017
async function fetchAlbums2() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    console.log(json);
}

fetchAlbums2();

//ES7/ES2017
const fetchAlbums3 = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    console.log(json);
}

fetchAlbums3();