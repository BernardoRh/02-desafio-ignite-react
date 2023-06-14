import styled from "styled-components";

export const CoffeeCardRowContainer = styled.div`

    display: flex;
    flex-direction: row;
    padding-bottom: 1.5rem;
    gap: 1.25rem;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
    position: relative;

    & > img {
        width: 4rem;
        height: 4rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > p {
            color: ${(props) => props.theme['base-subtitle']};
            font-size: ${(props) => props.theme['regular-m']};
        }

        & > div {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;

            & > * {
                display: flex;
                flex-direction: row;
                background: ${(props) => props.theme['base-button']};
                padding: 0.5rem;
                gap: 0.25rem;
                border-radius: 6px;

                & > button {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    border: 0;
                    background: transparent;
                    cursor: pointer;
                    padding: 0 0.15rem 0 0.15rem;

                    & > svg {
                        color: ${(props) => props.theme['purple']};
                        transition: 0.1s;
                    }
                }

                & > button:hover {
                    & > svg {
                        color: ${(props) => props.theme['purple-dark']};
                    }
                }
            }

            & > button {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 0;
                background: transparent;
                cursor: pointer;
                padding: 0 0.15rem 0 0.15rem;
                background: ${(props) => props.theme['base-button']};
                padding: 0.5rem;
                font-size: ${(props) => props.theme['button-s']};
                color: ${(props) => props.theme['base-text']};

                & > svg {
                    color: ${(props) => props.theme['purple']};
                    transition: 0.1s
                }
            }

            & > button:hover {
                & > svg {
                    color: ${(props) => props.theme['purple-dark']};
                }
            }
        }

    }

    & > p {
        color: ${(props) => props.theme['base-subtitle']};
        font-size: ${(props) => props.theme['regular-m']};
        font-weight: 800;
        position: absolute;
        right: 0;

    }
`