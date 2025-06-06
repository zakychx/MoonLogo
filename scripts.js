// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // ======= Theme Switcher =======
  const themeSwitcher = document.getElementById("theme-switcher")

  // Сохраняем тему в localStorage
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme)
    themeSwitcher.innerHTML = savedTheme === "dark" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>'
  }

  themeSwitcher.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme")
    const next = current === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
    themeSwitcher.innerHTML = next === "dark" ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>'
  })

  // ======= Scroll to Section =======
  window.scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  // ======= Language Switcher =======
  const langOptions = document.querySelectorAll(".lang-option")
  const currentLang = document.getElementById("current-lang")
  const translations = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_portfolio: "Portfolio",
      nav_pricing: "Pricing",
      nav_contact: "Contact",
      hero_title: "Crafting Digital Excellence",
      hero_subtitle: "Premium web development services that transform your ideas into stunning digital experiences",
      hero_cta: "Start Your Project",
      hero_portfolio: "View Portfolio",
      scroll_down: "Scroll Down",
      about_title: "About zakychx",
      about_subtitle: "Your trusted partner in digital innovation",
      about_story_title: "Our Story",
      about_story_text:
        "Founded in 2019, zakychx emerged from a passion for creating exceptional digital experiences. Our journey began with a simple mission: to bridge the gap between innovative technology and stunning design, delivering websites that not only look amazing but perform flawlessly.",
      about_team_title: "Our Team",
      about_team_text:
        "Led by a team of experienced developers and designers, we've successfully delivered over 200+ projects across Europe. Our diverse expertise spans from sleek corporate websites to complex e-commerce platforms, always focusing on user experience and cutting-edge technology.",
      stat_projects: "Projects Completed",
      stat_clients: "Happy Clients",
      stat_experience: "Years Experience",
      stat_countries: "Countries Served",
      footer_services_title: "Services",
      footer_company_title: "Company",
      footer_contact_title: "Contact",
      footer_about: "About Us",
      footer_portfolio: "Portfolio",
      footer_pricing: "Pricing",
      footer_contact: "Contact",
      footer_web_dev: "Web Development",
      footer_ecommerce: "E-commerce",
      footer_mobile: "Mobile Apps",
      footer_corporate: "Corporate Sites",
      footer_description: "Crafting exceptional digital experiences across Europe",
      footer_copyright: "© 2024 zakychx. All rights reserved.",
      // Services section
      services_title: "Our Services",
      services_subtitle: "Comprehensive web solutions tailored to your needs",
      service_web_title: "Custom Web Development",
      service_web_desc:
        "Tailored websites built from scratch using modern technologies. Responsive, fast, and optimized for all devices.",
      feature_responsive: "Responsive Design",
      feature_seo: "SEO Optimized",
      feature_performance: "High Performance",
      service_ecommerce_title: "E-commerce Solutions",
      service_ecommerce_desc:
        "Complete online stores with secure payment processing, inventory management, and seamless user experience.",
      feature_payments: "Secure Payments",
      feature_inventory: "Inventory Management",
      feature_analytics: "Sales Analytics",
      service_mobile_title: "Mobile Applications",
      service_mobile_desc: "Progressive web apps and mobile-first solutions that provide native app experience.",
      feature_pwa: "Progressive Web Apps",
      feature_offline: "Offline Functionality",
      feature_push: "Push Notifications",
      service_corporate_title: "Corporate Websites",
      service_corporate_desc: "Professional business websites that establish credibility and drive conversions.",
      feature_cms: "Content Management",
      feature_multilingual: "Multi-language Support",
      feature_integration: "Third-party Integration",
      // Portfolio section
      portfolio_title: "Featured Projects",
      portfolio_subtitle: "Showcasing our latest work and achievements",
      portfolio_tech_desc: "Modern corporate website with advanced animations",
      portfolio_fashion_desc: "E-commerce platform with 500+ products",
      portfolio_restaurant_desc: "Multi-location restaurant website with online ordering",
      portfolio_realestate_desc: "Property listing platform with advanced search",
      // Pricing section
      pricing_title: "Transparent Pricing",
      pricing_subtitle: "Choose the perfect plan for your project",
      plan_basic_title: "Basic Website",
      plan_pro_title: "Professional",
      plan_enterprise_title: "Enterprise",
      pricing_from: "from",
      basic_pages: "Up to 5 pages",
      basic_responsive: "Responsive design",
      basic_seo: "Basic SEO setup",
      basic_forms: "Contact forms",
      basic_support: "3 months support",
      get_started: "Get Started",
      most_popular: "Most Popular",
      pro_pages: "Up to 15 pages",
      pro_cms: "CMS integration",
      pro_ecommerce: "E-commerce ready",
      pro_seo: "Advanced SEO",
      pro_analytics: "Analytics setup",
      pro_support: "6 months support",
      enterprise_unlimited: "Unlimited pages",
      enterprise_custom: "Custom functionality",
      enterprise_api: "API integrations",
      enterprise_security: "Advanced security",
      enterprise_performance: "Performance optimization",
      enterprise_support: "12 months support",
      // Contact section
      contact_title: "Let's Work Together",
      contact_subtitle: "Ready to start your project? Get in touch with us today",
      contact_email_title: "Email",
      contact_location_title: "Location",
      contact_location_text: "Europe-wide services",
      contact_hours_title: "Response Time",
      contact_hours_text: "Within 24 hours",
      form_name: "Your Name",
      form_email: "Email Address",
      form_phone: "Phone Number",
      form_project_type: "Project Type",
      form_select_placeholder: "Select project type",
      form_option_website: "Custom Website",
      form_option_ecommerce: "E-commerce",
      form_option_mobile: "Mobile App",
      form_option_corporate: "Corporate Site",
      form_budget: "Budget Range",
      form_budget_placeholder: "Select budget range",
      form_message: "Project Details",
      form_submit: "Send Message",
    },
    ru: {
      nav_home: "Главная",
      nav_about: "О нас",
      nav_services: "Услуги",
      nav_portfolio: "Портфолио",
      nav_pricing: "Цены",
      nav_contact: "Контакты",
      hero_title: "Создаём цифровое совершенство",
      hero_subtitle: "Премиум-разработка сайтов, воплощающая ваши идеи в цифровую реальность",
      hero_cta: "Начать проект",
      hero_portfolio: "Смотреть работы",
      scroll_down: "Листай вниз",
      about_title: "О zakychx",
      about_subtitle: "Ваш надежный партнёр в цифровых решениях",
      about_story_title: "Наша история",
      about_story_text:
        "Основанная в 2019 году, zakychx выросла из страсти к созданию исключительных цифровых решений. Наш путь начался с простой миссии: соединить инновационные технологии с потрясающим дизайном, создавая сайты, которые не только выглядят потрясающе, но и работают безупречно.",
      about_team_title: "Наша команда",
      about_team_text:
        "Под руководством команды опытных разработчиков и дизайнеров мы успешно реализовали более 200+ проектов по всей Европе. Наш разнообразный опыт охватывает от элегантных корпоративных сайтов до сложных платформ электронной коммерции, всегда фокусируясь на пользовательском опыте и передовых технологиях.",
      stat_projects: "Завершённых проектов",
      stat_clients: "Счастливых клиентов",
      stat_experience: "Лет опыта",
      stat_countries: "Стран охвачено",
      footer_services_title: "Услуги",
      footer_company_title: "Компания",
      footer_contact_title: "Контакты",
      footer_about: "О нас",
      footer_portfolio: "Портфолио",
      footer_pricing: "Цены",
      footer_contact: "Связь",
      footer_web_dev: "Разработка сайтов",
      footer_ecommerce: "Интернет-магазины",
      footer_mobile: "Мобильные приложения",
      footer_corporate: "Корпоративные сайты",
      footer_description: "Создание лучших сайтов по всей Европе",
      footer_copyright: "© 2024 zakychx. Все права защищены.",
      // Services section
      services_title: "Наши услуги",
      services_subtitle: "Комплексные веб-решения под ваши задачи",
      service_web_title: "Разработка сайтов",
      service_web_desc:
        "Индивидуальные сайты с нуля на современных технологиях. Адаптивно, быстро, удобно на всех устройствах.",
      feature_responsive: "Адаптивный дизайн",
      feature_seo: "SEO оптимизация",
      feature_performance: "Высокая производительность",
      service_ecommerce_title: "Интернет-магазины",
      service_ecommerce_desc: "Полноценные магазины с безопасной оплатой, управлением товарами и удобным интерфейсом.",
      feature_payments: "Безопасные платежи",
      feature_inventory: "Управление товарами",
      feature_analytics: "Аналитика продаж",
      service_mobile_title: "Мобильные приложения",
      service_mobile_desc: "PWA и мобильные решения с нативным опытом использования.",
      feature_pwa: "Прогрессивные веб-приложения",
      feature_offline: "Работа офлайн",
      feature_push: "Push-уведомления",
      service_corporate_title: "Корпоративные сайты",
      service_corporate_desc: "Профессиональные сайты для бизнеса, повышающие доверие и конверсию.",
      feature_cms: "Управление контентом",
      feature_multilingual: "Мультиязычность",
      feature_integration: "Интеграция сервисов",
      // Portfolio section
      portfolio_title: "Наши проекты",
      portfolio_subtitle: "Показываем последние работы и достижения",
      portfolio_tech_desc: "Современный корпоративный сайт с анимациями",
      portfolio_fashion_desc: "E-commerce платформа с 500+ товарами",
      portfolio_restaurant_desc: "Сайт сети ресторанов с онлайн-заказом",
      portfolio_realestate_desc: "Портал недвижимости с расширенным поиском",
      // Pricing section
      pricing_title: "Прозрачные цены",
      pricing_subtitle: "Выберите подходящий тариф для вашего проекта",
      plan_basic_title: "Базовый сайт",
      plan_pro_title: "Профессиональный",
      plan_enterprise_title: "Корпоративный",
      pricing_from: "от",
      basic_pages: "До 5 страниц",
      basic_responsive: "Адаптивный дизайн",
      basic_seo: "Базовая SEO-настройка",
      basic_forms: "Формы обратной связи",
      basic_support: "3 месяца поддержки",
      get_started: "Начать",
      most_popular: "Популярно",
      pro_pages: "До 15 страниц",
      pro_cms: "Интеграция CMS",
      pro_ecommerce: "Готов к e-commerce",
      pro_seo: "Продвинутая SEO",
      pro_analytics: "Настройка аналитики",
      pro_support: "6 месяцев поддержки",
      enterprise_unlimited: "Неограниченно страниц",
      enterprise_custom: "Индивидуальный функционал",
      enterprise_api: "Интеграция API",
      enterprise_security: "Расширенная безопасность",
      enterprise_performance: "Оптимизация производительности",
      enterprise_support: "12 месяцев поддержки",
      // Contact section
      contact_title: "Давайте работать вместе",
      contact_subtitle: "Готовы начать проект? Свяжитесь с нами",
      contact_email_title: "Почта",
      contact_location_title: "Локация",
      contact_location_text: "Работаем по всей Европе",
      contact_hours_title: "Время ответа",
      contact_hours_text: "В течение 24 часов",
      form_name: "Ваше имя",
      form_email: "Электронная почта",
      form_phone: "Телефон",
      form_project_type: "Тип проекта",
      form_select_placeholder: "Выберите тип проекта",
      form_option_website: "Индивидуальный сайт",
      form_option_ecommerce: "Интернет-магазин",
      form_option_mobile: "Мобильное приложение",
      form_option_corporate: "Корпоративный сайт",
      form_budget: "Бюджет",
      form_budget_placeholder: "Выберите диапазон бюджета",
      form_message: "Описание проекта",
      form_submit: "Отправить",
    },
    de: {
      nav_home: "Startseite",
      nav_about: "Über uns",
      nav_services: "Leistungen",
      nav_portfolio: "Portfolio",
      nav_pricing: "Preise",
      nav_contact: "Kontakt",
      hero_title: "Digitale Exzellenz erschaffen",
      hero_subtitle: "Premium-Webentwicklung, die Ihre Ideen in digitale Realität verwandelt",
      hero_cta: "Projekt starten",
      hero_portfolio: "Portfolio ansehen",
      scroll_down: "Runterscrollen",
      about_title: "Über zakychx",
      about_subtitle: "Ihr zuverlässiger Partner in der digitalen Welt",
      about_story_title: "Unsere Geschichte",
      about_story_text:
        "Gegründet 2019, entstand zakychx aus der Leidenschaft für außergewöhnliche digitale Erlebnisse. Unsere Reise begann mit einer einfachen Mission: die Lücke zwischen innovativer Technologie und atemberaubendem Design zu schließen und Websites zu liefern, die nicht nur fantastisch aussehen, sondern auch einwandfrei funktionieren.",
      about_team_title: "Unser Team",
      about_team_text:
        "Unter der Leitung eines Teams erfahrener Entwickler und Designer haben wir erfolgreich über 200+ Projekte in ganz Europa umgesetzt. Unsere vielfältige Expertise reicht von eleganten Unternehmenswebsites bis hin zu komplexen E-Commerce-Plattformen, wobei wir uns immer auf Benutzererfahrung und modernste Technologie konzentrieren.",
      stat_projects: "Abgeschlossene Projekte",
      stat_clients: "Zufriedene Kunden",
      stat_experience: "Jahre Erfahrung",
      stat_countries: "Länder bedient",
      footer_services_title: "Leistungen",
      footer_company_title: "Unternehmen",
      footer_contact_title: "Kontakt",
      footer_about: "Über uns",
      footer_portfolio: "Portfolio",
      footer_pricing: "Preise",
      footer_contact: "Kontakt",
      footer_web_dev: "Webentwicklung",
      footer_ecommerce: "E-Commerce",
      footer_mobile: "Mobile Apps",
      footer_corporate: "Firmenwebseiten",
      footer_description: "Digitale Erlebnisse in ganz Europa erschaffen",
      footer_copyright: "© 2024 zakychx. Alle Rechte vorbehalten.",
      // Services section
      services_title: "Unsere Leistungen",
      services_subtitle: "Umfassende Weblösungen für Ihre Anforderungen",
      service_web_title: "Individuelle Webentwicklung",
      service_web_desc:
        "Maßgeschneiderte Websites mit modernen Technologien. Responsiv, schnell und für alle Geräte optimiert.",
      feature_responsive: "Responsives Design",
      feature_seo: "SEO optimiert",
      feature_performance: "Hohe Performance",
      service_ecommerce_title: "E-Commerce Lösungen",
      service_ecommerce_desc:
        "Komplette Onlineshops mit sicheren Zahlungen, Lagerverwaltung und optimalem Nutzererlebnis.",
      feature_payments: "Sichere Zahlungen",
      feature_inventory: "Lagerverwaltung",
      feature_analytics: "Verkaufsanalysen",
      service_mobile_title: "Mobile Anwendungen",
      service_mobile_desc: "Progressive Web-Apps und mobile Lösungen mit nativer Nutzererfahrung.",
      feature_pwa: "Progressive Web Apps",
      feature_offline: "Offline-Funktionalität",
      feature_push: "Push-Benachrichtigungen",
      service_corporate_title: "Firmenwebseiten",
      service_corporate_desc: "Professionelle Unternehmensseiten für Vertrauen und Conversion.",
      feature_cms: "Content Management",
      feature_multilingual: "Mehrsprachigkeit",
      feature_integration: "Drittanbieter-Integration",
      // Portfolio section
      portfolio_title: "Ausgewählte Projekte",
      portfolio_subtitle: "Unsere neuesten Arbeiten und Erfolge",
      portfolio_tech_desc: "Moderne Firmenwebsite mit Animationen",
      portfolio_fashion_desc: "E-Commerce Plattform mit 500+ Produkten",
      portfolio_restaurant_desc: "Restaurantkette mit Online-Bestellung",
      portfolio_realestate_desc: "Immobilienportal mit erweiterter Suche",
      // Pricing section
      pricing_title: "Transparente Preise",
      pricing_subtitle: "Wählen Sie das passende Paket für Ihr Projekt",
      plan_basic_title: "Basis Website",
      plan_pro_title: "Professionell",
      plan_enterprise_title: "Enterprise",
      pricing_from: "ab",
      basic_pages: "Bis zu 5 Seiten",
      basic_responsive: "Responsives Design",
      basic_seo: "Basis SEO",
      basic_forms: "Kontaktformulare",
      basic_support: "3 Monate Support",
      get_started: "Loslegen",
      most_popular: "Beliebt",
      pro_pages: "Bis zu 15 Seiten",
      pro_cms: "CMS Integration",
      pro_ecommerce: "E-Commerce bereit",
      pro_seo: "Erweiterte SEO",
      pro_analytics: "Analytics Einrichtung",
      pro_support: "6 Monate Support",
      enterprise_unlimited: "Unbegrenzte Seiten",
      enterprise_custom: "Individuelle Funktionen",
      enterprise_api: "API-Integrationen",
      enterprise_security: "Erweiterte Sicherheit",
      enterprise_performance: "Performance Optimierung",
      enterprise_support: "12 Monate Support",
      // Contact section
      contact_title: "Lassen Sie uns zusammenarbeiten",
      contact_subtitle: "Bereit für Ihr Projekt? Kontaktieren Sie uns",
      contact_email_title: "E-Mail",
      contact_location_title: "Standort",
      contact_location_text: "Europaweit tätig",
      contact_hours_title: "Antwortzeit",
      contact_hours_text: "Innerhalb von 24 Stunden",
      form_name: "Ihr Name",
      form_email: "E-Mail-Adresse",
      form_phone: "Telefonnummer",
      form_project_type: "Projekttyp",
      form_select_placeholder: "Projekttyp wählen",
      form_option_website: "Individuelle Website",
      form_option_ecommerce: "E-Commerce",
      form_option_mobile: "Mobile App",
      form_option_corporate: "Firmenwebsite",
      form_budget: "Budget",
      form_budget_placeholder: "Budget wählen",
      form_message: "Projektbeschreibung",
      form_submit: "Nachricht senden",
    },
  }

  langOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const selected = option.dataset.lang
      currentLang.innerText = selected.toUpperCase()
      updateTranslations(selected)
      // Save language to localStorage
      localStorage.setItem("lang", selected)
    })
  })

  // On page load, restore language from localStorage
  const savedLang = localStorage.getItem("lang") || "en"
  currentLang.innerText = savedLang.toUpperCase()
  updateTranslations(savedLang)

  function updateTranslations(lang) {
    const allElements = document.querySelectorAll("[data-translate]")
    allElements.forEach((el) => {
      const key = el.getAttribute("data-translate")
      if (translations[lang] && translations[lang][key]) {
        // Special handling for <option>
        if (el.tagName === "OPTION") {
          el.textContent = translations[lang][key]
        }
        // Special handling for <label>
        else if (el.tagName === "LABEL") {
          el.textContent = translations[lang][key]
        }
        // Special handling for <button> with .btn-text
        else if (el.classList.contains("submit-btn")) {
          const btnText = el.querySelector(".btn-text")
          if (btnText) btnText.textContent = translations[lang][key]
        }
        // For all others
        else {
          el.innerText = translations[lang][key]
        }
      }
    })

    // Обновляем цены
    updatePricing(lang)
  }

  // ======= Stats Counter =======
  const statNumbers = document.querySelectorAll(".stat-number")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const count = Number.parseInt(el.dataset.count)
          let current = 0
          const step = Math.ceil(count / 40)
          const interval = setInterval(() => {
            current += step
            if (current >= count) {
              el.innerText = count
              clearInterval(interval)
            } else {
              el.innerText = current
            }
          }, 30)
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.6 },
  )

  statNumbers.forEach((el) => observer.observe(el))

  // ======= Hamburger Menu =======
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open")
  })

  // ======= Form Labels Fix =======
  // Удалить этот блок, он больше не нужен
  // const selectElements = document.querySelectorAll("select")
  // selectElements.forEach((select) => {
  //   select.addEventListener("change", function () {
  //     const label = this.nextElementSibling
  //     if (label && label.tagName === "LABEL") {
  //       if (this.value !== "") {
  //         label.style.top = "-10px"
  //         label.style.left = "10px"
  //         label.style.fontSize = "0.8rem"
  //         label.style.color = "var(--primary-color)"
  //         label.style.background = "var(--bg-primary)"
  //         label.style.padding = "0 5px"
  //       } else {
  //         label.style.top = "15px"
  //         label.style.left = "15px"
  //         label.style.fontSize = "1rem"
  //         label.style.color = "var(--text-secondary)"
  //         label.style.background = "transparent"
  //         label.style.padding = "0"
  //       }
  //     }
  //   })
  // })
})

function updatePricing(lang) {
  const currencies = {
    en: { symbol: "$", basic: "1,200", pro: "2,800", enterprise: "5,500" },
    ru: { symbol: "₽", basic: "120,000", pro: "280,000", enterprise: "550,000" },
    de: { symbol: "€", basic: "1,200", pro: "2,800", enterprise: "5,500" },
  }

  const curr = currencies[lang] || currencies.en

  document.querySelectorAll(".pricing-card").forEach((card, index) => {
    const amount = card.querySelector(".amount")
    const currency = card.querySelector(".currency")
    if (amount && currency) {
      currency.textContent = curr.symbol
      if (index === 0) amount.textContent = curr.basic
      else if (index === 1) amount.textContent = curr.pro
      else if (index === 2) amount.textContent = curr.enterprise
    }
  })
}
