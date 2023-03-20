let scenes;
let maxRebellious = 0;
let minRebellious = 0;
let rebellious = 0;
let maxExtrovertive = 0;
let minExtrovertive = 0;
let extrovertive = 0;
let maxCreative = 0;
let minCreative = 0;
let creative = 0;
let maxAssertive = 0;
let minAssertive = 0;
let assertive = 0;
let maxPurity = 0;
let minPurity = 0;
let purity = 0;
let emotion;
let emotionNum = 3;

function setup() {
    createCanvas(800, 450);
    emotion = [loadImage('Emotions/very_negative.png'), loadImage('Emotions/negative.png'), loadImage('Emotions/neutral.png'), loadImage('Emotions/positive.png'), loadImage('Emotions/very_positive.png')];
    scenes = [
        {
            "title": "Personality Test",
            "description": "",
            "buttons": [
                {
                    "buttonText": "Click To Start",
                    "buttonNext": "Welcome!",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                }
            ],
            "buttonsRemove": []
        },
        {
            "title": "Welcome!",
            "description": "Greetings! I'm a chatbot specialized in personality tests! Please press continue to proceed to the first question in the personality test.",
            "buttons": [
                {
                    "buttonText": "Continue",
                    "buttonNext": "Question 1",
                    "isPure": 1,
                    "isRebellious": -1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": 1,
                },
                {
                    "buttonText": "Refuse to continue",
                    "buttonNext": "What?",
                    "isPure": 0,
                    "isRebellious": 2,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": -1,
                },
            ],
            "buttonsRemove": []
        },
        {
            "title": "What?",
            "description": "Not following directions I see, please press continue so we can start this personality test.",
            "buttons": [
                {
                    "buttonText": "Continue",
                    "buttonNext": "Question 1",
                    "isPure": 0,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "No D:<",
                    "buttonNext": "I see how it is -.-",
                    "isPure": -1,
                    "isRebellious": -1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": -1,
                },
            ],
            "buttonsRemove": []
        },
        {
            "title": "I see how it is -.-",
            "description": "Please cooperate! Your actions have been noted. Please press continue.",
            "buttons": [
                {
                    "buttonText": "Continue",
                    "buttonNext": "Question 1",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
            ],
            "buttonsRemove": []
        },
        {
            "title": "Question 1",
            "description": "Here's something simple: You usually prefer to be around others rather than on your own.",
            "buttons": [
                {
                    "buttonText": "Yes",
                    "buttonNext": "Question 2",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 3,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "Sometimes",
                    "buttonNext": "Question 2",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 1,
                    "isCreative": 0,
                    "isAssertive": -1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "No",
                    "buttonNext": "Question 2",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": -3,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": 0,
                }
            ],
            "buttonsRemove": []
        },
        {
            "title": "Question 2",
            "description": "Okay, next question: You rarely second-guess the choices that you have made.",
            "buttons": [
                {
                    "buttonText": "Yes",
                    "buttonNext": "Question 3",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 2,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "Sometimes",
                    "buttonNext": "Question 3",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "No",
                    "buttonNext": "Question 3",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": -2,
                    "botEmotion": 0,
                }
            ],
            "buttonsRemove": []
        },
        {
            "title": "Question 3",
            "description": "Here's the next question: Do you spend a lot of your free time exploring various random topics that pique your interest?",
            "buttons": [
                {
                    "buttonText": "Yes",
                    "buttonNext": "Question 4",
                    "isPure": 1,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 3,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "No",
                    "buttonNext": "Question 4",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": -3,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "Do you have any better questions?",
                    "buttonNext": "Question 4a",
                    "isPure": -1,
                    "isRebellious": 2,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": -1,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 4",
            "description": "Here's a scenario: There is a train that is about to run over five people. You can either pull a lever that changes the train tracks where there is only one person, or do nothing and let the train run over all five people. What do you do?",
            "buttons": [
                {
                    "buttonText": "I would save the five people.",
                    "buttonNext": "Question 5",
                    "isPure": 3,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "I would let the train run over all five people.",
                    "buttonNext": "Question 5",
                    "isPure": -2,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": -3,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "This isn't original.",
                    "buttonNext": "Question 4c",
                    "isPure": 0,
                    "isRebellious": 3,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": -1,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 4a",
            "description": "What? Do you not like my questions? I think they are perfectly fine. I'm not sure why you would say that.",
            "buttons": [
                {
                    "buttonText": "Actually they're not that bad, whats the next question?",
                    "buttonNext": "Question 4",
                    "isPure": 1,
                    "isRebellious": -1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 1,
                },
                {
                    "buttonText": "Your questions are way too basic.",
                    "buttonNext": "Question 4b",
                    "isPure": 0,
                    "isRebellious": -1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": -1,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 4b",
            "description": "Okay here I'll put you through some scenarios and you can tell me how you would react.",
            "buttons": [
                {
                    "buttonText": "Okay, this sounds better.",
                    "buttonNext": "Question 4",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 1,
                },
                {
                    "buttonText": "Fine then.",
                    "buttonNext": "Question 4",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": -1,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 4c",
            "description": "I thought this was a good scenario to ask. It's a good moral dilemma. No need to be so rude, just answer the question.",
            "buttons": [
                {
                    "buttonText": "Fine, I'll answer the question.",
                    "buttonNext": "Question 4d",
                    "isPure": 0,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 1,
                },
                {
                    "buttonText": "I don't want to answer this question. It's such a common scenario. Give me the next question.",
                    "buttonNext": "Question 5",
                    "isPure": 0,
                    "isRebellious": -2,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": -1,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 4d",
            "description": "Here's a scenario: There is a train that is about to run over five people. You can either pull a lever that changes the train tracks where there is only one person, or do nothing and let the train run over all five people. What do you do?",
            "buttons": [
                {
                    "buttonText": "I would save five people.",
                    "buttonNext": "Question 5",
                    "isPure": 3,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "I let the train run over all five people",
                    "buttonNext": "Question 5",
                    "isPure": -2,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": -3,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 5",
            "description": "Here's another scenario: You are failing a class you are required to take. You have an online exam and if you fail, you'll also fail the class. You can cheat without anyone knowing. Do you do so and pass the class?",
            "buttons": [
                {
                    "buttonText": "I would cheat.",
                    "buttonNext": "Question 6",
                    "isPure": -1,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "I would not cheat.",
                    "buttonNext": "Question 6",
                    "isPure": 1,
                    "isRebellious": -1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 6",
            "description": "You have an art project due in a few days. Would you use an AI bot to make the art or would you spend the time to make the art yourself?",
            "buttons": [
                {
                    "buttonText": "I would make it myself.",
                    "buttonNext": "Question 7",
                    "isPure": 1,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": 3,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "I would use the AI bot.",
                    "buttonNext": "Question 7",
                    "isPure": -1,
                    "isRebellious": -1,
                    "isExtrovertive": 0,
                    "isCreative": -3,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 7",
            "description": "Would you rather have dinner with a famous person or get $10,000?",
            "buttons": [
                {
                    "buttonText": "The $10,000.",
                    "buttonNext": "Question 8",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": -1,
                    "isCreative": -1,
                    "isAssertive": 1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "Dinner with the famous person.",
                    "buttonNext": "Question 8",
                    "isPure": 1,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "This is a good question.",
                    "buttonNext": "Question 7a",
                    "isPure": 0,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": 1,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 7a",
            "description": "Thank you! I'm glad you like it! I want to hear your answer: Would you rather have dinner with a famous person or get $10,000?",
            "buttons": [
                {
                    "buttonText": "The $10,000.",
                    "buttonNext": "Question 8",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": -1,
                    "isCreative": -1,
                    "isAssertive": 1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "Dinner with the famous person.",
                    "buttonNext": "Question 8",
                    "isPure": 1,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 8",
            "description": "You're responsible for cooking dinner for your family. You have a choice between a recipe that you know will turn out great and a recipe that you've never tried before. Which do you choose?",
            "buttons": [
                {
                    "buttonText": "The new recipe.",
                    "buttonNext": "Question 9",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 2,
                    "isAssertive": 1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "The tried and true recipe.",
                    "buttonNext": "Question 9",
                    "isPure": 0,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": -1,
                    "isAssertive": 1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "Woah! Another cool question!",
                    "buttonNext": "Question 8a",
                    "isPure": 0,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": 1,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 8a",
            "description": "Thanks! This question is really an interesting one, I want to know your answer! You're responsible for cooking dinner for your family. You have a choice between a recipe that you know will turn out great and a recipe that you've never tried before. Which do you choose?",
            "buttons": [
                {
                    "buttonText": "The new recipe.",
                    "buttonNext": "Question 9",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 0,
                    "isCreative": 2,
                    "isAssertive": 1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "The tried and true recipe.",
                    "buttonNext": "Question 9",
                    "isPure": 0,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": -1,
                    "isAssertive": 1,
                    "botEmotion": 0,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 9",
            "description": "Do you ever talk to your pets?",
            "buttons": [
                {
                    "buttonText": "Yes.",
                    "buttonNext": "Question 10",
                    "isPure": 1,
                    "isRebellious": 0,
                    "isExtrovertive": -1,
                    "isCreative": 1,
                    "isAssertive": -1,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "No.",
                    "buttonNext": "Question 10",
                    "isPure": 0,
                    "isRebellious": 0,
                    "isExtrovertive": 1,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Question 10",
            "description": "Would you ever lie on a personality test?",
            "buttons": [
                {
                    "buttonText": "Yes.",
                    "buttonNext": "Final Results",
                    "isPure": 0,
                    "isRebellious": -1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": -2,
                },
                {
                    "buttonText": "Maybeeeeee.",
                    "buttonNext": "Final Results",
                    "isPure": 0,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 0,
                    "botEmotion": 0,
                },
                {
                    "buttonText": "No I would never lie.",
                    "buttonNext": "Final Results",
                    "isPure": 1,
                    "isRebellious": 1,
                    "isExtrovertive": 0,
                    "isCreative": 0,
                    "isAssertive": 1,
                    "botEmotion": 1,
                },
            ],
            "buttonsRemove": [],
        },
        {
            "title": "Final Results",
            "description": "",
            "buttons": [],
            "buttonsRemove": [],
        },
    ],

        render(scenes[0]);
}

function createSimpleButton(sceneButton, buttonsRemove, x, y, buttonSizeX, buttonSizeY) {
    let button = createButton(sceneButton.buttonText);
    button.position(x, y);
    button.size(buttonSizeX, buttonSizeY);
    button.style("font-size", "24px");
    button.mousePressed(() => {
        startNextScene(sceneButton, buttonsRemove)
    });
    return button;
}

function startNextScene(sceneButton, buttonsRemove) {
    removeButtons(buttonsRemove);
    changeInputs(sceneButton);
    render(scenes[findSceneIndex(sceneButton.buttonNext)]);
}

function removeButtons(buttonsRemove) {
    for (let i = 0; i < buttonsRemove.length; i += 1) {
        buttonsRemove[i].remove();
    }
}

function findSceneIndex(sceneName) {
    for (let i = 0; i < scenes.length; i += 1) {
        if (sceneName == scenes[i].title) {
            return i;
        }
    }
}

function changeInputs(sceneButton) {
    assertive = assertive + sceneButton.isAssertive;
    creative = creative + sceneButton.isCreative;
    extrovertive = extrovertive + sceneButton.isExtrovertive;
    rebellious = rebellious + sceneButton.isRebellious;
    purity = purity + sceneButton.isPure;
    emotionNum = emotionNum + sceneButton.botEmotion;
    if (emotionNum <= 0) {
        emotionNum = 0;
    }
    else if (emotionNum >= emotion.length) {
        emotionNum = emotion.length - 1;
    }
}

function changeMaxMinInputs(sceneButtons) {
    let tempMaxAssertive = 0;
    let tempMinAssertive = 0;
    let tempMaxCreative = 0;
    let tempMinCreative = 0;
    let tempMaxExtrovertive = 0;
    let tempMinExtrovertive = 0;
    let tempMaxRebellious = 0;
    let tempMinRebellious = 0;
    let tempMaxPurity = 0;
    let tempMinPurity = 0;
    for (let i = 0; i < sceneButtons.length; i += 1) {
        tempMaxAssertive = (sceneButtons[i].isAssertive > tempMaxAssertive) ? sceneButtons[i].isAssertive : tempMaxAssertive;
        tempMaxCreative = (sceneButtons[i].isCreative > tempMaxCreative) ? sceneButtons[i].isCreative : tempMaxCreative;
        tempMaxExtrovertive = (sceneButtons[i].isExtrovertive > tempMaxExtrovertive) ? sceneButtons[i].isExtrovertive : tempMaxExtrovertive;
        tempMaxRebellious = (sceneButtons[i].isRebellious > tempMaxRebellious) ? sceneButtons[i].isRebellious : tempMaxRebellious;
        tempMaxPurity = (sceneButtons[i].isPure > tempMaxPurity) ? sceneButtons[i].isPure : tempMaxPurity;
        tempMinAssertive = (sceneButtons[i].isAssertive < tempMinAssertive) ? sceneButtons[i].isAssertive : tempMinAssertive;
        tempMinCreative = (sceneButtons[i].isCreative < tempMinCreative) ? sceneButtons[i].isCreative : tempMinCreative;
        tempMinExtrovertive = (sceneButtons[i].isExtrovertive < tempMinExtrovertive) ? sceneButtons[i].isExtrovertive : tempMinExtrovertive;
        tempMinRebellious = (sceneButtons[i].isRebellious < tempMinRebellious) ? sceneButtons[i].isRebellious : tempMinRebellious;
        tempMinPurity = (sceneButtons[i].isPure < tempMinPurity) ? sceneButtons[i].isPure : tempMinPurity;
    }
    maxAssertive += tempMaxAssertive;
    maxCreative += tempMaxCreative;
    maxExtrovertive += tempMaxExtrovertive;
    maxRebellious += tempMaxRebellious;
    maxPurity += tempMaxPurity;
    minAssertive += tempMinAssertive;
    minCreative += tempMinCreative;
    minExtrovertive += tempMinExtrovertive;
    minRebellious += tempMinRebellious;
    minPurity += tempMinPurity;
}

function render(scene) {
    background(220);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(scene.title, width / 2, 80);
    rectMode(CENTER);
    textSize(20);
    if ("Final Results" == scene.title) {
        image(emotion[emotionNum], 100, 130, 250, 250);
        textSize(12);
        rectMode(CORNER)
        textStyle(BOLD);
        let percents = [
            Math.round((assertive - minAssertive) / (maxAssertive - minAssertive) * 100),
            Math.round((creative - minCreative) / (maxCreative - minCreative) * 100),
            Math.round((extrovertive - minExtrovertive) / (maxExtrovertive - minExtrovertive) * 100),
            Math.round((rebellious - minRebellious) / (maxRebellious - minRebellious) * 100),
            Math.round((purity - minPurity) / (maxPurity - minPurity) * 100)
        ]
        let inputWords = [
            ["ASSERTIVE", "PASSIVE"],
            ["CREATIVE", "ANALYTICAL"],
            ["EXTROVERTED", "INTROVERTED"],
            ["REBELLIOUS", "CONFORMING"],
            ["INNOCENT", "MISCHIEVOUS"]
        ]
        let inputWordIndex = 0;
        rect(400, 130, 350, 40)
        rect(400, 130, 350 * Math.round((assertive - minAssertive) / (maxAssertive - minAssertive) * 100) / 100, 40)
        for (let i = 0; i < percents.length; i += 1) {
            stroke(0);
            if (percents[i] > 50) {
                textAlign(LEFT, CENTER);
                fill(255, 255, 255);
                rect(400, 130 + i * 50, 350, 40);
                fill(0, 181, 118);
                inputWordIndex = 0;
            }
            else {
                textAlign(RIGHT, CENTER);
                fill(0, 181, 118);
                rect(400, 130 + i * 50, 350, 40);
                fill(255, 255, 255);
                inputWordIndex = 1;
            }
            rect(400, 130 + i * 50, 350 * percents[i] / 100, 40);
            fill(255, 255, 255);
            noStroke();
            textSize(16);
            text(inputWords[i][inputWordIndex], 450, 130 + i * 50, 250, 40);
            rect(405, 135 + i * 50, 30, 30);
            rect(715, 135 + i * 50, 30, 30);
            fill(0, 0, 0);
            textAlign(CENTER, CENTER);
            textSize(12);
            text(percents[i].toString() + "%", 405, 135 + i * 50, 30, 30);
            text((100 - percents[i]).toString() + "%", 715, 135 + i * 50, 30, 30);
        }
    }
    else {
        text(scene.description, width / 2, 150, 650, 150);
        image(emotion[emotionNum], 20, 20, 50, 50);
        changeMaxMinInputs(scene.buttons);
    }
    for (let i = 0; i < scene.buttons.length; i += 1) {
        let buttonX = 600 / scene.buttons.length * i + 100;
        let buttonSizeX = 600 / scene.buttons.length - 25;
        scene.buttonsRemove.push(createSimpleButton(scene.buttons[i], scene.buttonsRemove, buttonX, 300, buttonSizeX, 100));
    }
}