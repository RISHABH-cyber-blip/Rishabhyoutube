export const videos=[
  {
    id: 1,
    thumbnail:"thumbnails/thumbnail-1.webp",
    videoTime: '00:14:20',
    profileImage: "channels/channel-1.jpeg",
    videoTitle:"Talking Tech and AI with Google CEO Sundar Pichai!",
    channelName: "Marques Brownlee",
    views: "3.4M views",
    uploadDate: "6 months ago",
    videoLink: "https://www.youtube.com/watch?v=n2RNcPRtAiY"     
  },
  {
    id: 2,
    thumbnail:"thumbnails/thumbnail-2.webp",
    videoTime: '00:08:22',
    profileImage: "channels/channel-2.jpeg",
    videoTitle:" Try Not To Laugh Challenge #9",
    channelName: "Markiplier",
    views: "19M views",
    uploadDate: "4 years ago",
    videoLink: "https://www.youtube.com/watch?v=mP0RAo9SKZk"
          
  },
  {
    id: 3,
    thumbnail:"thumbnails/thumbnail-3.webp",
    videoTime: '00:09:13',
    profileImage: "channels/channel-3.jpeg",
    videoTitle:"Crazy Tik Toks Taken Moments Before DISASTER",
    channelName: "SSSniperWolf",
    views: "12M views",
    uploadDate: "1 months ago",
    videoLink: "https://www.youtube.com/watch?v=FgjPQQeTh1w"
  },
  {
    id: 4,
    thumbnail:"thumbnails/thumbnail-4.webp",
    videoTime: '00:22:09',
    profileImage: "channels/channel-4.jpeg",
    videoTitle:"The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    channelName: "Veritasium",
    views: "18M views",
    uploadDate: "4 month ago",
    videoLink: "https://www.youtube.com/watch?v=094y1Z2wpJg"
  },
  {
    id: 5,
    thumbnail:"thumbnails/thumbnail-5.webp",
    videoTime: '00:11:17',
    profileImage: "channels/channel-5 - Copy.jpeg",
    videoTitle:"Kadane's Algorithm to Maximum Sum Subarray Problem",
    channelName: "CS Dojo",
    views: "519K views",
    uploadDate: "5 years ago",
    videoLink: "https://www.youtube.com/watch?v=86CQq3pKSUw"
  },
  {
    id: 6,
    thumbnail:"thumbnails/thumbnail-6.webp",
    videoTime: '00:19:59',
    profileImage: "channels/channel-6.jpeg",
    videoTitle:"Anything You Can Fit In The Circle I’ll Pay For",
    channelName: "MrBeast",
    views: "141M views",
    uploadDate: "1 year ago",
    videoLink: "https://www.youtube.com/watch?v=yXWw0_UfSFg"
  },
  {
    id: 7,
    thumbnail:"thumbnails/thumbnail-7.webp",
    videoTime: '00:10:13',
    profileImage: "channels/channel-7.jpeg",
    videoTitle:"Why Planes Don't Fly Over Tibet",
    channelName: "RealLifeLore",
    views: "6.6M views",
    uploadDate: "1 year ago",
    videoLink: "https://www.youtube.com/watch?v=fNVa1qMbF9Y"
                
  },
  {
    id: 8,
    thumbnail:"thumbnails/thumbnail-8.webp",
    videoTime: '00:07:12',
    profileImage: "channels/channel-8.jpeg",
    videoTitle:"Inside The World's Biggest Passenger Plane",
    channelName: "Tech Vision",
    views: "3.7M views",
    uploadDate: "10 months ago",
    videoLink: "https://www.youtube.com/watch?v=lFm4EM1juls"
  },
  {
    id: 9,
    thumbnail:"thumbnails/thumbnail-9.webp",
    videoTime: '0013:!7',
    profileImage: "channels/channel-9.jpeg",
    videoTitle:"The SECRET to Super Human STRENGTH",
    channelName: "ThenX",
    views: "20M views",
    uploadDate: "3 year ago",
    videoLink: "https://www.youtube.com/watch?v=ixmxOlcrlUc"
  },
  {
    id: 10,
    thumbnail:"thumbnails/thumbnail-10.webp",
    videoTime: '00:07:53',
    profileImage: "channels/channel-10.jpeg",
    videoTitle:"How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    channelName: "Business Insider",
    views: "14M views",
    uploadDate: "1 year ago",
    videoLink: "https://www.youtube.com/watch?v=R2vXbFp5C9o"
  },
  {
    id: 11,
    thumbnail:"thumbnails/thumbnail-11.webp",
    videoTime: '00:04:10',
    profileImage: "channels/channel-11.jpeg",
    videoTitle:"Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
    channelName: "Destination Tips",
    views: "3M views",
    uploadDate: "1 year ago",
    videoLink:"https://www.youtube.com/watch?v=0nZuYyXET3s"
  },
  {
    id: 12,
    thumbnail:"thumbnails/thumbnail-12.webp",
    videoTime: '00:04:51',
    profileImage: "channels/channel-12.jpeg",
    videoTitle:"What would happen if you didn’t drink water? - Mia Nacamulli",
    channelName: "TED-Ed",
    views: "12M views",
    uploadDate: "5 years ago",
    videoLink: "https://www.youtube.com/watch?v=9iMGFqMmUFs"
  }
]

export function getVideos(id) {
 let matchingVideo;
 videos.forEach((video) => {
    if(video.id === id){
      matchingVideo = video;
    }
  });
  return matchingVideo;
}