# AI Look Generator - Backend (Prompt Builder Module)

A production-ready Node.js/TypeScript backend for generating AI fashion prompts. This module converts user-selected fashion vibes into structured prompts suitable for AI image generation.

## 🏗️ Architecture

### Clean Architecture Principles

```
src/
├── types/           # Type definitions and interfaces
├── validation/      # Zod schemas for input validation
├── templates/       # Prompt templates and building blocks
├── services/        # Business logic (PromptBuilderService)
├── controllers/     # HTTP request handlers
├── routes/          # Express route definitions
├── middleware/      # Express middleware (error handling)
├── app.ts          # Express app configuration
└── index.ts        # Server entry point
```

### Core Components

1. **PromptBuilderService** - Core business logic for prompt generation
2. **PromptBuilderController** - HTTP request/response handling
3. **Validation Layer** - Type-safe input validation with Zod
4. **Template System** - Extensible prompt templates

## 🚀 Features

- ✅ **Multi-dimensional Fashion Input** - Categories, moods, colors, occasions, seasons
- ✅ **A/B Testing Support** - Generate multiple prompt variations
- ✅ **Structured Prompts** - Three structure types (descriptive, directive, hybrid)
- ✅ **Metadata Generation** - Confidence scores, keyword extraction, token estimation
- ✅ **Batch Processing** - Handle multiple inputs in one request
- ✅ **Type Safety** - Full TypeScript with Zod validation
- ✅ **Extensible Templates** - Easy to add new fashion styles
- ✅ **Comprehensive Testing** - Jest test suite with >80% coverage
- ✅ **Production Ready** - Error handling, logging, graceful shutdown

## 📦 Installation

```bash
npm install
```

## 🧪 Development

```bash
# Run in development mode with hot reload
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Lint code
npm run lint

# Build for production
npm run build
```

## 🔧 Configuration

Create a `.env` file:

```env
PORT=3000
HOST=0.0.0.0
NODE_ENV=development
```

## 📡 API Endpoints

### 1. Generate Prompts

**POST** `/api/prompts/generate`

Generate fashion prompts from vibe input.

**Request Body:**
```json
{
  "categories": ["casual", "streetwear"],
  "moods": ["edgy", "bold"],
  "attributes": {
    "colors": ["earth_tones"],
    "occasion": "casual_outing",
    "season": "fall",
    "preferredFit": "oversized",
    "mustHaveItems": ["denim jacket", "cargo pants"],
    "avoidPatterns": ["florals"]
  },
  "customKeywords": ["sustainable", "vintage-inspired"],
  "intensity": "moderate"
}
```

**Query Parameters (Optional):**
- `maxLength` - Max prompt length (default: 500)
- `includeNegativePrompts` - Include negative prompts (default: false)
- `variationCount` - Number of variations (0-5, default: 2)

**Response:**
```json
{
  "success": true,
  "data": {
    "primary": {
      "id": "1706927400000-abc123",
      "prompt": "Design a edgy and bold fashion look incorporating...",
      "metadata": {
        "structureType": "hybrid",
        "emphasisAreas": ["categories", "mood"],
        "keywords": ["casual", "streetwear", "edgy", "bold"],
        "confidence": 0.85,
        "tokenEstimate": 75
      },
      "createdAt": "2026-02-03T05:30:00.000Z"
    },
    "variations": [
      {
        "id": "1706927400001-def456",
        "prompt": "A fashion look featuring...",
        "variation": "A",
        "metadata": { ... },
        "createdAt": "2026-02-03T05:30:00.000Z"
      },
      {
        "id": "1706927400002-ghi789",
        "prompt": "Create a edgy outfit with...",
        "variation": "B",
        "metadata": { ... },
        "createdAt": "2026-02-03T05:30:00.000Z"
      }
    ],
    "inputSummary": "casual, streetwear style with edgy and bold aesthetic for casual_outing in fall"
  },
  "timestamp": "2026-02-03T05:30:00.000Z"
}
```

### 2. Get Strategy

**GET** `/api/prompts/strategy`

Get current prompt generation strategy.

