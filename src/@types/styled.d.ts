// styled type theme

// src/@types/styled.d.ts

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      'text-base': string;
      'text-title': string;
      'grey-50': string;
      'grey-100': string;
      'grey-200': string;
      'grey-300': string;
      'grey-400': string;
      'grey-500': string;
      'grey-600': string;
      'grey-700': string;
      'grey-800': string;
      'grey-900': string;
    };
  }
}
