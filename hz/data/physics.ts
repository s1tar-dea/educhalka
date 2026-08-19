import type { SubjectData } from './types';

const physicsData: SubjectData = {
  subject: 'physics',
  title: 'Физика',
  icon: '⚛️',
  color: '#10B981',
  colorRgb: '16, 185, 129',
  sections: [
    {
      id: 'intro',
      title: '🔭 Введение в физику',
      topics: [
        {
          id: 'measurements',
          title: 'Физические величины и измерения',
          grade: 7,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Физические величины и измерения</h1></div>
<div class="card card-definition"><div class="card-label">📖 Основные понятия</div><p><strong>Физическая величина</strong> — количественная характеристика свойства объекта или явления.</p><p><strong>Измерение</strong> — сравнение физической величины с эталоном.</p></div>
<div class="card card-formula"><div class="card-label">📐 Система СИ</div><div class="formula-grid"><div class="formula-item"><div class="fn">Длина</div><p>метр (м)</p></div><div class="formula-item"><div class="fn">Масса</div><p>килограмм (кг)</p></div><div class="formula-item"><div class="fn">Время</div><p>секунда (с)</p></div><div class="formula-item"><div class="fn">Температура</div><p>кельвин (К)</p></div><div class="formula-item"><div class="fn">Сила тока</div><p>ампер (А)</p></div></div></div>
<div class="card card-formula"><div class="card-label">📐 Погрешность измерения</div>$$\\varepsilon=\\frac{\\Delta x}{x}\\cdot 100\\%$$</div>`,
        },
      ],
    },
    {
      id: 'kinematics',
      title: '⚙️ Кинематика',
      topics: [
        {
          id: 'uniform-motion',
          title: 'Равномерное движение',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Равномерное движение</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p>Движение с постоянной скоростью: за равные промежутки времени — равные пути.</p></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Скорость</div>$$v=\\frac{s}{t}$$</div><div class="formula-item"><div class="fn">Путь</div>$$s=vt$$</div><div class="formula-item"><div class="fn">Координата</div>$$x(t)=x_0+vt$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Велосипедист 15 м/с, 2 мин. Путь?</li><li>Поезд 180 км за 2 часа. Скорость в м/с?</li></ol></div>`,
        },
        {
          id: 'accelerated-motion',
          title: 'Равноускоренное движение',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Равноускоренное движение</h1></div>
<div class="card card-definition"><div class="card-label">📖 Ускорение</div>$$a=\\frac{\\Delta v}{\\Delta t}=\\frac{v-v_0}{t}$$</div>
<div class="card card-formula"><div class="card-label">📐 Кинематические уравнения</div><div class="formula-grid"><div class="formula-item"><div class="fn">Скорость</div>$$v=v_0+at$$</div><div class="formula-item"><div class="fn">Путь</div>$$s=v_0 t+\\frac{at^2}{2}$$</div><div class="formula-item"><div class="fn">Без времени</div>$$v^2=v_0^2+2as$$</div><div class="formula-item"><div class="fn">Средняя скорость</div>$$\\langle v\\rangle=\\frac{v_0+v}{2}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(v_0=2\\) м/с, \\(a=3\\) м/с². Скорость и путь через 4 с</li><li>Поезд тормозит 20→0 м/с за 10 с. Ускорение и тормозной путь</li></ol></div>`,
        },
        {
          id: 'free-fall',
          title: 'Свободное падение',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Свободное падение</h1></div>
<div class="card card-formula"><div class="card-label">📐 g = 9,81 м/с² ≈ 10 м/с²</div><div class="formula-grid"><div class="formula-item"><div class="fn">Скорость</div>$$v=gt$$</div><div class="formula-item"><div class="fn">Высота</div>$$h=\\frac{gt^2}{2}$$</div><div class="formula-item"><div class="fn">Время падения</div>$$t=\\sqrt{\\frac{2h}{g}}$$</div><div class="formula-item"><div class="fn">Скорость удара</div>$$v=\\sqrt{2gh}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Камень падает с 45 м. Время и скорость удара (g=10)</li><li>Тело брошено вверх 30 м/с. Высота и время</li></ol></div>`,
        },
      ],
    },
    {
      id: 'dynamics',
      title: '💪 Динамика',
      topics: [
        {
          id: 'newtons-laws',
          title: 'Законы Ньютона',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Законы Ньютона</h1></div>
<div class="card card-formula"><div class="card-label">📐 I закон (инерция)</div><p>В ИСО тело сохраняет покой или равномерное прямолинейное движение, если \\(\\sum\\vec{F}=0\\).</p></div>
<div class="card card-formula"><div class="card-label">📐 II закон</div>$$\\vec{F}=m\\vec{a}\\qquad a=\\frac{F}{m}$$</div>
<div class="card card-formula"><div class="card-label">📐 III закон</div>$$\\vec{F}_{12}=-\\vec{F}_{21}$$</div>
<div class="card card-formula"><div class="card-label">📐 Основные силы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Тяжести</div>$$F_g=mg$$</div><div class="formula-item"><div class="fn">Упругость (Гук)</div>$$F=kx$$</div><div class="formula-item"><div class="fn">Трения</div>$$F_{\\text{тр}}=\\mu N$$</div><div class="formula-item"><div class="fn">Тяготения</div>$$F=G\\frac{m_1 m_2}{r^2}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Масса 5 кг, сила 20 Н. Ускорение?</li><li>Трение 12 Н, μ=0,3. Нормальная сила и масса</li></ol></div>`,
        },
      ],
    },
    {
      id: 'conservation',
      title: '⚡ Законы сохранения',
      topics: [
        {
          id: 'energy',
          title: 'Работа, мощность и энергия',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Работа, мощность и энергия</h1></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Работа</div>$$A=Fs\\cos\\alpha$$</div><div class="formula-item"><div class="fn">Мощность</div>$$P=\\frac{A}{t}=Fv$$</div><div class="formula-item"><div class="fn">Кинетическая энергия</div>$$E_k=\\frac{mv^2}{2}$$</div><div class="formula-item"><div class="fn">Потенциальная (тяжести)</div>$$E_p=mgh$$</div><div class="formula-item"><div class="fn">Закон сохранения</div>$$E_k+E_p=\\text{const}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>2 кг, v=10 м/с. Кинетическая энергия?</li><li>5 кг поднято на 3 м. Работа?</li><li>P=10 кВт, t=2 мин. Работа?</li></ol></div>`,
        },
        {
          id: 'impulse',
          title: 'Импульс и его сохранение',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Импульс и его сохранение</h1></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Импульс тела</div>$$\\vec{p}=m\\vec{v}$$</div><div class="formula-item"><div class="fn">II закон через импульс</div>$$\\vec{F}\\cdot t=\\Delta\\vec{p}$$</div><div class="formula-item"><div class="fn">Закон сохранения</div>$$\\vec{p}_1+\\vec{p}_2=\\vec{p}_1'+\\vec{p}_2'$$</div><div class="formula-item"><div class="fn">Неупругий удар</div>$$(m_1+m_2)v'=m_1 v_1+m_2 v_2$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Масса 3 кг, v=4 м/с. Импульс?</li><li>Вагон 10 т, 2 м/с → стоячий 5 т. Скорость после удара?</li></ol></div>`,
        },
      ],
    },
    {
      id: 'molecular',
      title: '🌡️ Молекулярная физика',
      topics: [
        {
          id: 'ideal-gas',
          title: 'Идеальный газ. Изопроцессы',
          grade: 10,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">10 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Идеальный газ. Изопроцессы</h1></div>
<div class="card card-formula"><div class="card-label">📐 Уравнение Клапейрона–Менделеева</div>$$pV=\\nu RT,\quad R=8{,}31 \\text{ Дж/(моль·К)}$$<p>\\(T=t+273\\) — связь температур</p></div>
<div class="card card-formula"><div class="card-label">📐 Изопроцессы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Изотермный (T=const)</div>$$p_1 V_1=p_2 V_2$$</div><div class="formula-item"><div class="fn">Изобарный (p=const)</div>$$\\frac{V_1}{T_1}=\\frac{V_2}{T_2}$$</div><div class="formula-item"><div class="fn">Изохорный (V=const)</div>$$\\frac{p_1}{T_1}=\\frac{p_2}{T_2}$$</div><div class="formula-item"><div class="fn">Объединённый</div>$$\\frac{p_1 V_1}{T_1}=\\frac{p_2 V_2}{T_2}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Газ при 20°C, V=2 л. Объём при 100°C?</li><li>p=2 атм, V=3 л. Давление при V=6 л?</li></ol></div>`,
        },
        {
          id: 'thermodynamics',
          title: 'Первое начало термодинамики',
          grade: 10,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">10 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Первое начало термодинамики</h1></div>
<div class="card card-formula"><div class="card-label">📐 Первое начало</div>$$Q=\\Delta U+A$$<ul><li>\\(Q\\) — теплота</li><li>\\(\\Delta U\\) — изменение внутренней энергии</li><li>\\(A\\) — работа газа</li></ul></div>
<div class="card card-formula"><div class="card-label">📐 КПД тепловой машины</div>$$\\eta=1-\\frac{Q_2}{Q_1}\\leq 1-\\frac{T_2}{T_1}=\\eta_{\\text{Карно}}$$</div>`,
        },
      ],
    },
    {
      id: 'electricity',
      title: '🔋 Электрический ток',
      topics: [
        {
          id: 'ohms-law',
          title: 'Закон Ома. Сопротивление',
          grade: 8,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Закон Ома. Сопротивление</h1></div>
<div class="card card-formula"><div class="card-label">📐 Закон Ома</div>$$I=\\frac{U}{R}\\qquad U=IR\\qquad R=\\frac{U}{I}$$</div>
<div class="card card-formula"><div class="card-label">📐 Сопротивление проводника</div>$$R=\\rho\\frac{l}{S}$$</div>
<div class="card card-formula"><div class="card-label">📐 Соединение резисторов</div><div class="formula-grid"><div class="formula-item"><div class="fn">Последовательное</div>$$R=R_1+R_2+\\ldots$$</div><div class="formula-item"><div class="fn">Параллельное</div>$$\\frac{1}{R}=\\frac{1}{R_1}+\\frac{1}{R_2}+\\ldots$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>U=12 В, R=4 Ом. Ток?</li><li>Резисторы 4 и 6 Ом последовательно, U=20 В</li><li>Резисторы 6 и 12 Ом параллельно, U=12 В</li></ol></div>`,
        },
        {
          id: 'power-current',
          title: 'Работа и мощность тока',
          grade: 8,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Работа и мощность тока. Закон Джоуля–Ленца</h1></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Работа тока</div>$$A=UIt=I^2Rt$$</div><div class="formula-item"><div class="fn">Мощность тока</div>$$P=UI=I^2R=\\frac{U^2}{R}$$</div><div class="formula-item"><div class="fn">Закон Джоуля–Ленца</div>$$Q=I^2Rt$$</div><div class="formula-item"><div class="fn">ЭДС источника</div>$$\\varepsilon=I(R+r)$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Лампа 60 Вт, 220 В. Ток и сопротивление?</li><li>Нагреватель 5 Ом, I=4 А, t=10 мин. Теплота?</li></ol></div>`,
        },
        {
          id: 'coulombs-law',
          title: 'Закон Кулона. Электрическое поле',
          grade: 10,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">10 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Закон Кулона. Электрическое поле</h1></div>
<div class="card card-formula"><div class="card-label">📐 Закон Кулона</div>$$F=k\\frac{|q_1 q_2|}{r^2},\quad k=9\\cdot 10^9 \\text{ Н·м}^2/\\text{Кл}^2$$</div>
<div class="card card-formula"><div class="card-label">📐 Характеристики поля</div><div class="formula-grid"><div class="formula-item"><div class="fn">Напряжённость</div>$$E=\\frac{F}{q}=k\\frac{Q}{r^2}$$</div><div class="formula-item"><div class="fn">Потенциал</div>$$\\varphi=k\\frac{Q}{r}$$</div><div class="formula-item"><div class="fn">Конденсатор</div>$$C=\\frac{q}{U},\quad W=\\frac{CU^2}{2}$$</div></div></div>`,
        },
      ],
    },
    {
      id: 'magnetism',
      title: '🧲 Электромагнетизм',
      topics: [
        {
          id: 'electromagnetic-induction',
          title: 'Электромагнитная индукция',
          grade: 11,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">11 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Электромагнитная индукция</h1></div>
<div class="card card-formula"><div class="card-label">📐 Закон Фарадея</div>$$\\mathcal{E}=-\\frac{\\Delta\\Phi}{\\Delta t}$$<p><strong>Правило Ленца:</strong> ток противодействует изменению потока.</p></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Магнитный поток</div>$$\\Phi=BS\\cos\\alpha$$</div><div class="formula-item"><div class="fn">Сила Ампера</div>$$F=BIl\\sin\\alpha$$</div><div class="formula-item"><div class="fn">Сила Лоренца</div>$$F=qvB\\sin\\alpha$$</div><div class="formula-item"><div class="fn">Энергия магн. поля</div>$$W=\\frac{LI^2}{2}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>B=0,5 Тл, I=2 А, l=0,3 м. Сила Ампера?</li><li>Поток изменился с 0,2 до 0,8 Вб за 0,3 с. ЭДС?</li></ol></div>`,
        },
      ],
    },
    {
      id: 'optics',
      title: '💡 Оптика',
      topics: [
        {
          id: 'geometric-optics',
          title: 'Геометрическая оптика',
          grade: 11,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">11 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Законы геометрической оптики</h1></div>
<div class="card card-formula"><div class="card-label">📐 Законы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Отражение</div>$$\\theta_i=\\theta_r$$</div><div class="formula-item"><div class="fn">Преломление (Снеллиус)</div>$$n_1\\sin\\theta_1=n_2\\sin\\theta_2$$</div><div class="formula-item"><div class="fn">Показатель преломления</div>$$n=\\frac{c}{v}$$</div></div></div>
<div class="card card-formula"><div class="card-label">📐 Тонкая линза</div>$$\\frac{1}{F}=\\frac{1}{d}+\\frac{1}{f}\\qquad D=\\frac{1}{F}\\text{ (дптр)}$$</div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Предмет 30 см от линзы F=10 см. Изображение?</li><li>Стекло n=1,5, переход в воздух. Угол полного отражения?</li></ol></div>`,
        },
      ],
    },
    {
      id: 'quantum',
      title: '🔬 Квантовая физика',
      topics: [
        {
          id: 'photoeffect',
          title: 'Фотоэффект',
          grade: 11,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">11 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Фотоэффект</h1></div>
<div class="card card-definition"><div class="card-label">📖 Уравнение Эйнштейна</div>$$h\\nu=A+\\frac{mv^2_{\\text{max}}}{2}$$</div>
<div class="card card-formula"><div class="card-label">📐 Формулы фотона</div><div class="formula-grid"><div class="formula-item"><div class="fn">Энергия</div>$$E=h\\nu=\\frac{hc}{\\lambda}$$<p>\\(h=6{,}626\\cdot 10^{-34}\\) Дж·с</p></div><div class="formula-item"><div class="fn">Импульс</div>$$p=\\frac{h}{\\lambda}=\\frac{E}{c}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Работа выхода 2 эВ. Красная граница?</li><li>Фотон с λ=300 нм. Энергия в эВ?</li></ol></div>`,
        },
        {
          id: 'radioactivity',
          title: 'Радиоактивность. Ядерные реакции',
          grade: 11,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">11 класс</span><span class="subject-tag" style="--sc:#F59E0B">Физика</span></div><h1>Радиоактивность. Ядерные реакции</h1></div>
<div class="card card-definition"><div class="card-label">📖 Виды распадов</div><div class="formula-grid"><div class="formula-item"><div class="fn">α-распад</div>$$^A_Z X\\rightarrow\\,^{A-4}_{Z-2}Y+^4_2\\text{He}$$</div><div class="formula-item"><div class="fn">β⁻-распад</div>$$^A_Z X\\rightarrow\\,^A_{Z+1}Y+e^-+\\bar{\\nu}_e$$</div></div></div>
<div class="card card-formula"><div class="card-label">📐 Закон радиоактивного распада</div>$$N=N_0\\cdot 2^{-t/T_{1/2}}$$<p>\\(T_{1/2}\\) — период полураспада.</p></div>
<div class="card card-formula"><div class="card-label">📐 Дефект масс</div>$$\\Delta m=Zm_p+(A-Z)m_n-m_{\\text{яд}}$$$$E_{\\text{св}}=\\Delta m\\cdot c^2$$</div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Радий-226: α-распад. Дочерний нуклид?</li><li>Период 10 лет. Остаток через 30 лет?</li></ol></div>`,
        },
      ],
    },
  ],
};

export default physicsData;
