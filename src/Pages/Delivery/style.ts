import styled from 'styled-components'

export const DeliveryContainer = styled.div`
    
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 1.75rem;
    margin-top: 5rem;

    & > .header {
        & > h4 {
            font-size: ${(props) => props.theme['title-l']};
            color: ${(props) => props.theme['yellow-dark']};
        }
        & > p {
            font-size: ${(props) => props.theme['regular-l']};
            color: ${(props) => props.theme['base-subtitle']};
        }
    }

    & > .info {
        position: relative;
        align-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px 36px;
        width: 32.875rem;
        height: 16.875rem;
        border-radius: 6px 36px;
        background: linear-gradient(145deg, #DBAC2C, #8047F8);

        & > div {
            width: 32.725rem;
            height: 16.725rem;
            border-radius: 6px 36px;
            display: flex;
            justify-content: center;
            align-items: start;
            padding: 40px;
            gap: 32px;
            flex-direction: column;
            background: ${(props) => props.theme['background']};

            & > div {

                display: flex;
                flex-direction: row;
                gap: 0.75rem;
                justify-content: left;
                align-items: center;

                & > .icon {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 9999px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    & > svg {
                        color: white;
                    }
                }

                & > #map {
                    background: ${(props) => props.theme['purple']};
                }
                & > #clock {
                    background: ${(props) => props.theme['yellow']};
                }
                & > #dollar {
                    background: ${(props) => props.theme['yellow-dark']};
                }

                & > span {
                    & > p {
                        color: ${(props) => props.theme['base-text']};
                    }
                }
            }
        }
    }

    

    & > img {
        justify-self: right;
    }

`