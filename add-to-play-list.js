const startingTrackUri = "spotify:track:";

let trackLinkElems = document.querySelectorAll('[data-testid="internal-track-link"]');

let trackUrls = [];
for (let i = 0; i<trackLinkElems.length; i++) {
  trackUrls.push(startingTrackUri + trackLinkElems[i].href.split('/')[4]);
}

// Run this in the dev console, then edit and resend a track addToPlaylist operation in the Firefox dev console. 
// Changing the uri list to the ones extracted here and changing the uri of the target playlist in the request.
