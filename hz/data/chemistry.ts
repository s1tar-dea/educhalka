import type { SubjectData } from './types';

const chemistryData: SubjectData = {
  subject: 'chemistry',
  title: 'Химия',
  icon: '🧪',
  color: '#D946EF',
  colorRgb: '217, 70, 239',
  sections: [
    {
      id: 'basics',
      title: '⚛️ Основы химии',
      topics: [
        {
          id: 'atoms',
          title: 'Строение атома',
          grade: 8,
          image: 'https://images.unsplash.com/photo-1603126859596-f949c8695844?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#D946EF">Химия</span></div><h1>Строение атома</h1></div>
<div class="card card-definition"><div class="card-label">📖 Определение</div><p><strong>Атом</strong> — мельчайшая химически неделимая частица вещества. Состоит из положительно заряженного ядра и отрицательно заряженных электронов, вращающихся вокруг него.</p></div>
<div class="card card-formula"><div class="card-label">🔬 Состав атома</div><div class="formula-grid"><div class="formula-item"><div class="fn">Протоны (p+)</div><p>Заряд +1, масса 1</p></div><div class="formula-item"><div class="fn">Нейтроны (n0)</div><p>Заряд 0, масса 1</p></div><div class="formula-item"><div class="fn">Электроны (e-)</div><p>Заряд -1, масса ~0</p></div></div></div>
<div class="card card-example"><div class="card-label">💡 Правило</div><p>Число протонов равно порядковому номеру элемента в таблице Менделеева. Число электронов в нейтральном атоме равно числу протонов. Атомная масса = протоны + нейтроны.</p></div>`,
        },
        {
          id: 'periodic',
          title: 'Периодический закон',
          grade: 8,
          image: 'https://images.unsplash.com/photo-1532187655074-ce4f09d84e93?auto=format&fit=crop&q=80&w=1200&h=600',
          content: `<div class="topic-header"><div class="topic-meta"><span class="grade-badge">8 класс</span><span class="subject-tag" style="--sc:#D946EF">Химия</span></div><h1>Периодический закон Менделеева</h1></div>
<div class="card card-definition"><div class="card-label">📖 Формулировка</div><p>Свойства химических элементов, а также формы и свойства соединений элементов находятся в периодической зависимости от заряда ядер их атомов.</p></div>`,
        }
      ]
    }
  ]
};

export default chemistryData;
