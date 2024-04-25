# StoryEarth 🌍

StoryEarth is an app that helps you write about yourself by generating personalized questions based on your input. It uses the OpenAI API to generate these questions, providing a unique and interactive way to write about yourself.

## Environment Variables

The app requires an environment variable to be set to run. Create a `.env.local` file in the root of the project and add the following:

```bash
OPENAI_API_KEY="your-openai-api-key"
```

## Getting Started

First, make sure you have `pnpm` installed. If not, you can install it with `npm install -g pnpm`.

Then, install the project dependencies:

```bash
pnpm install
```

Next, run the development server :

```bash
pnpm dev
```

Open http://localhost:3000 with your browser to see the result. Explore the app by answering the questions and see how it generates new questions based on your answers.
