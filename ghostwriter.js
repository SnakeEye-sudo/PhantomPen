// PhantomPen Ghost Writer Logic

// Content templates based on persona and tone
const contentTemplates = {
    professional: {
        neutral: (topic, keywords) => `This document provides a comprehensive overview of ${topic}. ${keywords ? 'Key aspects include ' + keywords + '.' : ''} The analysis demonstrates significant relevance in current industry practices.`,
        enthusiastic: (topic, keywords) => `We are excited to present this comprehensive analysis of ${topic}! ${keywords ? 'Our focus areas include ' + keywords + '.' : ''} This represents an outstanding opportunity for growth and development.`,
        formal: (topic, keywords) => `It is hereby presented that ${topic} constitutes a matter of considerable importance. ${keywords ? 'The principal elements encompass ' + keywords + '.' : ''} Further examination is warranted.`,
        friendly: (topic, keywords) => `I'd like to share some insights about ${topic} with you. ${keywords ? 'We'll be covering ' + keywords + '.' : ''} I believe you'll find this information quite useful.`,
        persuasive: (topic, keywords) => `Consider the transformative potential of ${topic}. ${keywords ? 'Critical factors such as ' + keywords + ' demonstrate clear advantages.' : ''} The evidence strongly supports immediate action.`
    },
    casual: {
        neutral: (topic, keywords) => `So, let's talk about ${topic}. ${keywords ? 'We're looking at things like ' + keywords + '.' : ''} It's pretty interesting stuff when you dig into it.`,
        enthusiastic: (topic, keywords) => `Hey! Let's dive into ${topic} - this is going to be awesome! ${keywords ? 'We'll explore ' + keywords + ' and more!' : ''} You're going to love what we discover!`,
        formal: (topic, keywords) => `Regarding ${topic}, it seems appropriate to provide some context. ${keywords ? 'Areas of interest include ' + keywords + '.' : ''} Please consider the following information.`,
        friendly: (topic, keywords) => `Hey there! Want to chat about ${topic}? ${keywords ? 'We can go over ' + keywords + ' together.' : ''} It's actually pretty cool once you get into it!`,
        persuasive: (topic, keywords) => `You really should check out ${topic}. ${keywords ? 'Just look at ' + keywords + ' - pretty convincing, right?' : ''} Trust me, this is worth your time.`
    },
    academic: {
        neutral: (topic, keywords) => `This paper examines ${topic} through a scholarly lens. ${keywords ? 'The research encompasses ' + keywords + '.' : ''} The findings contribute to existing literature in meaningful ways.`,
        enthusiastic: (topic, keywords) => `This groundbreaking research explores ${topic} with remarkable depth! ${keywords ? 'Our investigation of ' + keywords + ' yields fascinating results!' : ''} The implications are truly exciting.`,
        formal: (topic, keywords) => `This scholarly work presents a rigorous analysis of ${topic}. ${keywords ? 'The methodology addresses ' + keywords + ' systematically.' : ''} The conclusions are supported by substantial evidence.`,
        friendly: (topic, keywords) => `In this study, we'll explore ${topic} together. ${keywords ? 'We'll examine ' + keywords + ' in an accessible way.' : ''} I hope to make this research engaging and clear.`,
        persuasive: (topic, keywords) => `The evidence compellingly demonstrates the significance of ${topic}. ${keywords ? 'Analysis of ' + keywords + ' provides irrefutable support.' : ''} Further research is imperative.`
    },
    creative: {
        neutral: (topic, keywords) => `Imagine a world where ${topic} takes center stage. ${keywords ? 'Elements like ' + keywords + ' weave through the narrative.' : ''} The story unfolds with intriguing possibilities.`,
        enthusiastic: (topic, keywords) => `Picture this: ${topic} bursts onto the scene with electrifying energy! ${keywords ? 'With ' + keywords + ' dancing through every moment!' : ''} The adventure is just beginning!`,
        formal: (topic, keywords) => `One must consider the artistic representation of ${topic}. ${keywords ? 'The composition features ' + keywords + ' prominently.' : ''} The work merits serious contemplation.`,
        friendly: (topic, keywords) => `Let me tell you a story about ${topic}. ${keywords ? 'It involves ' + keywords + ' in the most delightful ways.' : ''} I think you'll really enjoy where this goes.`,
        persuasive: (topic, keywords) => `Envision the powerful impact of ${topic}. ${keywords ? 'Through ' + keywords + ', we see unlimited potential.' : ''} This creative vision demands your attention.`
    },
    technical: {
        neutral: (topic, keywords) => `Technical documentation for ${topic} follows. ${keywords ? 'Implementation involves ' + keywords + '.' : ''} System specifications are detailed below.`,
        enthusiastic: (topic, keywords) => `Check out this amazing technical solution for ${topic}! ${keywords ? 'Leveraging ' + keywords + ' creates incredible results!' : ''} The performance metrics are outstanding!`,
        formal: (topic, keywords) => `The technical specification for ${topic} is hereby documented. ${keywords ? 'Core components include ' + keywords + '.' : ''} Compliance with standards is verified.`,
        friendly: (topic, keywords) => `Let me walk you through the technical aspects of ${topic}. ${keywords ? 'We'll work with ' + keywords + ' step by step.' : ''} Don't worry, I'll keep it straightforward.`,
        persuasive: (topic, keywords) => `The technical advantages of ${topic} are undeniable. ${keywords ? 'Implementation of ' + keywords + ' delivers measurable benefits.' : ''} Adoption is strongly recommended.`
    }
};

