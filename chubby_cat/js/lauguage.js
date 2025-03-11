const languages = {
    en: {
        home: "Home",
        about: "About",
        feature: "Feature",
        screenShots: "ScreenShots",
        getGame: "To The Game",
        JustLStudio: "JustLStudio",
        mainLogoAlt: "Chubby Cat Logo",
        mainTitle: "Chubby Cat: Seeking the Ultimate Delicacy",
        mainDescription: "Feed the cats, conquer the islands, and level up your culinary skills! In the world of Chubby Cat, these feline foodies are not just hungry—they’re picky too! Your mission is to place various island tiles, grow ingredients, cook delicious dishes, and satisfy their demands within a limited time. As you progress through levels, new challenges await, offering an addictive strategic experience!",
        gameStartButton: "Wishlist on STEAM",
        aboutTitle: "About Chubby Cat",
        aboutHeader1: "Creative Island Puzzle – Endless Strategy!",
        aboutText1: "Strategically place different-shaped island tiles on the map to influence each other and generate various ingredients! Precise placement is key to maximizing your output and keeping every cat satisfied.",
        aboutHeader2: "Rotate & Merge – Craft Exquisite Dishes!",
        aboutText2: "Special cats can help you rotate islands, altering resource connections to unlock new possibilities! Plus, with clever merging, you can upgrade basic ingredients into gourmet dishes—turning a simple apple into a delicious caramel apple to impress the cats and earn higher scores!",
        aboutHeader3: "Customer Cats – Test Your Speed and Decision-Making!",
        aboutText3: "Cats have little patience—if they wait too long, they’ll get angry and leave, costing you valuable points! Can you fulfill orders flawlessly and pull off amazing combos before time runs out? That’s the difference between a beginner and a true pro!",
        aboutHeader4: "Every Map Brings a Unique Challenge!",
        aboutText4: "From vast oceans to perilous reefs, every map features unique mechanics and constraints. Watch out for the sneaky 'Cat Traps'—they can completely disrupt your layout! Adapt quickly or find the most efficient way to clear obstacles.",
        featureTitle: "Game Features",
        featureHeader1: "Innovative Island Puzzle Mechanics – Create the best combinations with island blocks",
        featureHeader2: "Time and Strategy – Place, rotate, and combine under a time limit, testing your decision-making skills",
        featureHeader3: "Cute Cat Characters – Not just customers, but chef cats to help you craft gourmet dishes!",
        featureHeader4: "Well-Designed Levels – From easy to hard, each level brings a new challenge",
        featureHeader5: "Challenge Mode – Star ratings challenge, only true island masters can collect all stars!",
        featureFooter: "Are you ready for the challenge? Come feed these hungry cats and become their top chef!",
        getGameButton: "Add Chubby Cat to your Steam Wishlist Now",
        footerText: "© 2025 JustLStudio.",
    },
    zh: {
        home: "首頁",
        about: "遊戲介紹",
        feature: "遊戲特色",
        screenShots: "遊戲畫面",
        getGame: "前往遊戲",
        JustLStudio: "JustLStudio",
        mainLogoAlt: "貪吃貓 Logo",
        mainTitle: "貪吃貓 找尋至高美味",
        mainDescription: "餵飽貓咪，征服島嶼，美味不斷升級！在《貪吃貓（Chubby Cat）》的世界裡，貓咪們不僅貪吃，還非常挑嘴！你的任務是擺放各種島嶼，種植食材、製作料理，並在有限的時間內滿足牠們的需求。隨著關卡推進，你將遇到更多的挑戰，享受令人上癮的策略挑戰！",
        gameStartButton: "前往 STEAM 加入願望清單",
        aboutTitle: "關於貪吃貓",
        aboutHeader1: "創意島嶼拼放，策略無窮！",
        aboutText1: "將不同形狀的島嶼拼放在地圖上，讓它們相互影響、產出各種食材！你需要精準計算位置，才能最大化產出，讓每位貓咪都能吃得心滿意足。",
        aboutHeader2: "旋轉+合成，打造超值料理！",
        aboutText2: "特殊貓咪能幫助你旋轉小島，改變資源連結方式，創造更多可能性！此外，透過巧妙合成，你可以將普通食材升級為高級料理，例如將蘋果變成蘋果糖葫蘆，讓貓咪更滿意，獲得更高分數！",
        aboutHeader3: "顧客貓咪，考驗你的速度與決策！",
        aboutText3: "貓咪們的耐心有限，如果等太久，它們會生氣離開，讓你的分數化為烏有！要如何在倒數結束前完美應對訂單、創造驚人連擊？這就是高手與新手的關鍵差異！",
        aboutHeader4: "每張地圖都是全新挑戰！",
        aboutText4: "從廣闊的海洋到險惡的礁石，每張地圖都有獨特的玩法與限制。還有神出鬼沒的「貓咪陷阱」，稍有不慎就會讓你的佈局大亂，你需要靈活應對，或用最小的代價來清理障礙。",
        featureTitle: "遊戲特色",
        featureHeader1: "創新拼放玩法–以方塊島嶼拼放，打造最優組合",
        featureHeader2: "時間與策略並重–限時內擺放、旋轉、合成，考驗你的決策力",
        featureHeader3: "可愛貓咪角色–不只是客人，還有廚師貓幫助你製作高級料理！",
        featureHeader4: "精心設計關卡–從輕鬆上手到高難度挑戰，每關都帶來不同體驗",
        featureHeader5: "挑戰模式–星級評價挑戰，只有真正的島嶼大師才能收集所有星星！",
        featureFooter: "準備好接受挑戰了嗎？快來餵飽這些貪吃的貓咪，成為牠們心中的頂級大廚吧！",
        getGameButton: "立即前往Steam將 貪吃貓 加入願望清單",
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

    const logo = document.getElementById("main-logo");
    if (language === 'zh') {
        logo.src = "images/main_logo_zh.png";
    } else if (language === 'en') {
        logo.src = "images/main_logo_en.png";
    }

    document.getElementById("main-title").innerText = languages[language].mainTitle;
    document.getElementById("main-description").innerText = languages[language].mainDescription;
    document.getElementById("game-start-button").innerText = languages[language].gameStartButton;

    document.getElementById("about-title").innerText = languages[language].aboutTitle;
    document.getElementById("about-header-1").innerText = languages[language].aboutHeader1;
    document.getElementById("about-description-1").querySelector('p').innerText = languages[language].aboutText1;
    document.getElementById("about-header-2").innerText = languages[language].aboutHeader2;
    document.getElementById("about-description-2").querySelector('p').innerText = languages[language].aboutText2;
    document.getElementById("about-header-3").innerText = languages[language].aboutHeader3;
    document.getElementById("about-description-3").querySelector('p').innerText = languages[language].aboutText3;
    document.getElementById("about-header-4").innerText = languages[language].aboutHeader4;
    document.getElementById("about-description-4").querySelector('p').innerText = languages[language].aboutText4;

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