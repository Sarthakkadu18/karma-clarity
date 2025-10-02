export interface Verse {
  id: string;
  text: string;
  translation: string;
  source: string;
  context: string;
  tags: string[];
}

export interface Solution {
  id: string;
  problemType: string;
  title: string;
  practicalPoints: string[];
  source: string;
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
  },
  // Expanded Bhagavad Gita verses for comprehensive guidance
  {
    id: '49',
    text: 'बुद्धिर्ज्ञानमसम्मोहः क्षमा सत्यं दमः शमः।',
    translation: 'Intelligence, knowledge, freedom from doubt and delusion, forgiveness, truthfulness, control of the senses and control of the mind.',
    source: 'Bhagavad Gita',
    context: 'Chapter 10, Verse 4-5 - Divine qualities in human beings',
    tags: ['intelligence', 'knowledge', 'truth', 'self-control']
  },
  {
    id: '50',
    text: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
    translation: 'To those who are constantly devoted and who always remember Me with love, I give the understanding by which they can come to Me.',
    source: 'Bhagavad Gita',
    context: 'Chapter 9, Verse 22 - Divine care for devotees',
    tags: ['devotion', 'love', 'divine-care', 'protection']
  },
  {
    id: '51',
    text: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।',
    translation: 'Better is one\'s own dharma, though imperfectly performed, than the dharma of another well performed.',
    source: 'Bhagavad Gita',
    context: 'Chapter 3, Verse 35 - The importance of following one\'s own path',
    tags: ['dharma', 'authenticity', 'individual-path', 'duty']
  },
  {
    id: '52',
    text: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।',
    translation: 'In this world, there is nothing so sublime and pure as transcendental knowledge.',
    source: 'Bhagavad Gita',
    context: 'Chapter 4, Verse 38 - The purity of spiritual knowledge',
    tags: ['knowledge', 'purity', 'transcendental', 'sublime']
  },
  {
    id: '53',
    text: 'यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः।',
    translation: 'One who rejoices in the self, who is illumined in the self, who finds satisfaction in the self alone.',
    source: 'Bhagavad Gita',
    context: 'Chapter 3, Verse 17 - Self-realization and contentment',
    tags: ['self-realization', 'contentment', 'inner-joy', 'satisfaction']
  },
  {
    id: '54',
    text: 'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।',
    translation: 'Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure.',
    source: 'Bhagavad Gita',
    context: 'Chapter 2, Verse 48 - The practice of karma yoga',
    tags: ['karma-yoga', 'equanimity', 'duty', 'detachment']
  },
  {
    id: '55',
    text: 'निर्मानमोहा जितसङ्गदोषा अध्यात्मनित्या विनिवृत्तकामाः।',
    translation: 'Those who are free from pride and delusion, who have conquered the evil of attachment, who dwell constantly in the Self.',
    source: 'Bhagavad Gita',
    context: 'Chapter 15, Verse 5 - Qualities of the liberated soul',
    tags: ['liberation', 'pride', 'attachment', 'self-dwelling']
  },
  {
    id: '56',
    text: 'अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।',
    translation: 'I shall deliver you from all sinful reactions. Do not fear.',
    source: 'Bhagavad Gita',
    context: 'Chapter 18, Verse 66 - Divine promise of liberation',
    tags: ['liberation', 'fearlessness', 'divine-promise', 'grace']
  },
  // More Quran verses for comprehensive guidance
  {
    id: '57',
    text: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ',
    translation: 'And do not despair of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.',
    source: 'Quran',
    context: 'Surah Yusuf (12:87) - Hope in divine mercy',
    tags: ['hope', 'relief', 'despair', 'mercy']
  },
  {
    id: '58',
    text: 'وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',
    translation: 'So whoever does an atom\'s weight of good will see it.',
    source: 'Quran',
    context: 'Surah Az-Zalzalah (99:7) - The value of small good deeds',
    tags: ['good-deeds', 'reward', 'justice', 'accountability']
  },
  {
    id: '59',
    text: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
    translation: 'And He is with you wherever you are.',
    source: 'Quran',
    context: 'Surah Al-Hadid (57:4) - Divine presence everywhere',
    tags: ['presence', 'companionship', 'everywhere', 'comfort']
  },
  {
    id: '60',
    text: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Indeed, with hardship comes ease. Indeed, with hardship comes ease.',
    source: 'Quran',
    context: 'Surah Ash-Sharh (94:5-6) - Promise of relief after difficulty',
    tags: ['hardship', 'ease', 'relief', 'promise']
  },
  {
    id: '61',
    text: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
    translation: 'And when My servants ask you concerning Me, indeed I am near.',
    source: 'Quran',
    context: 'Surah Al-Baqarah (2:186) - Divine closeness to humanity',
    tags: ['closeness', 'prayer', 'divine-response', 'accessibility']
  },
  {
    id: '62',
    text: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
    translation: 'And whoever relies upon Allah - then He is sufficient for him.',
    source: 'Quran',
    context: 'Surah At-Talaq (65:3) - Divine sufficiency for believers',
    tags: ['reliance', 'sufficiency', 'trust', 'divine-support']
  },
  {
    id: '63',
    text: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ',
    translation: 'O you who believe! Seek help through patience and prayer.',
    source: 'Quran',
    context: 'Surah Al-Baqarah (2:153) - Sources of strength in difficulty',
    tags: ['patience', 'prayer', 'help', 'strength']
  },
  {
    id: '64',
    text: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
    translation: 'And I did not create the jinn and mankind except to worship Me.',
    source: 'Quran',
    context: 'Surah Adh-Dhariyat (51:56) - The purpose of creation',
    tags: ['purpose', 'worship', 'creation', 'meaning']
  },
  // More Bible verses for comprehensive guidance
  {
    id: '65',
    text: 'Weeping may endure for a night, but joy comes in the morning.',
    translation: 'Weeping may endure for a night, but joy comes in the morning.',
    source: 'Bible',
    context: 'Psalm 30:5 - Hope after sorrow',
    tags: ['sorrow', 'joy', 'hope', 'renewal']
  },
  {
    id: '66',
    text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
    translation: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
    source: 'Bible',
    context: 'Matthew 11:28 - Jesus offering rest to the weary',
    tags: ['rest', 'burden', 'comfort', 'invitation']
  },
  {
    id: '67',
    text: 'And we know that in all things God works for the good of those who love him.',
    translation: 'And we know that in all things God works for the good of those who love him.',
    source: 'Bible',
    context: 'Romans 8:28 - Divine providence in all circumstances',
    tags: ['providence', 'good', 'love', 'faith']
  },
  {
    id: '68',
    text: 'The Lord your God is with you, the Mighty Warrior who saves.',
    translation: 'The Lord your God is with you, the Mighty Warrior who saves.',
    source: 'Bible',
    context: 'Zephaniah 3:17 - God as protector and savior',
    tags: ['protection', 'salvation', 'warrior', 'presence']
  },
  {
    id: '69',
    text: 'Fear not, for I am with you; be not dismayed, for I am your God.',
    translation: 'Fear not, for I am with you; be not dismayed, for I am your God.',
    source: 'Bible',
    context: 'Isaiah 41:10 - Divine reassurance against fear',
    tags: ['fear', 'reassurance', 'dismay', 'presence']
  },
  {
    id: '70',
    text: 'He heals the brokenhearted and binds up their wounds.',
    translation: 'He heals the brokenhearted and binds up their wounds.',
    source: 'Bible',
    context: 'Psalm 147:3 - Divine healing for emotional pain',
    tags: ['healing', 'brokenhearted', 'wounds', 'comfort']
  },
  {
    id: '71',
    text: 'Therefore do not worry about tomorrow, for tomorrow will worry about itself.',
    translation: 'Therefore do not worry about tomorrow, for tomorrow will worry about itself.',
    source: 'Bible',
    context: 'Matthew 6:34 - Jesus teaching about present-moment awareness',
    tags: ['worry', 'tomorrow', 'present-moment', 'anxiety']
  },
  {
    id: '72',
    text: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.',
    translation: 'The Lord is close to the brokenhearted and saves those who are crushed in spirit.',
    source: 'Bible',
    context: 'Psalm 34:18 - Divine comfort in emotional distress',
    tags: ['closeness', 'brokenhearted', 'crushed-spirit', 'salvation']
  },
  // More Chanakya Niti verses for practical wisdom
  {
    id: '73',
    text: 'काकचेष्टा बकोध्यानं श्वाननिद्रा तथैव च। अल्पाहारी गृहत्यागी विद्यार्थी पञ्चलक्षणम्॥',
    translation: 'A student should have the eagerness of a crow, meditation of a crane, sleep of a dog, eat little food, and leave home for learning.',
    source: 'Chanakya Niti',
    context: 'Five qualities essential for a sincere student',
    tags: ['learning', 'discipline', 'focus', 'dedication']
  },
  {
    id: '74',
    text: 'मूर्खाणां पण्डिता द्वेष्या उपकारी निरुत्साहः।',
    translation: 'The foolish hate the learned, those who help others lose enthusiasm.',
    source: 'Chanakya Niti',
    context: 'Understanding human nature and social dynamics',
    tags: ['wisdom', 'foolishness', 'help', 'social-dynamics']
  },
  {
    id: '75',
    text: 'सत्यं माता पिता ज्ञानं धर्मो भ्राता दया सखा।',
    translation: 'Truth is the mother, knowledge is the father, dharma is the brother, and compassion is the friend.',
    source: 'Chanakya Niti',
    context: 'The spiritual family that guides a person',
    tags: ['truth', 'knowledge', 'dharma', 'compassion']
  },
  {
    id: '76',
    text: 'शान्तिः परमं सुखम्।',
    translation: 'Peace is the highest happiness.',
    source: 'Chanakya Niti',
    context: 'The ultimate goal of all endeavors',
    tags: ['peace', 'happiness', 'ultimate-goal', 'tranquility']
  },
  {
    id: '77',
    text: 'परोक्षे कार्यहन्तारं प्रत्यक्षे प्रियवादिनम्।',
    translation: 'One who harms your work behind your back but speaks sweetly to your face.',
    source: 'Chanakya Niti',
    context: 'Warning about deceptive people',
    tags: ['deception', 'betrayal', 'sweet-talk', 'caution']
  },
  {
    id: '78',
    text: 'धर्मार्थकाममोक्षाणां यस्यैकोऽपि न विद्यते।',
    translation: 'A person who lacks dharma, wealth, pleasure, and liberation - such a person is like a beast.',
    source: 'Chanakya Niti',
    context: 'The four goals of human life',
    tags: ['dharma', 'wealth', 'pleasure', 'liberation']
  },
  // More Guru Granth Sahib verses for spiritual guidance
  {
    id: '79',
    text: 'ਏਕੁ ਨਾਮੁ ਹੁਕਮੁ ਮਨਿ ਵਸੈ ਗੁਰਮੁਖਿ ਕਿਸਬੁ ਕਮਾਇ॥',
    translation: 'Let the One Name and His Command abide within your mind; as Gurmukh, practice righteousness.',
    source: 'Guru Granth Sahib',
    context: 'Guru Nanak Dev Ji - Living according to divine will',
    tags: ['divine-name', 'command', 'righteousness', 'gurmukh']
  },
  {
    id: '80',
    text: 'ਸਚੁ ਵਰਤੁ ਸੰਤੋਖੁ ਤੀਰਥੁ ਗਿਆਨੁ ਧਿਆਨੁ ਇਸਨਾਨੁ॥',
    translation: 'Let truth be your fast, contentment your pilgrimage place, spiritual wisdom and meditation your cleansing bath.',
    source: 'Guru Granth Sahib',
    context: 'Guru Nanak Dev Ji - True spiritual practices',
    tags: ['truth', 'contentment', 'wisdom', 'meditation']
  },
  {
    id: '81',
    text: 'ਜੋ ਵਾਹਿਗੁਰੂ ਕੇ ਸਿਮਰਨ ਮਹਿ ਮਸਤ ਰਹਤੇ ਸੇ ਆਨੰਦੁ ਮਾਣਤੇ॥',
    translation: 'Those who remain intoxicated with the remembrance of Waheguru enjoy supreme bliss.',
    source: 'Guru Granth Sahib',
    context: 'The joy of divine remembrance and meditation',
    tags: ['remembrance', 'intoxication', 'bliss', 'waheguru']
  },
  {
    id: '82',
    text: 'ਸੇਵਾ ਕਰਤ ਹੋਏ ਨਿਹਕਾਮੀ ਤਿਸ ਕਉ ਮਿਲਤ ਨਿਧਾਨੁ॥',
    translation: 'One who serves selflessly finds the treasure of divine realization.',
    source: 'Guru Granth Sahib',
    context: 'The reward of selfless service (seva)',
    tags: ['seva', 'selfless', 'treasure', 'realization']
  },
  {
    id: '83',
    text: 'ਦੁਖੁ ਦਾਰੂ ਸੁਖੁ ਰੋਗੁ ਭਇਆ ਜਾ ਸੁਖੁ ਤਾਮਿ ਨ ਹੋਈ॥',
    translation: 'Suffering is the medicine, and pleasure is the disease, when there is pleasure, there is no longing for God.',
    source: 'Guru Granth Sahib',
    context: 'Guru Nanak Dev Ji - Understanding the spiritual purpose of suffering',
    tags: ['suffering', 'medicine', 'pleasure', 'longing']
  },
  {
    id: '84',
    text: 'ਨਾਨਕ ਨਾਮੁ ਧਿਆਇ ਤੂ ਸਭ ਸੁਖ ਪਾਵਹਿ ਸਾਰੇ॥',
    translation: 'O Nanak, meditate on the Name, and you shall obtain all happiness and peace.',
    source: 'Guru Granth Sahib',
    context: 'The promise of peace through divine meditation',
    tags: ['meditation', 'name', 'happiness', 'peace']
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

export const mockSolutions: Solution[] = [
  // Emotional & Mental Health
  {
    id: '1',
    problemType: 'depression',
    title: 'Overcoming Depression and Persistent Sadness',
    practicalPoints: [
      'Establish a consistent daily routine with regular sleep and wake times',
      'Get at least 20-30 minutes of sunlight and physical activity each day',
      'Practice mindfulness meditation for 10 minutes daily to stay present',
      'Connect with at least one supportive person each day, even briefly',
      'Set small, achievable goals and celebrate each accomplishment',
      'Seek professional help from a therapist or counselor without delay',
      'Keep a gratitude journal to shift focus toward positive aspects of life'
    ],
    source: 'Universal Wisdom',
    tags: ['depression', 'sadness', 'mental-health', 'healing']
  },
  {
    id: '2',
    problemType: 'anxiety',
    title: 'Managing Anxiety and Constant Worry',
    practicalPoints: [
      'Practice deep breathing exercises - inhale for 4 counts, hold for 4, exhale for 6',
      'Create a worry journal and challenge anxious thoughts with evidence',
      'Limit news consumption and social media to reduce anxiety triggers',
      'Exercise regularly - even 20 minutes of walking significantly reduces anxiety',
      'Use progressive muscle relaxation techniques before sleep',
      'Practice grounding techniques (5-4-3-2-1 method) during panic moments',
      'Consider cognitive behavioral therapy (CBT) for long-term management'
    ],
    source: 'Universal Wisdom',
    tags: ['anxiety', 'worry', 'stress', 'mental-health']
  },
  {
    id: '3',
    problemType: 'low-self-esteem',
    title: 'Building Self-Esteem and Confidence',
    practicalPoints: [
      'Challenge negative self-talk by writing down evidence that contradicts it',
      'List your strengths and achievements, no matter how small they seem',
      'Set realistic, achievable goals and track your progress',
      'Practice self-compassion - treat yourself as you would a good friend',
      'Surround yourself with supportive, positive people',
      'Celebrate small wins and acknowledge your efforts, not just outcomes',
      'Engage in activities where you feel competent and successful'
    ],
    source: 'Universal Wisdom',
    tags: ['self-esteem', 'confidence', 'self-worth', 'personal-growth']
  },
  {
    id: '4',
    problemType: 'numbness',
    title: 'Reconnecting When Feeling Numb and Disconnected',
    practicalPoints: [
      'Engage your senses deliberately - notice textures, sounds, smells around you',
      'Try new experiences to break monotony and stimulate emotional responses',
      'Practice journaling to identify and express suppressed emotions',
      'Engage in creative activities like art, music, or writing',
      'Connect with nature - spend time outdoors, observe natural beauty',
      'Seek therapy to explore underlying causes of emotional numbness',
      'Be patient with yourself - healing takes time and isn\'t linear'
    ],
    source: 'Universal Wisdom',
    tags: ['numbness', 'disconnection', 'emotional-health', 'healing']
  },
  {
    id: '5',
    problemType: 'burnout',
    title: 'Recovering from Burnout and Exhaustion',
    practicalPoints: [
      'Take immediate time off if possible - even a few days can help reset',
      'Set firm boundaries between work and personal time',
      'Practice saying "no" to additional responsibilities',
      'Prioritize sleep - aim for 7-9 hours consistently',
      'Delegate tasks and ask for help when needed',
      'Engage in activities that genuinely recharge you, not just distract',
      'Consider if your current situation is sustainable long-term'
    ],
    source: 'Universal Wisdom',
    tags: ['burnout', 'exhaustion', 'energy', 'work-life-balance']
  },
  {
    id: '6',
    problemType: 'identity-crisis',
    title: 'Rediscovering Your Identity and Purpose',
    practicalPoints: [
      'Reflect on times you felt most authentic and alive - what were you doing?',
      'Explore your values - what truly matters to you beyond others\' expectations?',
      'Try new hobbies and experiences without judgment or pressure',
      'Journal about your dreams, interests, and what brings you joy',
      'Connect with people who knew you before your current crisis',
      'Give yourself permission to change and evolve',
      'Consider working with a life coach or therapist for guided exploration'
    ],
    source: 'Universal Wisdom',
    tags: ['identity', 'purpose', 'self-discovery', 'personal-growth']
  },
  {
    id: '7',
    problemType: 'trauma',
    title: 'Healing from Past Trauma and Regrets',
    practicalPoints: [
      'Seek professional trauma therapy (EMDR, CBT, or trauma-focused therapy)',
      'Practice grounding techniques when triggered by traumatic memories',
      'Build a support network of trusted, understanding people',
      'Engage in self-care routines that help you feel safe and secure',
      'Write a letter to your past self with compassion and forgiveness',
      'Remember that healing isn\'t linear - setbacks are part of recovery',
      'Consider support groups for trauma survivors'
    ],
    source: 'Universal Wisdom',
    tags: ['trauma', 'ptsd', 'healing', 'regret', 'past']
  },
  {
    id: '8',
    problemType: 'anger',
    title: 'Managing Anger and Short Temper',
    practicalPoints: [
      'Practice the pause technique - count to 10 before responding when angry',
      'Identify your anger triggers and develop specific strategies for each',
      'Use physical exercise to release anger energy healthily',
      'Practice deep breathing or meditation to calm your nervous system',
      'Express anger through writing or art before discussing with others',
      'Learn assertive communication rather than aggressive responses',
      'Seek anger management counseling if it affects relationships or work'
    ],
    source: 'Universal Wisdom',
    tags: ['anger', 'temper', 'emotions', 'self-control']
  },
  {
    id: '9',
    problemType: 'overwhelm',
    title: 'Managing Overwhelming Responsibilities',
    practicalPoints: [
      'Write down all responsibilities and prioritize them honestly',
      'Delegate tasks that others can do - you don\'t have to do everything',
      'Break large tasks into smaller, manageable steps',
      'Say "no" to new commitments until you have capacity',
      'Schedule regular breaks throughout your day',
      'Focus on one task at a time instead of multitasking',
      'Seek help from family, friends, or professionals'
    ],
    source: 'Universal Wisdom',
    tags: ['overwhelm', 'stress', 'responsibilities', 'time-management']
  },
  {
    id: '10',
    problemType: 'addiction',
    title: 'Overcoming Addiction and Compulsive Behaviors',
    practicalPoints: [
      'Acknowledge the problem honestly and commit to change',
      'Reach out for professional help immediately (therapist, rehab, support group)',
      'Join support groups like AA, NA, or other recovery communities',
      'Identify and avoid triggers that lead to addictive behaviors',
      'Develop healthy coping strategies like exercise, meditation, or creative pursuits',
      'Build a strong support network of family, friends, and sponsors',
      'Create structure in your daily routine to replace chaotic patterns'
    ],
    source: 'Universal Wisdom',
    tags: ['addiction', 'recovery', 'compulsion', 'healing']
  },

  // Financial & Career
  {
    id: '11',
    problemType: 'debt',
    title: 'Getting Out of Significant Debt',
    practicalPoints: [
      'List all debts with amounts, interest rates, and minimum payments',
      'Create a realistic budget tracking every dollar of income and expenses',
      'Use debt avalanche (highest interest first) or snowball (smallest first) method',
      'Contact creditors to negotiate payment plans or lower interest rates',
      'Cut unnecessary expenses temporarily and find ways to increase income',
      'Consider debt consolidation or credit counseling services',
      'Celebrate small wins as you pay off each debt'
    ],
    source: 'Universal Wisdom',
    tags: ['debt', 'financial', 'money', 'budgeting']
  },
  {
    id: '12',
    problemType: 'paycheck-to-paycheck',
    title: 'Breaking the Paycheck-to-Paycheck Cycle',
    practicalPoints: [
      'Track every expense for one month to identify spending patterns',
      'Create a zero-based budget where every dollar has a purpose',
      'Start an emergency fund with even $5-10 per paycheck',
      'Look for ways to reduce fixed expenses (housing, utilities, subscriptions)',
      'Find side income opportunities that fit your schedule',
      'Meal plan and cook at home to reduce food costs',
      'Use cash envelopes for discretionary spending to avoid overspending'
    ],
    source: 'Universal Wisdom',
    tags: ['paycheck-to-paycheck', 'financial', 'savings', 'budgeting']
  },
  {
    id: '13',
    problemType: 'unemployment',
    title: 'Finding a Job When Unemployed',
    practicalPoints: [
      'Treat job searching as your full-time job with daily goals',
      'Update your resume and LinkedIn profile professionally',
      'Network actively - reach out to former colleagues and attend industry events',
      'Apply to 5-10 jobs daily that match your skills',
      'Consider temporary or freelance work while searching',
      'Learn new skills through free online courses to boost employability',
      'Don\'t take rejection personally - it\'s a numbers game'
    ],
    source: 'Universal Wisdom',
    tags: ['unemployment', 'job-search', 'career', 'work']
  },
  {
    id: '14',
    problemType: 'job-dissatisfaction',
    title: 'Dealing with a Job You Hate',
    practicalPoints: [
      'Identify specifically what you hate - is it the work, boss, culture, or pay?',
      'Start job searching while employed - it\'s easier to find work when working',
      'Build emergency savings to give yourself options',
      'Develop skills outside of work that could lead to career change',
      'Set boundaries to protect your mental health at current job',
      'Network and explore other opportunities in your field',
      'Consider if internal transfer or role change is possible'
    ],
    source: 'Universal Wisdom',
    tags: ['job-dissatisfaction', 'career', 'work', 'unhappiness']
  },
  {
    id: '15',
    problemType: 'undervalued-at-work',
    title: 'Feeling Underpaid and Undervalued',
    practicalPoints: [
      'Research market salary for your role and experience level',
      'Document your accomplishments and value to the company',
      'Schedule a meeting with your manager to discuss compensation',
      'Present evidence of your contributions and market data',
      'Consider negotiating for benefits if salary increase isn\'t possible',
      'Be prepared to look for opportunities elsewhere if not valued',
      'Continue developing skills that increase your market value'
    ],
    source: 'Universal Wisdom',
    tags: ['undervalued', 'salary', 'career', 'negotiation']
  },
  {
    id: '16',
    problemType: 'career-stagnation',
    title: 'Overcoming Career Stagnation',
    practicalPoints: [
      'Have an honest conversation with your manager about growth opportunities',
      'Seek mentorship from senior colleagues or external professionals',
      'Take on stretch projects or cross-functional opportunities',
      'Invest in professional development - courses, certifications, conferences',
      'Build your professional network actively',
      'Consider lateral moves that offer learning opportunities',
      'Explore opportunities outside your current organization if needed'
    ],
    source: 'Universal Wisdom',
    tags: ['career-stagnation', 'growth', 'professional-development', 'advancement']
  },
  {
    id: '17',
    problemType: 'skill-gap',
    title: 'Developing Skills for Your Dream Job',
    practicalPoints: [
      'Research exactly what skills are required for your target role',
      'Create a learning plan with specific skills and timeline',
      'Use free resources like YouTube, Coursera, edX for initial learning',
      'Practice skills through personal projects or volunteer work',
      'Join online communities related to the skills you\'re learning',
      'Find a mentor who has the skills you want to develop',
      'Be patient - skill development takes time and consistent practice'
    ],
    source: 'Universal Wisdom',
    tags: ['skills', 'learning', 'career-development', 'education']
  },
  {
    id: '18',
    problemType: 'work-life-balance',
    title: 'Achieving Work-Life Balance',
    practicalPoints: [
      'Set clear boundaries - define work hours and stick to them',
      'Turn off work notifications outside of work hours',
      'Schedule personal time as seriously as work meetings',
      'Learn to delegate and say no to non-essential tasks',
      'Take regular breaks throughout the workday',
      'Use vacation time fully - don\'t let it accumulate unused',
      'Communicate your boundaries clearly with colleagues and managers'
    ],
    source: 'Universal Wisdom',
    tags: ['work-life-balance', 'boundaries', 'wellness', 'time-management']
  },
  {
    id: '19',
    problemType: 'business-failure',
    title: 'Dealing with Failing Business',
    practicalPoints: [
      'Analyze cash flow honestly - know exactly where money goes',
      'Identify core profitable products/services and focus on them',
      'Cut unnecessary expenses immediately',
      'Reach out to customers for feedback and testimonials',
      'Pivot or adjust business model based on market feedback',
      'Seek advice from business mentors or consultants',
      'Know when to close - sometimes the best decision is to stop and start fresh'
    ],
    source: 'Universal Wisdom',
    tags: ['business', 'entrepreneurship', 'failure', 'pivot']
  },
  {
    id: '20',
    problemType: 'poverty-fear',
    title: 'Overcoming Fear of Poverty',
    practicalPoints: [
      'Face your fears by writing down worst-case scenarios and plans for each',
      'Build emergency fund gradually - even small amounts create security',
      'Develop multiple income streams to reduce financial vulnerability',
      'Invest in skills that will always be valuable',
      'Practice gratitude for what you have to shift from scarcity mindset',
      'Connect with others who overcame financial hardship',
      'Remember that your worth is not defined by your bank account'
    ],
    source: 'Universal Wisdom',
    tags: ['fear', 'poverty', 'financial-security', 'mindset']
  },

  // Relationships & Social Life
  {
    id: '21',
    problemType: 'loneliness',
    title: 'Overcoming Deep Loneliness',
    practicalPoints: [
      'Reach out to one person each day - even a simple text counts',
      'Join clubs, classes, or volunteer organizations based on your interests',
      'Practice self-compassion and develop a positive relationship with yourself',
      'Use technology mindfully to connect genuinely, not just scroll',
      'Be vulnerable and authentic in conversations to build deeper connections',
      'Consider adopting a pet for companionship if circumstances allow',
      'Attend community events, religious services, or local gatherings regularly'
    ],
    source: 'Universal Wisdom',
    tags: ['loneliness', 'isolation', 'connection', 'relationships']
  },
  {
    id: '22',
    problemType: 'breakup',
    title: 'Healing from a Painful Breakup',
    practicalPoints: [
      'Allow yourself to grieve - it\'s okay to feel sad, angry, or confused',
      'Cut contact with ex-partner initially to give yourself space to heal',
      'Remove reminders and avoid checking their social media',
      'Lean on supportive friends and family for emotional support',
      'Rediscover hobbies and interests you may have neglected',
      'Focus on self-improvement and personal growth',
      'Journal about lessons learned and what you want in future relationships'
    ],
    source: 'Universal Wisdom',
    tags: ['breakup', 'heartbreak', 'relationships', 'healing']
  },
  {
    id: '23',
    problemType: 'relationship-fighting',
    title: 'Stopping Constant Fighting with Partner',
    practicalPoints: [
      'Practice active listening - truly hear your partner without preparing your response',
      'Use "I feel" statements instead of "you always" accusations',
      'Take timeouts during heated arguments to cool down',
      'Identify underlying needs causing the fights, not just surface issues',
      'Schedule regular check-ins to discuss concerns before they escalate',
      'Focus on solving problems together rather than winning arguments',
      'Consider couples counseling to learn healthy communication skills'
    ],
    source: 'Universal Wisdom',
    tags: ['relationships', 'fighting', 'conflict', 'communication']
  },
  {
    id: '24',
    problemType: 'no-friends',
    title: 'Making Friends When You Feel You Have None',
    practicalPoints: [
      'Join groups or activities aligned with your interests (book clubs, sports, etc.)',
      'Volunteer for causes you care about to meet like-minded people',
      'Take initiative - invite acquaintances for coffee or activities',
      'Be consistent - show up regularly to same places to build familiarity',
      'Practice conversation skills - ask questions and show genuine interest',
      'Use apps like Meetup or Bumble BFF to find friendship opportunities',
      'Be patient - genuine friendships take time to develop'
    ],
    source: 'Universal Wisdom',
    tags: ['friends', 'friendships', 'social-life', 'connection']
  },
  {
    id: '25',
    problemType: 'family-conflict',
    title: 'Resolving Serious Family Conflicts',
    practicalPoints: [
      'Set clear, healthy boundaries while maintaining respect',
      'Communicate directly with involved family members, avoid intermediaries',
      'Listen to understand their perspective, even if you disagree',
      'Focus on changing your responses, not trying to change them',
      'Consider family therapy for deep-rooted issues',
      'Practice forgiveness as a gift to yourself, not necessarily reconciliation',
      'Accept that some relationships may need to be limited for your wellbeing'
    ],
    source: 'Universal Wisdom',
    tags: ['family', 'conflict', 'boundaries', 'relationships']
  },
  {
    id: '26',
    problemType: 'betrayal',
    title: 'Healing from Betrayal and Broken Trust',
    practicalPoints: [
      'Allow yourself to feel anger and hurt - these emotions are valid',
      'Decide if the relationship is worth rebuilding or if you need to move on',
      'If rebuilding, the betrayer must take full accountability and show change',
      'Set clear expectations and boundaries moving forward',
      'Work through trust issues with a therapist if needed',
      'Practice self-care and surround yourself with supportive people',
      'Remember that healing from betrayal takes significant time'
    ],
    source: 'Universal Wisdom',
    tags: ['betrayal', 'trust', 'relationships', 'healing']
  },
  {
    id: '27',
    problemType: 'commitment-fear',
    title: 'Overcoming Fear of Commitment',
    practicalPoints: [
      'Explore the root cause - past hurt, fear of loss of freedom, or something else?',
      'Challenge catastrophic thinking about commitment',
      'Take small steps toward commitment rather than all-or-nothing approach',
      'Communicate honestly with your partner about your fears',
      'Work with a therapist to address underlying attachment issues',
      'Observe healthy committed relationships to reframe your understanding',
      'Remember that vulnerability is strength, not weakness'
    ],
    source: 'Universal Wisdom',
    tags: ['commitment', 'fear', 'relationships', 'intimacy']
  },
  {
    id: '28',
    problemType: 'feeling-burdensome',
    title: 'Overcoming Feeling Like a Burden',
    practicalPoints: [
      'Challenge the thought - ask for evidence that you\'re actually a burden',
      'Remember that people who care about you want to support you',
      'Practice receiving help gracefully - it\'s a gift to others to let them help',
      'Look for ways to contribute, even small gestures of kindness',
      'Work on self-worth independently of what you can "offer" others',
      'Communicate your feelings to trusted people instead of withdrawing',
      'Seek therapy to address underlying feelings of unworthiness'
    ],
    source: 'Universal Wisdom',
    tags: ['burden', 'self-worth', 'relationships', 'mental-health']
  },
  {
    id: '29',
    problemType: 'social-anxiety',
    title: 'Managing Social Anxiety',
    practicalPoints: [
      'Start with small, low-pressure social situations and gradually build up',
      'Practice deep breathing before and during social events',
      'Prepare conversation topics or questions ahead of time',
      'Focus on listening to others rather than worrying about yourself',
      'Challenge negative thoughts about how others perceive you',
      'Remember that most people are too focused on themselves to judge you',
      'Consider cognitive behavioral therapy (CBT) for social anxiety'
    ],
    source: 'Universal Wisdom',
    tags: ['social-anxiety', 'anxiety', 'social-life', 'fear']
  },
  {
    id: '30',
    problemType: 'not-understood',
    title: 'Dealing with Feeling Misunderstood',
    practicalPoints: [
      'Improve your communication - be clearer and more specific',
      'Find communities or groups where people share your experiences',
      'Practice self-validation - you don\'t need everyone to understand you',
      'Express yourself through creative outlets like writing or art',
      'Seek therapy to process feelings of isolation',
      'Remember that being unique is valuable, not a flaw',
      'Focus on quality connections with few people who truly get you'
    ],
    source: 'Universal Wisdom',
    tags: ['misunderstood', 'communication', 'isolation', 'identity']
  },

  // Health & Physical Well-being
  {
    id: '31',
    problemType: 'chronic-illness',
    title: 'Coping with Chronic Illness and Pain',
    practicalPoints: [
      'Build a healthcare team you trust and communicate openly with them',
      'Learn everything you can about your condition',
      'Join support groups for people with similar conditions',
      'Pace yourself - balance activity with rest to avoid flare-ups',
      'Practice pain management techniques like meditation and gentle movement',
      'Advocate for yourself in medical settings',
      'Focus on what you can control and find meaning beyond your illness'
    ],
    source: 'Universal Wisdom',
    tags: ['chronic-illness', 'pain', 'health', 'coping']
  },
  {
    id: '32',
    problemType: 'body-image',
    title: 'Improving Body Image and Self-Acceptance',
    practicalPoints: [
      'Unfollow social media accounts that trigger negative body comparisons',
      'Practice body neutrality - focus on what your body can do, not how it looks',
      'Challenge negative self-talk about your appearance',
      'Wear clothes that make you feel comfortable and confident',
      'Surround yourself with body-positive people and content',
      'Practice gratitude for your body\'s functions and capabilities',
      'Seek therapy if body image issues significantly impact your life'
    ],
    source: 'Universal Wisdom',
    tags: ['body-image', 'self-acceptance', 'confidence', 'health']
  },
  {
    id: '33',
    problemType: 'fatigue',
    title: 'Overcoming Constant Tiredness and Lack of Energy',
    practicalPoints: [
      'Get blood work done to rule out medical issues (anemia, thyroid, etc.)',
      'Prioritize 7-9 hours of quality sleep consistently',
      'Exercise regularly - even light activity boosts energy long-term',
      'Eat balanced meals with protein, healthy fats, and complex carbs',
      'Stay hydrated throughout the day',
      'Limit caffeine and sugar which cause energy crashes',
      'Manage stress through relaxation techniques'
    ],
    source: 'Universal Wisdom',
    tags: ['fatigue', 'tiredness', 'energy', 'health']
  },
  {
    id: '34',
    problemType: 'diet-exercise',
    title: 'Sticking to Healthy Diet and Exercise',
    practicalPoints: [
      'Start small with one habit at a time rather than overhauling everything',
      'Make it convenient - prep meals, keep gym bag ready, schedule workouts',
      'Find physical activities you genuinely enjoy',
      'Focus on how healthy habits make you feel, not just appearance goals',
      'Track progress to stay motivated',
      'Build accountability through workout partners or apps',
      'Be kind to yourself when you slip up - consistency matters more than perfection'
    ],
    source: 'Universal Wisdom',
    tags: ['diet', 'exercise', 'health', 'habits']
  },
  {
    id: '35',
    problemType: 'insomnia',
    title: 'Overcoming Insomnia and Sleep Problems',
    practicalPoints: [
      'Maintain consistent sleep and wake times, even on weekends',
      'Create a bedtime routine that signals your body to wind down',
      'Make your bedroom dark, quiet, cool, and comfortable',
      'Avoid screens for at least 1 hour before bed',
      'Limit caffeine after 2 PM and avoid alcohol close to bedtime',
      'Try relaxation techniques like progressive muscle relaxation or guided meditation',
      'Consult a sleep specialist if insomnia persists'
    ],
    source: 'Universal Wisdom',
    tags: ['insomnia', 'sleep', 'health', 'rest']
  },
  {
    id: '36',
    problemType: 'aging-health',
    title: 'Managing Health Concerns as You Age',
    practicalPoints: [
      'Stay proactive with regular check-ups and screenings',
      'Focus on preventive care - nutrition, exercise, stress management',
      'Build and maintain social connections for mental health',
      'Keep learning and challenging your mind',
      'Accept changes with grace while staying active within your abilities',
      'Plan for future healthcare needs and discuss wishes with family',
      'Find purpose and meaning beyond physical capabilities'
    ],
    source: 'Universal Wisdom',
    tags: ['aging', 'health', 'wellness', 'prevention']
  },
  {
    id: '37',
    problemType: 'undiagnosed-health',
    title: 'Dealing with Undiagnosed Health Problems',
    practicalPoints: [
      'Keep detailed symptom journal with dates, severity, and patterns',
      'Seek second or third opinions from different doctors',
      'Research and suggest possible conditions to your doctor',
      'Request referrals to specialists when appropriate',
      'Advocate firmly for yourself - you know your body best',
      'Join online communities for people with similar symptoms',
      'Don\'t give up - persist until you get answers'
    ],
    source: 'Universal Wisdom',
    tags: ['health', 'diagnosis', 'medical', 'advocacy']
  },

  // Personal Growth & Purpose
  {
    id: '38',
    problemType: 'no-purpose',
    title: 'Finding Meaning and Purpose in Life',
    practicalPoints: [
      'Reflect on moments when you felt most fulfilled - what were you doing?',
      'Explore your values - what matters most to you?',
      'Try different activities and experiences to discover what resonates',
      'Look for ways to contribute to something larger than yourself',
      'Consider what problems in the world you feel called to address',
      'Talk to people living purposeful lives about their journeys',
      'Remember purpose often emerges through action, not just contemplation'
    ],
    source: 'Universal Wisdom',
    tags: ['purpose', 'meaning', 'fulfillment', 'life-direction']
  },
  {
    id: '39',
    problemType: 'not-living-up-to-potential',
    title: 'Living Up to Your Potential',
    practicalPoints: [
      'Define what "potential" means to you, not others\' expectations',
      'Identify specific areas where you want to grow',
      'Set concrete, measurable goals with timelines',
      'Remove obstacles and distractions systematically',
      'Build habits that support your goals',
      'Find mentors or role models in areas you want to develop',
      'Celebrate progress and be patient with yourself'
    ],
    source: 'Universal Wisdom',
    tags: ['potential', 'growth', 'goals', 'achievement']
  },
  {
    id: '40',
    problemType: 'procrastination',
    title: 'Overcoming Procrastination',
    practicalPoints: [
      'Break large tasks into tiny, manageable steps',
      'Use the 2-minute rule - if it takes less than 2 minutes, do it now',
      'Remove distractions from your environment',
      'Use time-blocking to schedule focused work periods',
      'Identify what you\'re avoiding (fear, perfectionism, etc.) and address it',
      'Start with the hardest task first thing in the morning',
      'Reward yourself for completing tasks'
    ],
    source: 'Universal Wisdom',
    tags: ['procrastination', 'productivity', 'time-management', 'habits']
  },
  {
    id: '41',
    problemType: 'stagnation',
    title: 'Breaking Through Personal Stagnation',
    practicalPoints: [
      'Try something completely new and outside your comfort zone',
      'Change your routine - even small changes can spark growth',
      'Set learning goals in areas that interest you',
      'Seek new perspectives through books, courses, or conversations',
      'Surround yourself with people who are growing',
      'Reflect on what\'s keeping you stuck and address it directly',
      'Take action even when you don\'t feel ready'
    ],
    source: 'Universal Wisdom',
    tags: ['stagnation', 'growth', 'change', 'progress']
  },
  {
    id: '42',
    problemType: 'comparison',
    title: 'Stop Comparing Yourself to Others',
    practicalPoints: [
      'Limit social media use - it\'s everyone\'s highlight reel',
      'Practice gratitude for your own journey and achievements',
      'Focus on competing with your past self, not others',
      'Remember everyone\'s path is different with different circumstances',
      'Celebrate others\' success without diminishing your own worth',
      'Identify your unique strengths and develop them',
      'Seek therapy if comparison causes significant distress'
    ],
    source: 'Universal Wisdom',
    tags: ['comparison', 'self-worth', 'social-media', 'mindset']
  },
  {
    id: '43',
    problemType: 'fear-of-failure',
    title: 'Overcoming Fear of Failure',
    practicalPoints: [
      'Reframe failure as learning and growth opportunity',
      'Start small to build confidence through small successes',
      'Identify worst-case scenarios and create plans for them',
      'Study successful people who failed many times before succeeding',
      'Practice self-compassion when things don\'t work out',
      'Focus on effort and process rather than just outcomes',
      'Remember that not trying is a guarantee of failure'
    ],
    source: 'Universal Wisdom',
    tags: ['fear', 'failure', 'risk', 'courage']
  },
  {
    id: '44',
    problemType: 'no-life-direction',
    title: 'Finding Direction When Lost in Life',
    practicalPoints: [
      'Try many different things to discover what resonates',
      'Reflect on your values, strengths, and interests',
      'Talk to people in various careers and lifestyles',
      'Keep a journal to track what brings you joy and meaning',
      'Give yourself permission to change direction - it\'s not wasted time',
      'Work with a life coach or career counselor',
      'Remember that clarity comes through action, not endless planning'
    ],
    source: 'Universal Wisdom',
    tags: ['direction', 'purpose', 'career', 'life-path']
  },
  {
    id: '45',
    problemType: 'wasted-time',
    title: 'Dealing with Feeling You\'ve Wasted Time',
    practicalPoints: [
      'Recognize that all experiences, even "wasted" time, teach us something',
      'Focus on what you can control now, not unchangeable past',
      'Extract lessons from past experiences to inform future choices',
      'Forgive yourself - everyone makes choices they later regret',
      'Create a compelling vision for your future',
      'Take immediate action toward meaningful goals',
      'Remember it\'s never too late to change direction'
    ],
    source: 'Universal Wisdom',
    tags: ['regret', 'time', 'past', 'moving-forward']
  },

  // General Life States & Situations
  {
    id: '46',
    problemType: 'boredom',
    title: 'Overcoming Boredom with Daily Routine',
    practicalPoints: [
      'Add one new activity to your routine each week',
      'Learn a new skill or hobby that genuinely interests you',
      'Change your environment - work from different places, explore new areas',
      'Set exciting goals that challenge you',
      'Connect with new people through classes or groups',
      'Break up routines with spontaneous adventures',
      'Use boredom as a signal to reassess if your life aligns with your values'
    ],
    source: 'Universal Wisdom',
    tags: ['boredom', 'routine', 'life-satisfaction', 'change']
  },
  {
    id: '47',
    problemType: 'stuck-in-place',
    title: 'Feeling Stuck in a Place You Don\'t Like',
    practicalPoints: [
      'Create a concrete plan to move, even if it takes time to execute',
      'Save money specifically for relocation',
      'Research potential places thoroughly before moving',
      'Build a support network before you move if possible',
      'Start with short visits to test if you like the new place',
      'Make the most of where you are while planning your exit',
      'Remember that location changes don\'t solve internal problems'
    ],
    source: 'Universal Wisdom',
    tags: ['location', 'stuck', 'moving', 'change']
  },
  {
    id: '48',
    problemType: 'grief',
    title: 'Grieving the Loss of a Loved One',
    practicalPoints: [
      'Allow yourself to feel all emotions without judgment - there\'s no timeline',
      'Create meaningful rituals or memorials to honor your loved one',
      'Maintain connections with supportive people who understand your grief',
      'Take care of physical health through proper nutrition, sleep, and gentle exercise',
      'Express feelings through journaling, art, music, or other creative outlets',
      'Seek professional grief counseling when grief feels overwhelming',
      'Find ways to carry forward their legacy or lessons'
    ],
    source: 'Universal Wisdom',
    tags: ['grief', 'loss', 'death', 'mourning']
  },
  {
    id: '49',
    problemType: 'societal-pressure',
    title: 'Dealing with Societal and Family Expectations',
    practicalPoints: [
      'Define your own values and life goals independent of others',
      'Set boundaries with family and friends about unsolicited advice',
      'Communicate your choices clearly and confidently',
      'Surround yourself with people who respect your choices',
      'Remember you\'re living your life, not theirs',
      'Seek therapy to work through guilt about not meeting expectations',
      'Find role models who live authentically despite pressure'
    ],
    source: 'Universal Wisdom',
    tags: ['pressure', 'expectations', 'boundaries', 'authenticity']
  },
  {
    id: '50',
    problemType: 'ethical-dilemma',
    title: 'Navigating Difficult Moral and Ethical Dilemmas',
    practicalPoints: [
      'Clarify your core values and principles',
      'Consider consequences of each choice for all involved',
      'Seek counsel from trusted, wise advisors',
      'Research ethical frameworks that apply to your situation',
      'Listen to your intuition and conscience',
      'Accept that some situations have no perfect answer',
      'Make the best choice you can with available information, then commit to it'
    ],
    source: 'Universal Wisdom',
    tags: ['ethics', 'morality', 'dilemma', 'decision-making']
  }
];

export const getSolutionByProblemType = (problemType: string): Solution | null => {
  const lowercaseType = problemType.toLowerCase().trim();
  console.log('Searching for problem type:', lowercaseType);
  
  return mockSolutions.find(solution => 
    solution.problemType.toLowerCase().includes(lowercaseType) ||
    solution.tags.some(tag => tag.toLowerCase().includes(lowercaseType)) ||
    lowercaseType.includes(solution.problemType.toLowerCase()) ||
    solution.title.toLowerCase().includes(lowercaseType)
  ) || null;
};

export const searchSolutions = (query: string): Solution[] => {
  const lowercaseQuery = query.toLowerCase().trim();
  console.log('Searching solutions with query:', lowercaseQuery);
  
  const results = mockSolutions.filter(solution => {
    // Check title
    if (solution.title.toLowerCase().includes(lowercaseQuery)) return true;
    
    // Check problem type (both ways)
    if (solution.problemType.toLowerCase().includes(lowercaseQuery)) return true;
    if (lowercaseQuery.includes(solution.problemType.toLowerCase())) return true;
    
    // Check tags
    if (solution.tags.some(tag => 
      tag.toLowerCase().includes(lowercaseQuery) || 
      lowercaseQuery.includes(tag.toLowerCase())
    )) return true;
    
    // Check practical points
    if (solution.practicalPoints.some(point => 
      point.toLowerCase().includes(lowercaseQuery)
    )) return true;
    
    // Split query into words and check each
    const words = lowercaseQuery.split(/\s+/);
    for (const word of words) {
      if (word.length < 3) continue; // Skip very short words
      
      if (solution.problemType.toLowerCase().includes(word)) return true;
      if (solution.title.toLowerCase().includes(word)) return true;
      if (solution.tags.some(tag => tag.toLowerCase().includes(word))) return true;
    }
    
    return false;
  });
  
  console.log('Found solutions:', results.length);
  return results;
};

export const getRandomSolution = (): Solution => {
  return mockSolutions[Math.floor(Math.random() * mockSolutions.length)];
};