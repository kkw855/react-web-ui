// noinspection JSUnusedGlobalSymbols

// Replace your-framework with the framework you are using (e.g., react-vite, nextjs-vite, vue3-vite, etc.)
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  typescript: {
    reactDocgen: false,
  },
}

export default config
