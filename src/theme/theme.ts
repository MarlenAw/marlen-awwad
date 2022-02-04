import { DefaultTheme } from 'styled-components';

const TTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    green: 'green',
    yellow: 'yellow',
    red: 'red',
    black: 'black',
    darkBlack: '#3A3B3C',
    white: 'white',
    pearl: '#E2DFD2',
    saddleBrown: '#8B4513',
    navy: '#000080',
  },
  mobile: '768px',
  bodyJustifyContent:{
    right: 'right',
    left: 'left',
    center: 'center',
  },
  bodyAlignItems:{
    top: 'flex-start',
    bottom: 'flex-end',
    center: 'center',
  }
};

export { TTheme }; 