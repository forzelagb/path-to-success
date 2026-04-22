const player = {
    money: 100,
    energy: 100,
    reputation: 0
};

const MAX_STATS = {
    money: 300,
    energy: 100,
    reputation: 100
};

let currentScene = "start";

const moneyEl = document.getElementById("money");
const energyEl = document.getElementById("energy");
const reputationEl = document.getElementById("reputation");

const moneyFillEl = document.getElementById("money-fill");
const energyFillEl = document.getElementById("energy-fill");
const reputationFillEl = document.getElementById("reputation-fill");

const sceneImageEl = document.getElementById("scene-image");
const sceneTitleEl = document.getElementById("scene-title");
const sceneTextEl = document.getElementById("scene-text");

const choicesEl = document.getElementById("choices");
const restartBtn = document.getElementById("restart-btn");

const moneyBox = document.getElementById("money-box");
const energyBox = document.getElementById("energy-box");
const reputationBox = document.getElementById("reputation-box");

const scenes = {
    start: {
        title: "Обычный день, необычные амбиции",
        text: "Ты обычный студент. Денег немного, амбиций много, а планов ещё больше. Пора что-то менять и начинать путь к успеху.",
        image: "images/start.jpg",
        choices: [
            {
                text: "Учиться и развивать навыки",
                nextScene: "studyStart",
                effects: { money: 0, energy: -10, reputation: 10 }
            },
            {
                text: "Пойти работать и зарабатывать",
                nextScene: "jobStart",
                effects: { money: 30, energy: -20, reputation: 0 }
            },
            {
                text: "Запустить “гениальную бизнес-идею”",
                nextScene: "startupStart",
                effects: { money: -20, energy: -10, reputation: 5 }
            }
        ]
    },

    studyStart: {
        title: "Первые шаги в развитии",
        text: "Ты решил серьёзно заняться собой. Открыл курсы, посмотрел мотивационные ролики и даже не закрыл вкладку через 5 минут. Уже неплохо.",
        image: "images/study.jpg",
        choices: [
            {
                text: "Учиться дальше",
                nextScene: "scene3",
                effects: { money: 0, energy: -15, reputation: 15 }
            },
            {
                text: "Взять первый маленький заказ",
                nextScene: "scene3",
                effects: { money: 40, energy: -20, reputation: 20 }
            },
            {
                text: "Устроить себе небольшой отдых",
                nextScene: "scene3",
                effects: { money: 0, energy: 10, reputation: -10 }
            }
        ]
    },

    jobStart: {
        title: "Добро пожаловать во взрослую жизнь",
        text: "Ты устроился на работу. Денег стало больше, но теперь ты понимаешь, почему взрослые так ценят выходные и иногда молча смотрят в одну точку.",
        image: "images/job.jpg",
        choices: [
            {
                text: "Копить деньги",
                nextScene: "scene3",
                effects: { money: 50, energy: -10, reputation: 5 }
            },
            {
                text: "Тратить всё на красивую жизнь",
                nextScene: "scene3",
                effects: { money: -40, energy: 5, reputation: 0 }
            },
            {
                text: "Совмещать работу и учёбу",
                nextScene: "scene3",
                effects: { money: 20, energy: -25, reputation: 20 }
            }
        ]
    },

    startupStart: {
        title: "Идея на миллион. Или на минус миллион",
        text: "Ты придумал стартап, который, по твоему мнению, должен перевернуть рынок. Пока он переворачивает только твоё финансовое положение, но энтузиазм всё ещё жив.",
        image: "images/startup.jpg",
        choices: [
            {
                text: "Вложить все силы и деньги",
                nextScene: "scene3",
                effects: { money: -30, energy: -20, reputation: 20 }
            },
            {
                text: "Найти партнёра",
                nextScene: "scene3",
                effects: { money: 10, energy: -10, reputation: 15 }
            },
            {
                text: "Передумать и выбрать более надёжный путь",
                nextScene: "scene3",
                effects: { money: 0, energy: 0, reputation: 5 }
            }
        ]
    },

    scene3: {
        title: "Первые реальные результаты",
        text: "Прошло немного времени. Ты уже начинаешь понимать, как устроен этот мир. Где-то ты сделал правильные шаги, где-то — не очень. Но теперь появляются реальные возможности.",
        image: "images/scene3.jpg",
        choices: [
            {
                text: "Взяться за серьёзную работу или проект",
                nextScene: "scene4",
                effects: { money: 60, energy: -20, reputation: 20 }
            },
            {
                text: "Сделать паузу и перезагрузиться",
                nextScene: "scene4",
                effects: { money: 0, energy: 30, reputation: -10 }
            },
            {
                text: "Попробовать быстрый способ заработать",
                nextScene: "scene4",
                effects: { money: 80, energy: -10, reputation: -5 }
            }
        ]
    },

    scene4: {
        title: "Переломный момент",
        text: "Ты уже не тот, кем был в начале. У тебя есть опыт, немного связей и понимание того, что дальше решения будут серьёзнее.",
        image: "images/scene4.jpg",
        choices: [
            {
                text: "Устроиться в стабильную компанию",
                nextScene: "scene5",
                effects: { money: 80, energy: -20, reputation: 10 }
            },
            {
                text: "Открыть своё дело",
                nextScene: "scene5",
                effects: { money: -50, energy: -20, reputation: 30 }
            },
            {
                text: "Продолжить развиваться и прокачивать себя",
                nextScene: "scene5",
                effects: { money: 0, energy: -10, reputation: 25 }
            }
        ]
    },

    scene5: {
        title: "Последний рывок",
        text: "Ты почти у цели. Остался последний шаг, который определит, чем закончится твой путь: громким успехом, стабильной жизнью или очень поучительной историей.",
        image: "images/scene5.jpg",
        choices: [
            {
                text: "Рискнуть всем ради большого результата",
                nextScene: "ending",
                effects: { money: 100, energy: -20, reputation: 10 }
            },
            {
                text: "Играть безопасно и выбрать стабильность",
                nextScene: "ending",
                effects: { money: 40, energy: 0, reputation: 10 }
            },
            {
                text: "Вложиться в себя и в свои навыки",
                nextScene: "ending",
                effects: { money: 0, energy: -15, reputation: 40 }
            }
        ]
    }
};

