// Url for Youtube API

const remoteURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&&maxResults=10&type=video&key=AIzaSyCe3yMvrJdXFcD_Z9eHPxMTOM_z9onil2U&"

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=chess&key=AIzaSyCe3yMvrJdXFcD_Z9eHPxMTOM_z9onil2U

export default {
    getVideos(searchInput) {
        return fetch(`${remoteURL}&q=${searchInput}`)
            .then(response => response.json());
    }
}