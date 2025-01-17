import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
    mono: 'Mononoki, monospace',
    dyslexic: 'OpenDyslexic, sans-serif',
    dyslexicMono: 'OpenDyslexic Mono, monoscape',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: ({ colorMode }) => ({
      '.mdx-prose': {
        h1: {
          _after: {
            bg: 'gray.700',
            borderBottom: 'none',
            h: '1px',
            content: "''",
            display: 'block',
            mt: [4, 8],
          },
          color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
          fontSize: ['3xl', '4xl', '6xl'],
          fontWeight: 900,
          letterSpacing: '-1px',
          lineHeight: 'normal',
          maxW: '600px',
          my: [4, 8, 16],
          textAlign: ['left', 'center'],
          mx: 'auto',
        },
        h2: {
          color: colorMode === 'dark' ? 'orange.200' : 'blue.600',
          fontSize: ['2xl', '3xl', '4xl'],
          fontWeight: 700,
          letterSpacing: '-1px',
          lineHeight: 'normal',
          maxW: '600px',
          mb: 4,
          mt: [12, 20],
        },
        p: {
          color: colorMode === 'dark' ? 'gray.300' : 'gray.600',
          fontSize: [18, 20],
          lineHeight: '1.8',
          my: 8,
        },
        ul: {
          fontSize: [18, 20],
          listStyleType: 'disc',
          mb: 8,
          ml: 2,
          mt: 8,
          pl: 4,
        },
        ol: {
          fontSize: [18, 20],
          listStyleType: 'decimal',
          mb: 8,
          ml: 2,
          mt: 8,
          pl: 4,
        },
        li: {
          mb: 4,
        },
        blockquote: {
          backgroundColor: `${colorMode === 'dark' ? '#222937' : '#f1f8ff'}`,
          borderLeft: `4px solid ${
            colorMode === 'dark' ? '#fbd38d' : '#2b6cb0'
          }`,
          my: 8,
          px: 8,
          py: 2,
        },
      },
    }),
  },
})
