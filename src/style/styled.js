import {createGlobalStyle} from 'styled-components'
import { color } from './colorVar'

export const supportDeviceSize = 420

export const GlobalStyle = createGlobalStyle`
html {
font-size: 62.5%; // 1rem = 10px 로 변경 한 것, 바꾼 이유는 사파리에서 폰트가 너무 작은것은 허용하지 않기 때문.
// 참고링크 = https://stackoverflow.com/questions/68790660/setting-root-font-size-not-affecting-rem-units-in-safari-for-margin-padding-et
// 128px => 12.8rem , 4px => 0.4rem 가능!

    @media all and (max-width: ${supportDeviceSize}px) {
        // font-size: 31.25%;
        color: white;
    }
}

body {
    background: ${color.gray900};
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'SUIT', sans-serif, Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    // max-width: 100vw;
}

div, span, input, button, select {
    box-sizing: border-box;
    -ms-overflow-style: none;
    font-family: 'SUIT', sans-serif, Roboto;
}

div::-webkit-scrollbar{
    display:none;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    inline-height: 0;
}

button:disabled {
    background-color: #737373;
}
`
