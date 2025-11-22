
import { Language } from '../types';

export const TRANSLATIONS: Record<Language, {
  subtitle: string;
  dashboard: string;
  official_site: string;
  map: string;
  armorsmithing: string;
  tailoring: string;
  artisan: string;
  skill_lvl: string;
  material_category: string;
  no_recipe_level: string;
  set_count: string;
  craft_count: string;
  full_set_content: string;
  total_set: string;
  inventory_needs: string;
  total_raw_materials: string;
  recipe_selected: string;
  recipe_not_selected: string;
  select_category_prompt: string;
  quantity: string;
  component: string;
  recipe: string;
  // Landing Page & New Screens
  crafting_tools: string;
  crafting_desc: string;
  quality_calc: string;
  coming_soon: string;
  back_to_menu: string;
  select_profession: string;
  locked_professions_desc: string;
  // New
  kilning: string;
  forging: string;
  weaponsmithing: string;
  search_placeholder: string;
  // Damage Meter Tabs
  dm_overview: string;
  dm_charts: string;
  dm_damage_log: string;
  dm_combat_log: string;
  dm_ranking: string;
  dm_no_data: string;
  // Log Upload
  load_log_file: string;
  log_path_hint: string;
  // Damage Meter Overview Stats
  total_damage_dealt: string;
  total_damage_taken: string;
  total_healing_done: string;
  kills: string;
  deaths: string;
  enslaves: string;
  combat_duration: string;
  combat_efficiency: string;
  avg_dmg_hit: string;
  avg_taken_hit: string;
  efficiency_ratio: string;
  damage_type_used: string;
  // Settings & Supabase
  db_connected: string;
  db_disconnected: string;
  global_ranking: string;
  local_ranking: string;
  submit_score: string;
  score_submitted: string;
  submit_fail: string;
  submit_best_score: string;
  ranking_dealt: string;
  ranking_taken: string;
  config_help: string;
}> = {
  en: {
    subtitle: 'Crafting Tools',
    dashboard: 'Dashboard',
    official_site: 'Official Site',
    map: 'Map',
    armorsmithing: 'Armorsmithing',
    tailoring: 'Tailoring',
    artisan: 'Artisan',
    skill_lvl: 'Skill Lvl',
    material_category: 'Materials / Lvl 0',
    no_recipe_level: 'No recipes found at this level',
    set_count: 'Set Count',
    craft_count: 'Craft Amount',
    full_set_content: 'Full Set Contents',
    total_set: 'Total Sets',
    inventory_needs: 'Inventory Needs',
    total_raw_materials: 'Total raw materials needed',
    recipe_selected: 'Recipe',
    recipe_not_selected: 'No Recipe Selected',
    select_category_prompt: 'Select a category and level from the menu above to begin.',
    quantity: 'Quantity',
    component: 'Component',
    recipe: 'Recipe',
    crafting_tools: 'Production Tools',
    crafting_desc: 'Calculate recipes & materials',
    quality_calc: 'Damage Meter',
    coming_soon: 'Coming Soon',
    back_to_menu: 'Back to Menu',
    select_profession: 'Select Profession',
    locked_professions_desc: '* Currently only Armorsmithing, Tailoring and Artisan are available.',
    kilning: 'Kilning',
    forging: 'Forging',
    weaponsmithing: 'Weaponsmithing',
    search_placeholder: 'Search recipes...',
    dm_overview: 'Overview',
    dm_charts: 'Charts',
    dm_damage_log: 'Damage Log',
    dm_combat_log: 'Combat Log',
    dm_ranking: 'Ranking',
    dm_no_data: 'Waiting for combat data...',
    load_log_file: 'Load Log File',
    log_path_hint: 'Default log file location:',
    total_damage_dealt: 'Total Damage Dealt',
    total_damage_taken: 'Total Damage Taken',
    total_healing_done: 'Total Healing Done',
    kills: 'Kills',
    deaths: 'Deaths',
    enslaves: 'Enslaves',
    combat_duration: 'Combat Duration',
    combat_efficiency: 'Combat Efficiency',
    avg_dmg_hit: 'Avg. Damage/Hit',
    avg_taken_hit: 'Avg. Taken/Hit',
    efficiency_ratio: 'Efficiency',
    damage_type_used: 'Damage Type Used',
    db_connected: 'Connected',
    db_disconnected: 'Database Not Configured',
    global_ranking: 'Global Ranking',
    local_ranking: 'Local Analysis',
    submit_score: 'Submit High Score',
    score_submitted: 'Score Submitted!',
    submit_fail: 'Submission Failed',
    submit_best_score: 'Submits your current total damage as a Personal Best to the server.',
    ranking_dealt: 'Damage Dealt',
    ranking_taken: 'Damage Taken',
    config_help: 'The system administrator has not configured the public API key in the source code yet.'
  },
  es: {
    subtitle: 'Herramientas de Artesanía',
    dashboard: 'Panel',
    official_site: 'Sitio Oficial',
    map: 'Mapa',
    armorsmithing: 'Armería',
    tailoring: 'Sastrería',
    artisan: 'Artesano',
    skill_lvl: 'Nivel Habilidad',
    material_category: 'Materiales / Nvl 0',
    no_recipe_level: 'No se encontraron recetas en este nivel',
    set_count: 'Cantidad de Sets',
    craft_count: 'Cantidad a Crear',
    full_set_content: 'Contenido del Set Completo',
    total_set: 'Sets Totales',
    inventory_needs: 'Necesidades de Inventario',
    total_raw_materials: 'Total de materias primas necesarias',
    recipe_selected: 'Receta',
    recipe_not_selected: 'Ninguna Receta Seleccionada',
    select_category_prompt: 'Seleccione una categoría y nivel del menú de arriba para comenzar.',
    quantity: 'Cantidad',
    component: 'Componente',
    recipe: 'Receta',
    crafting_tools: 'Herramientas de Producción',
    crafting_desc: 'Calcular recetas y materiales',
    quality_calc: 'Medidor de Daño',
    coming_soon: 'Próximamente',
    back_to_menu: 'Volver al Menú',
    select_profession: 'Seleccionar Profesión',
    locked_professions_desc: '* Actualmente solo Armería, Sastrería y Artesano están disponibles.',
    kilning: 'Horneado',
    forging: 'Forja',
    weaponsmithing: 'Herrería de Armas',
    search_placeholder: 'Buscar recetas...',
    dm_overview: 'Resumen',
    dm_charts: 'Gráficos',
    dm_damage_log: 'Registro de Daño',
    dm_combat_log: 'Registro de Combate',
    dm_ranking: 'Clasificación',
    dm_no_data: 'Esperando datos de combate...',
    load_log_file: 'Cargar Archivo Log',
    log_path_hint: 'Ubicación predeterminada del log:',
    total_damage_dealt: 'Daño Total Causado',
    total_damage_taken: 'Daño Total Recibido',
    total_healing_done: 'Curación Total Realizada',
    kills: 'Asesinatos',
    deaths: 'Muertes',
    enslaves: 'Esclavizados',
    combat_duration: 'Duración del Combate',
    combat_efficiency: 'Eficiencia de Combate',
    avg_dmg_hit: 'Prom. Daño/Golpe',
    avg_taken_hit: 'Prom. Recibido/Golpe',
    efficiency_ratio: 'Eficiencia',
    damage_type_used: 'Tipo de Daño Usado',
    db_connected: 'Conectado',
    db_disconnected: 'Base de datos no configurada',
    global_ranking: 'Ranking Global',
    local_ranking: 'Análisis Local',
    submit_score: 'Enviar Puntuación',
    score_submitted: '¡Puntuación Enviada!',
    submit_fail: 'Fallo al Enviar',
    submit_best_score: 'Envía tu daño total actual como Récord Personal al servidor.',
    ranking_dealt: 'Daño Infligido',
    ranking_taken: 'Daño Recibido',
    config_help: 'El administrador del sistema aún no ha configurado la clave API pública en el código fuente.'
  },
  de: {
    subtitle: 'Handwerkswerkzeuge',
    dashboard: 'Dashboard',
    official_site: 'Offizielle Seite',
    map: 'Karte',
    armorsmithing: 'Rüstungsschmied',
    tailoring: 'Schneiderei',
    artisan: 'Kunsthandwerk',
    skill_lvl: 'Fähigkeitsstufe',
    material_category: 'Materialien / Lvl 0',
    no_recipe_level: 'Keine Rezepte auf dieser Stufe gefunden',
    set_count: 'Set-Anzahl',
    craft_count: 'Herstellungsmenge',
    full_set_content: 'Vollständiger Set-Inhalt',
    total_set: 'Gesamt-Sets',
    inventory_needs: 'Inventarbedarf',
    total_raw_materials: 'Benötigte Rohstoffe insgesamt',
    recipe_selected: 'Rezept',
    recipe_not_selected: 'Kein Rezept ausgewählt',
    select_category_prompt: 'Wählen Sie eine Kategorie und Stufe aus dem Menü oben, um zu beginnen.',
    quantity: 'Menge',
    component: 'Komponente',
    recipe: 'Rezept',
    crafting_tools: 'Produktionswerkzeuge',
    crafting_desc: 'Rezepte und Materialien berechnen',
    quality_calc: 'Schadensmesser',
    coming_soon: 'Demnächst',
    back_to_menu: 'Zurück zum Menü',
    select_profession: 'Beruf Auswählen',
    locked_professions_desc: '* Derzeit sind nur Rüstungsschmied, Schneiderei und Kunsthandwerk verfügbar.',
    kilning: 'Brennen',
    forging: 'Schmieden',
    weaponsmithing: 'Waffenschmied',
    search_placeholder: 'Rezepte suchen...',
    dm_overview: 'Übersicht',
    dm_charts: 'Diagramme',
    dm_damage_log: 'Schadensprotokoll',
    dm_combat_log: 'Kampfprotokoll',
    dm_ranking: 'Rangliste',
    dm_no_data: 'Warte auf Kampfdaten...',
    load_log_file: 'Log-Datei Laden',
    log_path_hint: 'Standardpfad der Log-Datei:',
    total_damage_dealt: 'Gesamtschaden Verursacht',
    total_damage_taken: 'Gesamtschaden Erlitten',
    total_healing_done: 'Gesamtheilung Bewirkt',
    kills: 'Kills',
    deaths: 'Tode',
    enslaves: 'Versklavungen',
    combat_duration: 'Kampfdauer',
    combat_efficiency: 'Kampfeffizienz',
    avg_dmg_hit: 'Ø Schaden/Treffer',
    avg_taken_hit: 'Ø Erlitten/Treffer',
    efficiency_ratio: 'Effizienz',
    damage_type_used: 'Verwendeter Schadenstyp',
    db_connected: 'Verbunden',
    db_disconnected: 'Datenbank nicht konfiguriert',
    global_ranking: 'Globales Ranking',
    local_ranking: 'Lokale Analyse',
    submit_score: 'Punktzahl Senden',
    score_submitted: 'Gesendet!',
    submit_fail: 'Senden Fehlgeschlagen',
    submit_best_score: 'Sendet deinen aktuellen Gesamtschaden als persönlichen Rekord an den Server.',
    ranking_dealt: 'Schaden Verursacht',
    ranking_taken: 'Schaden Erlitten',
    config_help: 'Der Systemadministrator hat den öffentlichen API-Schlüssel noch nicht im Quellcode konfiguriert.'
  },
  ru: {
    subtitle: 'Инструменты крафта',
    dashboard: 'Панель',
    official_site: 'Офиц. сайт',
    map: 'Карта',
    armorsmithing: 'Бронник',
    tailoring: 'Портной',
    artisan: 'Ремесленник',
    skill_lvl: 'Уровень навыка',
    material_category: 'Материалы / Ур. 0',
    no_recipe_level: 'Рецепты на этом уровне не найдены',
    set_count: 'Количество комплектов',
    craft_count: 'Количество предметов',
    full_set_content: 'Содержимое полного комплекта',
    total_set: 'Всего комплектов',
    inventory_needs: 'Необходимые материалы',
    total_raw_materials: 'Всего требуется сырья',
    recipe_selected: 'Рецепт',
    recipe_not_selected: 'Рецепт не выбран',
    select_category_prompt: 'Выберите категорию и уровень в меню выше, чтобы начать.',
    quantity: 'Количество',
    component: 'Компонент',
    recipe: 'Рецепт',
    crafting_tools: 'Инструменты производства',
    crafting_desc: 'Расчет рецептов и материалов',
    quality_calc: 'Измеритель урона',
    coming_soon: 'Скоро',
    back_to_menu: 'Вернуться в меню',
    select_profession: 'Выберите профессию',
    locked_professions_desc: '* В настоящее время доступны только Бронник, Портной и Ремесленник.',
    kilning: 'Обжиг',
    forging: 'Ковка',
    weaponsmithing: 'Оружейник',
    search_placeholder: 'Поиск рецептов...',
    dm_overview: 'Обзор',
    dm_charts: 'Графики',
    dm_damage_log: 'Журнал урона',
    dm_combat_log: 'Журнал боя',
    dm_ranking: 'Рейтинг',
    dm_no_data: 'Ожидание данных боя...',
    load_log_file: 'Загрузить лог',
    log_path_hint: 'Путь к логам по умолчанию:',
    total_damage_dealt: 'Всего нанесено урона',
    total_damage_taken: 'Всего получено урона',
    total_healing_done: 'Всего исцелено',
    kills: 'Убийства',
    deaths: 'Смерти',
    enslaves: 'Порабощения',
    combat_duration: 'Длительность боя',
    combat_efficiency: 'Боевая эффективность',
    avg_dmg_hit: 'Ср. урон/удар',
    avg_taken_hit: 'Ср. получ./удар',
    efficiency_ratio: 'Эффективность',
    damage_type_used: 'Тип урона',
    db_connected: 'Подключено',
    db_disconnected: 'База данных не настроена',
    global_ranking: 'Глобальный Рейтинг',
    local_ranking: 'Локальный Анализ',
    submit_score: 'Отправить рекорд',
    score_submitted: 'Отправлено!',
    submit_fail: 'Ошибка отправки',
    submit_best_score: 'Отправляет ваш текущий общий урон как личный рекорд на сервер.',
    ranking_dealt: 'Нанесенный урон',
    ranking_taken: 'Полученный урон',
    config_help: 'Системный администратор еще не настроил публичный ключ API в исходном коде.'
  },
  tr: {
    subtitle: 'Üretim Araçları',
    dashboard: 'Panel',
    official_site: 'Resmi Site',
    map: 'Harita',
    armorsmithing: 'Zırh Yapımı',
    tailoring: 'Terzilik',
    artisan: 'Zanaatkar',
    skill_lvl: 'Yetenek Sv.',
    material_category: 'Malzemeler / Lvl 0',
    no_recipe_level: 'Bu seviyede tarif bulunamadı',
    set_count: 'Set Sayısı',
    craft_count: 'Üretim Adedi',
    full_set_content: 'Tam Set İçeriği',
    total_set: 'Toplam Set',
    inventory_needs: 'Envanter İhtiyacı',
    total_raw_materials: 'Tüm parçalar için toplam hammadde',
    recipe_selected: 'Tarif',
    recipe_not_selected: 'Tarif Seçilmedi',
    select_category_prompt: 'Başlamak için yukarıdaki menüden bir üretim kategorisi ve seviyesi seçin.',
    quantity: 'Miktar',
    component: 'Bileşen',
    recipe: 'Tarif',
    crafting_tools: 'Üretim Araçları',
    crafting_desc: 'Tarif ve malzeme hesaplama',
    quality_calc: 'Hasar Ölçer',
    coming_soon: 'Yakında',
    back_to_menu: 'Menüye Dön',
    select_profession: 'Meslek Seçimi',
    locked_professions_desc: '* Şu anda sadece Zırh Yapımı, Terzilik ve Zanaatkar aktiftir.',
    kilning: 'Fırıncılık',
    forging: 'Dövme',
    weaponsmithing: 'Silah Yapımı',
    search_placeholder: 'Tarif ara...',
    dm_overview: 'Genel Bakış',
    dm_charts: 'Grafikler',
    dm_damage_log: 'Hasar Kaydı',
    dm_combat_log: 'Savaş Kaydı',
    dm_ranking: 'Sıralama',
    dm_no_data: 'Savaş verileri bekleniyor...',
    load_log_file: 'Log Dosyası Yükle',
    log_path_hint: 'Varsayılan log konumu:',
    total_damage_dealt: 'Toplam Verilen Hasar',
    total_damage_taken: 'Toplam Alınan Hasar',
    total_healing_done: 'Toplam Yapılan Şifa',
    kills: 'Öldürme',
    deaths: 'Ölüm',
    enslaves: 'Köleleştirme',
    combat_duration: 'Savaş Süresi',
    combat_efficiency: 'Savaş Verimliliği',
    avg_dmg_hit: 'Ort. Hasar/Vuruş',
    avg_taken_hit: 'Ort. Alınan/Vuruş',
    efficiency_ratio: 'Verimlilik',
    damage_type_used: 'Kullanılan Hasar Türü',
    db_connected: 'Bağlandı',
    db_disconnected: 'Veritabanı Yapılandırılmadı',
    global_ranking: 'Global Sıralama',
    local_ranking: 'Yerel Analiz',
    submit_score: 'Skoru Gönder',
    score_submitted: 'Skor Gönderildi!',
    submit_fail: 'Gönderim Başarısız',
    submit_best_score: 'Mevcut toplam hasarınızı Kişisel Rekor olarak sunucuya gönderir.',
    ranking_dealt: 'Verilen Hasar',
    ranking_taken: 'Alınan Hasar',
    config_help: 'Sistem yöneticisi henüz kaynak koda public API anahtarını eklemedi.'
  }
};
