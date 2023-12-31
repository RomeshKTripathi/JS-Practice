const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const colorArray = ["#B4D4FF", "#E6B9DE", "#D2E3C8", "#F6ECA9", "#FFE5E5", "#DBCC95", "#DED0B6", "#FFC47E", "#9EC8B9", "#F7B787"]
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
} 

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised —  :insertx: weighs 300 pounds, and it was a hot day.`;

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {
    let newText = storyText;
  if(customName.value !== "") {
    const name = customName.value;
    newText = storyText.replace('Bob', name)
  }

  if(document.getElementById("uk").checked) {
      const weight = Math.round(21);
      const temperature =  Math.round(34);
      newText = newText.replace("300", weight).replace("94", temperature).replace("fahrenheit", "centigrade ")
  }else{
        const weight = Math.round(300);
        const temperature =  Math.round(94);
        newText = newText.replace("300", weight).replace("94", temperature).replace('weighs', 'stone')
  }
  const textX = randomValueFromArray(insertX)
  const textY = randomValueFromArray(insertY)
  const textZ = randomValueFromArray(insertZ)

  story.textContent = newText.replaceAll(":insertx:", textX).replace(":inserty:", textY).replace(":insertz:", textZ);
  story.style.visibility = 'visible';
  story.style.backgroundColor = randomValueFromArray(colorArray);

}