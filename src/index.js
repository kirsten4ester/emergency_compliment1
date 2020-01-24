const express = require("express");
const app = express();

const data = [
    "Good effort!",
    "What a fine sweater!",
    "I appreciate all of your opinions.",
    "I like your style.",
    "Your T-shirt smells fresh.",
    "I love what you've done with the place.",
    "You are like a spring flower; beautiful and vivacious.",
    "I am utterly disarmed by your wit.",
    "I really enjoy the way you pronounce the word 'ruby'.",
    "You complete me.",
    "Well done!",
    "I like your Facebook status.",
    "That looks nice on you.",
    "I like those shoes more than mine.",
    "Nice motor control!",
    "You have a good taste in websites.",
    "Your mouse told me that you have very soft hands.",
    "You are full of youth.",
    "I like your jacket.",
    "I like the way you move.",
    "You have a good web-surfing stance.",
    "You should be a poster child for poster children.",
    "Nice manners!",
    "I appreciate you more than Santa appreciates chimney grease.",
    "I wish I was your mirror.",
    "I find you to be a fountain of inspiration.",
    "You have perfect bone structure.",
    "I disagree with anyone who disagrees with you.",
    "Way to go!",
    "Have you been working out?",
    "With your creative wit, I'm sure you could come up with better compliments than me.",
    "I like your socks.",
    "You are so charming.",
    "Your cooking reminds me of my mother's.",
    "You're tremendous!",
    "You deserve a compliment!",
    "Hello, good looking."
  ];

  const colors = ["#FFE6EA", "#FFDAB9","#01DF3A","#FF0080"]

app.get("/", (req, res) => {

  let randomNumber = Math.floor(Math.random() * compliments.length)
  let randomColor = Math.floor(Math.random() * colors.length)

  res.send(
    `<div >
    <h1 style= "color: ${colors[randomColor]}">${compliments[randomNumber]}</h1> 
    </div>`
  )
})

app.listen(8000, () => {
  console.log("App is on 8000");
})