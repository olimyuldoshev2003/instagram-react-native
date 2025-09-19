import Users from "./users"; // Make sure to import your users array

export default [
  {
    id: 1,
    post: "https://picsum.photos/id/1/1000/800",
    user: Users[0].username,
    title: "Beautiful Sunset",
    caption:
      "Captured this amazing sunset during my evening walk. Nature never fails to amaze me!",
    profile_img: Users[0].img,
    likes: "534",
    comments: [
      {
        user: Users[1].username,
        comment: "Wow, the colors are stunning! Where was this taken?",
      },
      {
        user: Users[3].username,
        comment: "Perfect timing on this shot!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 2,
    post: "https://picsum.photos/id/2/1000/800",
    user: Users[1].username,
    title: "Morning Coffee",
    caption: "Nothing beats a good cup of coffee to start the day right! ☕",
    profile_img: Users[1].img,
    likes: "287",
    comments: [
      {
        user: Users[4].username,
        comment: "I need one of those right now!",
      },
      {
        user: Users[2].username,
        comment: "What blend is that? Looks delicious!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 3,
    post: "https://picsum.photos/id/3/1000/800",
    user: Users[2].username,
    title: "Mountain Hike",
    caption:
      "Reached the summit after 3 hours of hiking. The view was worth every step!",
    profile_img: Users[2].img,
    likes: "421",
    comments: [
      {
        user: Users[5].username,
        comment: "Amazing achievement! How high was it?",
      },
      {
        user: Users[0].username,
        comment: "I want to go there too!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 4,
    post: "https://picsum.photos/id/4/1000/800",
    user: Users[3].username,
    title: "City Lights",
    caption: "The city never sleeps. Night photography is my new passion!",
    profile_img: Users[3].img,
    likes: "612",
    comments: [
      {
        user: Users[6].username,
        comment: "What camera settings did you use?",
      },
      {
        user: Users[1].username,
        comment: "This looks like downtown!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 5,
    post: "https://picsum.photos/id/5/1000/800",
    user: Users[4].username,
    title: "Beach Day",
    caption: "Perfect weather for a day at the beach! 🏖️",
    profile_img: Users[4].img,
    likes: "398",
    comments: [
      {
        user: Users[7].username,
        comment: "Wish I was there!",
      },
      {
        user: Users[2].username,
        comment: "The water looks so clear!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 6,
    post: "https://picsum.photos/id/6/1000/800",
    user: Users[5].username,
    title: "Book Club",
    caption: "New book, new adventures! Any recommendations for my next read?",
    profile_img: Users[5].img,
    likes: "245",
    comments: [
      {
        user: Users[8].username,
        comment: "You should try fantasy novels!",
      },
      {
        user: Users[3].username,
        comment: "I just finished this one - loved it!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 7,
    post: "https://picsum.photos/id/7/1000/800",
    user: Users[6].username,
    title: "Art Exhibition",
    caption: "Visited the modern art museum today. So much inspiration!",
    profile_img: Users[6].img,
    likes: "376",
    comments: [
      {
        user: Users[9].username,
        comment: "Which exhibition was this?",
      },
      {
        user: Users[4].username,
        comment: "The colors are mesmerizing!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 8,
    post: "https://picsum.photos/id/8/1000/800",
    user: Users[7].username,
    title: "Home Cooking",
    caption: "Tried a new recipe today - turned out better than expected!",
    profile_img: Users[7].img,
    likes: "512",
    comments: [
      {
        user: Users[10].username,
        comment: "Recipe please!",
      },
      {
        user: Users[5].username,
        comment: "Looks delicious!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 9,
    post: "https://picsum.photos/id/9/1000/800",
    user: Users[8].username,
    title: "Garden Update",
    caption: "My plants are finally blooming! Gardening is so rewarding.",
    profile_img: Users[8].img,
    likes: "329",
    comments: [
      {
        user: Users[11].username,
        comment: "What type of flowers are those?",
      },
      {
        user: Users[6].username,
        comment: "Green thumb goals!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 10,
    post: "https://picsum.photos/id/10/1000/800",
    user: Users[9].username,
    title: "Weekend Getaway",
    caption: "Escaped the city for a peaceful weekend in nature.",
    profile_img: Users[9].img,
    likes: "467",
    comments: [
      {
        user: Users[12].username,
        comment: "Looks so peaceful!",
      },
      {
        user: Users[7].username,
        comment: "Perfect spot for relaxation!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 11,
    post: "https://picsum.photos/id/11/1000/800",
    user: Users[10].username,
    title: "New Puppy",
    caption: "Meet the newest member of our family! 🐶",
    profile_img: Users[10].img,
    likes: "893",
    comments: [
      {
        user: Users[13].username,
        comment: "So adorable! What breed?",
      },
      {
        user: Users[8].username,
        comment: "Congratulations on the new family member!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 12,
    post: "https://picsum.photos/id/12/1000/800",
    user: Users[11].username,
    title: "Yoga Session",
    caption: "Morning yoga to center myself for the day ahead.",
    profile_img: Users[11].img,
    likes: "278",
    comments: [
      {
        user: Users[14].username,
        comment: "What type of yoga do you practice?",
      },
      {
        user: Users[9].username,
        comment: "Great way to start the day!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 13,
    post: "https://picsum.photos/id/13/1000/800",
    user: Users[12].username,
    title: "Vintage Find",
    caption: "Found this beautiful vintage camera at a flea market!",
    profile_img: Users[12].img,
    likes: "345",
    comments: [
      {
        user: Users[15].username,
        comment: "Does it still work?",
      },
      {
        user: Users[10].username,
        comment: "Great find! What a treasure!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 14,
    post: "https://picsum.photos/id/14/1000/800",
    user: Users[13].username,
    title: "Concert Night",
    caption: "Amazing performance tonight! The energy was incredible.",
    profile_img: Users[13].img,
    likes: "521",
    comments: [
      {
        user: Users[16].username,
        comment: "Which band was it?",
      },
      {
        user: Users[11].username,
        comment: "Lucky you! I wanted to go too!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 15,
    post: "https://picsum.photos/id/15/1000/800",
    user: Users[14].username,
    title: "Baking Day",
    caption: "Freshly baked bread - nothing beats the smell!",
    profile_img: Users[14].img,
    likes: "432",
    comments: [
      {
        user: Users[17].username,
        comment: "Homemade bread is the best!",
      },
      {
        user: Users[12].username,
        comment: "Recipe please!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 16,
    post: "https://picsum.photos/id/16/1000/800",
    user: Users[15].username,
    title: "Star Gazing",
    caption: "Clear night for some astronomy. The universe is amazing!",
    profile_img: Users[15].img,
    likes: "298",
    comments: [
      {
        user: Users[18].username,
        comment: "Did you see any shooting stars?",
      },
      {
        user: Users[13].username,
        comment: "What telescope do you use?",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 17,
    post: "https://picsum.photos/id/17/1000/800",
    user: Users[16].username,
    title: "Rainy Day",
    caption: "Perfect weather for staying in with a good book.",
    profile_img: Users[16].img,
    likes: "367",
    comments: [
      {
        user: Users[19].username,
        comment: "Cozy vibes!",
      },
      {
        user: Users[14].username,
        comment: "What are you reading?",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 18,
    post: "https://picsum.photos/id/18/1000/800",
    user: Users[17].username,
    title: "Street Art",
    caption: "Found this incredible mural downtown. Urban art is amazing!",
    profile_img: Users[17].img,
    likes: "489",
    comments: [
      {
        user: Users[20].username,
        comment: "Where exactly is this?",
      },
      {
        user: Users[15].username,
        comment: "The artist is so talented!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 19,
    post: "https://picsum.photos/id/19/1000/800",
    user: Users[18].username,
    title: "Fitness Journey",
    caption: "6 months of consistent workouts paying off!",
    profile_img: Users[18].img,
    likes: "654",
    comments: [
      {
        user: Users[21].username,
        comment: "Great progress! Keep it up!",
      },
      {
        user: Users[16].username,
        comment: "What's your routine?",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 20,
    post: "https://picsum.photos/id/20/1000/800",
    user: Users[19].username,
    title: "Coffee Shop",
    caption: "New favorite spot for working remotely.",
    profile_img: Users[19].img,
    likes: "312",
    comments: [
      {
        user: Users[22].username,
        comment: "The atmosphere looks great!",
      },
      {
        user: Users[17].username,
        comment: "What's the WiFi speed like?",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 21,
    post: "https://picsum.photos/id/21/1000/800",
    user: Users[20].username,
    title: "Sunrise Hike",
    caption: "Woke up at 4 AM for this view. Worth every sleepy moment!",
    profile_img: Users[20].img,
    likes: "578",
    comments: [
      {
        user: Users[23].username,
        comment: "That's dedication! Beautiful shot.",
      },
      {
        user: Users[18].username,
        comment: "Which trail is this?",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 22,
    post: "https://picsum.photos/id/22/1000/800",
    user: Users[21].username,
    title: "DIY Project",
    caption: "Built this shelf from scratch. Woodworking is so satisfying!",
    profile_img: Users[21].img,
    likes: "423",
    comments: [
      {
        user: Users[24].username,
        comment: "Great craftsmanship!",
      },
      {
        user: Users[19].username,
        comment: "How long did it take?",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 23,
    post: "https://picsum.photos/id/23/1000/800",
    user: Users[22].username,
    title: "Farmers Market",
    caption: "Fresh produce and local goods. Supporting small businesses!",
    profile_img: Users[22].img,
    likes: "345",
    comments: [
      {
        user: Users[25].username,
        comment: "What did you buy?",
      },
      {
        user: Users[20].username,
        comment: "Love farmers markets!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 24,
    post: "https://picsum.photos/id/24/1000/800",
    user: Users[23].username,
    title: "Game Night",
    caption: "Friends, food, and board games. Perfect Friday night!",
    profile_img: Users[23].img,
    likes: "289",
    comments: [
      {
        user: Users[26].username,
        comment: "Which games did you play?",
      },
      {
        user: Users[21].username,
        comment: "Looks like so much fun!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 25,
    post: "https://picsum.photos/id/25/1000/800",
    user: Users[24].username,
    title: "Waterfall Adventure",
    caption:
      "Hiked to this hidden waterfall. Nature's beauty never disappoints!",
    profile_img: Users[24].img,
    likes: "612",
    comments: [
      {
        user: Users[27].username,
        comment: "How long was the hike?",
      },
      {
        user: Users[22].username,
        comment: "The water looks so refreshing!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 26,
    post: "https://picsum.photos/id/26/1000/800",
    user: Users[25].username,
    title: "New Studio",
    caption: "Finally set up my art studio. Ready to create!",
    profile_img: Users[25].img,
    likes: "378",
    comments: [
      {
        user: Users[28].username,
        comment: "The space looks amazing!",
      },
      {
        user: Users[23].username,
        comment: "What kind of art do you make?",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 27,
    post: "https://picsum.photos/id/27/1000/800",
    user: Users[26].username,
    title: "Festival Fun",
    caption: "Music, food, and good vibes at the summer festival!",
    profile_img: Users[26].img,
    likes: "534",
    comments: [
      {
        user: Users[29].username,
        comment: "Which festival was this?",
      },
      {
        user: Users[24].username,
        comment: "Looks like an amazing time!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 28,
    post: "https://picsum.photos/id/28/1000/800",
    user: Users[27].username,
    title: "Bike Tour",
    caption: "50km bike tour through the countryside. Feeling accomplished!",
    profile_img: Users[27].img,
    likes: "456",
    comments: [
      {
        user: Users[30].username,
        comment: "Great exercise! How was the route?",
      },
      {
        user: Users[25].username,
        comment: "Impressive distance!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 29,
    post: "https://picsum.photos/id/29/1000/800",
    user: Users[28].username,
    title: "Home Library",
    caption: "Finally organized my book collection. Reader's paradise!",
    profile_img: Users[28].img,
    likes: "321",
    comments: [
      {
        user: Users[31].username,
        comment: "How many books do you have?",
      },
      {
        user: Users[26].username,
        comment: "Dream setup!",
      },
    ],
    sentPosts: "256",
  },
  {
    id: 30,
    post: "https://picsum.photos/id/30/1000/800",
    user: Users[29].username,
    title: "Sunset Sail",
    caption: "Sailing into the sunset. Perfect end to a perfect day!",
    profile_img: Users[29].img,
    likes: "687",
    comments: [
      {
        user: Users[32].username,
        comment: "This looks magical!",
      },
      {
        user: Users[27].username,
        comment: "Where was this? So beautiful!",
      },
    ],
    sentPosts: "256",
  },
];