// Function to expand content based on length
function expandContent(baseContent, length, topic, keywords) {
    let expanded = baseContent;
    
    if (length === 'medium' || length === 'long') {
        expanded += `\n\nFurthermore, the implications of ${topic} extend beyond initial observations. The interconnected nature of these elements creates a comprehensive framework for understanding.`;
        expanded += `\n\nPractical applications demonstrate real-world relevance. ${keywords ? 'Particularly in areas relating to ' + keywords + ', ' : ''}the impact becomes increasingly apparent through careful analysis.`;
    }
    
    if (length === 'long') {
        expanded += `\n\nAdditional considerations reveal deeper layers of complexity. The multifaceted approach enables thorough exploration of all relevant dimensions.`;
        expanded += `\n\nIn conclusion, ${topic} represents a significant area worthy of continued attention and study. ${keywords ? 'The integration of ' + keywords + ' ' : ''}provides valuable insights that inform future development and understanding.`;
        expanded += `\n\nMoving forward, it is essential to maintain focus on core principles while remaining adaptable to emerging trends and developments in this dynamic field.`;
    }
    
    return expanded;
}

// Main generation function
function generateContent() {
    const persona = document.getElementById('persona').value;
    const tone = document.getElementById('tone').value;
    const topic = document.getElementById('topic').value.trim();
    const length = document.getElementById('length').value;
    const keywords = document.getElementById('keywords').value.trim();
    const outputDiv = document.getElementById('output');
    
    // Validation
    if (!topic) {
        outputDiv.textContent = 'Please enter a topic to generate content.';
        outputDiv.style.color = '#e74c3c';
        return;
    }
    
    // Reset output styling
    outputDiv.style.color = '#333';
    
    // Generate base content
    const template = contentTemplates[persona][tone];
    const baseContent = template(topic, keywords);
    
    // Expand based on length
    const finalContent = expandContent(baseContent, length, topic, keywords);
    
    // Display with typing effect
    outputDiv.textContent = '';
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < finalContent.length) {
            outputDiv.textContent += finalContent.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 10);
}

// Add enter key support for topic input
document.addEventListener('DOMContentLoaded', function() {
    const topicInput = document.getElementById('topic');
    if (topicInput) {
        topicInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateContent();
            }
        });
    }
});
