// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['**/node_modules', '**/public', '**/.nuxt', 'app/components/ui/**'],
})
