import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    width: 16rem;
    min-height: 19.375rem;
    padding: 1.25rem;
    background: ${(props) => props.theme['base-card']};
    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-self: center;
    align-self: center;

    & > img {
        width: 7.5rem;
        margin-top: -2.25rem 
    }

    & > .Tags {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.25rem;
        margin-top: 0.75rem;

        & > span {
            display: flex;
            border-radius: 100px;
            padding: 0.25rem 0.5rem;
            font-size: ${(props) => props.theme['tag']};
            float: left;
            align-self: center;
            justify-self: center;
            background: ${(props) => props.theme['yellow-light']};
            font-weight: 700;
            color: ${(props) => props.theme['yellow-dark']};
        }
    }

    & > h3 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme['base-subtitle']};
        font-size: ${(props) => props.theme['title-s']}
    }

    & > p {
        font-size: ${(props) => props.theme['regular-s']};
        text-align: center;
        color: ${(props) => props.theme['base-label']};
        margin-bottom: 1.5rem;
    }

    & > .PriceAndQuantity {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;

        & > h6 {
            font-size: ${(props) => props.theme['title-m']};

            & > span {
                font-size: ${(props) => props.theme['regular-s']};
            }
        }

        & > div {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;

            & > span {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border-radius: 6px;
                background: ${(props) => props.theme['base-button']};
                padding: 0.5rem;

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
                        transition: 0.1s
                    }
                }

                & > button:hover {
                    & > svg {
                        color: ${(props) => props.theme['purple-dark']};
                    }
                }

                & > p {
                    font-size: ${(props) => props.theme['regular-m']};
                    padding: 0 0.35rem 0 0.35rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            & > button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 2.25rem;
                height: 2.25rem;
                border-radius: 6px;
                border: 0;
                background: ${(props) => props.theme['purple-dark']};
                transition: 0.2s;
                cursor: pointer;

                & > svg {
                    color: white;
                    transition: 0.2s;
                }
            }

            & > button:hover {
                background: ${(props) => props.theme['purple']};
            }
        }
    }
`