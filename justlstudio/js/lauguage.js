const languages = {
    en: {
        home: "Home",
        about: "About",
        games: "Games",
        contact: "Contact Us",
        mainLogoAlt: "Chubby Cat Logo",
        mainTitle: "2025: The Grand Launch of Chubby Cat",
        mainDescription: "Chubby Cat is a fun adventure game where you play as a hungry cat exploring different worlds, completing challenges, and collecting food to enhance the cat's abilities.",
        wishlistButton: "Add to Wishlist",
        aboutTitle: "JustLStudio - Independent Game Studio",
        aboutText1: "Founded by an independent developer from Taiwan, JustLStudio began its journey in 2022. With passion and creativity, we aim to turn imaginative ideas into real, playable games.",
        aboutHeader1: "Starting from Scratch, Making Game Dreams Come True",
        aboutText2: "We don't just make games, we create unforgettable experiences. Each game is packed with fresh ideas and unique gameplay, designed to surprise and entertain players.",
        aboutHeader2: "Let Creativity Shine Through Games",
        aboutFooter: "🚀 JustLStudio 🚀 Making indie games shine, and creativity knows no bounds!",
        chubbyCatTitle: "Chubby Cat",
        chubbyCatDescription: "Help the hungry cat collect food, avoid obstacles, and challenge yourself!",
        chubbyCatGameButtonDescription: "To Game",
        luckyIslandTitle: "Lucky Island",
        luckyIslandDescription: "A vibrant island management game that takes you on an adventure full of endless possibilities!",
        luckyIslandGameButtonDescription: "To Game",
        slimeHeroTitle: "Slime Hero",
        slimeHeroDescription: "A bullet-hell mini-game where you collect slimes and form a team for automatic battles!",
        slimeHeroGameButtonDescription: "To Game",
        contactTitle: "Contact Us",
        contactDescription: "Have any questions or suggestions? Feel free to get in touch with us!",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        submitButton: "Submit",
        footerText: "© 2025 JustLStudio."
    },
    zh: {
        home: "首頁",
        about: "關於",
        games: "遊戲",
        contact: "聯繫我們",
        mainLogoAlt: "貪吃貓 Logo",
        mainTitle: "2025重磅推出 貪吃貓",
        mainDescription: "餵飽貓咪，征服島嶼，美味不斷升級！在《貪吃貓（Chubby Cat）》的世界裡，貓咪們不僅貪吃，還非常挑嘴！你的任務是擺放各種島嶼，種植食材、製作料理，並在有限的時間內滿足牠們的需求。隨著關卡推進，你將遇到更多的挑戰，享受令人上癮的策略挑戰！",
        wishlistButton: "加入願望清單",
        aboutTitle: "JustLStudio 獨立遊戲工作室",
        aboutText1: "JustLStudio 由台灣獨立開發者創立，從 2022 年開始，獨自走上遊戲製作之路。不依靠大團隊，從程式、設計到美術，一手包辦，憑藉熱情與創意，將腦中的奇思妙想變成真實可玩的遊戲世界。",
        aboutHeader1: "從零開始，實現遊戲夢想",
        aboutText2: "我們不只是做遊戲，而是打造讓人回味無窮的體驗。每一款作品都充滿新鮮的點子與獨特玩法，希望能帶給玩家驚喜與樂趣。",
        aboutHeader2: "用遊戲讓創意發光",
        aboutFooter: "🚀 JustLStudio 🚀 讓獨立遊戲閃耀，讓創意不被侷限！",
        chubbyCatTitle: "貪吃貓",
        chubbyCatDescription: "幫助貪吃的貓咪收集食物，避開障礙，挑戰自我！",
        chubbyCatGameButtonDescription: "前往遊戲",
        luckyIslandTitle: "幸運島",
        luckyIslandDescription: "充滿活力的小島經營遊戲將帶你踏上一段充滿無限可能的冒險之旅!",
        luckyIslandGameButtonDescription: "前往遊戲",
        slimeHeroTitle: "史萊姆英雄",
        slimeHeroDescription: "這是一款收集史萊姆，並組成戰隊自動戰鬥的彈幕小品遊戲！",
        slimeHeroGameButtonDescription: "前往遊戲",
        contactTitle: "聯絡我們",
        contactDescription: "有任何問題或建議？歡迎與我們聯繫！",
        nameLabel: "姓名：",
        emailLabel: "Email：",
        messageLabel: "訊息：",
        submitButton: "送出",
        footerText: "© 2025 JustLStudio."
    }
};