function setProgress(element, value, maxValue) {
    const percent = Math.max(0, Math.min((value / maxValue) * 100, 100));
    element.style.width = `${percent}%`;
}

function animateScene() {
    [sceneTitleEl, sceneTextEl].forEach(el => {
        el.classList.remove("fade-text");
        void el.offsetWidth;
        el.classList.add("fade-text");
    });

    sceneImageEl.classList.remove("fade-in");
    void sceneImageEl.offsetWidth;
    sceneImageEl.classList.add("fade-in");
}

function highlightStatChange(element, change) {
    element.classList.remove("good-change", "bad-change", "stat-updated");

    if (change > 0) element.classList.add("good-change");
    if (change < 0) element.classList.add("bad-change");

    if (change !== 0) {
        element.classList.add("stat-updated");

        setTimeout(() => {
            element.classList.remove("good-change", "bad-change", "stat-updated");
        }, 700);
    }
}

function updateStats(previousStats = null) {
    moneyEl.textContent = player.money;
    energyEl.textContent = player.energy;
    reputationEl.textContent = player.reputation;

    setProgress(moneyFillEl, player.money, MAX_STATS.money);
    setProgress(energyFillEl, player.energy, MAX_STATS.energy);
    setProgress(reputationFillEl, player.reputation, MAX_STATS.reputation);

    if (previousStats) {
        highlightStatChange(moneyBox, player.money - previousStats.money);
        highlightStatChange(energyBox, player.energy - previousStats.energy);
        highlightStatChange(reputationBox, player.reputation - previousStats.reputation);
    }
}

function applyEffects(effects) {
    const previousStats = { ...player };

    player.money = Math.max(0, player.money + effects.money);
    player.energy = Math.max(0, player.energy + effects.energy);
    player.reputation = Math.max(0, player.reputation + effects.reputation);

    return previousStats;
}

