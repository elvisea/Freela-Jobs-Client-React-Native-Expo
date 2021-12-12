import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      gray: string;
      white: string;
      shape: string;
      error: string;
      inputs: string;
      orange: string;
      grayHard: string;
      background: string;
      blackMedium: string;
      backgroundColor: string;
    };

    fonts: {
      bold: string;
      medium: string;
      regular: string;
    };
  }
}
