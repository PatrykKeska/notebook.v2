import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=latin-ext');


*,*::before , *::after{ 
    box-sizing : border-box; 
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{ 
    font-size : 62.5% ; 
}

body { 
    font-family : "Montserrat", sans-serif; 
    font-size : 1.6rem; 
    padding-left : 80px;
}
`;

export default GlobalStyle;
