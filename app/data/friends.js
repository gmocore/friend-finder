/* friend object format:
    {
        name: value,
        photo: https://image.url,
        scores: [1, 2, 3, ...etc]

    }
*/

// data to be used to display match to user, and act as the database while the application is running

let users = [
  {
    name: "Master Shake",
    image:
      "https://img.discogs.com/PDbugQLjIVGnRUhsY5H1kkqCQm8=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-794340-1176740493.jpeg.jpg",
    scores: [5, 1, 3, 4, 5, 2, 5, 2, 1, 2, 4, 1]
  },
  {
    name: "Sterling Archer",
    image:
      "https://fsmedia.imgix.net/f5/f4/8f/7c/9222/4933/89d0/f6836bcd9ae7/archer-1jpg.jpeg?rect=274%2C308%2C1541%2C1156&auto=format%2Ccompress&w=1200",
    scores: [5, 1, 1, 1, 4, 2, 2, 3, 5, 2, 4, 1]
  },
  {
    name: "Bojack Horseman",
    image:
      "http://weirdal.com/wp-content/uploads/2016/07/BOJACK_OPENING_STILL_05-2-1024x576.jpg",
    scores: [4, 1, 1, 1, 1, 1, 5, 1, 3, 1, 3, 1]
  },
  {
    name: "Diane Nguyen",
    image:
      "https://i.kinja-img.com/gawker-media/image/upload/s--cLBaPR-F--/c_scale,f_auto,fl_progressive,q_80,w_800/g3txcp3fytx8rirgkhhh.jpg",
    scores: [5, 2, 3, 4, 5, 3, 2, 1, 1, 2, 3, 2]
  },
  {
    name: "Lana Kane",
    image: "https://i.ytimg.com/vi/rcaGr2Dc900/maxresdefault.jpg",
    scores: [3, 4, 5, 3, 2, 1, 3, 2, 4, 3, 2, 4]
  },
  {
    name: "Cheryl (Carol?) Tunt",
    image:
      "https://i1.wp.com/eclipsemagazine.com/wp-content/uploads/2011/03/204_1.jpg",
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  }
];

module.exports = users;
