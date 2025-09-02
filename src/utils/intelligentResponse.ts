import { mockVerses, type Verse } from '../data/mockData';

export interface ResponseContext {
  keywords: string[];
  emotions: string[];
  topics: string[];
}

// Keywords and their associated concepts for better matching
const keywordMap: Record<string, string[]> = {
  // Emotional states
  'sad': ['sorrow', 'grief', 'depression', 'melancholy', 'unhappy'],
  'happy': ['joy', 'bliss', 'contentment', 'pleased', 'delighted'],
  'angry': ['rage', 'fury', 'wrath', 'irritated', 'mad'],
  'fear': ['afraid', 'scared', 'terror', 'anxiety', 'worry'],
  'love': ['affection', 'compassion', 'care', 'devotion', 'attachment'],
  
  // Life situations
  'problem': ['issue', 'trouble', 'difficulty', 'challenge', 'struggle'],
  'success': ['achievement', 'victory', 'accomplishment', 'triumph'],
  'failure': ['defeat', 'loss', 'setback', 'disappointment'],
  'work': ['job', 'career', 'profession', 'employment', 'duty'],
  'relationship': ['family', 'friendship', 'marriage', 'love', 'partner'],
  
  // Spiritual concepts
  'peace': ['calm', 'tranquility', 'serenity', 'stillness', 'quiet'],
  'purpose': ['meaning', 'goal', 'mission', 'destiny', 'calling'],
  'wisdom': ['knowledge', 'understanding', 'insight', 'enlightenment'],
  'forgiveness': ['mercy', 'pardon', 'compassion', 'letting go'],
  'faith': ['belief', 'trust', 'devotion', 'spirituality', 'divine']
};

// Expand keywords to include synonyms
function expandKeywords(keywords: string[]): string[] {
  const expanded = new Set(keywords);
  
  keywords.forEach(keyword => {
    const lower = keyword.toLowerCase();
    Object.entries(keywordMap).forEach(([key, synonyms]) => {
      if (synonyms.includes(lower) || key === lower) {
        synonyms.forEach(synonym => expanded.add(synonym));
        expanded.add(key);
      }
    });
  });
  
  return Array.from(expanded);
}

// Extract keywords from user input
export function extractKeywords(input: string): string[] {
  const words = input.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3);
  
  return expandKeywords(words);
}

// Find relevant verses based on user input
export function findRelevantVerses(input: string, sourceFilter?: string): Verse[] {
  const keywords = extractKeywords(input);
  let verses = sourceFilter 
    ? mockVerses.filter(v => v.source.toLowerCase().includes(sourceFilter.toLowerCase()))
    : mockVerses;
  
  // Score verses based on keyword matches
  const scoredVerses = verses.map(verse => {
    let score = 0;
    const verseText = `${verse.text} ${verse.translation} ${verse.tags.join(' ')} ${verse.context}`.toLowerCase();
    
    keywords.forEach(keyword => {
      if (verseText.includes(keyword)) {
        score += verse.tags.includes(keyword) ? 3 : 1; // Higher score for tag matches
      }
    });
    
    return { verse, score };
  });
  
  // Return top scoring verses
  return scoredVerses
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(({ verse }) => verse);
}