**Response:**
```json
{
  "success": true,
  "data": {
    "maxLength": 500,
    "includeNegativePrompts": false,
    "styleGuideVersion": "v1",
    "variationCount": 2
  },
  "timestamp": "2026-02-03T05:30:00.000Z"
}
```

### 3. Update Strategy

**PUT** `/api/prompts/strategy`

Update prompt generation strategy.

**Request Body:**
```json
{
  "maxLength": 300,
  "includeNegativePrompts": true,
  "variationCount": 3
}
```

### 4. Batch Generate

**POST** `/api/prompts/batch`

Generate prompts for multiple inputs (max 10).

**Request Body:**
```json
{
  "inputs": [
    {
      "categories": ["formal"],
      "moods": ["elegant"]
    },
    {
      "categories": ["casual"],
      "moods": ["playful"]
    }
  ]
}
```

## 📋 Input Types

### Fashion Categories
- `casual`, `formal`, `streetwear`, `business`, `athletic`
- `boho`, `vintage`, `minimalist`, `maximalist`, `grunge`

### Mood Aesthetics
- `minimalist`, `edgy`, `vintage`, `romantic`, `bold`
- `elegant`, `playful`, `sophisticated`, `rebellious`, `timeless`

### Color Palettes
- `monochrome`, `neutral`, `earth_tones`, `pastels`
- `bright`, `dark`, `jewel_tones`, `neon`

### Occasions
- `everyday`, `work`, `date_night`, `party`, `wedding`
- `casual_outing`, `formal_event`, `beach`, `travel`

### Seasons
- `spring`, `summer`, `fall`, `winter`, `all_season`

## 🧩 Extending the System

### Adding New Fashion Categories

Edit `src/types/index.ts`:
```typescript
export enum FashionCategory {
  // ... existing
  PREPPY = 'preppy'
}
```

Add descriptors in `src/templates/promptTemplates.ts`:
```typescript
export const CATEGORY_DESCRIPTORS: Record<FashionCategory, string[]> = {
  // ... existing
  [FashionCategory.PREPPY]: [
    'classic preppy pieces',
    'collegiate-inspired items'
  ]
};
```

### Customizing Prompt Structure

Modify templates in `src/templates/promptTemplates.ts`:
```typescript
export const BASE_STRUCTURES = {
  descriptive: 'Your custom template here...',
  directive: 'Another template...',
  hybrid: 'Mix of both...'
};
```

### Adding Validation Rules

Update schemas in `src/validation/schemas.ts`:
```typescript
export const FashionVibeInputSchema = z.object({
  // Add custom validation
}).refine(/* custom logic */);
```

## 🧪 Testing

The test suite covers:
- ✅ Service initialization and configuration
- ✅ Input validation
- ✅ Prompt generation logic
- ✅ Category, mood, and attribute handling
- ✅ Variation generation
- ✅ Metadata calculation
- ✅ Edge cases and error handling

Run tests:
```bash
npm test
```

View coverage:
```bash
npm run test:coverage
```

## 🔒 Error Handling

All errors return consistent format:
```json
{
  "success": false,
  "error": "Error message",
  "details": [
    {
      "field": "categories",
      "message": "Invalid enum value"
    }
  ],
  "timestamp": "2026-02-03T05:30:00.000Z"
}
```

## 🚦 Health Check

**GET** `/health`

```json
{
  "success": true,
  "message": "AI Look Generator Backend - Healthy",
  "timestamp": "2026-02-03T05:30:00.000Z"
}
```

## 📈 Performance

- Prompt generation: ~5-10ms per request
- Batch processing: ~50-100ms for 10 inputs
- Memory usage: ~50MB base + ~5MB per concurrent request

## 🔜 Future Enhancements

Ready for integration:
1. **AI API Integration** - Plug in OpenAI, Stability AI, Midjourney
2. **Caching Layer** - Redis for frequently used prompts
3. **Rate Limiting** - Protect against abuse
4. **Analytics** - Track popular combinations
5. **User Preferences** - Store and reuse user style profiles
6. **Advanced Templates** - ML-based prompt optimization

## 📝 License

MIT

## 🤝 Contributing

1. Follow TypeScript strict mode
2. Maintain >80% test coverage
3. Use conventional commits
4. Update documentation

---

**Built with 🎨 for the AI Look Generator project**
