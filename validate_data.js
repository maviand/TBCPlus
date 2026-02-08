
const fs = require('fs');

// Mock React to avoid import errors
const React = {
    createElement: () => { },
};
const lucide = {
    // Mock icons
    Map: {}, Skull: {}, Crown: {}, Globe: {}, Sword: {}, Shield: {}, Zap: {},
    Clock: {}, AlertTriangle: {}, Anchor: {}, Compass: {}, Scroll: {}, X: {}, Eye: {}, Hammer: {},
    BookOpen: {}, Flame: {}, Droplet: {}, Mountain: {}, ArrowRight: {}, Users: {}, Layout: {}, Grid: {}, Award: {}, Landmark: {}, Star: {},
    Volume2: {}, Hourglass: {}, PlayCircle: {}, Key: {}
};

// Hack to load the data file which exports 'contentData'
// We will read the file content and eval it wrapped in a function to access contentData
try {
    const fileContent = fs.readFileSync('./src/data/raid-journal-data.jsx', 'utf8');

    // Remove imports
    const cleanContent = fileContent.replace(/import .*/g, '').replace(/export const/g, 'const');

    // Add mock context for eval (React, lucide icons used in file?)
    // The data file imports icons from lucide-react. We need to mock that scope.
    // AND it uses JSX syntax (<Icon />). Node definitionally cannot parse JSX.
    // This approach is flawed for JSX.

    console.log("Cannot strictly eval JSX file. Switching to Regex validation.");

    // Fallback: Regex validation
    validateWithRegex(fileContent);

} catch (e) {
    console.error("Error checking file:", e);
}

function validateWithRegex(content) {
    // Find all objects that look like journal entries
    // Usually inside arrays: name: '...', type: '...'

    // We want to find entries that might cause crashes.
    // 1. Missing 'type'
    // 2. 'bosses' is not array of strings (unless specific data present)

    const entries = [];

    // Simple parser simulation? No, content is too complex.
    // Let's iterate manually or look for patterns.

    // Strategy: Split by "name: " to find starts of objects?
    // This is rough but might work.

    const nameMatches = [...content.matchAll(/name:\s*['"](.+?)['"]/g)];

    console.log(`Found ${nameMatches.length} entries.`);

    nameMatches.forEach(match => {
        const name = match[1];
        const index = match.index;

        // Look ahead for 'type' and 'bosses' in the next 1000 chars or until next 'name:'
        const nextName = content.indexOf('name:', index + 1);
        const limit = nextName === -1 ? content.length : nextName;
        const chunk = content.substring(index, limit);

        // Check for type
        if (!chunk.match(/type:\s*['"]/)) {
            // Might be a false positive if it's a sub-object (like hubs).
            // Only worry if it LOOKS like a main entry (has lore/image).
            if (chunk.includes('lore:') || chunk.includes('image:')) {
                console.error(`[CRITICAL] Item '${name}' MISSING TYPE!`);
            }
        }

        // Check contents of bosses
        if (chunk.includes('bosses: [')) {
            // Check if it contains '{'
            const bossesChunk = chunk.substring(chunk.indexOf('bosses: ['));
            const bossesEnd = bossesChunk.indexOf(']');
            const bossesArray = bossesChunk.substring(0, bossesEnd + 1);

            if (bossArrayHasObjects(bossesArray)) {
                // Check if it has a specific data handler
                const handlers = ['vanguardData', 'sscTkData', 'hyjalData', 'gruulMagData', 'blackTempleData', 'karaData', 'citadelData', 'sunwellData', 'chronicleData'];
                const hasHandler = handlers.some(h => chunk.includes(h + ':'));

                if (!hasHandler) {
                    // Maybe it's a sub-boss object like in Citadel?
                    // Verify if valid.
                    // console.log(`[WARN] Item '${name}' has object bosses but no obvious handler?`);
                }
            }
        }
    });

}

function bossArrayHasObjects(str) {
    // If it contains "{" inside the brackets
    return str.includes('{');
}
