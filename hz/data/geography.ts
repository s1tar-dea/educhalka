import type { SubjectData } from './types';

const geographyData: SubjectData = {
  subject: 'geography',
  title: 'География',
  icon: '🌍',
  color: '#14B8A6',
  colorRgb: '20, 184, 166',
  sections: [
    {
      id: 'physical',
      title: '🏔️ Физическая география',
      topics: [
        {
          id: 'continents',
          title: 'Материки и океаны',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Материки и океаны Земли</h1></div>
<div class="card card-definition"><div class="card-label">📖 Основные понятия</div><p><strong>Материк</strong> — обширное пространство суши, омываемое морями и океанами. <strong>Океан</strong> — крупнейший водный объект, часть Мирового океана.</p></div>
<div class="card card-formula"><div class="card-label">🗺️ 6 Материков</div><div class="formula-grid"><div class="formula-item"><div class="fn">Евразия</div><p>Самый большой</p></div><div class="formula-item"><div class="fn">Африка</div><p>Самый жаркий</p></div><div class="formula-item"><div class="fn">Сев. Америка</div><p>Омывается 3 океанами</p></div><div class="formula-item"><div class="fn">Юж. Америка</div><p>Самый влажный</p></div><div class="formula-item"><div class="fn">Антарктида</div><p>Самый холодный</p></div><div class="formula-item"><div class="fn">Австралия</div><p>Самый маленький</p></div></div></div>`
        }
      ]
    },
    {
      id: 'countries',
      title: '🏳️ Страны мира (Топ 10)',
      topics: [
        {
          id: 'russia',
          title: 'Россия',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1513622470522-26c311512b91?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Российская Федерация</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Государство находится в восточной части Европы и северной части Азии, на материке <strong>Евразия</strong>.</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Москва</p></div><div class="formula-item"><div class="fn">Язык</div><p>Русский</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Норвегией, Финляндией, Эстонией, Латвией, Литвой, Польшей, Белоруссией, Украиной, Грузией, Азербайджаном, Казахстаном, Китаем, Монголией, КНДР.</p><p><strong>Омывается:</strong> Северным Ледовитым, Тихим и Атлантическим океанами (через моря).</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> От арктического на севере до субтропического на побережье Черного моря. Основная часть лежит в умеренном климатическом поясе.</p><p><strong>Рельеф и ископаемые:</strong> Преобладают обширные равнины (Восточно-Европейская, Западно-Сибирская) и горные системы (Урал, Кавказ, Алтай). Богатейшие запасы полезных ископаемых: нефть, газ, уголь, железные руды, алмазы.</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Высокоразвитая добывающая и тяжелая промышленность, энергетика, оборонно-промышленный комплекс. Основные занятия населения — сфера услуг, промышленное производство, сельское хозяйство (выращивание зерновых, животноводство).</p></div>`
        },
        {
          id: 'usa',
          title: 'США',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Соединенные Штаты Америки</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Государство находится в центральной части материка <strong>Северная Америка</strong>.</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Вашингтон</p></div><div class="formula-item"><div class="fn">Язык</div><p>Английский (де-факто)</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Канадой на севере и Мексикой на юге. Имеет морские границы с Россией.</p><p><strong>Омывается:</strong> Тихим океаном на западе, Атлантическим на востоке и Северным Ледовитым (Аляска) на севере.</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> Очень разнообразен — от арктического на Аляске до тропического во Флориде и на Гавайях. Основная часть в умеренном и субтропическом поясах.</p><p><strong>Рельеф и ископаемые:</strong> На западе — горы Кордильеры, на востоке — горы Аппалачи, в центре — Великие равнины. Богато ископаемыми: уголь, нефть, природный газ, уран.</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Крупнейшая экономика мира. Доминирует сфера услуг, высокие технологии (Кремниевая долина), авиакосмическая промышленность, мощное и высокотехнологичное сельское хозяйство (пшеница, кукуруза, соя).</p></div>`
        },
        {
          id: 'china',
          title: 'Китай',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Китайская Народная Республика</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Государство находится в восточной части Азии, на материке <strong>Евразия</strong>.</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Пекин</p></div><div class="formula-item"><div class="fn">Язык</div><p>Китайский</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> 14 государствами, включая Россию, Индию, Казахстан, Монголию, Вьетнам, КНДР и др.</p><p><strong>Омывается:</strong> Морями Тихого океана (Желтым, Восточно-Китайским и Южно-Китайским).</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> Разнообразный: от умеренно континентального на западе и севере до субтропического и тропического муссонного на юге и востоке.</p><p><strong>Рельеф и ископаемые:</strong> На западе — высочайшие горы (Гималаи, Тибетское нагорье) и пустыни, на востоке — Великая Китайская равнина. Богатейшие запасы угля, железной руды, редкоземельных металлов.</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>"Фабрика мира". Развита промышленность всех видов (от электроники до тяжелого машиностроения). Население занято в промышленности, сфере услуг и интенсивном сельском хозяйстве (рис, чай, пшеница).</p></div>`
        },
        {
          id: 'japan',
          title: 'Япония',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Япония</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Островное государство, расположено в Восточной Азии (материк <strong>Евразия</strong>), на Японском архипелаге (главные острова: Хонсю, Хоккайдо, Кюсю, Сикоку).</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Токио</p></div><div class="formula-item"><div class="fn">Язык</div><p>Японский</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Не имеет сухопутных границ. Морские границы с Россией, Китаем, Южной Кореей.</p><p><strong>Омывается:</strong> Тихим океаном, Японским, Охотским и Восточно-Китайским морями.</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> От умеренного на севере (Хоккайдо) до субтропического на юге. Частые тайфуны.</p><p><strong>Рельеф и ископаемые:</strong> Гористый рельеф (вулканы, гора Фудзи), частые землетрясения. Полезных ископаемых практически нет (зависит от импорта).</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Один из мировых лидеров в высоких технологиях, робототехнике и автомобилестроении. Население занято в сфере услуг и наукоемком производстве. В сельском хозяйстве — выращивание риса, морепродукты (рыболовство).</p></div>`
        },
        {
          id: 'france',
          title: 'Франция',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1502602898657-3e907a5ea586?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Франция</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Государство находится в Западной Европе (материк <strong>Евразия</strong>).</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Париж</p></div><div class="formula-item"><div class="fn">Язык</div><p>Французский</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Бельгией, Люксембургом, Германией, Швейцарией, Италией, Испанией, Андоррой, Монако.</p><p><strong>Омывается:</strong> Атлантическим океаном (Бискайский залив, пролив Ла-Манш) и Средиземным морем.</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> Умеренный морской, на юге — субтропический средиземноморский.</p><p><strong>Рельеф и ископаемые:</strong> На западе и севере — равнины, на юге и востоке — горы (Альпы, Пиренеи). Ископаемые: железная руда, бокситы (запасы сильно истощены).</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Высокоразвитая постиндустриальная страна. Лидер в авиастроении, парфюмерии, туризме, ядерной энергетике. Мощное сельское хозяйство (виноделие, сыроварение, пшеница).</p></div>`
        },
        {
          id: 'italy',
          title: 'Италия',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1516483638261-f4ddaaf73747?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Италия</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Государство находится на юге Европы, на Апеннинском полуострове (материк <strong>Евразия</strong>).</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Рим</p></div><div class="formula-item"><div class="fn">Язык</div><p>Итальянский</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Францией, Швейцарией, Австрией, Словенией. Внутри находятся государства-анклавы: Ватикан и Сан-Марино.</p><p><strong>Омывается:</strong> Морями Средиземного моря (Тирренским, Ионическим, Адриатическим).</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> Субтропический средиземноморский (жаркое лето, мягкая зима), на севере — умеренный.</p><p><strong>Рельеф и ископаемые:</strong> Преимущественно горный (Альпы на севере, Апеннины вдоль полуострова). Есть действующие вулканы (Везувий, Этна). Бедна полезными ископаемыми, но богата мрамором.</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Развитое машиностроение (автомобили), индустрия моды, дизайн, туризм. В сельском хозяйстве — выращивание оливок, цитрусовых, винограда.</p></div>`
        },
        {
          id: 'germany',
          title: 'Германия',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Германия</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Государство находится в Центральной Европе (материк <strong>Евразия</strong>).</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Берлин</p></div><div class="formula-item"><div class="fn">Язык</div><p>Немецкий</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Данией, Польшей, Чехией, Австрией, Швейцарией, Францией, Люксембургом, Бельгией, Нидерландами.</p><p><strong>Омывается:</strong> Северным и Балтийским морями (Атлантический океан).</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> Умеренный, переходный от морского к континентальному.</p><p><strong>Рельеф и ископаемые:</strong> На севере — равнины, в центре — средневысотные горы, на юге — Альпы. Главное богатство — каменный и бурый уголь, калийные соли.</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Крупнейшая экономика Европы. Мировой лидер в машиностроении, автомобилестроении, химической промышленности. Интенсивное сельское хозяйство и животноводство.</p></div>`
        },
        {
          id: 'uk',
          title: 'Великобритания',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Великобритания</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Островное государство на северо-западе Европы (материк <strong>Евразия</strong>). Занимает остров Великобритания и часть острова Ирландия.</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Лондон</p></div><div class="formula-item"><div class="fn">Язык</div><p>Английский</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Ирландией (сухопутная граница).</p><p><strong>Омывается:</strong> Атлантическим океаном, Северным морем, проливами Ла-Манш и Па-де-Кале.</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> Умеренный морской, влажный и мягкий благодаря теплому течению Гольфстрим.</p><p><strong>Рельеф и ископаемые:</strong> На севере и западе — горы (Пеннины, Грампианские горы), на юге и востоке — равнины. Добывают нефть и газ (на шельфе Северного моря), уголь.</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Один из мировых финансовых центров (Лондон). Развита сфера услуг, фармацевтика, авиастроение. Высокопродуктивное сельское хозяйство (овцеводство).</p></div>`
        },
        {
          id: 'brazil',
          title: 'Бразилия',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Бразилия</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Крупнейшее государство Южной Америки, занимает восточную и центральную часть материка <strong>Южная Америка</strong>.</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Бразилиа</p></div><div class="formula-item"><div class="fn">Язык</div><p>Португальский</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Почти со всеми странами Южной Америки, кроме Чили и Эквадора.</p><p><strong>Омывается:</strong> Атлантическим океаном на востоке.</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> Экваториальный, субэкваториальный и тропический (очень жарко и влажно).</p><p><strong>Рельеф и ископаемые:</strong> На севере — Амазонская низменность (непроходимые джунгли Амазонки), на юге — Бразильское плоскогорье. Богатейшие залежи железной руды, золота, алмазов.</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Аграрно-индустриальная страна. Мировой лидер по производству и экспорту кофе, сахарного тростника, сои и говядины. Быстро развиваются машиностроение и авиастроение.</p></div>`
        },
        {
          id: 'india',
          title: 'Индия',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#14B8A6">География</span></div><h1>Индия</h1></div>
<div class="card card-definition"><div class="card-label">📍 Расположение</div><p>Государство в Южной Азии, занимает полуостров Индостан (материк <strong>Евразия</strong>).</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Основные данные</div><div class="formula-grid"><div class="formula-item"><div class="fn">Столица</div><p>Нью-Дели</p></div><div class="formula-item"><div class="fn">Язык</div><p>Хинди и английский</p></div></div></div>
<div class="card card-example"><div class="card-label">🌍 Границы и океаны</div><p><strong>Граничит с:</strong> Пакистаном, Китаем, Непалом, Бутаном, Бангладеш, Мьянмой.</p><p><strong>Омывается:</strong> Индийским океаном (Аравийское море на западе, Бенгальский залив на востоке).</p></div>
<div class="card card-practice"><div class="card-label">☀️ Природа и климат</div><p><strong>Климат:</strong> Субэкваториальный муссонный (четко выражены сухой и влажный сезоны).</p><p><strong>Рельеф и ископаемые:</strong> На севере — высочайшие горы Гималаи, южнее — Индо-Гангская равнина, на полуострове — плоскогорье Декан. Богата железной рудой, углем, марганцем.</p></div>
<div class="card card-definition"><div class="card-label">💼 Хозяйство</div><p>Самая населенная страна в мире (с 2023 года). Развивается быстрыми темпами. Мировой центр IT-аутсорсинга, фармацевтики и киноиндустрии (Болливуд). Огромная доля населения занята в сельском хозяйстве (чай, рис, специи, хлопок).</p></div>`
        }
      ]
    }
  ]
};

export default geographyData;
