// User interaction tracking system for spiritual guidance platform

export interface UserInteraction {
  id: string;
  timestamp: Date;
  feature: 'illumination' | 'kurukshetra' | 'iqra' | 'shifa' | 'pragmatism' | 'gurugranth';
  type: 'emotion_analysis' | 'chat_message' | 'guidance_request';
  stateOfMind?: string;
  emotions?: string[];
  communication: string;
  response?: string;
  verseSource?: string;
  verseText?: string;
}

export interface FeatureReport {
  featureName: string;
  interactions: UserInteraction[];
  totalSessions: number;
  emotionalProfile: Record<string, number>;
  commonStateOfMind: string[];
  totalCommunications: number;
}

export interface UserReport {
  generatedAt: Date;
  totalInteractions: number;
  features: FeatureReport[];
  overallEmotionalProfile: Record<string, number>;
  timeRange: {
    start: Date;
    end: Date;
  };
}

// Storage key for localStorage
const STORAGE_KEY = 'spiritual_journey_interactions';

// Get all stored interactions
export function getAllInteractions(): UserInteraction[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const interactions = JSON.parse(stored);
    return interactions.map((interaction: any) => ({
      ...interaction,
      timestamp: new Date(interaction.timestamp)
    }));
  } catch (error) {
    console.error('Error loading interactions:', error);
    return [];
  }
}

// Save interaction to localStorage
export function trackInteraction(interaction: Omit<UserInteraction, 'id' | 'timestamp'>): void {
  try {
    const interactions = getAllInteractions();
    const newInteraction: UserInteraction = {
      ...interaction,
      id: crypto.randomUUID(),
      timestamp: new Date()
    };
    
    interactions.push(newInteraction);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(interactions));
  } catch (error) {
    console.error('Error tracking interaction:', error);
  }
}

// Analyze emotions from text
export function analyzeEmotionsForTracking(text: string): string[] {
  const emotions = [];
  const lowercaseText = text.toLowerCase();
  
  const emotionPatterns = {
    joy: ['happy', 'joy', 'excited', 'cheerful', 'delighted', 'pleased', 'content'],
    sadness: ['sad', 'depressed', 'down', 'melancholy', 'grief', 'sorrow', 'upset'],
    anger: ['angry', 'frustrated', 'mad', 'irritated', 'furious', 'rage', 'annoyed'],
    anxiety: ['anxious', 'worried', 'nervous', 'stressed', 'overwhelmed', 'panic'],
    fear: ['scared', 'afraid', 'fearful', 'terrified', 'nervous', 'apprehensive'],
    confusion: ['confused', 'lost', 'uncertain', 'unclear', 'puzzled', 'bewildered'],
    peace: ['calm', 'peaceful', 'serene', 'tranquil', 'relaxed', 'centered'],
    love: ['love', 'compassion', 'affection', 'care', 'devotion', 'kindness'],
    gratitude: ['grateful', 'thankful', 'blessed', 'appreciative']
  };
  
  Object.entries(emotionPatterns).forEach(([emotion, patterns]) => {
    if (patterns.some(pattern => lowercaseText.includes(pattern))) {
      emotions.push(emotion);
    }
  });
  
  return emotions.length > 0 ? emotions : ['neutral'];
}

// Detect state of mind from text
export function detectStateOfMind(text: string): string {
  const statePatterns = {
    'Seeking Guidance': ['help', 'guidance', 'advice', 'what should', 'confused', 'lost'],
    'Emotional Distress': ['hurt', 'pain', 'suffering', 'difficult', 'hard time', 'struggle'],
    'Spiritual Inquiry': ['meaning', 'purpose', 'spiritual', 'divine', 'god', 'soul'],
    'Gratitude': ['thank', 'grateful', 'blessed', 'appreciate', 'thankful'],
    'Reflection': ['thinking', 'pondering', 'reflecting', 'considering', 'wondering'],
    'Decision Making': ['decide', 'choice', 'option', 'should I', 'what if'],
    'Personal Growth': ['improve', 'better', 'grow', 'development', 'progress'],
    'Relationship Issues': ['family', 'friend', 'relationship', 'marriage', 'love'],
    'Life Challenges': ['problem', 'challenge', 'issue', 'difficulty', 'obstacle']
  };
  
  const lowercaseText = text.toLowerCase();
  
  for (const [state, patterns] of Object.entries(statePatterns)) {
    if (patterns.some(pattern => lowercaseText.includes(pattern))) {
      return state;
    }
  }
  
  return 'General Inquiry';
}

