import styled from "styled-components";

export const HeaderContainer = styled.nav`
    padding: 2rem 0;
    width: auto;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;

    div {
        width: fit-content;
        gap: 0.75rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .MapPin {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: fit-content;
            padding: 0.5rem;
            gap: 0.25rem;
            color: ${(props) => props.theme['purple-dark']};
            background: ${(props) => props.theme['purple-light']};
            border-radius: 8px;

            svg {
                fill: ${(props) => props.theme['purple']};
            }
        }

        .Cart {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: fit-content;
            padding: 0.5rem;
            background: ${(props) => props.theme['yellow-light']};
            border-radius: 8px;
            position: relative;

            svg {
                fill: ${(props) => props.theme['yellow-dark']};
            }

            span {
                background: ${(props) => props.theme['yellow-dark']};
                font-size: 0.75rem;
                color: ${(props) => props.theme['white']};
                border-radius: 999px;
                width: 1.5rem;
                height: 1.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                position: absolute;
                top: 0;
                right: 0;
                margin-top: -0.75rem;
                margin-right: -0.75rem;
            }
        }
    }
`