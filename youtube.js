import { videos} from './video.js';
import { addToCart } from './videoCart.js';



function renderVideosGrid() {
  let videosHTML = '';
  videos.forEach((video) => {
    videosHTML += `
      <div class="video-preview js-video-preview-${video.id} ">
        <div class="thumbnail-row" onclick="window.location.href='${video.videoLink}'">
          <img class="thumbnail" src="${video.thumbnail}"> 
          <div class="video-time">${video.videoTime}</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture" src="${video.profileImage}">
          </div>
          <div class="video-info">
            <p class="video-title">
              ${video.videoTitle}
            </p>
            <p class="video-author">
              ${video.channelName}
            </p>
            <p class="video-stats">
              ${video.views} • ${video.uploadDate}
            </p>
            <div class="video-option-wrapper">
              <button class="video-option-button">
                <img class="video-option" src="icons/more-vertical-svgrepo-com.svg">
              </button>
              <div class="extra-options" style="display: none;">
                <button class="extra-option js-watch-later" data-video-id=${video.id}>🔖 Watch Later</button>
                <button class="extra-option">🚩 Report</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  });

  // Inject all HTML
  document.querySelector('.js-video-grid').innerHTML = videosHTML;

  document.querySelectorAll('.video-option-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click bubbling
    const wrapper = button.parentElement;
    const extraOptions = wrapper.querySelector('.extra-options');
    const isVisible = extraOptions.style.display === 'block';

    // Hide all other menus
    document.querySelectorAll('.extra-options').forEach((menu) => {
      menu.style.display = 'none';
    });

    // Toggle this menu
    extraOptions.style.display = isVisible ? 'none' : 'block';
  });
});

// Optional: Hide on clicking elsewhere
document.addEventListener('click', () => {
  document.querySelectorAll('.extra-options').forEach((menu) => {
    menu.style.display = 'none';
  });
});

document.querySelectorAll('.js-watch-later').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent triggering thumbnail click
    const videoId = button.dataset.videoId;
    addToCart(videoId);
  });
});

document.querySelector('.youtube-app-container')
  .addEventListener('click', (event) => {
    event.stopPropagation();
    const dropdown = document.querySelector('.apps-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

document.addEventListener('click', () => {
  document.querySelector('.apps-dropdown').style.display = 'none';
});



}


renderVideosGrid();
