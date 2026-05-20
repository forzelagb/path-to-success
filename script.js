let money = 100;
let energy = 100;
let reputation = 0;
let currentScene = 0;

let moneyText = document.querySelector("#money");
let energyText = document.querySelector("#energy");
let reputationText = document.querySelector("#reputation");

let moneyChange = document.querySelector("#money-change");
let energyChange = document.querySelector("#energy-change");
let reputationChange = document.querySelector("#reputation-change");

let sceneImage = document.querySelector("#scene-image");
let sceneTitle = document.querySelector("#scene-title");
let sceneText = document.querySelector("#scene-text");
let choicesBlock = document.querySelector("#choices");
let restartBtn = document.querySelector("#restart-btn");

let scenes = [
    {
        title: "Первый выбор",
        text: "Ты обычный студент. Учёба занимает много времени, денег почти нет, но есть желание изменить свою жизнь. Нужно выбрать, с чего начать путь к успеху.",
        image: "images/start.jpg",
        choices: [
            { text: "Учиться и развивать навыки", money: -10, energy: -15, reputation: 20 },
            { text: "Пойти на подработку", money: 40, energy: -25, reputation: 5 },
            { text: "Попробовать бизнес-идею", money: -30, energy: -20, reputation: 15 }
        ]
    },
    {
        title: "Новая возможность",
        text: "После первых шагов ты замечаешь интересную возможность: знакомые предлагают поучаствовать в небольшом проекте. Это может дать опыт, деньги и новые связи, но придётся потратить силы.",
        image: "images/startup.jpg",
        choices: [
            { text: "Взять проект", money: 30, energy: -25, reputation: 20 },
            { text: "Отказаться и отдохнуть", money: 0, energy: 25, reputation: -5 },
            { text: "Попросить помощи у друзей", money: 15, energy: -10, reputation: 10 }
        ]
    },
    {
        title: "Сложный период",
        text: "Учёба, работа и личные дела начали давить одновременно. Герой понимает, что успех требует не только действий, но и правильного распределения сил.",
        image: "images/scene3.jpg",
        choices: [
            { text: "Работать ещё больше", money: 50, energy: -40, reputation: 5 },
            { text: "Наладить режим", money: -10, energy: 30, reputation: 10 },
            { text: "Бросить часть задач", money: -20, energy: 20, reputation: -10 }
        ]
    },
    {
        title: "Первый серьёзный успех",
        text: "Твои старания начали приносить результат. Тебя заметили, появились новые варианты развития. Теперь важно выбрать направление, которое сильнее всего повлияет на будущее.",
        image: "images/scene4.jpg",
        choices: [
            { text: "Запустить свой проект", money: -40, energy: -25, reputation: 30 },
            { text: "Устроиться на хорошую работу", money: 60, energy: -20, reputation: 15 },
            { text: "Продолжить обучение", money: -20, energy: -15, reputation: 25 }
        ]
    },
    {
        title: "Финальный рывок",
        text: "Остался последний важный выбор. У героя уже есть опыт, связи и понимание своих целей. Но финальный шаг определит, каким будет итог всего пути.",
        image: "images/scene5.jpg",
        choices: [
            { text: "Рискнуть ради большого успеха", money: 100, energy: -50, reputation: 20 },
            { text: "Выбрать стабильность", money: 40, energy: -10, reputation: 10 },
            { text: "Сделать ставку на репутацию", money: 20, energy: -20, reputation: 40 }
        ]
    }
];

function showStats() {
    moneyText.textContent = money;
    energyText.textContent = energy;
    reputationText.textContent = reputation;
}

function showScene() {
    if (currentScene >= scenes.length) {
        showFinal();
        return;
    }

    let scene = scenes[currentScene];

    sceneTitle.textContent = scene.title;
    sceneText.textContent = scene.text;
    sceneImage.src = scene.image;

    choicesBlock.innerHTML = "";

    for (let choice of scene.choices) {
        let button = document.createElement("button");
        button.textContent = choice.text;

        button.addEventListener("click", function () {
            makeChoice(choice);
        });

        choicesBlock.appendChild(button);
    }

    showStats();
}

function makeChoice(choice) {

    money = money + choice.money;
    energy = energy + choice.energy;
    reputation = reputation + choice.reputation;

    showChange(moneyChange, choice.money);
    showChange(energyChange, choice.energy);
    showChange(reputationChange, choice.reputation);

    currentScene = currentScene + 1;

    showScene();
}
function showChange(element, value){

    if(value > 0){
        element.textContent = "+" + value;
        element.className = "plus";
    }
    else if(value < 0){
        element.textContent = value;
        element.className = "minus";
    }
    else{
        element.textContent = "0";
        element.className = "";
    }
}

function showFinal() {
    choicesBlock.innerHTML = "";

if (money >= 220 && reputation >= 80 && energy > 0) {
    sceneTitle.textContent = "Финал: Миллионер";
    sceneText.textContent = "Ты смог пройти путь от студента до миллионера. У тебя есть деньги, репутация и силы двигаться дальше.";
    sceneImage.src = "images/ending-rich.jpg";
} else if (money >= 180 && reputation < 50) {
    sceneTitle.textContent = "Финал: Богатый одиночка";
    sceneText.textContent = "Ты заработал много денег, но почти потерял доверие людей. Успех есть, но не всем он понравился.";
    sceneImage.src = "images/ending-experience.jpg";
} else if (reputation >= 90) {
    sceneTitle.textContent = "Финал: Легенда университета";
    sceneText.textContent = "Ты стал человеком, которого уважают преподаватели, друзья и будущие работодатели.";
    sceneImage.src = "images/final-smile.jpg";
} else if (reputation >= 70) {
    sceneTitle.textContent = "Финал: Уважаемый специалист";
    sceneText.textContent = "Ты не стал миллионером, но получил сильную репутацию и хорошие возможности для будущего.";
    sceneImage.src = "images/ending-pro.jpg";
} else if (energy <= 0) {
    sceneTitle.textContent = "Финал: Выгорание";
    sceneText.textContent = "Ты слишком много работал и потерял силы. Деньги важны, но без энергии сложно продолжать путь.";
    sceneImage.src = "images/ending-fail.jpg";
} else {
    sceneTitle.textContent = "Финал: Стабильная жизнь";
    sceneText.textContent = "Ты не стал миллионером, но получил опыт и понял, какие решения помогают двигаться вперёд.";
    sceneImage.src = "images/ending-stable.jpg";
}

    showStats();
}

restartBtn.addEventListener("click", function () {
    money = 100;
    energy = 100;
    reputation = 0;
    currentScene = 0;

    moneyChange.textContent = "";
    energyChange.textContent = "";
    reputationChange.textContent = "";

    moneyChange.className = "";
    energyChange.className = "";
    reputationChange.className = "";

    showScene();
});

showScene();