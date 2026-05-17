// ==========================================================================
// ИНИЦИАЛИЗАЦИЯ ПЕРЕМЕННОЙ ЯЗЫКА (Исправлено: добавлено объявление переменной)
// ==========================================================================
let currentLang = localStorage.getItem('siteLang') || 'RU';

// ==========================================================================
// 1. СЛОВАРЬ ПЕРЕВОДОВ (RU / EN)
// ==========================================================================
const translations = {
    RU: {
        nav_home: "Главная",
        nav_workshop: "Мастерская",
        nav_forum: "Форум",
        hero_subtitle: "PREMIUM MODIFICATIONS & VISUALS",
        btn_to_products: "Перейти к продуктам",
        btn_to_builds: "К готовым сборкам",
        cat_optimization_title: "Оптимизация",
        cat_utility_title: "Полезные моды",
        cat_fabric_title: "Fabric API",
        cat_visuals_title: "Визуал моды",
        cat_cheats_title: "Чит моды",
        cat_clients_title: "Чит клиенты",
        cat_tools_title: "Утилиты",
        wide_builds_title: "Перейти к готовым сборкам",
        wide_builds_desc: "Готовые комплекты модификаций под любые задачи в один клик",
        wide_builds_action: "ОТКРЫТЬ",
        builds_page_title: "Архив готовых сборок",
        builds_page_desc: "Выберите и установите оптимизированный игровой пак",
        footer_products: "Продукты",
        footer_nav: "Навигация",
        footer_copyright: "© 2026 NexusCraft. Все права защищены. Мы не связаны с Mojang Studios.",
        status_active: "Активен"
    },
    EN: {
        nav_home: "Home",
        nav_workshop: "Workshop",
        nav_forum: "Forum",
        hero_subtitle: "PREMIUM MODIFICATIONS & VISUALS",
        btn_to_products: "Browse Products",
        btn_to_builds: "Ready Builds",
        cat_optimization_title: "Optimization",
        cat_utility_title: "Utility Mods",
        cat_fabric_title: "Fabric API",
        cat_visuals_title: "Visual Mods",
        cat_cheats_title: "Cheat Mods",
        cat_clients_title: "Cheat Clients",
        cat_tools_title: "Tools & Macros",
        wide_builds_title: "Go to Ready-Made Builds",
        wide_builds_desc: "Pre-configured modification packs for any task in one click",
        wide_builds_action: "OPEN",
        builds_page_title: "Archive of Ready-Made Builds",
        builds_page_desc: "Select and install an optimized gameplay performance pack",
        footer_products: "Products",
        footer_nav: "Navigation",
        footer_copyright: "© 2026 NexusCraft. All rights reserved. We are not affiliated with Mojang Studios.",
        status_active: "Active"
    }
};