// Generate comprehensive report
export function generateUserReport(dateRange?: { start: Date; end: Date }): UserReport {
  const allInteractions = getAllInteractions();
  
  // Filter by date range if provided
  const filteredInteractions = dateRange
    ? allInteractions.filter(interaction => 
        interaction.timestamp >= dateRange.start && 
        interaction.timestamp <= dateRange.end
      )
    : allInteractions;
  
  // Group interactions by feature
  const featureGroups = filteredInteractions.reduce((groups, interaction) => {
    if (!groups[interaction.feature]) {
      groups[interaction.feature] = [];
    }
    groups[interaction.feature].push(interaction);
    return groups;
  }, {} as Record<string, UserInteraction[]>);
  
  // Generate feature reports
  const features: FeatureReport[] = Object.entries(featureGroups).map(([featureName, interactions]) => {
    const emotionalProfile = interactions.reduce((profile, interaction) => {
      interaction.emotions?.forEach(emotion => {
        profile[emotion] = (profile[emotion] || 0) + 1;
      });
      return profile;
    }, {} as Record<string, number>);
    
    const statesOfMind = interactions
      .filter(i => i.stateOfMind)
      .map(i => i.stateOfMind!)
      .reduce((states, state) => {
        states[state] = (states[state] || 0) + 1;
        return states;
      }, {} as Record<string, number>);
    
    const commonStateOfMind = Object.entries(statesOfMind)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([state]) => state);
    
    return {
      featureName: formatFeatureName(featureName),
      interactions,
      totalSessions: interactions.length,
      emotionalProfile,
      commonStateOfMind,
      totalCommunications: interactions.filter(i => i.type === 'chat_message').length
    };
  });
  
  // Calculate overall emotional profile
  const overallEmotionalProfile = filteredInteractions.reduce((profile, interaction) => {
    interaction.emotions?.forEach(emotion => {
      profile[emotion] = (profile[emotion] || 0) + 1;
    });
    return profile;
  }, {} as Record<string, number>);
  
  // Determine time range
  const timestamps = filteredInteractions.map(i => i.timestamp);
  const timeRange = {
    start: timestamps.length > 0 ? new Date(Math.min(...timestamps.map(t => t.getTime()))) : new Date(),
    end: timestamps.length > 0 ? new Date(Math.max(...timestamps.map(t => t.getTime()))) : new Date()
  };
  
  return {
    generatedAt: new Date(),
    totalInteractions: filteredInteractions.length,
    features,
    overallEmotionalProfile,
    timeRange
  };
}

// Helper function to format feature names
function formatFeatureName(featureName: string): string {
  const nameMap: Record<string, string> = {
    illumination: 'Divine Illumination',
    kurukshetra: 'Krishna\'s Wisdom',
    iqra: 'Biblical Guidance',
    shifa: 'Islamic Healing',
    pragmatism: 'Chanakya\'s Pragmatism',
    gurugranth: 'Guru Granth Sahib'
  };
  
  return nameMap[featureName] || featureName;
}

// Download report as JSON
export function downloadReportAsJSON(report: UserReport): void {
  const dataStr = JSON.stringify(report, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = `spiritual_journey_report_${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Download report as formatted text
export function downloadReportAsText(report: UserReport): void {
  const formatDate = (date: Date) => date.toLocaleDateString();
  
  let textReport = `SPIRITUAL JOURNEY REPORT
Generated: ${formatDate(report.generatedAt)}
Period: ${formatDate(report.timeRange.start)} - ${formatDate(report.timeRange.end)}
Total Interactions: ${report.totalInteractions}

=== OVERALL EMOTIONAL PROFILE ===
`;
  
  Object.entries(report.overallEmotionalProfile)
    .sort((a, b) => b[1] - a[1])
    .forEach(([emotion, count]) => {
      textReport += `${emotion}: ${count} times\n`;
    });
  
  textReport += `\n=== FEATURE BREAKDOWN ===\n`;
  
  report.features.forEach(feature => {
    textReport += `\n--- ${feature.featureName} ---
Sessions: ${feature.totalSessions}
Communications: ${feature.totalCommunications}

State of Mind:
`;
    feature.commonStateOfMind.forEach(state => {
      textReport += `• ${state}\n`;
    });
    
    textReport += `\nEmotional Profile:
`;
    Object.entries(feature.emotionalProfile)
      .sort((a, b) => b[1] - a[1])
      .forEach(([emotion, count]) => {
        textReport += `• ${emotion}: ${count}\n`;
      });
    
    textReport += `\nRecent Communications:
`;
    feature.interactions
      .slice(-3)
      .forEach(interaction => {
        textReport += `• ${formatDate(interaction.timestamp)}: "${interaction.communication.substring(0, 100)}${interaction.communication.length > 100 ? '...' : ''}"\n`;
      });
  });
  
  const dataBlob = new Blob([textReport], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = `spiritual_journey_report_${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}