/* friend object format:
    {
        name: value,
        photo: https://image.url,
        scores: [1, 2, 3, ...etc]

    }
*/

// compare scores array to one another

let users = [
  {
    name: "gerritt",
    image: "www.img.com/pic",
    choices: [4, 3, 2, 5]
  },
  {
    name: "daniel",
    image: "www.img.com/pic",
    choices: [2, 3, 4, 1]
  },
  {
    name: "tim",
    image: "www.img.com/pic",
    choices: [3, 2, 1, 4]
  }
];

module.exports = users;
