import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
  @font-face {
    font-family: 'Barlow';
    font-weight: 400;
    src: url('fonts/Barlow/Barlow-Regular.ttf');
  }

  @font-face {
    font-family: 'Barlow';
    font-weight: 700;
    src: url('../public/fonts/Barlow/Barlow-Bold.ttf');
  }

  @font-face {
    font-family: 'Barlow Condensed';
    font-weight: 400;
    src: url('/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf');
  }

  @font-face {
    font-family: 'Barlow Condensed';
    font-weight: 700;
    src: url('/fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf');
  }

  @font-face {
    font-family: 'Bellefair';
    font-weight: 400;
    src: url('/fonts/Bellefair/Bellefair-Regular.ttf');
  }


  /* colors */
  --clr-dark: 230 35% 7%;
  --clr-light: 231 77% 90%;
  --clr-white: 0 0% 100%;

  /* font-sizes */
  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
  --fs-800: 3.5rem;
  --fs-700: 1.5rem;
  --fs-600: 1rem;
  --fs-500: 1rem;
  --fs-400: 0.9375rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;

  /* font-families */
  --ff-serif: 'Bellefair', serif;
  --ff-sans-cond: 'Barlow Condensed', sans-serif;
  --ff-sans-normal: 'Barlow', sans-serif;
}

@media (min-width: 35em) {
  :root {
    --fs-800: 5rem;
    --fs-700: 2.5rem;
    --fs-600: 1.5rem;
    --fs-500: 1.25rem;
    --fs-400: 1rem;
  }
}

@media (min-width: 45em) {
  :root {
    /* font-sizes */
    --fs-800: 6.25rem;
    --fs-700: 3.5rem;
    --fs-600: 2rem;
    --fs-500: 1.75rem;
    --fs-400: 1.125rem;
  }
}


/* Box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-weight: 400;
}
`

export default GlobalStyles