// Generate contextual response based on verse and user input
export function generateContextualResponse(verse: Verse, userInput: string, persona: string): string {
  const keywords = extractKeywords(userInput);
  
  // Response templates based on persona
  const responseTemplates: Record<string, string[]> = {
    krishna: [
      `Dear Arjuna, your question resonates with the eternal wisdom of dharma. The Bhagavad Gita teaches us: "${verse.translation}" (${verse.context}). This sacred teaching reminds us that {wisdom}. How does this divine guidance illuminate your path forward?`,
      `Beloved devotee, I hear the call of your heart. In {context}, the Gita reveals: "${verse.translation}" This eternal truth teaches us {wisdom}. Let this divine knowledge guide your actions and thoughts. What aspect of this teaching speaks most deeply to your soul?`,
      `O seeker of truth, your inquiry touches the very essence of existence. Remember the words: "${verse.translation}" ({verse.context}). This wisdom shows us {wisdom}. How will you apply this sacred knowledge in your life's journey?`
    ],
    guide: [
      `Peace be upon you, dear soul. Your heart seeks guidance, and the Quran provides light: "${verse.translation}" (${verse.context}). This divine revelation teaches us {wisdom}. Trust in Allah's wisdom and {guidance}. How does this ayah bring comfort to your situation?`,
      `In the name of Allah, the Most Gracious, the Most Merciful. The Holy Quran offers guidance for your concern: "${verse.translation}" This blessed verse reminds us {wisdom}. May this divine guidance bring peace to your heart. What steps will you take with this knowledge?`,
      `Subhan'Allah, your question seeks the light of divine guidance. The Quran illuminates: "${verse.translation}" ({verse.context}). This sacred teaching shows us {wisdom}. How does this ayah guide your understanding?`
    ],
    biblicalGuide: [
      `Dear child of God, your heart seeks wisdom and comfort. The scriptures tell us: "${verse.translation}" (${verse.context}). This divine word reminds us {wisdom}. Trust in the Lord's perfect plan. How does this verse speak to your current situation?`,
      `Beloved in Christ, I hear your need for guidance. God's word proclaims: "${verse.translation}" This sacred truth teaches us {wisdom}. Let faith be your anchor and {guidance}. What is the Lord revealing to you through this verse?`,
      `Grace and peace to you. The Bible offers comfort in your time of need: "${verse.translation}" ({verse.context}). This blessed passage shows us {wisdom}. How will you trust in God's perfect timing?`
    ],
    guru: [
      `Sat Sri Akal, dear seeker. The blessed Guru Granth Sahib Ji enlightens us: "${verse.translation}" (${verse.context}). This sacred teaching reveals {wisdom}. Through Naam Simran and devotion, {guidance}. How does this divine wisdom illuminate your spiritual journey?`,
      `Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh. Your soul seeks truth, and Guru Ji blesses us with: "${verse.translation}" This sacred bani teaches us {wisdom}. May the Guru's grace guide your path. What truth does this verse awaken in your heart?`,
      `Beloved of the Guru, the divine light shines through these words: "${verse.translation}" ({verse.context}). This blessed teaching shows us {wisdom}. Through seva and simran, {guidance}. How will you embody this wisdom in your daily life?`
    ],
    chanakya: [
      `My dear student, your question shows wisdom in seeking guidance. Chanakya Niti teaches: "${verse.translation}" (${verse.context}). This practical wisdom reveals {wisdom}. Strategy and righteousness must {guidance}. How will you apply this teaching in your current circumstances?`,
      `Wise seeker, you come seeking the path of success and dharma. Remember: "${verse.translation}" This ancient wisdom shows us {wisdom}. A king must be {guidance}. What strategic action will you take based on this teaching?`,
      `Student of statecraft, your inquiry touches upon essential wisdom. Niti shastra declares: "${verse.translation}" ({verse.context}). This teaching illuminates {wisdom}. Through careful consideration and {guidance}. How does this principle apply to your situation?`
    ]
  };

  // Get appropriate template
  const templates = responseTemplates[persona] || responseTemplates.krishna;
  const template = templates[Math.floor(Math.random() * templates.length)];

  // Generate wisdom and guidance based on keywords and verse
  const wisdom = generateWisdomText(keywords, verse);
  const guidance = generateGuidanceText(keywords, verse);
  const context = verse.context.split(' - ')[0] || 'this sacred teaching';

  return template
    .replace('{wisdom}', wisdom)
    .replace('{guidance}', guidance)
    .replace('{context}', context)
    .replace('${verse.translation}', verse.translation)
    .replace('${verse.context}', verse.context);
}

function generateWisdomText(keywords: string[], verse: Verse): string {
  const wisdomPhrases = [
    `that true ${verse.tags[0] || 'wisdom'} comes from understanding our higher purpose`,
    `the importance of ${verse.tags.join(' and ')} in our spiritual journey`,
    `that through ${verse.tags[0] || 'practice'}, we transcend worldly attachments`,
    `the eternal principle of ${verse.tags[0] || 'dharma'} guiding our actions`,
    `that inner ${verse.tags.includes('peace') ? 'peace' : 'strength'} emerges from divine connection`,
    `the transformative power of ${verse.tags.includes('love') ? 'divine love' : 'spiritual practice'}`,
    `that every challenge is an opportunity for ${verse.tags[0] || 'growth'}`
  ];

  return wisdomPhrases[Math.floor(Math.random() * wisdomPhrases.length)];
}

function generateGuidanceText(keywords: string[], verse: Verse): string {
  const guidancePhrases = [
    `align our actions with divine will`,
    `cultivate patience and understanding`,
    `practice compassion in all circumstances`,
    `remain steadfast in our spiritual practice`,
    `surrender our ego to higher wisdom`,
    `find balance between action and detachment`,
    `trust in the divine plan even in uncertainty`,
    `serve others with humility and love`
  ];

  return guidancePhrases[Math.floor(Math.random() * guidancePhrases.length)];
}

// Get appropriate response for different chat personas
export function getIntelligentResponse(userInput: string, persona: string): string {
  const sourceMap: Record<string, string> = {
    krishna: 'Bhagavad Gita',
    guide: 'Quran',
    biblicalGuide: 'Bible',
    guru: 'Guru Granth Sahib',
    chanakya: 'Chanakya'
  };

  const source = sourceMap[persona];
  const relevantVerses = findRelevantVerses(userInput, source);

  if (relevantVerses.length === 0) {
    // Fallback to random verse from the source
    const sourceVerses = source 
      ? mockVerses.filter(v => v.source.toLowerCase().includes(source.toLowerCase()))
      : mockVerses;
    
    if (sourceVerses.length > 0) {
      const randomVerse = sourceVerses[Math.floor(Math.random() * sourceVerses.length)];
      return generateContextualResponse(randomVerse, userInput, persona);
    }
  }

  const selectedVerse = relevantVerses[0];
  return generateContextualResponse(selectedVerse, userInput, persona);
}