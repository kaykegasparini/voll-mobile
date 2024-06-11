import { extendTheme } from 'native-base'

export const Temas = extendTheme({
  colors: {
    green: {
      300: '#A3E635', // Verde claro moderno
      500: '#22C55E', // Verde médio moderno
      700: '#15803D', // Verde escuro moderno
    },
    red: {
      300: '#F87171', // Vermelho claro moderno
      500: '#EF4444', // Vermelho médio moderno
      700: '#B91C1C', // Vermelho escuro moderno
    },
    white: '#FFFFFF',
    black: '#000000'
  },
})