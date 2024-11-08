import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

    #root, body {
        height: 100%;
    }
    
    html, body {
        overscroll-behavior-x: none;
        touch-action: pan-y pinch-zoom;
    }

    body {
        background-color: var(--background);
        &.no-scroll {
            overflow: hidden;
        }
    }
    
    a {
        color: var(--link-color, #000000);
        font-weight: 600;
        text-decoration: none;
        transition: color var(--transition-default);
    }

    a:hover {
        color: var(--link-hover-color, #666666);
    }

    a:active {
        color: var(--link-active-color, #888888);
        /* background-color: var(--link-background, #FFFFFF); */
    }

    input, select {
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        text-align: center;
        width: 80px;

        &:focus {
          outline: none;
          border-color: #5A0;
        }

        &:disabled {
          background-color: #f5f5f5;
          cursor: not-allowed;
        }
    }

`;
export default Global;
