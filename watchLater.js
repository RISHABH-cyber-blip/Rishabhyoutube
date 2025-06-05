import { cartVideos,saveCartVideos } from './videoCart.js';
function renderWatchLater() {
  let html = '';
  cartVideos.forEach((video) => {
    html += `
      <div class="video-preview">
        <div class="thumbnail-row" onclick="window.location.href='${video.videoLink}'">
          <img class="thumbnail" src="${video.thumbnail}">
          <div class="video-time">${video.videoTime}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture" src="${video.profileImage}">
          </div>
          <div class="video-info">
            <p class="video-title">${video.videoTitle}</p>
            <p class="video-author">${video.channelName}</p>
            <p class="video-stats">${video.views} • ${video.uploadDate}</p>
            <div class="video-option-wrapper">
              <button class="delete-button js-delete-video" data-video-id="${video.id}">
              <img class='delete-img' src="icons/delete-img youtubejs.png">
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-watch-later').innerHTML = html;

    // Add event listeners for delete buttons after rendering
  document.querySelectorAll('.js-delete-video').forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // prevent triggering the parent onclick navigation

      const videoId = parseInt(button.dataset.videoId);
      deleteVideo(videoId);
    });
  });
}

function deleteVideo(id) {
  // Remove the video from cartVideos array
  const index = cartVideos.findIndex(video => video.id === id);
  if (index !== -1) {
    cartVideos.splice(index, 1);

    // Update your storage (localStorage or other)
    saveCartVideos(cartVideos);

    // Re-render the watch later list
    renderWatchLater();
  }
 
}

renderWatchLater();