function createChoiceButton(choice) {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.textContent = choice.text;

    button.addEventListener("click", () => {
        const previousStats = applyEffects(choice.effects);
        currentScene = choice.nextScene;

        if (currentScene === "ending") {
            showEnding(previousStats);
        } else {
            showScene(currentScene, previousStats);
        }
    });

    return button;
}

function renderChoices(choices) {
    choicesEl.innerHTML = "";
    choices.forEach(choice => choicesEl.appendChild(createChoiceButton(choice)));
}

function showScene(sceneKey, previousStats = null) {
    const scene = scenes[sceneKey];
    restartBtn.style.display = "none";

    sceneTitleEl.textContent = scene.title;
    sceneTextEl.textContent = scene.text;
    sceneImageEl.src = scene.image;

    animateScene();
    renderChoices(scene.choices);
    updateStats(previousStats);
}

function getEndingData() {
    if (player.money >= 250 && player.reputation >= 70) {
        return {
            title: "Ты — магнат",
            text: "Ты прошёл путь от обычного студента до человека, который уверенно принимает решения, строит своё дело и уже не смотрит на цену кофе. У тебя есть деньги, репутация и ощущение, что всё было не зря.",
            image: "images/ending-rich.jpg"
        };
    }

    if (player.reputation >= 80 && player.money >= 120) {
        return {
            title: "Ты — успешный специалист",
            text: "Ты не стал магнатом, но стал человеком, которого уважают за навыки, опыт и умение делать дело. Это уже серьёзный успех, и ты явно двигаешься в правильную сторону.",
            image: "images/ending-pro.jpg"
        };
    }

    if (player.money >= 120 && player.energy >= 40) {
        return {
            title: "Стабильная и уверенная жизнь",
            text: "Ты выбрал более спокойный путь. Без громких заголовков и золотых небоскрёбов, зато с нормальным доходом, устойчивостью и пониманием, куда двигаться дальше. Иногда стабильность — это тоже победа.",
            image: "images/ending-stable.jpg"
        };
    }

    if (player.reputation >= 40) {
        return {
            title: "Опытный, но пока не богатый",
            text: "Финансово ты ещё не на вершине, но у тебя уже есть главное — опыт, навыки и понимание того, как устроен путь к успеху. А ещё пару очень поучительных историй, которые лучше не повторять.",
            image: "images/ending-experience.jpg"
        };
    }

    return {
        title: "Поражение... но с сюжетом",
        text: "Ты столкнулся с трудностями и пока не добрался до желаемого результата. Возможно, где-то ты слишком рисковал, где-то рано сдался, а где-то просто нажал не ту кнопку. Но любой провал — это тоже часть пути.",
        image: "images/ending-fail.jpg"
    };
}

function showEnding(previousStats = null) {
    const ending = getEndingData();

    sceneTitleEl.textContent = ending.title;
    sceneTextEl.textContent = ending.text;
    sceneImageEl.src = ending.image;

    animateScene();
    choicesEl.innerHTML = "";
    restartBtn.style.display = "none";

    const continueBtn = document.createElement("button");
    continueBtn.className = "choice-btn";
    continueBtn.textContent = "Осмыслить свой путь";

    continueBtn.addEventListener("click", () => {
        sceneTitleEl.textContent = "Итог твоего пути";
        sceneTextEl.textContent =
            "Ты получил своё место в этом мире.\n\n" +
            "Где-то было трудно, где-то ты сомневался, где-то ошибался.\n" +
            "Но самое главное — ты не остановился и продолжал идти дальше.\n\n" +
            "Не так важно, к какому финалу ты пришёл.\n" +
            "Важно, что ты прошёл этот путь, стал сильнее и дошёл до нового этапа своего развития.\n\n" +
            "А значит, всё только начинается.";
        sceneImageEl.src = "images/final-smile.jpg";

        animateScene();
        choicesEl.innerHTML = "";
        restartBtn.style.display = "block";
        updateStats(previousStats);
    });

    choicesEl.appendChild(continueBtn);
    updateStats(previousStats);
}

restartBtn.addEventListener("click", () => {
    player.money = 100;
    player.energy = 100;
    player.reputation = 0;
    currentScene = "start";
    restartBtn.style.display = "none";
    showScene(currentScene);
});

showScene(currentScene);