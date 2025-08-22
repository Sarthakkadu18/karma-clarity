export interface Verse {
  id: string;
  text: string;
  translation: string;
  source: string;
  context: string;
  tags: string[];
}

export const mockVerses: Verse[] = [
  {
    id: '1',
    text: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    translation: 'You have a right to perform your prescribed duty, but not to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.',
    source: 'Bhagavad Gita',
    context: 'Chapter 2, Verse 47 - Krishna advising Arjuna on the battlefield of Kurukshetra',
    tags: ['duty', 'detachment', 'action', 'results']
  },
  {
    id: '2',
    text: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
    translation: 'And whoever fears Allah - He will make for him a way out.',
    source: 'Quran',
    context: 'Surah At-Talaq (65:2) - Divine guidance on trusting in Allah during difficulties',
    tags: ['trust', 'faith', 'guidance', 'relief']
  },
  {
    id: '3',
    text: 'Be still, and know that I am God.',
    translation: 'Be still, and know that I am God.',
    source: 'Bible',
    context: 'Psalm 46:10 - A call to find peace and trust in divine presence',
    tags: ['peace', 'stillness', 'divine', 'trust']
  },
  {
    id: '4',
    text: 'सब्बे सत्ता सुखिता होन्तु।',
    translation: 'May all beings be happy.',
    source: 'Dhammapada',
    context: 'Traditional Buddhist blessing expressing universal compassion',
    tags: ['compassion', 'happiness', 'universal', 'loving-kindness']
  },
  {
    id: '5',
    text: '道可道，非常道。名可名，非常名。',
    translation: 'The Way that can be spoken is not the eternal Way. The Name that can be named is not the eternal Name.',
    source: 'Tao Te Ching',
    context: 'Chapter 1 - Laozi describing the ineffable nature of the Tao',
    tags: ['wisdom', 'mystery', 'nature', 'eternal']
  },
  {
    id: '6',
    text: 'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥',
    translation: 'Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called yoga.',
    source: 'Bhagavad Gita',
    context: 'Chapter 2, Verse 48 - Krishna teaching about equanimity and detachment',
    tags: ['equanimity', 'balance', 'yoga', 'detachment']
  }
];

export const getRandomVerse = (): Verse => {
  return mockVerses[Math.floor(Math.random() * mockVerses.length)];
};

export const getVersesBySource = (source: string): Verse[] => {
  return mockVerses.filter(verse => verse.source.toLowerCase().includes(source.toLowerCase()));
};

export const searchVerses = (query: string): Verse[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockVerses.filter(verse => 
    verse.text.toLowerCase().includes(lowercaseQuery) ||
    verse.translation.toLowerCase().includes(lowercaseQuery) ||
    verse.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};