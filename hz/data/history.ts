import type { SubjectData } from './types';

const historyData: SubjectData = {
  subject: 'history',
  title: 'История',
  icon: '🏛️',
  color: '#EA580C',
  colorRgb: '234, 88, 12',
  sections: [
    {
      id: 'ancient',
      title: '📜 Древний мир',
      topics: [
        {
          id: 'egypt',
          title: 'Древний Египет (Подробно)',
          grade: 5,
          image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">5 класс</span><span class="subject-tag" style="--sc:#EA580C">История</span></div><h1>Древний Египет</h1></div>
<div class="card card-definition"><div class="card-label">📖 Расположение и природа</div><p>Древний Египет располагался в северо-восточной Африке, в долине и дельте реки <strong>Нил</strong>. Именно регулярные разливы Нила, оставлявшие плодородный ил, позволили египтянам создать мощное сельскохозяйственное государство посреди пустыни.</p></div>
<div class="card card-formula"><div class="card-label">⏳ Ключевые даты</div><div class="formula-grid"><div class="formula-item"><div class="fn">Около 3000 г. до н.э.</div><p>Объединение Верхнего и Нижнего Египта фараоном Миной</p></div><div class="formula-item"><div class="fn">Около 2600 г. до н.э.</div><p>Строительство Великой пирамиды Хеопса</p></div><div class="formula-item"><div class="fn">Около 1500 г. до н.э.</div><p>Наивысший расцвет Египта (Тутмос III)</p></div></div></div>
<div class="card card-example"><div class="card-label">👑 Государство и общество</div><p>Во главе государства стоял <strong>фараон</strong> — правитель, считавшийся живым богом (сыном бога Солнца Ра). Ниже находились вельможи, жрецы, писцы и армия. Основу общества составляли крестьяне и ремесленники, а на самом дне находились рабы.</p></div>
<div class="card card-practice"><div class="card-label">🏛️ Культура и религия</div><p>Египтяне были политеистами (верили во множество богов). Главные боги: <strong>Ра</strong> (бог солнца), <strong>Осирис</strong> (владыка загробного мира), <strong>Исида</strong> (богиня-мать). Они верили в загробную жизнь, что привело к сложной практике мумификации и строительству грандиозных гробниц — пирамид. Письменность Египта — <strong>иероглифы</strong>.</p></div>`
        },
        {
          id: 'rome',
          title: 'Древний Рим (Подробно)',
          grade: 5,
          image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">5 класс</span><span class="subject-tag" style="--sc:#EA580C">История</span></div><h1>Древний Рим</h1></div>
<div class="card card-definition"><div class="card-label">📖 Зарождение</div><p>По легенде, Рим был основан в <strong>753 г. до н.э.</strong> братьями Ромулом и Ремом на реке Тибр (Апеннинский полуостров). Римская цивилизация стала одной из самых могущественных в истории, объединив все земли вокруг Средиземного моря.</p></div>
<div class="card card-formula"><div class="card-label">🏛️ Три периода истории Рима</div><div class="formula-grid"><div class="formula-item"><div class="fn">1. Царский</div><p>753–509 гг. до н.э. (Правление 7 царей)</p></div><div class="formula-item"><div class="fn">2. Республика</div><p>509–27 гг. до н.э. (Управление сенатом и консулами)</p></div><div class="formula-item"><div class="fn">3. Империя</div><p>27 г. до н.э. – 476 г. н.э. (Единоличная власть императоров)</p></div></div></div>
<div class="card card-example"><div class="card-label">⚔️ Армия и завоевания</div><p>Основой мощи Рима была <strong>римская армия (легионы)</strong> — дисциплинированная и прекрасно вооруженная. В результате Пунических войн (против Карфагена) Рим стал гегемоном Средиземноморья. Выдающиеся полководцы: Юлий Цезарь, Октавиан Август.</p></div>
<div class="card card-practice"><div class="card-label">🏛️ Наследие Рима</div><p>Римляне подарили миру <strong>Римское право</strong> (основа современного законодательства), латинский язык (от которого произошли итальянский, французский, испанский), выдающуюся архитектуру (бетон, арки, акведуки, Колизей) и республиканскую форму правления.</p></div>`
        }
      ]
    },
    {
      id: 'rus',
      title: '🐻 История Руси (XVI - XVIII вв.)',
      topics: [
        {
          id: 'ivan4',
          title: 'Правление Ивана Грозного',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1549646452-3069b828a2a7?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#EA580C">История</span></div><h1>Эпоха Ивана IV Грозного</h1></div>
<div class="card card-definition"><div class="card-label">👑 Первый русский царь</div><p>Иван IV (Грозный) правил с <strong>1533 по 1584 гг.</strong> В 1547 году он первым в русской истории венчался на царство, приняв титул царя, что возвысило его над удельными князьями.</p></div>
<div class="card card-formula"><div class="card-label">📜 Ключевые реформы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Избранная рада</div><p>Круг приближенных советников (Адашев, Сильвестр)</p></div><div class="formula-item"><div class="fn">Судебник 1550 г.</div><p>Единый свод законов, ограничение власти наместников</p></div><div class="formula-item"><div class="fn">Стрелецкое войско</div><p>Создание первой регулярной армии в России</p></div></div></div>
<div class="card card-example"><div class="card-label">⚔️ Внешняя политика</div><p>При Иване Грозном территория России увеличилась в 2 раза! Были присоединены <strong>Казанское (1552)</strong> и <strong>Астраханское (1556)</strong> ханства, началось покорение Сибири (поход Ермака). Однако изнурительная Ливонская война за выход к Балтийскому морю (1558-1583) закончилась поражением.</p></div>
<div class="card card-practice"><div class="card-label">🩸 Опричнина (1565–1572)</div><p>Для борьбы с реальными и мнимыми изменниками (боярами) царь разделил страну на "земщину" и "опричнину" (свой личный удел). Опричники устраивали жестокий террор. Итог: экономический кризис, разорение земель и централизация власти в руках царя-деспота.</p></div>`
        },
        {
          id: 'smuta',
          title: 'Смутное время',
          grade: 7,
          image: 'https://images.unsplash.com/photo-1588725892543-305544d9fce1?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#EA580C">История</span></div><h1>Смутное время (1598–1613)</h1></div>
<div class="card card-definition"><div class="card-label">📖 Что такое Смута?</div><p>Это период глубочайшего кризиса в России, сопровождавшийся самозванством, интервенцией (вторжением поляков и шведов), гражданской войной и угрозой потери независимости государства.</p></div>
<div class="card card-formula"><div class="card-label">📉 Причины</div><div class="formula-grid"><div class="formula-item"><div class="fn">Династический кризис</div><p>Пресечение династии Рюриковичей (смерть царевича Дмитрия и царя Федора)</p></div><div class="formula-item"><div class="fn">Экономический</div><p>Последствия опричнины и Великий голод (1601-1603)</p></div><div class="formula-item"><div class="fn">Социальный</div><p>Недовольство крестьян закрепощением</p></div></div></div>
<div class="card card-example"><div class="card-label">🎭 Основные события</div><p>Правление Бориса Годунова -> Появление Лжедмитрия I (поддержанного Польшей) -> Восстание Ивана Болотникова -> Лжедмитрий II ("Тушинский вор") -> Открытая интервенция Польши и захват Москвы.</p></div>
<div class="card card-practice"><div class="card-label">⚔️ Второе народное ополчение (1612)</div><p>Спасение пришло снизу: в Нижнем Новгороде земский староста <strong>Кузьма Минин</strong> и князь <strong>Дмитрий Пожарский</strong> собрали ополчение. Осенью 1612 года они освободили Москву от поляков. В <strong>1613 году</strong> Земский собор избрал на царство Михаила Романова — началась новая династия.</p></div>`
        },
        {
          id: 'peter1',
          title: 'Эпоха Петра I',
          grade: 8,
          image: 'https://images.unsplash.com/photo-1549646452-3069b828a2a7?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#EA580C">История</span></div><h1>Реформы Петра I (Великого)</h1></div>
<div class="card card-definition"><div class="card-label">📖 Окно в Европу</div><p>Пётр I (правил 1682–1725) радикально изменил облик России, проведя масштабные реформы по западному (европейскому) образцу. Он создал мощный флот, регулярную армию и новую столицу — <strong>Санкт-Петербург (основан в 1703 г.)</strong>.</p></div>
<div class="card card-formula"><div class="card-label">⚙️ Главные реформы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Военная</div><p>Введение рекрутской повинности, создание флота</p></div><div class="formula-item"><div class="fn">Государственная</div><p>Замена Боярской думы на Сенат, а приказов на Коллегии. Провозглашение Империи (1721)</p></div><div class="formula-item"><div class="fn">Культурная</div><p>Бритьё бород, европейское платье, ассамблеи, введение нового календаря</p></div></div></div>
<div class="card card-example"><div class="card-label">⚔️ Северная война (1700–1721)</div><p>Главная война Петра I — против Швеции за выход к Балтийскому морю. Ключевое сражение — <strong>Полтавская битва (1709)</strong>, где шведская армия Карла XII была полностью разгромлена. По итогам Ништадтского мира Россия получила выход к морю и стала Империей.</p></div>
<div class="card card-practice"><div class="card-label">📈 Итоги</div><p>Россия стала одной из великих европейских держав. Промышленность выросла в разы (Уральские мануфактуры), открылись первые светские школы. Однако цена реформ была огромной: они проводились жесточайшими методами, за счет закрепощения и тяжелых налогов крестьян.</p></div>`
        }
      ]
    }
  ]
};

export default historyData;
