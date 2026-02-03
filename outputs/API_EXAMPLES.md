# API Usage Examples

## Example 1: Simple Casual Look

```bash
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["casual"],
    "moods": ["minimalist"]
  }'
```

## Example 2: Formal Event Outfit

```bash
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["formal"],
    "moods": ["elegant", "sophisticated"],
    "attributes": {
      "colors": ["jewel_tones"],
      "occasion": "formal_event",
      "season": "winter",
      "preferredFit": "tailored"
    }
  }'
```

## Example 3: Streetwear with Custom Keywords

```bash
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["streetwear"],
    "moods": ["edgy", "bold"],
    "attributes": {
      "colors": ["neon", "dark"],
      "season": "all_season",
      "preferredFit": "oversized",
      "mustHaveItems": ["hoodie", "sneakers"]
    },
    "customKeywords": ["futuristic", "tech-wear"],
    "intensity": "strong"
  }'
```

## Example 4: Business Professional

```bash
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["business", "minimalist"],
    "moods": ["sophisticated", "timeless"],
    "attributes": {
      "colors": ["neutral", "monochrome"],
      "occasion": "work",
      "season": "all_season",
      "preferredFit": "tailored",
      "mustHaveItems": ["blazer", "dress pants"],
      "avoidPatterns": ["loud prints", "casual denim"]
    },
    "intensity": "moderate"
  }'
```

## Example 5: Boho Summer Vibe

```bash
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["boho", "vintage"],
    "moods": ["romantic", "playful"],
    "attributes": {
      "colors": ["earth_tones", "pastels"],
      "occasion": "beach",
      "season": "summer",
      "preferredFit": "loose",
      "mustHaveItems": ["maxi dress", "sandals"]
    }
  }'
```

## Example 6: With Custom Strategy

```bash
curl -X POST "http://localhost:3000/api/prompts/generate?maxLength=200&variationCount=3" \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["athletic"],
    "moods": ["bold"],
    "attributes": {
      "colors": ["bright"],
      "occasion": "everyday"
    }
  }'
```

## Example 7: Update Strategy

```bash
curl -X PUT http://localhost:3000/api/prompts/strategy \
  -H "Content-Type: application/json" \
  -d '{
    "maxLength": 400,
    "includeNegativePrompts": true,
    "variationCount": 3
  }'
```

## Example 8: Batch Processing

```bash
curl -X POST http://localhost:3000/api/prompts/batch \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": [
      {
        "categories": ["casual"],
        "moods": ["minimalist"]
      },
      {
        "categories": ["formal"],
        "moods": ["elegant"]
      },
      {
        "categories": ["streetwear"],
        "moods": ["edgy"]
      }
    ]
  }'
```

## Example 9: Complex Mixed Input

```bash
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["business", "minimalist"],
    "moods": ["sophisticated", "timeless"],
    "attributes": {
      "colors": ["neutral", "monochrome"],
      "occasion": "work",
      "season": "all_season",
      "bodyType": "athletic",
      "preferredFit": "tailored",
      "mustHaveItems": ["blazer", "oxford shoes", "leather bag"],
      "avoidPatterns": ["busy prints", "casual graphics"]
    },
    "customKeywords": ["professional", "versatile", "high-quality"],
    "intensity": "moderate"
  }'
```

## Example Response

```json
{
  "success": true,
  "data": {
    "primary": {
      "id": "1706927400000-abc123",
      "prompt": "Design a clean and simple fashion look incorporating relaxed and comfortable pieces, everyday wear essentials, warm earth tones like brown, olive, and terracotta. The outfit should suitable for daily activities, light layering and fresh spring fabrics, loose fit, incorporating denim jacket and white sneakers.",
      "metadata": {
        "structureType": "hybrid",
        "emphasisAreas": ["categories", "mood"],
        "keywords": ["casual", "minimalist", "denim jacket", "white sneakers"],
        "confidence": 0.78,
        "tokenEstimate": 52
      },
      "createdAt": "2026-02-03T05:30:00.000Z"
    },
    "variations": [
      {
        "id": "1706927400001-def456",
        "prompt": "A fashion look featuring relaxed and comfortable pieces...",
        "variation": "A",
        "metadata": {
          "structureType": "hybrid",
          "emphasisAreas": ["categories", "mood"],
          "keywords": ["casual", "minimalist"],
          "confidence": 0.78,
          "tokenEstimate": 45
        },
        "createdAt": "2026-02-03T05:30:00.000Z"
      },
      {
        "id": "1706927400002-ghi789",
        "prompt": "Create a clean and simple outfit with everyday wear essentials...",
        "variation": "B",
        "metadata": {
          "structureType": "descriptive",
          "emphasisAreas": ["categories", "mood"],
          "keywords": ["casual", "minimalist"],
          "confidence": 0.78,
          "tokenEstimate": 48
        },
        "createdAt": "2026-02-03T05:30:00.000Z"
      }
    ],
    "inputSummary": "casual style with minimalist aesthetic for everyday in spring"
  },
  "timestamp": "2026-02-03T05:30:00.000Z"
}
```

## Testing with JavaScript/TypeScript

```typescript
async function generatePrompt() {
  const response = await fetch('http://localhost:3000/api/prompts/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      categories: ['streetwear'],
      moods: ['edgy'],
      attributes: {
        colors: ['dark'],
        season: 'fall'
      }
    }),
  });

  const data = await response.json();
  console.log('Primary Prompt:', data.data.primary.prompt);
  console.log('Variations:', data.data.variations);
}
```

## Error Handling Example

```bash
# Invalid input
curl -X POST http://localhost:3000/api/prompts/generate \
  -H "Content-Type: application/json" \
  -d '{
    "categories": ["invalid_category"]
  }'

# Response:
{
  "success": false,
  "error": "Invalid fashion vibe input",
  "details": [
    {
      "field": "categories.0",
      "message": "Invalid enum value. Expected 'casual' | 'formal' | ..."
    }
  ],
  "timestamp": "2026-02-03T05:30:00.000Z"
}
```
