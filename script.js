const storyStages = {
    start: {
      text: "You are Ben Tennyson, equipped with the Omnitrix, ready to face a new threat. Your mission is to stop Vilgax from obtaining the Omnitrix. Do you accept?",
      choices: [
        { text: "Yes, let's go!", nextStage: "startMission" },
        { text: "No, I need more time to prepare", nextStage: "prepareTime" }
      ],
      image: "https://i.pinimg.com/originals/c0/df/b7/c0dfb739f0021a5de684944e1e3b5fa9.jpg"
    },
    startMission: {
      text: "You begin your mission and track down Vilgax's location. Do you confront him directly, or do you prepare by calling Gwen and Grandpa Max for help?",
      choices: [
        { text: "Confront him directly", nextStage: "confrontVilgax" },
        { text: "Call for help", nextStage: "callForHelp" }
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp5nOP5R-uqlD06dbKvGxB2TT3zH8QSZS6g&s"
    },
    confrontVilgax: {
      text: "You confront Vilgax in his lair. He seems prepared for battle. Do you transform into Four Arms to fight him, or try to outsmart him?",
      choices: [
        { text: "Transform into Four Arms", nextStage: "fightVilgax" },
        { text: "Outsmart him", nextStage: "outsmartVilgax" }
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkIp87hoUApD7Bxdz7ZXZWgCKTbo3QqajVA&s"
    },
    callForHelp: {
      text: "You call Gwen and Grandpa Max, and they arrive to assist you. Together, you face off against Vilgax. Do you want Gwen to handle the magic or help directly in the battle?",
      choices: [
        { text: "Let Gwen handle the magic", nextStage: "gwenMagic" },
        { text: "Help in the battle directly", nextStage: "teamBattle" }
      ],
      image: "https://i.pinimg.com/736x/db/a1/dd/dba1dd39be15c30eaa7a41f022f89e10.jpg"
    },
    fightVilgax: {
      text: "You transform into Four Arms and engage in a brutal fight with Vilgax. Just as you seem to be winning, he uses a secret weapon to escape with the Omnitrix.",
      choices: [
        { text: "Chase him down", nextStage: "ultimateVictory" },
        { text: "Regroup and plan", nextStage: "prepareForFinalBattle" }
      ],
      image: "https://i.ytimg.com/vi/jFy5r4lqkTA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5qj8B_51K-rWMfsjEIoGFDXIXlQ"
    },
    outsmartVilgax: {
      text: "You manage to outsmart Vilgax and take him by surprise. However, in the process, the Omnitrix is activated by accident and causes a massive explosion.",
      choices: [
        { text: "Escape the explosion", nextStage: "ultimateVictory" },
        { text: "Stop the explosion", nextStage: "ultimateVictory" }
      ],
      image: "https://preview.redd.it/how-would-you-rewrite-ov-vilgax-his-stories-and-character-v0-18yj60ohrem81.png?auto=webp&s=0706f10ab24cefc7555944685b775fe394e6afbb"
    },
    gwenMagic: {
      text: "Gwen uses her magic to bind Vilgax, giving you the opportunity to take the Omnitrix back. Together, you prevent Vilgax's plans.",
      choices: [
        { text: "Finish the battle", nextStage: "ultimateVictory" }
      ],
      image: "https://i.ytimg.com/vi/FgGqopntHNk/maxresdefault.jpg"
    },
    teamBattle: {
      text: "You and your team fight valiantly against Vilgax and his army. After a long battle, you manage to secure the Omnitrix. Mission Accomplished!",
      choices: [
        { text: "Celebrate your victory", nextStage: "ultimateVictory" }
      ],
      image: "https://i.ytimg.com/vi/b1gY0lBqJq8/sddefault.jpg"
    },
    prepareTime: {
      text: "You decide to take more time to prepare, researching Vilgax's weaknesses and strategizing. Once you're ready, you begin your mission with a stronger sense of purpose.",
      choices: [
        { text: "Start the mission", nextStage: "startMission" }
      ],
      image: "https://pbs.twimg.com/media/Fd31DOJXgAI8-wV?format=jpg&name=large"
    },
    ultimateVictory: {
      text: "After a final showdown with Vilgax, you transform into all of your ultimate forms and defeat him, securing the Omnitrix. The universe is saved!",
      choices: [],
      image: "https://preview.redd.it/ben-would-you-lose-v0-54bdfnosxsac1.jpeg?width=640&crop=smart&auto=webp&s=332129144e18ff047bd1a484f50bf4d66bfdfab8"
    },
    prepareForFinalBattle: {
      text: "You regroup and prepare for a final, decisive battle with Vilgax. With the Omnitrix in your grasp, you are ready to face him one last time.",
      choices: [
        { text: "Final showdown", nextStage: "ultimateVictory" }
      ],
      image: "https://images4.alphacoders.com/133/1335295.jpg"
    },
    endVictory: {
      text: "You return home with the Omnitrix, knowing that the universe is safe for now. You've proven yourself as a true hero.",
      choices: [],
      image: "https://preview.redd.it/cf3c5mya0xc71.jpg?width=1080&crop=smart&auto=webp&s=205aacc6b7ec57077f12d9d6a0b6d65888d3c485"
    },
    endDecline: {
      text: "You choose to avoid the mission, and Vilgax successfully steals the Omnitrix. The universe is thrown into chaos, and Ben learns a valuable lesson about the cost of inaction.",
      choices: [],
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/7ab71c181860393.Y3JvcCwxNTM1LDEyMDEsMTkzLDA.jpg"
    },
};


// Function to start the game
function startGame() {
    currentStage = storyStages.start;
    updatePage();
}

// Function to update the page based on the current stage
function updatePage() {
    document.getElementById("story-text").innerText = currentStage.text;
    document.getElementById("story-image").src = currentStage.image;

    const choicesSection = document.getElementById("choices-section");
    choicesSection.innerHTML = '';

    currentStage.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => makeChoice(choice.nextStage);
        choicesSection.appendChild(button);
    });
}

// Function to handle choices and navigate to the next stage
function makeChoice(nextStageKey) {
    currentStage = storyStages[nextStageKey];
    updatePage();
}

// Set up the restart button
document.getElementById("reset-button").onclick = startGame;

// Start the game when the page loads
let currentStage;
window.onload = startGame;
