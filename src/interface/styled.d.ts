import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      green?: string;
      yellow?: string;
      red?: string;
      black?: string;
      darkBlack?: string;
      white?: string;
      pearl?: string;
      saddleBrown?: string;
      navy?: string;
    };

    mobile?: string;

    bodyJustifyContent: {
      right?: string;
      left?: string;
      center?: string;
    };

    bodyAlignItems: {
      top?: string;
      bottom?: string;
      center?: string;
    };
  }
} 