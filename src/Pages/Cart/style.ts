import styled from 'styled-components'

export const CartContainer = styled.form`
    display: grid;
    grid-template-columns: calc(100vw - 20rem - 28rem - 2rem) 28rem;
    grid-template-rows: min-content;
    column-gap: 2rem;
    row-gap: 0.75rem;
    margin-top: 2.5rem;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: min-content;
    
    h4 {
        margin-bottom: 1rem;
    }

    & > div {
        padding: 2.5rem;
        background: ${(props) => props.theme['base-card']};
        border-radius: 6px;
        gap: 2rem;
        display: flex;
        flex-direction: column;

        .FormHeader {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;

            svg {
                fill: ${(props) => props.theme['yellow-dark']};
            }

            div {
                display: flex;
                flex-direction: column;
                gap: 0.125rem;
                justify-content: center;

                span {
                    font-size: ${(props) => props.theme['regular-m']};
                    font-weight: 400;
                    color: ${(props) => props.theme['base-subtitle']};
                }

                p {
                    color: ${(props) => props.theme['base-text']};
                    font-size: ${(props) => props.theme['regular-s']};
                }
            }
        }

        .FormBody {
            display: grid;
            grid-template-columns: 35.7% 50.5% 10.7%;
            row-gap: 1rem;
            column-gap: 0.75rem;

            input {
                padding: 0.75rem;
                border: 1px solid ${(props) => props.theme['base-button']};
                background: ${(props) => props.theme['base-input']};
                border-radius: 4px;
                transition: 0.2s;
            }

            input:focus {
                outline: 0;
                border: 1px solid ${(props) => props.theme['yellow']};
            }

            input::placeholder {
                color: ${(props) => props.theme['base-label']}
            }

            input:focus::placeholder {
                color: ${(props) => props.theme['base-input']}
            }

            & > #street {
                grid-column: 1 / span 3;
            }

            & > #complement {
                grid-column: 2 / span 2;
                position: relative;

                & > input {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                }

                input:focus + span {
                    display: none !important;
                }

                & > span {
                    display: flex;
                    position: absolute;
                    height: 100%;
                    z-index: 1;
                    right: 0;
                    align-items: center;
                    padding: 0.75rem;
                    color: ${(props) => props.theme['base-label']};
                    font-style: italic;
                    font-family: 'Roboto', sans-serif;
                    font-size: ${(props) => props.theme['regular-xs']}
                }

                & > .hide {
                    display: none;
                }
            }
        }
    }
`


export const CartCoffeesContainer = styled.div`

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    h4 {
        margin-bottom: 1rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        padding: 2.5rem;
        background: ${(props) => props.theme['base-card']};
        border-radius: 6px 44px 6px 44px;
        min-height: 10rem;
        padding: 2.5rem;
        overflow: hidden;

        & > div{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        & > .PaymentAmount {
            padding-top: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            & > div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                span {
                    color: ${(props) => props.theme['base-text']};
                }
            }

            & > .Total {
                span {
                    color: ${(props) => props.theme['base-subtitle']};
                    font-size: ${(props) => props.theme['title-s']};
                    font-weight: bold;
                }
            }

            & > button {
                border: 0;
                background: ${(props) => props.theme['yellow']};
                border-radius: 6px;
                color: ${(props) => props.theme['white']};
                padding: 0.75rem 0.5rem;
                cursor: pointer;
                font-size: ${(props) => props.theme['button-g']};
                font-weight: bold;
                transition: 0.4s;
                width: 100%;
            }

            & > button:hover {
                background: ${(props) => props.theme['yellow-dark']};
            }

            & > button:disabled {
                filter: opacity(0.8);
                background: ${(props) => props.theme['yellow-dark']};
                cursor: not-allowed;
            }

            & > button:disabled:hover {
                background: ${(props) => props.theme['yellow-dark']};
            }
        }
    }
`

export const PaymentWayContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
    gap: 2rem;
    height: min-content;
    margin-top: 0.75rem;

    & > .PaymentHeader {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;

        & > svg {
            fill: ${(props) => props.theme['purple']};
        }

        & > div {
            display: flex;
            flex-direction: column;
            gap: 0.125rem;

            & > span {
                font-size: ${(props) => props.theme['regular-m']}
            }
            & > p {
                font-size: ${(props) => props.theme['regular-s']}
            }
        }
    }

    & > .PaymentMethods {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > button {
            width: 31.5%;
            background: ${(props) => props.theme['base-button']};
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem;
            border-radius: 6px;
            font-size: ${(props) => props.theme['regular-xs']};
            color: ${(props) => props.theme['base-text']};
            font-family: 'Baloo 2', cursive;
            border: 1px solid transparent;
            cursor: pointer;
            transition: 0.2s;

            svg {
                color: ${(props) => props.theme['purple']};
            }
        }

        & > button:hover {
            background: ${(props) => props.theme['base-hover']};
        }

        & > button[value="selected"]{
            background: ${(props) => props.theme['purple-light']};
            border: 1px solid ${(props) => props.theme['purple']};
        }
    }
`