function switchLanguage(language) {
    document.getElementById("home-link").innerText = languages[language].home;
    document.getElementById("about-link").innerText = languages[language].about;
    document.getElementById("games-link").innerText = languages[language].games;
    document.getElementById("contact-link").innerText = languages[language].contact;

    document.getElementById("main-logo").alt = languages[language].mainLogoAlt;
    document.getElementById("main-title").innerText = languages[language].mainTitle;
    document.getElementById("main-description").innerText = languages[language].mainDescription;
    document.getElementById("wishlist-button").innerText = languages[language].wishlistButton;

    document.getElementById("about-title").innerText = languages[language].aboutTitle;
    document.getElementById("about-description-1").querySelector('p').innerText = languages[language].aboutText1;
    document.getElementById("about-header-1").innerText = languages[language].aboutHeader1;
    document.getElementById("about-description-2").querySelector('p').innerText = languages[language].aboutText2;
    document.getElementById("about-header-2").innerText = languages[language].aboutHeader2;
    document.getElementById("about-footer").innerText = languages[language].aboutFooter;

    document.getElementById("chubby-cat-title").innerText = languages[language].chubbyCatTitle;
    document.getElementById("chubby-cat-description").innerText = languages[language].chubbyCatDescription;
    document.getElementById("chubby-cat-game-button").innerText = languages[language].chubbyCatGameButtonDescription;

    document.getElementById("lucky-island-title").innerText = languages[language].luckyIslandTitle;
    document.getElementById("lucky-island-description").innerText = languages[language].luckyIslandDescription;
    document.getElementById("lucky-island-game-button").innerText = languages[language].luckyIslandGameButtonDescription;

    document.getElementById("slime-hero-title").innerText = languages[language].slimeHeroTitle;
    document.getElementById("slime-hero-description").innerText = languages[language].slimeHeroDescription;
    document.getElementById("slime-hero-game-button").innerText = languages[language].slimeHeroGameButtonDescription;

    document.getElementById("contact-title").innerText = languages[language].contactTitle;
    document.getElementById("contact-description").innerText = languages[language].contactDescription;
    document.getElementById("name-label").innerText = languages[language].nameLabel;
    document.getElementById("email-label").innerText = languages[language].emailLabel;
    document.getElementById("message-label").innerText = languages[language].messageLabel;
    document.getElementById("submit-button").innerText = languages[language].submitButton;

    document.getElementById("footer-text").innerText = languages[language].footerText;

    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('lang') || 'en';

    const studioLink_chubby_cat = document.getElementById("chubby-cat-game-button");

    if (studioLink_chubby_cat) {
        studioLink_chubby_cat.href = `chubby_cat/index.html?lang=${currentLang}`;
    }

    const studioLink_lucky_island = document.getElementById("lucky-island-game-button");

    if (studioLink_lucky_island) {
        studioLink_lucky_island.href = `lucky_island/index.html?lang=${currentLang}`;
    }
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const currentLang = urlParams.get('lang') || 'en';

    const studioLink_chubby_cat = document.getElementById("chubby-cat-game-button");

    if (studioLink_chubby_cat) {
        studioLink_chubby_cat.href = `chubby_cat/index.html?lang=${currentLang}`;
    }

    const studioLink_lucky_island = document.getElementById("lucky-island-game-button");

    if (studioLink_lucky_island) {
        studioLink_lucky_island.href = `lucky_island/index.html?lang=${currentLang}`;
    }

    switchLanguage(currentLang);
};