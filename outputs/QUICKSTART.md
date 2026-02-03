# Quick Start Guide

Get the AI Look Generator backend running in 5 minutes.

## Prerequisites

- Node.js 18+ and npm
- Basic knowledge of REST APIs
- (Optional) curl or Postman for testing

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env

# 3. Build the project (optional, for production)
npm run build
```

## Running the Server

### Development Mode (with hot reload)
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

You should see:
```
🚀 AI Look Generator Backend running on http://0.0.0.0:3000
📝 Health check: http://0.0.0.0:3000/health
🎨 Prompt API: http://0.0.0.0:3000/api/prompts
```

## Test the API

### 1. Health Check
```bash
curl http://localhost:3000/health
```

Expected response:
```json
{
  "success": true,
  "message": "AI Look Generator Backend - Healthy",
  "timestamp": "2026-02-03T05:30:00.000Z"
}
```

### 2. Generate a Simple Prompt
```bash
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["casual"],
    "moods": ["minimalist"]
  }'
```

### 3. Generate with Full Options
```bash
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["streetwear"],
    "moods": ["edgy", "bold"],
    "attributes": {
      "colors": ["dark", "neon"],
      "occasion": "casual_outing",
      "season": "fall",
      "preferredFit": "oversized",
      "mustHaveItems": ["hoodie", "cargo pants"]
    },
    "customKeywords": ["urban", "tech-inspired"],
    "intensity": "strong"
  }'
```

## Understanding the Response

```json
{
  "success": true,
  "data": {
    "primary": {
      "id": "unique-id",
      "prompt": "The main AI prompt to use",
      "metadata": {
        "structureType": "hybrid",
        "keywords": ["streetwear", "edgy"],
        "confidence": 0.85,
        "tokenEstimate": 75
      }
    },
    "variations": [
      {
        "variation": "A",
        "prompt": "Alternative prompt version A"
      },
      {
        "variation": "B",
        "prompt": "Alternative prompt version B"
      }
    ],
    "inputSummary": "streetwear style with edgy aesthetic..."
  }
}
```

### Key Fields
- **primary.prompt**: Use this as your AI image generation prompt
- **variations**: Alternative prompts for A/B testing
- **metadata.confidence**: How well the input was interpreted (0-1)
- **inputSummary**: Human-readable description of the request

## Testing

Run the test suite:
```bash
npm test
```

Run with coverage:
```bash
npm run test:coverage
```

## Common Use Cases

### 1. Casual Daily Outfit
```json
{
  "categories": ["casual"],
  "moods": ["minimalist"],
  "attributes": {
    "occasion": "everyday",
    "season": "spring"
  }
}
```

### 2. Formal Business Look
```json
{
  "categories": ["business", "formal"],
  "moods": ["sophisticated"],
  "attributes": {
    "colors": ["neutral"],
    "occasion": "work",
    "preferredFit": "tailored"
  }
}
```

### 3. Edgy Streetwear
```json
{
  "categories": ["streetwear"],
  "moods": ["edgy", "rebellious"],
  "attributes": {
    "colors": ["dark"],
    "preferredFit": "oversized"
  },
  "intensity": "strong"
}
```

### 4. Romantic Date Night
```json
{
  "categories": ["formal"],
  "moods": ["romantic", "elegant"],
  "attributes": {
    "colors": ["pastels", "jewel_tones"],
    "occasion": "date_night",
    "season": "summer"
  }
}
```

## Integration with Frontend

### React/TypeScript Example

```typescript
interface FashionVibeInput {
  categories?: string[];
  moods?: string[];
  attributes?: {
    colors?: string[];
    occasion?: string;
    season?: string;
    preferredFit?: string;
    mustHaveItems?: string[];
    avoidPatterns?: string[];
  };
  customKeywords?: string[];
  intensity?: 'subtle' | 'moderate' | 'strong';
}

async function generateLookPrompt(input: FashionVibeInput) {
  try {
    const response = await fetch('http://localhost:3000/api/prompts/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error('Failed to generate prompt');
    }

    const result = await response.json();
    
    // Use the primary prompt for AI image generation
    const aiPrompt = result.data.primary.prompt;
    
    // Use variations for A/B testing
    const variations = result.data.variations;
    
    return { aiPrompt, variations };
  } catch (error) {
    console.error('Error generating prompt:', error);
    throw error;
  }
}

// Usage in your component
const handleGenerateLook = async () => {
  const input: FashionVibeInput = {
    categories: selectedCategories,
    moods: selectedMoods,
    attributes: {
      colors: selectedColors,
      occasion: selectedOccasion,
    },
  };

  const { aiPrompt } = await generateLookPrompt(input);
  
  // Now use aiPrompt with your AI image generation API
  console.log('Generated prompt:', aiPrompt);
};
```

## Configuration

### Change Port
```bash
# In .env file
PORT=4000
```

### Customize Strategy
```bash
# Via query parameters
curl "http://localhost:3000/api/prompts/generate?maxLength=300&variationCount=3"

# Via API endpoint
curl -X PUT http://localhost:3000/api/prompts/strategy \
  -H "Content-Type: application/json" \
  -d '{
    "maxLength": 400,
    "includeNegativePrompts": true,
    "variationCount": 3
  }'
```

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=4000 npm run dev
```

### Module Not Found
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Rebuild
npm run build
```

### Tests Failing
```bash
# Clear cache
npm test -- --clearCache
npm test
```

## Next Steps

1. **Read the full documentation**: See README.md
2. **Review API examples**: See API_EXAMPLES.md
3. **Understand architecture**: See ARCHITECTURE.md
4. **Integrate AI APIs**: Ready to connect OpenAI, Stability AI, etc.
5. **Add features**: Extend with your own custom logic

## Getting Help

- Check error messages carefully
- Review validation errors in the response
- Ensure input matches the schema
- Check the test files for more examples

## Production Deployment

Before deploying to production:

1. Set `NODE_ENV=production` in `.env`
2. Use `npm run build` to compile TypeScript
3. Use `npm start` instead of `npm run dev`
4. Configure proper CORS origins
5. Add rate limiting
6. Set up monitoring and logging
7. Use a process manager (PM2, systemd)

---

**You're ready to build amazing AI fashion experiences! 🎨👗**
