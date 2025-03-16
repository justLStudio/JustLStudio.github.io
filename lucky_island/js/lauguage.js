const languages = {
    en: {
        home: "Home",
        about: "About",
        feature: "Feature",
        screenShots: "ScreenShots",
        getGame: "To The Game",
        JustLStudio: "JustLStudio",
        mainLogoAlt: "Chubby Cats Logo",
        mainTitle: "2025: Introducing Chubby Cat",
        mainDescription: "Chubby Cats is a fun adventure game where you play as a hungry cat exploring different worlds, completing challenges, and collecting food to enhance the cat's abilities.",
        gameStartButton: "play on STEAM",
        aboutTitle: "JustLStudio - Independent Game Studio",
        aboutText1: "Founded by an independent developer from Taiwan, JustLStudio began its journey in 2022. With passion and creativity, we aim to turn imaginative ideas into real, playable screenShots.",
        aboutHeader1: "Starting from Scratch, Making Game Dreams Come True",
        aboutText2: "We don't just make screenShots, we create unforgettable experiences. Each game is packed with fresh ideas and unique gameplay, designed to surprise and entertain players.",
        aboutHeader2: "Let Creativity Shine Through screenShots",
        aboutFooter: "🚀 JustLStudio 🚀 Making indie screenShots shine, and creativity knows no bounds!",
        featureTitle: "Game Features",
        featureHeader1: "Slot Machine-Style Island Management",
        featureHeader2: "Diverse Slot Machine Deck Choices",
        featureHeader3: "Freedom to Design Your Own Island",
        featureHeader4: "Various Unique and Powerful Skills",
        featureHeader5: "Roguelike-Style Random Events",
        featureFooter: "Unleash your creativity while mastering strategic island management. Start your 'Lucky Island' adventure now and build your dream paradise!",        
        getGameButton: "Play Lucky Island on Steam Now!",
        footerText: "© 2025 JustLStudio."
    },
    zh: {
        home: "首頁",
        about: "遊戲介紹",
        feature: "遊戲特色",
        screenShots: "遊戲畫面",
        getGame: "前往遊戲",
        JustLStudio: "JustLStudio",
        mainLogoAlt: "幸運島 Logo",
        mainTitle: "幸運島 打造夢幻小島",
        mainDescription: "這款充滿活力的小島經營遊戲將帶你踏上一段充滿無限可能的冒險之旅。以可愛的像素風格為特色，《幸運島》將島嶼建造經營與拉霸機元素巧妙結合，為你打造一個清新放鬆的遊戲體驗。",
        gameStartButton: "前往 STEAM 遊玩",
        aboutTitle: "關於幸運島",
        aboutText1: "在《幸運島》中，你將成為島主，負責建造和管理你的小島。白天，你將指揮島民工作，完成各種任務；晚上，則是你規劃小島的時刻。你可以根據個人喜好和想法自由地建造小島，打造獨一無二的景觀。",
        aboutHeader1: "成為島主",
        aboutText2: "透過拉霸機遊戲，你可以更好地經營你的島嶼，提供島民更好的生活條件，提高工作效率。運氣在遊戲中也是重要的因素，但透過你的努力和智慧，搭配合適的資源規劃和技能運用，你必能建造出夢想中的小島，讓島民過上幸福美滿的生活。",
        aboutHeader2: "拉霸機遊戲",
        aboutFooter: "透過島嶼建造、拉霸機經營和策略規劃等元素的結合，將為《幸運島》為玩家帶來豐富多樣的遊戲體驗！",
        featureTitle: "遊戲特色",
        featureHeader1: "拉霸機模式島嶼經營",
        featureHeader2: "豐富的拉霸機牌組選擇",
        featureHeader3: "自由的島嶼設計",
        featureHeader4: "多種效果各異的技能",
        featureHeader5: "Rogue風格的觸發事件",
        featureFooter:  "在遊戲中盡情發揮創造力，同時挑戰自己的管理和策略能力。現在就開始你的《幸運島》冒險，打造屬於自己的繁榮島嶼吧！",
        getGameButton: "立即前往 Steam 遊玩幸運島",
        footerText: "© 2025 JustLStudio."
    }
};

function switchLanguage(language) {
    document.getElementById("home-link").innerText = languages[language].home;
    document.getElementById("about-link").innerText = languages[language].about;
    document.getElementById("feature-link").innerText = languages[language].feature;
    document.getElementById("screenShots-link").innerText = languages[language].screenShots;
    document.getElementById("get-game-link").innerText = languages[language].getGame;
    document.getElementById("JustLStudio-link").innerText = languages[language].JustLStudio;

    document.getElementById("main-logo").alt = languages[language].mainLogoAlt;
    document.getElementById("main-title").innerText = languages[language].mainTitle;
    document.getElementById("main-description").innerText = languages[language].mainDescription;
    document.getElementById("game-start-button").innerText = languages[language].gameStartButton;

    document.getElementById("about-title").innerText = languages[language].aboutTitle;
    document.getElementById("about-description-1").querySelector('p').innerText = languages[language].aboutText1;
    document.getElementById("about-header-1").innerText = languages[language].aboutHeader1;
    document.getElementById("about-description-2").querySelector('p').innerText = languages[language].aboutText2;
    document.getElementById("about-header-2").innerText = languages[language].aboutHeader2;
    document.getElementById("about-footer").innerText = languages[language].aboutFooter;

    document.getElementById("feature-title").innerText = languages[language].featureTitle;
    document.getElementById("feature-header-1").innerText = languages[language].featureHeader1;
    document.getElementById("feature-header-2").innerText = languages[language].featureHeader2;
    document.getElementById("feature-header-3").innerText = languages[language].featureHeader3;
    document.getElementById("feature-header-4").innerText = languages[language].featureHeader4;
    document.getElementById("feature-header-5").innerText = languages[language].featureHeader5;
    document.getElementById("feature-footer").innerText = languages[language].featureFooter;

    document.getElementById("get-game-button").innerText = languages[language].getGameButton;

    document.getElementById("footer-text").innerText = languages[language].footerText;

    window.history.replaceState(null, null, `?lang=${language}`);

    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('lang') || 'en';
    const studioLink = document.getElementById("JustLStudio-link");

    if (studioLink) {
        studioLink.href = `../index.html?lang=${currentLang}`;
    }
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('lang') || 'en';
    const studioLink = document.getElementById("JustLStudio-link");

    if (studioLink) {
        studioLink.href = `../index.html?lang=${currentLang}`;
    }

    switchLanguage(currentLang);
};