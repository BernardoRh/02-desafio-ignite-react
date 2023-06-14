import styled from 'styled-components'

export const HomeContainer = styled.div`
    position: relative;
    overflow: visible;
`

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: calc((100vw - 20rem) / 2 - 1.75rem) calc((100vw - 20rem) / 2 - 1.75rem);
    column-gap: 3.5rem;
    height: 34rem;
    padding: 5.75rem 0;

    & > * {
        justify-self: center;
        align-self: center;
    }
    
    main {
        justify-self: left;
        width: 36.75rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1 {
            font-size: ${(props) => props.theme['title-xl']};
            color: ${(props) => props.theme['base-title']};
        }
        p {
            font-size: ${(props) => props.theme['regular-l']};
            color: ${(props) => props.theme['base-subtitle']};
        }
    }

    .HomeImage {
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
        justify-self: right;
    }

    .Background {
        position: absolute;
        z-index: -1;
        width: 101vw;
        justify-self: center;
        align-self: center;
    }

    .Seals {
        justify-self: left;
        align-self: end;
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 2.5rem;
        row-gap: 1.25rem;

        div {
            display: flex;
            justify-content: left;
            align-items: center;
            gap: 0.75rem;

            .ShoppingCart {
                background: ${(props) => props.theme['yellow-dark']};
            }
            .Package {
                background: ${(props) => props.theme['base-label']};
            }
            .Timer {
                background: ${(props) => props.theme['yellow']};
            }
            .Coffee {
                background: ${(props) => props.theme['purple']};
            }

            span {
                padding: 0.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 999px;

                svg {
                    fill: ${(props) => props.theme['white']};
                }
            }

            p {
                color: ${(props) => props.theme['base-text']};
            }
        }
    }
`

export const CoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    gap: 3.375rem;

    h2 {
        font-size: ${(props) => props.theme['title-l']};
        color: ${(props) => props.theme['base-title']};
        justify-self: center;
        align-self: center;
        width: 16rem;
    }

    .TypeOfCoffees {
        display: grid;
        grid-template-columns: 23.24% 23.24% 23.24% 23.24%;
        column-gap: 2rem;
        row-gap: 2.5rem;
    }
`