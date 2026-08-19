import type { SubjectData } from './types';

const algebraData: SubjectData = {
  subject: 'algebra',
  title: 'Алгебра',
  icon: '📐',
  color: '#8B5CF6',
  colorRgb: '139, 92, 246',
  sections: [
    {
      id: 'numbers',
      title: '🔢 Числа и выражения',
      topics: [
        {
          id: 'degrees',
          title: 'Степени с натуральным показателем',
          grade: 7,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Степени с натуральным показателем</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p><strong>Степенью</strong> числа \\(a\\) с натуральным показателем \\(n\\) называется произведение \\(n\\) множителей, равных \\(a\\):</p>$$a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ раз}}$$<p>\\(a\\) — <em>основание</em>, \\(n\\) — <em>показатель</em> степени.</p></div>
<div class="card card-formula"><div class="card-label">📐 Свойства степеней</div><div class="formula-grid"><div class="formula-item"><div class="fn">Произведение</div>$$a^m \\cdot a^n = a^{m+n}$$</div><div class="formula-item"><div class="fn">Частное</div>$$\\frac{a^m}{a^n} = a^{m-n}$$</div><div class="formula-item"><div class="fn">Степень степени</div>$$(a^m)^n = a^{mn}$$</div><div class="formula-item"><div class="fn">Степень произведения</div>$$(ab)^n = a^n b^n$$</div><div class="formula-item"><div class="fn">Степень дроби</div>$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$</div><div class="formula-item"><div class="fn">Нулевая степень</div>$$a^0 = 1,\\; a \\neq 0$$</div></div></div>
<div class="card card-example"><div class="card-label">✏️ Примеры</div><div class="example-list"><div class="ex">\\(2^3 \\cdot 2^4 = 2^7 = 128\\)</div><div class="ex">\\((3^2)^3 = 3^6 = 729\\)</div><div class="ex">\\(\\dfrac{5^7}{5^4} = 5^3 = 125\\)</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Вычислите: \\(3^4 \\cdot 3^2\\)</li><li>Упростите: \\(\\dfrac{a^8}{a^3}\\)</li><li>Вычислите: \\((2^3)^2 \\cdot 2^0\\)</li><li>Упростите: \\((2ab)^3\\)</li></ol></div>`,
        },
        {
          id: 'roots',
          title: 'Корни и иррациональные числа',
          grade: 8,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Корни и иррациональные числа</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p><strong>Квадратным корнем</strong> из числа \\(a \\geq 0\\) называется неотрицательное число \\(b\\), такое что \\(b^2 = a\\). Обозначение: \\(b = \\sqrt{a}\\).</p><p><strong>Иррациональные числа</strong> — числа, которые нельзя представить дробью \\(\\frac{p}{q}\\). Например: \\(\\sqrt{2}, \\pi, e\\).</p></div>
<div class="card card-formula"><div class="card-label">📐 Свойства корней</div><div class="formula-grid"><div class="formula-item"><div class="fn">Произведение</div>$$\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}$$</div><div class="formula-item"><div class="fn">Частное</div>$$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$$</div><div class="formula-item"><div class="fn">Степень</div>$$\\sqrt{a^n} = a^{n/2}$$</div><div class="formula-item"><div class="fn">Модуль</div>$$\\sqrt{a^2} = |a|$$</div></div></div>
<div class="card card-example"><div class="card-label">✏️ Примеры</div><div class="example-list"><div class="ex">\\(\\sqrt{12} = 2\\sqrt{3}\\)</div><div class="ex">\\(\\sqrt{18} - \\sqrt{2} = 2\\sqrt{2}\\)</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Упростите: \\(\\sqrt{75} - \\sqrt{48}\\)</li><li>Рационализируйте: \\(\\dfrac{3}{\\sqrt{5}-1}\\)</li></ol></div>`,
        },
        {
          id: 'logarithms',
          title: 'Логарифмы',
          grade: 10,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">10 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Логарифмы</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p><strong>Логарифмом</strong> числа \\(b\\) по основанию \\(a\\):</p>$$\\log_a b = c \\iff a^c = b$$<ul><li>\\(\\lg b = \\log_{10} b\\) — десятичный</li><li>\\(\\ln b = \\log_e b\\) — натуральный (\\(e \\approx 2{,}718\\))</li></ul></div>
<div class="card card-formula"><div class="card-label">📐 Свойства</div><div class="formula-grid"><div class="formula-item"><div class="fn">Произведение</div>$$\\log_a(xy) = \\log_a x + \\log_a y$$</div><div class="formula-item"><div class="fn">Частное</div>$$\\log_a\\frac{x}{y} = \\log_a x - \\log_a y$$</div><div class="formula-item"><div class="fn">Степень</div>$$\\log_a x^n = n\\log_a x$$</div><div class="formula-item"><div class="fn">Смена основания</div>$$\\log_a b = \\frac{\\log_c b}{\\log_c a}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(\\log_5 125\\)</li><li>\\(\\log_2 6 - \\log_2 3\\)</li></ol></div>
<div class="card card-note"><div class="card-label">💡 Запомните</div><p>ОДЗ: аргумент логарифма строго больше нуля!</p></div>`,
        },
      ],
    },
    {
      id: 'equations',
      title: '⚖️ Уравнения и неравенства',
      topics: [
        {
          id: 'linear-eq',
          title: 'Линейные уравнения',
          grade: 7,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Линейные уравнения</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p>Уравнение вида \\(ax + b = 0\\), \\(a \\neq 0\\). Корень: \\(x = -\\dfrac{b}{a}\\)</p></div>
<div class="card card-example"><div class="card-label">✏️ Пример</div><p>\\(3(x-2)-(x+4)=6\\)</p><div class="steps"><div class="step"><span class="step-n">1</span>\\(3x-6-x-4=6\\)</div><div class="step"><span class="step-n">2</span>\\(2x=16\\)</div><div class="step"><span class="step-n">✓</span>\\(x=8\\)</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(5x-3=2x+9\\)</li><li>\\(\\dfrac{x-1}{3}+\\dfrac{x+2}{6}=2\\)</li></ol></div>`,
        },
        {
          id: 'quadratic-eq',
          title: 'Квадратные уравнения',
          grade: 8,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Квадратные уравнения</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p>\\(ax^2 + bx + c = 0\\), \\(a \\neq 0\\)</p></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div>$$D = b^2 - 4ac$$$$x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$$<div class="formula-grid"><div class="formula-item"><div class="fn">D &gt; 0</div><p>Два вещественных корня</p></div><div class="formula-item"><div class="fn">D = 0</div><p>Один корень: \\(x=-\\frac{b}{2a}\\)</p></div><div class="formula-item"><div class="fn">D &lt; 0</div><p>Вещественных корней нет</p></div></div></div>
<div class="card card-formula"><div class="card-label">📐 Теорема Виета (приведённое)</div>$$x_1+x_2=-p,\quad x_1\\cdot x_2=q$$</div>
<div class="card card-example"><div class="card-label">✏️ Пример</div><p>\\(2x^2-5x+3=0\\)</p><div class="steps"><div class="step"><span class="step-n">1</span>\\(D=25-24=1\\)</div><div class="step"><span class="step-n">2</span>\\(x_1=\\frac{3}{2},\\;x_2=1\\)</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(x^2-5x+6=0\\)</li><li>\\(3x^2-7x+2=0\\)</li></ol></div>`,
        },
        {
          id: 'systems',
          title: 'Системы линейных уравнений',
          grade: 7,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Системы линейных уравнений</h1></div>
<div class="card card-formula"><div class="card-label">📐 Методы решения</div><div class="method-block"><div class="method-title">Метод подстановки</div><ol><li>Выразить одну переменную</li><li>Подставить в другое уравнение</li><li>Решить и найти обе переменные</li></ol></div></div>
<div class="card card-example"><div class="card-label">✏️ Пример (метод сложения)</div><p>\\(\\begin{cases}2x+3y=7\\\\x-y=1\\end{cases}\\)</p><div class="steps"><div class="step"><span class="step-n">1</span>Умножим второе на 3: \\(3x-3y=3\\)</div><div class="step"><span class="step-n">2</span>Сложим: \\(5x=10 \\Rightarrow x=2\\)</div><div class="step"><span class="step-n">✓</span>\\(y=x-1=1\\)</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(\\begin{cases}x+y=5\\\\x-y=1\\end{cases}\\)</li><li>\\(\\begin{cases}3x-2y=4\\\\x+y=3\\end{cases}\\)</li></ol></div>`,
        },
        {
          id: 'exponential-eq',
          title: 'Показательные уравнения',
          grade: 10,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">10 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Показательные уравнения</h1></div>
<div class="card card-definition"><div class="card-label">📖 Основное свойство</div><p>\\(a^{f(x)}=a^{g(x)} \\iff f(x)=g(x)\\) (при \\(a>0, a\\neq 1\\))</p></div>
<div class="card card-formula"><div class="card-label">📐 Методы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Приведение к основанию</div>$$2^x=8 \\Rightarrow 2^x=2^3 \\Rightarrow x=3$$</div><div class="formula-item"><div class="fn">Замена переменной</div>$$4^x-6\\cdot 2^x+8=0,\\;t=2^x$$</div><div class="formula-item"><div class="fn">Логарифмирование</div>$$3^x=7 \\Rightarrow x=\\log_3 7$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(2^{x+1}=16\\)</li><li>\\(5^{2x}-26\\cdot 5^x+25=0\\)</li></ol></div>`,
        },
        {
          id: 'inequalities',
          title: 'Неравенства',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Неравенства</h1></div>
<div class="card card-formula"><div class="card-label">📐 Метод интервалов</div><ol class="algo-list"><li>Перенести всё в одну сторону (0 в другой)</li><li>Разложить на множители</li><li>Найти корни</li><li>Нанести на числовую ось и определить знаки</li><li>Записать ответ</li></ol></div>
<div class="card card-example"><div class="card-label">✏️ Пример</div><p>\\(x^2-5x+6>0\\)</p><div class="steps"><div class="step"><span class="step-n">1</span>\\((x-2)(x-3)>0\\)</div><div class="step"><span class="step-n">2</span>Корни: 2 и 3</div><div class="step"><span class="step-n">✓</span>\\(x\\in(-\\infty;2)\\cup(3;+\\infty)\\)</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(3x-6>0\\)</li><li>\\(x^2-4\\leq 0\\)</li><li>\\(x^2-7x+10<0\\)</li></ol></div>`,
        },
      ],
    },
    {
      id: 'functions',
      title: '📈 Функции',
      topics: [
        {
          id: 'linear-func',
          title: 'Линейная функция',
          grade: 7,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">7 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Линейная функция</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p>\\(y = kx + b\\), \\(k\\neq 0\\). График — <em>прямая</em>.</p></div>
<div class="card card-formula"><div class="card-label">📐 Характеристики</div><div class="formula-grid"><div class="formula-item"><div class="fn">k &gt; 0</div><p>Функция возрастает</p></div><div class="formula-item"><div class="fn">k &lt; 0</div><p>Функция убывает</p></div><div class="formula-item"><div class="fn">Нуль функции</div>$$x=-\\frac{b}{k}$$</div><div class="formula-item"><div class="fn">Параллельность</div><p>\\(k_1=k_2\\)</p></div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Постройте: \\(y=-x+4\\)</li><li>Найдите нуль: \\(y=3x-6\\)</li></ol></div>`,
        },
        {
          id: 'quadratic-func',
          title: 'Квадратичная функция',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Квадратичная функция</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p>\\(y=ax^2+bx+c\\), \\(a\\neq 0\\). График — <em>парабола</em>.</p><ul><li>\\(a>0\\) — ветви вверх, минимум</li><li>\\(a<0\\) — ветви вниз, максимум</li></ul></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Вершина</div>$$x_0=-\\frac{b}{2a},\\;y_0=-\\frac{D}{4a}$$</div><div class="formula-item"><div class="fn">Ось симметрии</div>$$x=-\\frac{b}{2a}$$</div><div class="formula-item"><div class="fn">Нули</div>$$x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Вершина \\(y=2x^2-8x+5\\)</li><li>При каких \\(x\\) функция \\(y=-x^2+4>0\\)?</li></ol></div>`,
        },
        {
          id: 'trig-func',
          title: 'Тригонометрические функции',
          grade: 10,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">10 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Тригонометрические функции</h1></div>
<div class="card card-definition"><div class="card-label">📖 Единичная окружность</div>$$\\sin^2\\alpha+\\cos^2\\alpha=1$$</div>
<div class="card card-formula"><div class="card-label">📐 Значения основных углов</div><div class="trig-table"><table><thead><tr><th>\\(\\alpha\\)</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr></thead><tbody><tr><td>\\(\\sin\\)</td><td>0</td><td>\\(\\frac{1}{2}\\)</td><td>\\(\\frac{\\sqrt{2}}{2}\\)</td><td>\\(\\frac{\\sqrt{3}}{2}\\)</td><td>1</td></tr><tr><td>\\(\\cos\\)</td><td>1</td><td>\\(\\frac{\\sqrt{3}}{2}\\)</td><td>\\(\\frac{\\sqrt{2}}{2}\\)</td><td>\\(\\frac{1}{2}\\)</td><td>0</td></tr></tbody></table></div></div>
<div class="card card-formula"><div class="card-label">📐 Формулы сложения</div>$$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta$$$$\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$$</div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(\\sin 135°\\)</li><li>\\(\\cos 75°=\\cos(45°+30°)\\)</li></ol></div>`,
        },
      ],
    },
    {
      id: 'calculus',
      title: '∫ Начала анализа',
      topics: [
        {
          id: 'derivative',
          title: 'Производная',
          grade: 11,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">11 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Производная</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div>$$f'(x_0)=\\lim_{\\Delta x\\to 0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$$<p>Геометрически: угловой коэффициент касательной.</p></div>
<div class="card card-formula"><div class="card-label">📐 Таблица производных</div><div class="formula-grid"><div class="formula-item"><div class="fn">Константа</div>$$(C)'=0$$</div><div class="formula-item"><div class="fn">Степень</div>$$(x^n)'=nx^{n-1}$$</div><div class="formula-item"><div class="fn">Синус</div>$$(\\sin x)'=\\cos x$$</div><div class="formula-item"><div class="fn">Косинус</div>$$(\\cos x)'=-\\sin x$$</div><div class="formula-item"><div class="fn">\\(e^x\\)</div>$$(e^x)'=e^x$$</div><div class="formula-item"><div class="fn">\\(\\ln x\\)</div>$$(\\ln x)'=\\frac{1}{x}$$</div></div></div>
<div class="card card-formula"><div class="card-label">📐 Правила</div><div class="formula-grid"><div class="formula-item"><div class="fn">Произведение</div>$$(fg)'=f'g+fg'$$</div><div class="formula-item"><div class="fn">Сложная функция</div>$$(f(g(x)))'=f'(g)\\cdot g'$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(f(x)=3x^4-2x^2+7\\)</li><li>\\(f(x)=\\sin(2x)\\)</li><li>Уравнение касательной к \\(y=x^2\\) в точке \\(x=1\\)</li></ol></div>`,
        },
        {
          id: 'integral',
          title: 'Интеграл',
          grade: 11,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">11 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Интеграл</h1></div>
<div class="card card-definition"><div class="card-label">📖 Формула Ньютона–Лейбница</div>$$\\int_a^b f(x)\\,dx = F(b)-F(a)$$</div>
<div class="card card-formula"><div class="card-label">📐 Таблица интегралов</div><div class="formula-grid"><div class="formula-item">$$\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$$</div><div class="formula-item">$$\\int\\frac{1}{x}\\,dx=\\ln|x|+C$$</div><div class="formula-item">$$\\int\\sin x\\,dx=-\\cos x+C$$</div><div class="formula-item">$$\\int\\cos x\\,dx=\\sin x+C$$</div><div class="formula-item">$$\\int e^x\\,dx=e^x+C$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>\\(\\int(3x^2-2x+1)\\,dx\\)</li><li>\\(\\int_0^1 x^2\\,dx\\)</li><li>Площадь под \\(y=x^2\\) на \\([0,2]\\)</li></ol></div>`,
        },
      ],
    },
    {
      id: 'sequences',
      title: '🔄 Прогрессии',
      topics: [
        {
          id: 'arith-prog',
          title: 'Арифметическая прогрессия',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Арифметическая прогрессия</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p>Каждый следующий член отличается от предыдущего на постоянное число \\(d\\).</p></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">n-й член</div>$$a_n=a_1+(n-1)d$$</div><div class="formula-item"><div class="fn">Сумма n членов</div>$$S_n=\\frac{(a_1+a_n)\\cdot n}{2}$$</div><div class="formula-item"><div class="fn">Средний член</div>$$a_n=\\frac{a_{n-1}+a_{n+1}}{2}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>2, 5, 8, … — найдите \\(a_{15}\\) и \\(S_{15}\\)</li><li>\\(a_1=4\\), \\(a_7=22\\) — найдите разность</li></ol></div>`,
        },
        {
          id: 'geom-prog',
          title: 'Геометрическая прогрессия',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Геометрическая прогрессия</h1></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">n-й член</div>$$b_n=b_1\\cdot q^{n-1}$$</div><div class="formula-item"><div class="fn">Сумма n членов</div>$$S_n=\\frac{b_1(q^n-1)}{q-1}$$</div><div class="formula-item"><div class="fn">Бесконечная (|q|&lt;1)</div>$$S=\\frac{b_1}{1-q}$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>4, 12, 36, … — \\(b_6\\) и \\(S_6\\)</li><li>Бесконечная: \\(1, \\frac{1}{2}, \\frac{1}{4}, \\ldots\\)</li></ol></div>`,
        },
      ],
    },
    {
      id: 'probability',
      title: '🎲 Комбинаторика и вероятность',
      topics: [
        {
          id: 'combinatorics',
          title: 'Комбинаторика',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Комбинаторика</h1></div>
<div class="card card-formula"><div class="card-label">📐 Основные формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Перестановки</div>$$P_n=n!$$</div><div class="formula-item"><div class="fn">Размещения</div>$$A_n^k=\\frac{n!}{(n-k)!}$$</div><div class="formula-item"><div class="fn">Сочетания</div>$$C_n^k=\\frac{n!}{k!(n-k)!}$$</div><div class="formula-item"><div class="fn">Бином Ньютона</div>$$(a+b)^n=\\sum_{k=0}^n C_n^k a^{n-k}b^k$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Анаграммы слова «МАМА»</li><li>Выбрать 3 из 7: \\(C_7^3\\)</li></ol></div>`,
        },
        {
          id: 'probability-theory',
          title: 'Теория вероятностей',
          grade: 9,
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">9 класс</span><span class="subject-tag" style="--sc:#8B5CF6">Алгебра</span></div><h1>Теория вероятностей</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div>$$P(A)=\\frac{m}{n},\quad 0\\leq P(A)\\leq 1$$<p>\\(m\\) — благоприятные исходы, \\(n\\) — все равновозможные.</p></div>
<div class="card card-formula"><div class="card-label">📐 Формулы</div><div class="formula-grid"><div class="formula-item"><div class="fn">Сложение (несовместные)</div>$$P(A+B)=P(A)+P(B)$$</div><div class="formula-item"><div class="fn">Умножение (независимые)</div>$$P(AB)=P(A)\\cdot P(B)$$</div><div class="formula-item"><div class="fn">Противоположное</div>$$P(\\bar{A})=1-P(A)$$</div></div></div>
<div class="card card-practice"><div class="card-label">🎯 Задачи</div><ol><li>Монета 2 раза — вероятность двух орлов</li><li>Из 10 шаров (4 белых, 6 чёрных) — вероятность 2 белых</li></ol></div>`,
        },
      ],
    },
  ],
};

export default algebraData;
