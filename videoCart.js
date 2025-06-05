import { videos } from './video.js'; 


export let cartVideos;
loadFromStorage();
export function loadFromStorage(){
  cartVideos = JSON.parse(localStorage.getItem('cartVideos')) || [];
 /* if (storedVideos && Array.isArray(storedVideos)) {
    cartVideos = storedVideos;
  }*/
  if(!cartVideos){
    cartVideos = [{
      id: 0,
      thumbnail: "thumbnails/thumbnail-1.webp",
      videoTime: '00:14:20',
      profileImage: "channels/channel-1.jpeg",
      videoTitle: "Talking Tech and AI with Google CEO Sundar Pichai!",
      channelName: "Marques Brownlee",
      views: "3.4M views",
      uploadDate: "6 months ago",
      videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY"
    },
    {
      id: 1,
      thumbnail: "thumbnails/thumbnail-2.webp",
      videoTime: '00:08:22',
      profileImage: "channels/channel-2.jpeg",
      videoTitle: "Try Not To Laugh Challenge #9",
      channelName: "Markiplier",
      views: "19M views",
      uploadDate: "4 years ago",
      videoLink: "https://www.youtube.com/watch?v=mP0RAo9SKZk"
    }];
  }
}

export function saveCartVideos() {
  localStorage.setItem('cartVideos', JSON.stringify(cartVideos));
}


export function addToCart(videoId) {
  // Check if already added
  if (!cartVideos.some(video => video.id === videoId)) {
    const videoToAdd = videos.find(video => video.id === videoId);
    if (videoToAdd) {
      cartVideos.push(videoToAdd);
      saveCartVideos();
    }
  }
}



