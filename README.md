# Reveal.js react template

This project is a ready-to-use template for creating presentations using reveal.js, preconfigured with React.

## Prerequisites

List of prerequisites to use this template:

- Node.js
- npm

## Using the Template

### 1. Create a new repo from the template

Click the **"Use this template"** button on the GitHub page of this repo to create a new repository based on this template.

### 2. Clone the new repo

Clone the repo you just created:

```bash
git clone https://github.com/<your-username>/<your-new-repo>.git
cd <your-new-repo>
```

### 3. Install dependencies

Install the necessary dependencies:

```bash
npm install
```

### 4. Start the development server

Start the development server to see your presentation in action:

```bash
npm start
```

Open your browser and go to `http://localhost:3000` to view your presentation.

## Project Structure

Brief description of the project structure:

- `src/` : Contains the application's source code.
- `src/Config/reveal.ts` : Contains the configuration for reveal.js. For more information, see the [reveal.js documentation](https://revealjs.com/config/).
- `src/Slides/` : Contains the presentation slides. Slides should be included in `src/Slides/index.ts`.

### Example Slide

```typescript
// src/Slides/Example.tsx
import { Note } from '@Front/components/Note';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const BasicSlide = () => {
  return (
    <Slide>
      <Title variant="h2">Basic Slide</Title>
      <Paragraph>This slide uses the reveal.js framework</Paragraph>
      <Paragraph>
        Press "f" to enter full screen mode, and press "s" to enter speaker mode. Use arrow keys to navigate between slides.
      </Paragraph>
      <Note>This is a note. You can use it to provide additional information to the audience.</Note>
    </Slide>
  );
};
```

```typescript
// src/Slides/index.ts
import { BasicSlide } from '@Front/Slides/BasicSlide';
import { type ComponentType } from 'react';

export const slides = [BasicSlide] as ComponentType[];
```

## Useful Commands

- **Build the project:**

```bash
npm run build
```

- **Run Prettier and ESLint:**

```bash
npm run lint
```

## Deployment on GitHub Pages

The template includes a GitHub Action to publish on GitHub Pages. To use it, simply change the URL in the `package.json` under the `homepage` key.

## Customization

How to customize the template for your needs:

- Modify the files in `src/` to adjust the content of your slides.
- Use React components to add interactive features.
- More information on how to use reveal.js can be found in the [reveal.js documentation](https://revealjs.com/).

## License

MIT
