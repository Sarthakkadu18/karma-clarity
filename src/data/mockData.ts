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
  },
  {
    id: '7',
    text: 'राजा कालस्य कारणम्।',
    translation: 'The king is the cause of the age.',
    source: 'Chanakya Niti',
    context: 'Chanakya teaches that leadership shapes the moral fabric of society',
    tags: ['leadership', 'responsibility', 'governance', 'influence']
  },
  {
    id: '8',
    text: 'अर्थस्य पुरुषो दासो दासस्त्वर्थो न कस्यचित्।',
    translation: 'A person is slave to wealth, but wealth is not slave to anyone.',
    source: 'Chanakya Niti',
    context: 'Warning about the power and dangers of attachment to material wealth',
    tags: ['wealth', 'attachment', 'wisdom', 'materialism']
  },
  {
    id: '9',
    text: 'क्षणे नष्टे कुतो दिनं दिने नष्टे कुतो रात्रिः।',
    translation: 'When a moment is lost, how can the day be achieved? When the day is lost, how can life be achieved?',
    source: 'Chanakya Niti',
    context: 'Chanakya emphasizing the importance of time management and presence',
    tags: ['time', 'productivity', 'mindfulness', 'success']
  },
  {
    id: '10',
    text: 'दुर्जनेषु च सर्पेषु वरं सर्पो न दुर्जनः।',
    translation: 'Between a wicked person and a serpent, the serpent is preferable.',
    source: 'Chanakya Niti',
    context: 'Teaching about discernment in relationships and avoiding toxic people',
    tags: ['relationships', 'discernment', 'character', 'wisdom']
  },
  {
    id: '11',
    text: 'अतिसर्वत्र वर्जयेत्।',
    translation: 'Excess in anything should be avoided.',
    source: 'Chanakya Niti',
    context: 'Principle of moderation and balance in all aspects of life',
    tags: ['moderation', 'balance', 'discipline', 'wisdom']
  },
  {
    id: '12',
    text: 'श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।',
    translation: 'A faithful person who is dedicated to wisdom and who subdues his senses gains knowledge, and having gained knowledge he quickly attains the supreme peace.',
    source: 'Bhagavad Gita',
    context: 'Chapter 4, Verse 39 - Krishna describing the path to knowledge',
    tags: ['faith', 'knowledge', 'peace', 'self-control']
  },
  {
    id: '13',
    text: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    translation: 'Whenever there is decline in righteousness and increase in unrighteousness, O Arjuna, at that time I manifest myself on earth.',
    source: 'Bhagavad Gita',
    context: 'Chapter 4, Verse 7 - Krishna explaining divine incarnation',
    tags: ['righteousness', 'divine', 'justice', 'protection']
  },
  {
    id: '14',
    text: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
    translation: 'Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.',
    source: 'Bhagavad Gita',
    context: 'Chapter 18, Verse 66 - Krishna\'s final teaching to Arjuna',
    tags: ['surrender', 'liberation', 'fearlessness', 'grace']
  },
  {
    id: '15',
    text: 'وَاللَّهُ يَدْعُو إِلَىٰ دَارِ السَّلَامِ وَيَهْدِي مَن يَشَاءُ إِلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
    translation: 'And Allah invites to the Home of Peace and guides whom He wills to a straight path.',
    source: 'Quran',
    context: 'Surah Yunus (10:25) - Divine invitation to peace and guidance',
    tags: ['peace', 'guidance', 'divine-call', 'straight-path']
  },
  {
    id: '16',
    text: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',
    translation: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds.',
    source: 'Quran',
    context: 'Surah Al-Anbiya (21:107) - The universal mercy of divine guidance',
    tags: ['mercy', 'universal', 'compassion', 'guidance']
  },
  {
    id: '17',
    text: 'وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا',
    translation: 'Worship Allah and associate nothing with Him, and be good to parents.',
    source: 'Quran',
    context: 'Surah An-Nisa (4:36) - Foundation of worship and family relationships',
    tags: ['worship', 'parents', 'respect', 'monotheism']
  },
  {
    id: '18',
    text: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Indeed, with hardship comes ease.',
    source: 'Quran',
    context: 'Surah Ash-Sharh (94:6) - Divine promise of relief after difficulty',
    tags: ['hope', 'perseverance', 'relief', 'patience']
  },
  {
    id: '19',
    text: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    translation: 'Trust in the Lord with all your heart and lean not on your own understanding.',
    source: 'Bible',
    context: 'Proverbs 3:5 - Wisdom about faith and trust in divine guidance',
    tags: ['trust', 'faith', 'humility', 'divine-wisdom']
  },
  {
    id: '20',
    text: 'I can do all things through Christ who strengthens me.',
    translation: 'I can do all things through Christ who strengthens me.',
    source: 'Bible',
    context: 'Philippians 4:13 - Paul\'s declaration of strength through faith',
    tags: ['strength', 'faith', 'empowerment', 'perseverance']
  },
  {
    id: '21',
    text: 'The Lord is my shepherd; I shall not want.',
    translation: 'The Lord is my shepherd; I shall not want.',
    source: 'Bible',
    context: 'Psalm 23:1 - David\'s expression of divine care and provision',
    tags: ['protection', 'provision', 'care', 'trust']
  },
  {
    id: '22',
    text: 'For God so loved the world that he gave his one and only Son.',
    translation: 'For God so loved the world that he gave his one and only Son.',
    source: 'Bible',
    context: 'John 3:16 - The foundation of divine love and sacrifice',
    tags: ['love', 'sacrifice', 'salvation', 'universal']
  },
  {
    id: '23',
    text: 'Love your enemies and pray for those who persecute you.',
    translation: 'Love your enemies and pray for those who persecute you.',
    source: 'Bible',
    context: 'Matthew 5:44 - Jesus teaching about radical love and forgiveness',
    tags: ['love', 'forgiveness', 'enemies', 'prayer']
  },
  {
    id: '24',
    text: 'विद्या ददाति विनयं विनयाद् याति पात्रताम्। पात्रत्वाद् धनमाप्नोति धनाद् धर्मं ततः सुखम्॥',
    translation: 'Education gives humility, from humility comes worthiness, from worthiness one gets wealth, from wealth dharma, and from dharma happiness.',
    source: 'Chanakya Niti',
    context: 'The progressive stages of education leading to ultimate happiness',
    tags: ['education', 'humility', 'worthiness', 'happiness']
  },
  {
    id: '25',
    text: 'आपदर्थे धनं रक्षेद् दारान् रक्षेद् धनैरपि। आत्मानं सततं रक्षेद् दारैरपि धनैरपि॥',
    translation: 'Save money for times of distress, protect your wife with money, but always protect yourself even at the cost of wife and money.',
    source: 'Chanakya Niti',
    context: 'Chanakya\'s teaching on priorities and self-preservation',
    tags: ['priorities', 'self-preservation', 'wisdom', 'practical']
  },
  {
    id: '26',
    text: 'सुखस्य मूलं धर्मः धर्मस्य मूलमर्थः। अर्थस्य मूलं राज्यं राज्यस्य मूलमिन्द्रियजयः॥',
    translation: 'The root of happiness is dharma, the root of dharma is wealth, the root of wealth is state, and the root of state is control over senses.',
    source: 'Chanakya Niti',
    context: 'The foundational hierarchy of governance and personal development',
    tags: ['happiness', 'dharma', 'governance', 'self-control']
  },
  {
    id: '27',
    text: 'त्यज दुर्जनसंसर्गं भज साधुसमागमम्। कुरु पुण्यमहोरात्रं स्मर नित्यमनित्यताम्॥',
    translation: 'Give up the company of wicked people, seek the company of good people, do good deeds day and night, and always remember the impermanence of life.',
    source: 'Chanakya Niti',
    context: 'Guidance on choosing companions and living righteously',
    tags: ['companions', 'righteousness', 'impermanence', 'good-deeds']
  },
  {
    id: '28',
    text: 'अनेकसंशयोच्छेदि परोक्षार्थस्य दर्शकम्। सर्वस्य लोचनं शास्त्रं यस्य नास्त्यन्ध एव सः॥',
    translation: 'Knowledge removes many doubts, reveals hidden meanings, and acts as eyes for everyone. One without knowledge is truly blind.',
    source: 'Chanakya Niti',
    context: 'The importance of knowledge and learning in life',
    tags: ['knowledge', 'wisdom', 'learning', 'insight']
  },
  {
    id: '29',
    text: 'मनसा चिन्तितं कार्यं वाचा नैव प्रकाशयेत्। मन्त्रेण रक्षयेद् गूढं कार्ये चापि नियोजयेत्॥',
    translation: 'What is planned in the mind should not be revealed in speech. Keep plans secret like a mantra and execute them in action.',
    source: 'Chanakya Niti',
    context: 'Strategic wisdom about planning and execution',
    tags: ['strategy', 'secrecy', 'planning', 'execution']
  },
  {
    id: '30',
    text: 'गुणी गुणं वेत्ति न वेत्ति निर्गुणः बली बलं वेत्ति न वेत्ति निर्बलः।',
    translation: 'The virtuous recognize virtue while the virtueless do not; the strong recognize strength while the weak do not.',
    source: 'Chanakya Niti',
    context: 'Understanding that like recognizes like in character and ability',
    tags: ['virtue', 'recognition', 'strength', 'character']
  },
  {
    id: '31',
    text: 'मत्तः परतरं नान्यत् किञ्चिदस्ति धनञ्जय। मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥',
    translation: 'There is nothing higher than Me, O Arjuna. All this is strung on Me like pearls on a thread.',
    source: 'Bhagavad Gita',
    context: 'Chapter 7, Verse 7 - Krishna revealing the ultimate reality',
    tags: ['supreme', 'unity', 'connection', 'ultimate-reality']
  },
  {
    id: '32',
    text: 'अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते। इति मत्वा भजन्ते मां बुधा भावसमन्विताः॥',
    translation: 'I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this perfectly engage in My devotional service with great faith.',
    source: 'Bhagavad Gita',
    context: 'Chapter 10, Verse 8 - The source of all creation',
    tags: ['source', 'creation', 'devotion', 'wisdom']
  },
  {
    id: '33',
    text: 'وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ',
    translation: 'And that there is nothing for man except what he strives for.',
    source: 'Quran',
    context: 'Surah An-Najm (53:39) - The principle of earning through effort',
    tags: ['effort', 'striving', 'reward', 'responsibility']
  },
  {
    id: '34',
    text: 'وَمَن تَوَكَّلَ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
    translation: 'And whoever relies upon Allah - then He is sufficient for him.',
    source: 'Quran',
    context: 'Surah At-Talaq (65:3) - The sufficiency of divine trust',
    tags: ['trust', 'reliance', 'sufficiency', 'faith']
  },
  {
    id: '35',
    text: 'Cast all your anxiety on him because he cares for you.',
    translation: 'Cast all your anxiety on him because he cares for you.',
    source: 'Bible',
    context: '1 Peter 5:7 - Divine care and concern for believers',
    tags: ['anxiety', 'care', 'trust', 'relief']
  },
  {
    id: '36',
    text: 'In all your ways acknowledge him, and he will make your paths straight.',
    translation: 'In all your ways acknowledge him, and he will make your paths straight.',
    source: 'Bible',
    context: 'Proverbs 3:6 - Divine guidance through acknowledgment',
    tags: ['acknowledgment', 'guidance', 'paths', 'direction']
  },
  {
    id: '37',
    text: 'ਸਤਿਗੁਰੁ ਨਾਨਕੁ ਪ੍ਰਗਟਿਆ ਮਿਟੀ ਧੁੰਧ ਜਗ ਚਾਨਣੁ ਹੋਆ॥',
    translation: 'The True Guru Nanak appeared, and the mist cleared away. The world became enlightened.',
    source: 'Guru Granth Sahib',
    context: 'Bhai Gurdas Ji - Celebrating the appearance of Guru Nanak and spiritual enlightenment',
    tags: ['enlightenment', 'guru', 'truth', 'clarity']
  },
  {
    id: '38',
    text: 'ਜਪੁ ਨਾਮੁ ਦਾਨੁ ਇਸਨਾਨੁ ਸਾਰੁ ਹੈ॥',
    translation: 'Meditate on the Name, give in charity, and take your cleansing bath - this is the most excellent way.',
    source: 'Guru Granth Sahib',
    context: 'Guru Nanak Dev Ji - The three pillars of Sikh spiritual practice',
    tags: ['meditation', 'charity', 'cleanliness', 'spiritual-practice']
  },
  {
    id: '39',
    text: 'ਸਭਨਾ ਜੀਆ ਕਾ ਇਕੁ ਦਾਤਾ ਸੋ ਮੈ ਵਿਸਰਿ ਨ ਜਾਈ॥',
    translation: 'The One Lord is the Giver of all souls; may I never forget Him.',
    source: 'Guru Granth Sahib',
    context: 'Guru Nanak Dev Ji - Remembering the One Divine Source of all life',
    tags: ['oneness', 'divine', 'remembrance', 'giver']
  },
  {
    id: '40',
    text: 'ਮਨੁ ਮਾਰੇ ਜੀਵਤ ਮਰੈ ਦਰਿ ਘਰਿ ਸੋਹਾਗਣਿ ਹੋਈ॥',
    translation: 'One who conquers the mind, dies while yet alive, and becomes the blessed bride of the Lord.',
    source: 'Guru Granth Sahib',
    context: 'Guru Nanak Dev Ji - The spiritual death of ego leading to divine union',
    tags: ['mind-control', 'ego', 'spiritual-death', 'divine-union']
  },
  {
    id: '41',
    text: 'ਸਰਬਸਮ ਤੇਰੇ ਨਾਮ ਵਿਟਿ ਕੁਰਬਾਣੀ ਤੇਰੀ ਦ੍ਰਿਸਟਿ॥',
    translation: 'I am a sacrifice, a sacrifice to Your Name, and a sacrifice to Your Vision, O Lord.',
    source: 'Guru Granth Sahib',
    context: 'Guru Arjan Dev Ji - Complete surrender and devotion to the Divine',
    tags: ['sacrifice', 'devotion', 'surrender', 'divine-vision']
  },
  {
    id: '42',
    text: 'ਤੂ ਠਾਕੁਰੁ ਤੁਮ ਪਹਿ ਅਰਦਾਸਿ॥ ਜੀਉ ਪਿੰਡੁ ਸਭੁ ਤੇਰੀ ਰਾਸਿ॥',
    translation: 'You are my Lord and Master; to You, I offer my prayer. This soul and body are all Your wealth.',
    source: 'Guru Granth Sahib',
    context: 'Guru Arjan Dev Ji - Prayer of complete surrender and acknowledgment',
    tags: ['prayer', 'master', 'surrender', 'divine-wealth']
  },
  {
    id: '43',
    text: 'ਜਿਸੁ ਸਿਮਰਤ ਸਭਿ ਕਿਲਵਿਖ ਨਾਸਹਿ ਪਿਤਰੀ ਹੋਇ ਉਧਾਰੋ॥',
    translation: 'Remembering Him in meditation, all sins are erased, and ancestors are saved.',
    source: 'Guru Granth Sahib',
    context: 'Guru Arjan Dev Ji - The power of divine remembrance',
    tags: ['meditation', 'forgiveness', 'salvation', 'ancestors']
  },
  {
    id: '44',
    text: 'ਨਾਨਕ ਨਾਮ ਚੜ੍ਹਦੀ ਕਲਾ ਤੇਰੇ ਭਾਣੇ ਸਰਬਤ ਦਾ ਭਲਾ॥',
    translation: 'Nanak, with Naam comes high spirits; in Your will, O Lord, may everyone be blessed.',
    source: 'Guru Granth Sahib',
    context: 'Guru Nanak Dev Ji - Prayer for universal well-being and high spirits',
    tags: ['naam', 'high-spirits', 'universal-welfare', 'divine-will']
  },
  {
    id: '45',
    text: 'ਵਾਹਿਗੁਰੂ ਵਾਹਿਗੁਰੂ ਵਾਹਿਗੁਰੂ ਵਾਹਿ ਜੀਉ॥',
    translation: 'Wondrous Guru, Wondrous Guru, Wondrous Guru, Wondrous Lord.',
    source: 'Guru Granth Sahib',
    context: 'Guru Gobind Singh Ji - The Sikh mantra expressing wonder and praise',
    tags: ['mantra', 'praise', 'wonder', 'guru']
  },
  {
    id: '46',
    text: 'ਸੋ ਸਤਿਗੁਰੁ ਪਿਆਰਾ ਮੇਰੈ ਨਾਲਿ ਹੈ ਜਿਥੈ ਜਾਇ ਬਹਾਲਾ॥',
    translation: 'That beloved True Guru is always with me; wherever I go, He takes care of me.',
    source: 'Guru Granth Sahib',
    context: 'Guru Ram Das Ji - The constant presence and protection of the Guru',
    tags: ['companionship', 'protection', 'guru-presence', 'care']
  },
  {
    id: '47',
    text: 'ਕਰਮੁ ਧਰਮੁ ਤੇਰਾ ਨਾਮੁ ਸਚਾ ਸਾਹਿਬ ਸਿਫਤਿ ਸੁਆਲਾ॥',
    translation: 'Good deeds and righteousness come from Your True Name, O Lord; Your Praise is my prayer.',
    source: 'Guru Granth Sahib',
    context: 'Guru Nanak Dev Ji - True righteousness through divine remembrance',
    tags: ['righteousness', 'good-deeds', 'true-name', 'praise']
  },
  {
    id: '48',
    text: 'ਜਿਨਿ ਗੁਰੂ ਦਿਤੋ ਸੁ ਨਮਸਕਾਰੁ ਸਿਰਿ ਧਰਿ ਮੰਨਿਆ॥',
    translation: 'I bow in reverence to the One who gave me the Guru; I accept and honor Him with my head.',
    source: 'Guru Granth Sahib',
    context: 'Guru Angad Dev Ji - Gratitude for receiving the Guru\'s guidance',
    tags: ['gratitude', 'reverence', 'guru-gift', 'honor']
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