// ==========================================================================
// 2. БАЗЫ ДАННЫХ КОНТЕНТА
// ==========================================================================
const modsData = {
    optimization: [
        { ruName: "FerriteCore", enName: "FerriteCore", ruDesc: "Глубокая оптимизация использования оперативной памяти текстурами.", enDesc: "Deep memory usage optimization for textures.", mcVer: "1.21.1", modVer: "7.0.3", downloadUrl: "mods/ferritecore-7.0.3-fabric-1.21.1.jar" },
        { ruName: "Sodium Engine Pro", enName: "Sodium Engine Pro", ruDesc: "Глобальная оптимизация графического движка и рендера чанков.", enDesc: "Global graphics engine and chunk rendering optimization.", mcVer: "1.21.11", modVer: "0.8.7", downloadUrl: "mods/sodium-fabric-0.8.7+mc1.21.11.jar" },
        { ruName: "Sodium Engine Lite", enName: "Sodium Engine Lite", ruDesc: "Движок замены рендеринга для сильного увеличения FPS.", enDesc: "Rendering replacement engine for significant FPS boost.", mcVer: "1.21.1", modVer: "0.6.13", downloadUrl: "mods/sodium-fabric-0.6.13-mc1.21.1.jar" },
        { ruName: "Lithium Core Pro", enName: "Lithium Core Pro", ruDesc: "Продвинутая внутренняя оптимизация физики и тиков.", enDesc: "Advanced internal optimization of physics and ticks.", mcVer: "1.21.11", modVer: "0.21.4", downloadUrl: "mods/lithium-fabric-0.21.4+mc1.21.11.jar" },
        { ruName: "Lithium Core Lite", enName: "Lithium Core Lite", ruDesc: "Оптимизация внутренних систем физики, ИИ и чанков.", enDesc: "Optimization of physics, AI and chunk systems.", mcVer: "1.21.1", modVer: "0.15.3", downloadUrl: "mods/lithium-fabric-0.15.3-mc1.21.1.jar" },
        { ruName: "EntityCulling Pro", enName: "EntityCulling Pro", ruDesc: "Пропуск рендеринга невидимых существ и блоков за стенами.", enDesc: "Skips rendering invisible entities and blocks behind walls.", mcVer: "1.21.11", modVer: "1.10.1", downloadUrl: "mods/entityculling-fabric-1.10.1-mc1.21.11.jar" },
        { ruName: "EntityCulling Lite", enName: "EntityCulling Lite", ruDesc: "Скрытие рендеринга существ, находящихся вне зоны видимости.", enDesc: "Hides rendering of entities outside the visible area.", mcVer: "1.21.1", modVer: "1.10.1", downloadUrl: "mods/entityculling-fabric-1.10.1-mc1.21.1.jar" },
        { ruName: "Krypton Network", enName: "Krypton Network", ruDesc: "Оптимизация сетевых пакетов для уменьшения игрового пинга.", enDesc: "Network packet optimization to reduce in-game latency.", mcVer: "1.21.11", modVer: "0.2.10", downloadUrl: "mods/krypton-0.2.10.jar" },
        { ruName: "MoreCulling Boost", enName: "MoreCulling Boost", ruDesc: "Оптимизация просчета невидимой листвы и игровых частиц.", enDesc: "Optimization of hidden leaves and particle calculations.", mcVer: "1.21.11", modVer: "1.6.2", downloadUrl: "mods/moreculling-fabric-1.21.11-1.6.2.jar" }
    ],

    utility: [
        { ruName: "Spark Profiler", enName: "Spark Profiler", ruDesc: "Продвинутый инспектор производительности и поиска причин лагов.", enDesc: "Advanced profiler for performance analysis and lag detection.", mcVer: "1.21.1", modVer: "1.10.109", downloadUrl: "mods/spark-1.10.109-fabric.jar" },
        { ruName: "Chunky World Gen", enName: "Chunky World Gen", ruDesc: "Предварительная генерация чанков карты для устранения фризов.", enDesc: "Pre-generates chunks to eliminate world generation freezes.", mcVer: "1.21.11", modVer: "1.4.5", downloadUrl: "mods/Chunky-fabric-1.4.5.jar" },
        { ruName: "Bobby Render", enName: "Bobby Render", ruDesc: "Кэширование чанков для обхода ограничений прорисовки сервера.", enDesc: "Chunk caching to bypass server render distance limits.", mcVer: "1.21.11", modVer: "5.2.11", downloadUrl: "mods/bobby-5.2.11-mc1.21.11.jar" }
    ],

    fabric_api: [
        { ruName: "Fabric API 1.16", enName: "Fabric API 1.16", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.16", modVer: "0.42.0", downloadUrl: "mods/fabric-api-0.42.0+1.16.jar" },
        { ruName: "Fabric API 1.17 (v0.36)", enName: "Fabric API 1.17 (v0.36)", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.17", modVer: "0.36.0", downloadUrl: "mods/fabric-api-0.36.0+1.17.jar" },
        { ruName: "Fabric API 1.17 (v0.46)", enName: "Fabric API 1.17 (v0.46)", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.17", modVer: "0.46.1", downloadUrl: "mods/fabric-api-0.46.1+1.17.jar" },
        { ruName: "Fabric API 1.18 (v0.44)", enName: "Fabric API 1.18 (v0.44)", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.18", modVer: "0.44.0", downloadUrl: "mods/fabric-api-0.44.0+1.18.jar" },
        { ruName: "Fabric API 1.18 (v0.46)", enName: "Fabric API 1.18 (v0.46)", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.18", modVer: "0.46.6", downloadUrl: "mods/fabric-api-0.46.6+1.18.jar" },
        { ruName: "Fabric API 1.18.2", enName: "Fabric API 1.18.2", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.18.2", modVer: "0.77.0", downloadUrl: "mods/fabric-api-0.77.0+1.18.2.jar" },
        { ruName: "Fabric API 1.19", enName: "Fabric API 1.19", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.19", modVer: "0.58.0", downloadUrl: "mods/fabric-api-0.58.0+1.19.jar" },
        { ruName: "Fabric API 1.19.1", enName: "Fabric API 1.19.1", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.19.1", modVer: "0.58.5", downloadUrl: "mods/fabric-api-0.58.5+1.19.1.jar" },
        { ruName: "Fabric API 1.19.2", enName: "Fabric API 1.19.2", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.19.2", modVer: "0.77.0", downloadUrl: "mods/fabric-api-0.77.0+1.19.2.jar" },
        { ruName: "Fabric API 1.19.3", enName: "Fabric API 1.19.3", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.19.3", modVer: "0.76.1", downloadUrl: "mods/fabric-api-0.76.1+1.19.3.jar" },
        { ruName: "Fabric API 1.19.4", enName: "Fabric API 1.19.4", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.19.4", modVer: "0.87.2", downloadUrl: "mods/fabric-api-0.87.2+1.19.4.jar" },
        { ruName: "Fabric API 1.20", enName: "Fabric API 1.20", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.20", modVer: "0.83.0", downloadUrl: "mods/fabric-api-0.83.0+1.20.jar" },
        { ruName: "Fabric API 1.20.1", enName: "Fabric API 1.20.1", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.20.1", modVer: "0.92.9", downloadUrl: "mods/fabric-api-0.92.9+1.20.1.jar" },
        { ruName: "Fabric API 1.20.2", enName: "Fabric API 1.20.2", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.20.2", modVer: "0.91.6", downloadUrl: "mods/fabric-api-0.91.6+1.20.2.jar" },
        { ruName: "Fabric API 1.20.3", enName: "Fabric API 1.20.3", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.20.3", modVer: "0.91.1", downloadUrl: "mods/fabric-api-0.91.1+1.20.3.jar" },
        { ruName: "Fabric API 1.20.4", enName: "Fabric API 1.20.4", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.20.4", modVer: "0.97.3", downloadUrl: "mods/fabric-api-0.97.3+1.20.4.jar" },
        { ruName: "Fabric API 1.20.5", enName: "Fabric API 1.20.5", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.20.5", modVer: "0.97.8", downloadUrl: "mods/fabric-api-0.97.8+1.20.5.jar" },
        { ruName: "Fabric API 1.20.6", enName: "Fabric API 1.20.6", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.20.6", modVer: "0.100.8", downloadUrl: "mods/fabric-api-0.100.8+1.20.6.jar" },
        { ruName: "Fabric API 1.21", enName: "Fabric API 1.21", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21", modVer: "0.102.0", downloadUrl: "mods/fabric-api-0.102.0+1.21.jar" },
        { ruName: "Fabric API 1.21.1 (v0.102)", enName: "Fabric API 1.21.1 (v0.102)", ruDesc: "Официальный системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.1", modVer: "0.102.0", downloadUrl: "mods/fabric-api-0.102.0+1.21.1.jar" },
        { ruName: "Fabric API 1.21.1 (v0.116)", enName: "Fabric API 1.21.1 (v0.116)", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.1", modVer: "0.116.12", downloadUrl: "mods/fabric-api-0.116.12+1.21.1.jar" },
        { ruName: "Fabric API 1.21.2", enName: "Fabric API 1.21.2", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.2", modVer: "0.106.1", downloadUrl: "mods/fabric-api-0.106.1+1.21.2.jar" },
        { ruName: "Fabric API 1.21.3", enName: "Fabric API 1.21.3", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.3", modVer: "0.114.1", downloadUrl: "mods/fabric-api-0.114.1+1.21.3.jar" },
        { ruName: "Fabric API 1.21.4", enName: "Fabric API 1.21.4", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.4", modVer: "0.119.4", downloadUrl: "mods/fabric-api-0.119.4+1.21.4.jar" },
        { ruName: "Fabric API 1.21.5", enName: "Fabric API 1.21.5", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.5", modVer: "0.128.2", downloadUrl: "mods/fabric-api-0.128.2+1.21.5.jar" },
        { ruName: "Fabric API 1.21.10", enName: "Fabric API 1.21.10", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.10", modVer: "0.138.4", downloadUrl: "mods/fabric-api-0.138.4+1.21.10.jar" },
        { ruName: "Fabric API 1.21.11 (v0.141.3)", enName: "Fabric API 1.21.11 (v0.141.3)", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.11", modVer: "0.141.3", downloadUrl: "mods/fabric-api-0.141.3-1.21.11.jar" },
        { ruName: "Fabric API 1.21.11 (v0.141.4)", enName: "Fabric API 1.21.11 (v0.141.4)", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "1.21.11", modVer: "0.141.4", downloadUrl: "mods/fabric-api-0.141.4+1.21.11.jar" },
        { ruName: "Fabric API 26.1.1", enName: "Fabric API 26.1.1", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "26.1.1", modVer: "0.149.0", downloadUrl: "mods/fabric-api-0.149.0+26.1.1.jar" },
        { ruName: "Fabric API 26.1.2", enName: "Fabric API 26.1.2", ruDesc: "Системный интерфейс для модов Fabric.", enDesc: "Official system interface for Fabric mods.", mcVer: "26.1.2", modVer: "0.149.0", downloadUrl: "mods/fabric-api-0.149.0+26.1.2.jar" }
    ],

    visuals: [
        { ruName: "Hudder Overlay", enName: "Hudder Overlay", ruDesc: "Настраиваемый вывод параметров и игрового инфо на экран.", enDesc: "Customizable parameters and in-game info overlay.", mcVer: "1.21.11", modVer: "10.0.0", downloadUrl: "mods/Hudder-10.0.0.jar" },
        { ruName: "Inventory HUD+", enName: "Inventory HUD+", ruDesc: "Отображение состояния брони, эффектов и слотов инвентаря.", enDesc: "Displays armor status, effects, and inventory slots.", mcVer: "1.21.11", modVer: "3.4.29", downloadUrl: "mods/inventoryhud.fabric.1.21.211-3.4.29.jar" },
        { ruName: "ImmediatelyFast Pro", enName: "ImmediatelyFast Pro", ruDesc: "Ускорение отрисовки шрифтов, табличек и HUD элементов.", enDesc: "Speeds up text, signs, and HUD rendering.", mcVer: "1.21.1", modVer: "1.6.10", downloadUrl: "mods/ImmediatelyFast-Fabric-1.6.10-1.21.1.jar" },
        { ruName: "ImmediatelyFast Lite", enName: "ImmediatelyFast Lite", ruDesc: "Оптимизация рендеринга текста, табличек и элементов интерфейса.", enDesc: "Optimization of text, signs, and UI element rendering.", mcVer: "1.21.11", modVer: "1.14.2", downloadUrl: "mods/ImmediatelyFast-Fabric-1.14.2+1.21.11.jar" },
        { ruName: "FeverVisual Presets", enName: "FeverVisual Presets", ruDesc: "Эксклюзивные шейдерные настройки и гамма-модификации.", enDesc: "Exclusive shader settings and gamma modifications.", mcVer: "1.21.1", modVer: "3.2", downloadUrl: "mods/fevervisual-3.2.jar" },
        { ruName: "NotEnoughAnimations", enName: "NotEnoughAnimations", ruDesc: "Добавляет кучу красивых анимаций действий персонажа от 3 лица.", enDesc: "Adds beautiful 3rd person character animations.", mcVer: "1.21.11", modVer: "1.12.2", downloadUrl: "mods/notenoughanimations-fabric-1.12.2-mc1.21.11.jar" },
        { ruName: "ChatAnimation", enName: "ChatAnimation", ruDesc: "Делает появление сообщений в игровом чате плавным.", enDesc: "Makes in-game chat message appearance smooth.", mcVer: "1.21.11", modVer: "1.1.3", downloadUrl: "mods/chatanimation-fabric-1.21.11-1.1.3.jar" },
        { ruName: "Runtime Visuals", enName: "Runtime Visuals", ruDesc: "Комплексные визуальные эффекты и тонкие пресеты рендера.", enDesc: "Comprehensive visual effects and fine render presets.", mcVer: "1.21.11", modVer: "1.0", downloadUrl: "mods/runtime-visuals.jar" },
        { ruName: "ModMenu Interface", enName: "ModMenu Interface", ruDesc: "Удобный каталог со списком всех установленных модов в меню.", enDesc: "Convenient list catalog of all installed mods in the menu.", mcVer: "1.21.11", modVer: "17.0.0", downloadUrl: "mods/modmenu-17.0.0.jar" },
        { ruName: "OptiGUI Customizer", enName: "OptiGUI Customizer", ruDesc: "Поддержка кастомных текстур для сундуков и интерфейсов.", enDesc: "Custom texture support for chests and user interfaces.", mcVer: "1.21.11", modVer: "2.3.0", downloadUrl: "mods/optigui-2.3.0-beta.10+1.21.9.jar" }
    ],

    cheats: [
        { ruName: "Advanced X-Ray", enName: "Advanced X-Ray", ruDesc: "Поиск руд сквозь стены с гибким фильтром блоков.", enDesc: "Find ores through walls with a flexible block filter.", mcVer: "1.21.11", modVer: "21.11.0", downloadUrl: "mods/advanced-xray-fabric-21.11.0-1.21.11.jar" },
        { ruName: "XPlus AutoFish", enName: "XPlus AutoFish", ruDesc: "Умная автоматическая рыбалка с обходом проверок серверов.", enDesc: "Smart autofishing with server check bypasses.", mcVer: "1.21.11", modVer: "1.4.2", downloadUrl: "mods/XPlus-AutoFish-1.4.2-fabric-mc1.21.11.jar" },
        { ruName: "AutoEat Helper", enName: "AutoEat Helper", ruDesc: "Автоматическое поедание еды при падении сытости персонажа.", enDesc: "Automatically eats food when character hunger drops.", mcVer: "1.21.11", modVer: "2.0.0", downloadUrl: "mods/AutoEat-v2.0.0-Fabric+mc1.21.11.jar" },
        { ruName: "AutoRespawn Utility", enName: "AutoRespawn Utility", ruDesc: "Моментальное появление на спавне без экрана задержки смерти.", enDesc: "Instant respawn bypassing the death screen delay.", mcVer: "1.21.11", modVer: "0.1", downloadUrl: "mods/AutoRespawn-1.21.11-0.1.jar" },
        { ruName: "Trajectory Tracer", enName: "Trajectory Tracer", ruDesc: "Линии траекторий полета стрел, перлов и снарядов.", enDesc: "Trajectory lines for arrows, pearls, and projectiles.", mcVer: "1.21.11", modVer: "1.2.6", downloadUrl: "mods/trajectorys-1.2.6+1.21.11.jar" }
    ],

    cheat_clients: [
        { 
            ruName: "Rich Premium Build", 
            enName: "Rich Premium Build", 
            ruDesc: "Многофункциональный чит-клиент с продвинутым набором функций для серверов.", 
            enDesc: "Feature-rich cheat client with an advanced toolset for servers.", 
            mcVer: "1.21.11", 
            modVer: "1.0", 
            downloadUrl: "mods/rich-build.jar" 
        }
    ],

    tools: [
        { ruName: "Cloth Config Pro", enName: "Cloth Config Pro", ruDesc: "Интерфейсная библиотека настроек для конфигурации модов.", enDesc: "Configuration interface library for mods.", mcVer: "1.21.11", modVer: "21.11.153", downloadUrl: "mods/cloth-config-21.11.153-fabric.jar" },
        { ruName: "Cloth Config Lite", enName: "Cloth Config Lite", ruDesc: "Библиотека конфигурации интерфейсов клиентских модов.", enDesc: "UI configuration library for client-side mods.", mcVer: "1.21.1", modVer: "15.0.140", downloadUrl: "mods/cloth-config-15.0.140-fabric-1.21.1.jar" },
        { ruName: "YetAnotherConfigLib", enName: "YetAnotherConfigLib", ruDesc: "Современная библиотека параметров, нужная графическим пресетам.", enDesc: "Modern configuration library needed for graphics presets.", mcVer: "1.21.1", modVer: "3.6.1", downloadUrl: "mods/YetAnotherConfigLib-3.6.1+1.21-fabric.jar" },
        { ruName: "CreativeCore Base", enName: "CreativeCore Base", ruDesc: "Вспомогательное техническое ядро для рендеринга элементов GUI.", enDesc: "Technical core library for rendering GUI elements.", mcVer: "1.21.11", modVer: "2.14.11", downloadUrl: "mods/CreativeCore_FABRIC_v2.14.11_mc1.21.11.jar" },
        { ruName: "Indium Engine Addon", enName: "Indium Engine Addon", ruDesc: "Рендеринг для поддержки оверлеев автоматизации динамических блоков.", enDesc: "Rendering addon to support dynamic block automation overlays.", mcVer: "1.21.1", modVer: "1.0.35", downloadUrl: "mods/indium-1.0.35+mc1.21.jar" },
        { ruName: "Logical Zoom Tool", enName: "Logical Zoom Tool", ruDesc: "Удобное настраиваемое приближение камеры без потери кадров.", enDesc: "Convenient adjustable camera zoom without frame drops.", mcVer: "1.21.1", modVer: "0.0.26", downloadUrl: "mods/logical_zoom-0.0.26-1.21.1-fabric.jar" },
        { ruName: "MacroKey Keybinds", enName: "MacroKey Keybinds", ruDesc: "Система текстовых макросов, скриптов и биндов команд.", enDesc: "Text macros, scripts, and command keybind system.", mcVer: "1.21.11", modVer: "1.3.1", downloadUrl: "mods/1.21.11-macrokeybinds-fabric-1.3.1.jar" },
        { ruName: "ItemScroller", enName: "ItemScroller", ruDesc: "Быстрая сортировка и перемещение предметов колесиком мыши.", enDesc: "Fast item sorting and moving using the mouse scroll wheel.", mcVer: "1.21.11", modVer: "0.30.2", downloadUrl: "mods/itemscroller-fabric-1.21.11-0.30.2.jar" },
        { ruName: "ShulkerBox Opener", enName: "ShulkerBox Opener", ruDesc: "Просмотр содержимого шалкеров внутри инвентаря без их установки.", enDesc: "View shulker box contents inside inventory without placing them.", mcVer: "1.21.11", modVer: "1.0", downloadUrl: "mods/shulkeropener-1.0-1.21.11.jar" },
        { ruName: "Fabric Language Kotlin", enName: "Fabric Language Kotlin", ruDesc: "Технический плагин поддержки разработки скриптов на Kotlin.", enDesc: "Technical plugin for Kotlin script development support.", mcVer: "1.21.11", modVer: "1.13.11", downloadUrl: "mods/fabric-language-kotlin-1.13.11+kotlin.2.3.21.jar" },
        { ruName: "Malilib Library", enName: "Malilib Library", ruDesc: "Базовая служебная библиотека для конфигурационных скриптов.", enDesc: "Base utility library for configuration scripts.", mcVer: "1.21.11", modVer: "0.27.8", downloadUrl: "mods/malilib-fabric-1.21.11-0.27.8.jar" },
        { ruName: "FWA Scripts Core", enName: "FWA Scripts Core", ruDesc: "Внутренний исполнитель скриптов автоматизации автоматики.", enDesc: "Internal engine for automation scripts execution.", mcVer: "1.21.11", modVer: "1.2.13", downloadUrl: "mods/fwa+1.2.11-1.2.13.jar" },
        { ruName: "Mytheria Engine", enName: "Mytheria Engine", ruDesc: "Локальный фреймворк для обработки триггеров и макрокоманд.", enDesc: "Local framework for processing triggers and macro commands.", mcVer: "1.21.11", modVer: "2.0.8", downloadUrl: "mods/mytheria-2.0.8.jar" },
        { ruName: "SimpleGUI API", enName: "SimpleGUI API", ruDesc: "Системный плагин отрисовки быстрых диалоговых меню.", enDesc: "System plugin for rendering quick dialog menus.", mcVer: "1.21.11", modVer: "1.0.4", downloadUrl: "mods/SimpleGUI-API-1.0.4+1.21.11.jar" },
        { ruName: "Spotiflyer Link", enName: "Spotiflyer Link", ruDesc: "Интеграция стороннего музыкального плеера в игровой оверлей.", enDesc: "Third-party music player integration into the game overlay.", mcVer: "1.21.11", modVer: "10.0.0", downloadUrl: "mods/spotifier-10.0.0.jar" },
        { ruName: "SmoothSwapping", enName: "SmoothSwapping", ruDesc: "Сглаженная, красивая анимация перемещения вещей по ячейкам.", enDesc: "Smooth, clean item swapping animations between slots.", mcVer: "1.21.11", modVer: "0.9.8", downloadUrl: "mods/smoothswapping-0.9.8-1.21.11-fabric.jar" }
    ]
};

const readyBuildsData = [
    { ruName: "Anarchy Pack", enName: "Anarchy Pack", ruDesc: "Идеальный набор для игры на анархии. Включает лучшие визуалы.", ver: "1.20.4" },
    { ruName: "FPS Max Booster", enName: "FPS Max Booster", ruDesc: "Максимальное сжатие и распределение потоков. До +150% кадров.", ver: "1.21" },
    { ruName: "Visual Elite Pack", enName: "Visual Elite Pack", ruDesc: "Сборка для кинематографичной картинки, индикаторов и трейсеров.", ver: "1.16.5" }
];

function updateLanguageUI() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLang] && translations[currentLang][key]) {
            const spanText = el.querySelector('span');
            if (spanText) {
                spanText.innerText = translations[currentLang][key];
            } else if (el.children.length > 0 && el.querySelector('span')) {
                el.querySelector('span').innerText = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });

    const activeSidebarBtn = document.querySelector('.sidebar-btn.active');
    if (activeSidebarBtn) {
        renderMods(activeSidebarBtn.getAttribute('data-category'));
    }
    renderBuildsPage();
}

function sortModsByVersion(modsList) {
    return modsList.sort((a, b) => {
        return b.mcVer.localeCompare(a.mcVer, undefined, { numeric: true, sensitivity: 'base' });
    });
}

function renderMods(category) {
    const modContainer = document.getElementById('mod-list-container');
    if (!modContainer) return;

    modContainer.innerHTML = '';

    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === category);
    });

    const originalMods = modsData[category] || [];
    const mods = sortModsByVersion([...originalMods]);

    if (mods.length === 0) {
        const emptyItem = document.createElement('div');
        emptyItem.style.cssText = "text-align: center; color: #666d7a; padding: 60px 20px; font-size: 15px;";
        emptyItem.innerText = currentLang === 'RU' ? "В этой категории пока нет доступных файлов." : "No files available in this category yet.";
        modContainer.appendChild(emptyItem);
        return;
    }

    if (mods.length > 1) {
        const topZone = document.createElement('div');
        topZone.className = 'compact-download-all-zone';
        topZone.innerHTML = `
            <button class="multi-download-btn">
                ${currentLang === 'RU' ? 'Скачать всю вкладку паком' : 'Download tab as pack'}
            </button>
        `;

        topZone.querySelector('.multi-download-btn').addEventListener('click', () => {
            mods.forEach((mod, index) => {
                setTimeout(() => {
                    if (!mod.downloadUrl) return;
                    const a = document.createElement('a');
                    a.href = mod.downloadUrl;
                    a.download = '';
                    a.target = '_blank';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                }, index * 500);
            });
        });
        modContainer.appendChild(topZone);
    }

    mods.forEach(mod => {
        const item = document.createElement('div');
        item.className = 'mod-item';
        const name = currentLang === 'RU' ? mod.ruName : mod.enName;
        const desc = currentLang === 'RU' ? mod.ruDesc : mod.enDesc;
        const statusText = translations[currentLang]?.status_active || (currentLang === 'RU' ? "Активен" : "Active");

        item.innerHTML = `
            <div class="mod-info">
                <div style="font-size: 10px; font-weight: 800; color: #0070f3; letter-spacing: 1px; margin-bottom: 4px; text-transform: uppercase;">MC ${mod.mcVer}</div>
                <h4 class="mod-name" style="margin-top: 0;">${name}</h4>
                <p class="mod-description">${desc}</p>
            </div>
            <div class="mod-actions">
                <span class="mod-version" style="margin-right: 10px;">v${mod.modVer}</span>
                <div class="mod-status">${statusText}</div>
                <button class="download-btn">${currentLang === 'RU' ? 'СКАЧАТЬ' : 'DOWNLOAD'}</button>
            </div>
        `;

        item.querySelector('.download-btn').addEventListener('click', () => {
            if (!mod.downloadUrl) return;
            const a = document.createElement('a');
            a.href = mod.downloadUrl;
            a.download = '';
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
        modContainer.appendChild(item);
    });
}

function renderBuildsPage() {
    const buildsContainer = document.getElementById('builds-list-container');
    if (!buildsContainer) return;

    buildsContainer.innerHTML = '';

    readyBuildsData.forEach(build => {
        const card = document.createElement('div');
        card.className = 'build-card';
        const name = currentLang === 'RU' ? build.ruName : build.enName;
        const desc = currentLang === 'RU' ? build.ruDesc : build.enDesc;

        card.innerHTML = `
            <h4>${name}</h4>
            <p>${desc}</p>
            <span class="build-version">Minecraft ${build.ver}</span>
        `;
        buildsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const currentHomeScreen = document.getElementById('home-screen');
    const currentCatalogScreen = document.getElementById('catalog-screen');
    const currentBuildsScreen = document.getElementById('builds-page-screen');
    
    if (currentHomeScreen) currentHomeScreen.classList.remove('hidden');
    if (currentCatalogScreen) currentCatalogScreen.classList.remove('hidden');
    if (currentBuildsScreen) currentBuildsScreen.classList.remove('hidden');

    const urlParams = new URLSearchParams(window.location.search);
    const targetCategory = urlParams.get('cat') || 'optimization';

    const langCurrentDisplay = document.getElementById('lang-current')?.querySelector('span');
    if (langCurrentDisplay) {
        langCurrentDisplay.innerText = currentLang;
        document.querySelectorAll('.lang-item').forEach(item => {
            item.classList.toggle('active', item.getAttribute('data-lang') === currentLang);
        });
    }

    updateLanguageUI();
    renderBuildsPage();
    renderMods(targetCategory);

    const toProductsBtn = document.getElementById('to-products-btn');
    const toBuildsBtn = document.getElementById('to-builds-btn');

    if (toProductsBtn) {
        toProductsBtn.addEventListener('click', () => {
            document.getElementById('products-zone')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
    if (toBuildsBtn) {
        toBuildsBtn.addEventListener('click', () => {
            document.getElementById('builds-zone')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            renderMods(btn.getAttribute('data-category'));
        });
    });

    const langDropdown = document.getElementById('lang-dropdown');
    const langCurrentBtn = document.getElementById('lang-current');

    if (langCurrentBtn && langDropdown) {
        langCurrentBtn.addEventListener('click', e => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });

        document.querySelectorAll('.lang-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.lang-item').forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                currentLang = item.getAttribute('data-lang');
                localStorage.setItem('siteLang', currentLang);
                if (langCurrentDisplay) langCurrentDisplay.innerText = currentLang;

                langDropdown.classList.remove('open');
                updateLanguageUI();
            });
        });

        document.addEventListener('click', () => {
            langDropdown.classList.remove('open');
        });
    }

    setTimeout(() => {
        document.body.classList.add('site-init');
    }, 50);
});