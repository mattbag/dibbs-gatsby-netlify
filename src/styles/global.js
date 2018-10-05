import { injectGlobal } from 'emotion'

injectGlobal`
* {
    box-sizing: border-box
}

html {
    padding: 3vw;
    background-color: pink;
    font-size: 120%;
}

body {
    background-color: #0a0a0a;
    margin: 0;
    color: #fefefe;
    min-height: 92vh;
    /* font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif; */
    /* box-shadow: 0 0 20px 1px rgba(0, 0, 0, .5); */
    /* box-shadow: 0 0 2px 5px rgb(17, 0, 0); */
    /* font-weight: lighter; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.wf-cormorantgaramond-n4-active.wf-active{
    font-family: 'Cormorant Garamond', 'Times New Roman', Times, serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: inherit;
    font-weight: 300;
    /* font-size:2rem; */
    /* font-style: normal; */
}

p {
    color: inherit;
    /* margin-top: 0; */
}

img {
    max-width: 100%;
}

a {
    color: pink;
    /* text-decoration-color: rgba(255, 255, 255, 0.377); */
    text-decoration: none;
    text-shadow: 1px 1px #000;
    font-weight: 300;
}
[aria-current="page"],
a:focus,
a:hover {
    color: #fff;
}

hr {
    border-top: 2px solid;
    height: 0;
}

svg {
    width: 100%;
    height: 100%;
}

blockquote {
    border-left: 2px dashed white;
    padding: .2rem;
    padding-left: 1.5rem;
    margin: 0;
}
`