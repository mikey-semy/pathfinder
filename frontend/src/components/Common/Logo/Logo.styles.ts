import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--logo-container-height, 83px);
    width: 100%;
`;
export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: var(--logo-width, 214px);
    height: var(--logo-height, 59px);
    padding: var(--logo-padding, 12px 24px);
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
`;

export const LogoText = styled.span`
    display: inline-block;
    position: relative;
    font-family: var(--logo-font, 'Squada One');
    font-size: var(--logo-font-size-small, 24px);
    font-weight: var(--logo-font-weight, 600);
    color: var(--logo-color);
    text-transform: uppercase;
    user-select: none;
    -webkit-user-drag: none;
    letter-spacing: var(--logo-letter-spacing, 1px);
    transition: all var(--transition-default);
    white-space: nowrap;
`;