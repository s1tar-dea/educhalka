import type { SubjectData } from './types';

const geometryData: SubjectData = {
  subject: 'geometry',
  title: 'Геометрия',
  icon: '📏',
  color: '#06B6D4',
  colorRgb: '6, 182, 212',
  sections: [
    {
      id: 'basics',
      title: '📍 Основы планиметрии',
      topics: [
        {
          id: 'angles',
          title: 'Углы и их виды',
          grade: 7,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Углы и их виды</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определения</div><p><strong>Угол</strong> — геометрическая фигура, образованная двумя лучами из одной точки (вершины).</p><div class="formula-grid"><div class="formula-item"><div class="fn">Острый</div><p>\\(0°< \\alpha < 90°\\)</p></div><div class="formula-item"><div class="fn">Прямой</div><p>\\(\\alpha = 90°\\)</p></div><div class="formula-item"><div class="fn">Тупой</div><p>\\(90°< \\alpha < 180°\\)</p></div><div class="formula-item"><div class="fn">Развёрнутый</div><p>\\(\\alpha = 180°\\)</p></div></div></div>
<div class="card card-formula"><div class="card-label">📐 Признаки</div><p><strong>Смежные углы</strong> — в сумме 180°. <strong>Вертикальные углы</strong> — равны.</p><p><strong>Накрест лежащие</strong> при параллельных прямых и секущей — равны.</p></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Смежный угол к 65° равен...</li><li>Два угла равны по 37° и 53°. Могут ли они быть смежными?</li></ol></div>`,
        },
        {
          id: 'triangle-basics',
          title: 'Треугольник. Признаки равенства',
          grade: 7,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Треугольник. Признаки равенства</h1></div>
<div class="card card-definition"><div class="card-label">📖 Основные свойства</div><p>Сумма углов треугольника: \\(\\alpha+\\beta+\\gamma=180°\\).</p><p><strong>Внешний угол</strong> = сумме двух несмежных внутренних.</p></div>
<div class="card card-formula"><div class="card-label">📐 Признаки равенства треугольников</div><div class="formula-grid"><div class="formula-item"><div class="fn">1-й признак (СС)</div><p>Две стороны и угол между ними</p></div><div class="formula-item"><div class="fn">2-й признак (УС)</div><p>Сторона и два прилежащих угла</p></div><div class="formula-item"><div class="fn">3-й признак (ССС)</div><p>Три стороны</p></div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Один угол треугольника 47°, другой 68°. Найдите третий</li><li>В равнобедренном треугольнике боковая сторона 10, основание 12. Найдите высоту</li></ol></div>`,
        },
      ],
    },
    {
      id: 'triangles',
      title: '📐 Теоремы о треугольниках',
      topics: [
        {
          id: 'pythagorean',
          title: 'Теорема Пифагора',
          grade: 8,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Теорема Пифагора</h1></div>
<div class="card card-formula"><div class="card-label">📐 Формулировка</div><p>В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов:</p>$$c^2=a^2+b^2$$$$c=\\sqrt{a^2+b^2}$$</div>
<div class="card card-formula"><div class="card-label">📐 Обратная теорема</div><p>Если \\(c^2=a^2+b^2\\), то треугольник прямоугольный.</p><p><strong>Пифагоровы тройки:</strong> (3,4,5), (5,12,13), (8,15,17).</p></div>
<div class="card card-example"><div class="card-label">✏️ Пример</div><p>Катеты 6 и 8. Найти гипотенузу:</p><div class="steps"><div class="step"><span class="step-n">1</span>\\(c^2=36+64=100\\)</div><div class="step"><span class="step-n">✓</span>\\(c=10\\)</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Катеты 5 и 12. Найдите гипотенузу</li><li>Гипотенуза 17, катет 8. Найдите другой катет</li><li>Диагональ квадрата 10. Сторона?</li></ol></div>`,
        },
        {
          id: 'triangle-area',
          title: 'Площадь треугольника',
          grade: 8,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Площадь треугольника</h1></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Основание и высота</div>$$S=\\frac{ah}{2}$$</div><div class="formula-item"><div class="fn">Две стороны и угол</div>$$S=\\frac{ab\\sin C}{2}$$</div><div class="formula-item"><div class="fn">Формула Герона</div>$$S=\\sqrt{p(p-a)(p-b)(p-c)}$$<p>\\(p=\\frac{a+b+c}{2}\\)</p></div><div class="formula-item"><div class="fn">Вписанная окружность</div>$$S=pr$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Основание 12, высота 8. Найдите площадь</li><li>Стороны 3, 4, 5. Площадь по Герону</li><li>Стороны 6 и 8, угол 30°. Площадь?</li></ol></div>`,
        },
        {
          id: 'sine-cosine',
          title: 'Теоремы синусов и косинусов',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Теоремы синусов и косинусов</h1></div>
<div class="card card-formula"><div class="card-label">📐 Теорема синусов</div>$$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R$$<p>\\(R\\) — радиус описанной окружности.</p></div>
<div class="card card-formula"><div class="card-label">📐 Теорема косинусов</div>$$c^2=a^2+b^2-2ab\\cos C$$<p>Обобщение теоремы Пифагора. При \\(C=90°\\) получаем теорему Пифагора.</p></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Стороны 7 и 10, угол 60°. Найдите третью сторону</li><li>Стороны 5, 6, 7. Найдите наибольший угол</li></ol></div>`,
        },
      ],
    },
    {
      id: 'polygons',
      title: '⬡ Многоугольники',
      topics: [
        {
          id: 'quadrilaterals',
          title: 'Четырёхугольники',
          grade: 8,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Четырёхугольники</h1></div>
<div class="card card-formula"><div class="card-label">📐 Площади</div><div class="formula-grid"><div class="formula-item"><div class="fn">Параллелограмм</div>$$S=ah=ab\\sin\\alpha$$</div><div class="formula-item"><div class="fn">Прямоугольник</div>$$S=ab$$</div><div class="formula-item"><div class="fn">Ромб</div>$$S=\\frac{d_1 d_2}{2}$$</div><div class="formula-item"><div class="fn">Трапеция</div>$$S=\\frac{(a+b)h}{2}$$</div><div class="formula-item"><div class="fn">Квадрат</div>$$S=a^2=\\frac{d^2}{2}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Прямоугольник 6×8. Найдите диагональ и периметр</li><li>Ромб с диагоналями 10 и 24. Найдите сторону и площадь</li><li>Трапеция с основаниями 6 и 10, высота 4. Площадь?</li></ol></div>`,
        },
        {
          id: 'circle',
          title: 'Окружность и круг',
          grade: 8,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Окружность и круг</h1></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Длина окружности</div>$$C=2\\pi r=\\pi d$$</div><div class="formula-item"><div class="fn">Площадь круга</div>$$S=\\pi r^2$$</div><div class="formula-item"><div class="fn">Длина дуги</div>$$l=\\frac{\\pi r\\alpha}{180°}$$</div><div class="formula-item"><div class="fn">Площадь сектора</div>$$S=\\frac{\\pi r^2 \\alpha}{360°}$$</div></div></div>
<div class="card card-formula"><div class="card-label">📐 Теоремы</div><p><strong>Вписанный угол</strong> = половине центрального, опирающегося на ту же дугу.</p><p><strong>Касательная</strong> перпендикулярна радиусу в точке касания.</p></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Радиус 5. Найдите длину окружности и площадь круга</li><li>Вписанный угол 35°. Найдите центральный угол</li></ol></div>`,
        },
      ],
    },
    {
      id: 'vectors',
      title: '→ Векторы',
      topics: [
        {
          id: 'vectors-basics',
          title: 'Векторы и операции над ними',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Векторы</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p><strong>Вектор</strong> — направленный отрезок. Характеристики: длина (модуль) и направление.</p></div>
<div class="card card-formula"><div class="card-label">📐 Координаты и операции</div><div class="formula-grid"><div class="formula-item"><div class="fn">Модуль</div>$$|\\vec{a}|=\\sqrt{x^2+y^2}$$</div><div class="formula-item"><div class="fn">Сложение</div>$$\\vec{a}+\\vec{b}=(x_1+x_2;\\,y_1+y_2)$$</div><div class="formula-item"><div class="fn">Скалярное произведение</div>$$\\vec{a}\\cdot\\vec{b}=x_1 x_2+y_1 y_2=|\\vec{a}||\\vec{b}|\\cos\\phi$$</div><div class="formula-item"><div class="fn">Перпендикулярность</div>$$\\vec{a}\\perp\\vec{b}\\iff\\vec{a}\\cdot\\vec{b}=0$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(\\vec{a}=(3,4)\\). Найдите \\(|\\vec{a}|\\)</li><li>\\(\\vec{a}=(2,3)\\), \\(\\vec{b}=(1,-2)\\). Найдите \\(\\vec{a}\\cdot\\vec{b}\\) и угол между ними</li></ol></div>`,
        },
      ],
    },
    {
      id: 'stereometry',
      title: '🧊 Стереометрия',
      topics: [
        {
          id: 'polyhedra',
          title: 'Многогранники',
          grade: 10,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">10 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Многогранники</h1></div>
<div class="card card-formula"><div class="card-label">📐 Объём и площадь поверхности</div><div class="formula-grid"><div class="formula-item"><div class="fn">Прямая призма</div>$$V=S_{\\text{осн}}\\cdot h$$$$S_{\\text{бок}}=P_{\\text{осн}}\\cdot h$$</div><div class="formula-item"><div class="fn">Пирамида</div>$$V=\\frac{1}{3}S_{\\text{осн}}\\cdot h$$</div><div class="formula-item"><div class="fn">Прямоугольный параллелепипед</div>$$V=abc$$$$d=\\sqrt{a^2+b^2+c^2}$$</div><div class="formula-item"><div class="fn">Куб (\\(a\\) — сторона)</div>$$V=a^3,\\;S=6a^2,\\;d=a\\sqrt{3}$$</div></div></div>
<div class="card card-formula"><div class="card-label">📐 Теорема Эйлера</div>$$V-E+F=2$$<p>\\(V\\) — вершины, \\(E\\) — рёбра, \\(F\\) — грани.</p></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Куб со стороной 4. Объём, площадь поверхности, диагональ</li><li>Правильная четырёхугольная пирамида: основание 6, высота 4. Объём?</li></ol></div>`,
        },
        {
          id: 'solids-revolution',
          title: 'Тела вращения',
          grade: 11,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">11 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Тела вращения</h1></div>
<div class="card card-formula"><div class="card-label">📐 Цилиндр</div><div class="formula-grid"><div class="formula-item"><div class="fn">Объём</div>$$V=\\pi r^2 h$$</div><div class="formula-item"><div class="fn">Полная поверхность</div>$$S=2\\pi r(r+h)$$</div></div></div>
<div class="card card-formula"><div class="card-label">📐 Конус</div><div class="formula-grid"><div class="formula-item"><div class="fn">Объём</div>$$V=\\frac{1}{3}\\pi r^2 h$$</div><div class="formula-item"><div class="fn">Образующая</div>$$l=\\sqrt{r^2+h^2}$$</div><div class="formula-item"><div class="fn">Полная поверхность</div>$$S=\\pi r(r+l)$$</div></div></div>
<div class="card card-formula"><div class="card-label">📐 Шар</div><div class="formula-grid"><div class="formula-item"><div class="fn">Объём</div>$$V=\\frac{4}{3}\\pi r^3$$</div><div class="formula-item"><div class="fn">Площадь сферы</div>$$S=4\\pi r^2$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Цилиндр: r=3, h=5. Объём и полная поверхность</li><li>Конус: r=4, h=3. Объём и образующая</li><li>Шар: r=6. Объём и площадь поверхности</li></ol></div>`,
        },
      ],
    },
    {
      id: 'coordinates',
      title: '🗺️ Координатная геометрия',
      topics: [
        {
          id: 'coordinates-plane',
          title: 'Координатная плоскость',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#06B6D4">Геометрия</span></div><h1>Координатная плоскость</h1></div>
<div class="card card-formula"><div class="card-label">📐 Основные формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Расстояние между точками</div>$$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$</div><div class="formula-item"><div class="fn">Середина отрезка</div>$$M=\\left(\\frac{x_1+x_2}{2};\\frac{y_1+y_2}{2}\\right)$$</div><div class="formula-item"><div class="fn">Уравнение прямой</div>$$y-y_0=k(x-x_0)$$</div><div class="formula-item"><div class="fn">Уравнение окружности</div>$$(x-a)^2+(y-b)^2=r^2$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Расстояние между A(1,2) и B(4,6)</li><li>Середина AB: A(-3,1), B(5,7)</li><li>Уравнение прямой через (2,3) с k=2</li></ol></div>`,
        },
      ],
    },
  ],
};

export default geometryData;
