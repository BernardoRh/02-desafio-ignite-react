import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/Themes/Default'
import { Router } from './Router'
import { GlobalStyle } from './Styles/Global'
import { HashRouter } from 'react-router-dom'
import { CentralizedContent } from './AppStyles'
import { CoffeeDeliveryContextProvider } from './Contexts/CoffeeDeliveryContext'

export function App() {
  return (
    <CentralizedContent>
      <ThemeProvider theme={defaultTheme}>
        <CoffeeDeliveryContextProvider>
          <HashRouter>
            <Router />
          </HashRouter>
        </CoffeeDeliveryContextProvider> 
        <GlobalStyle />
      </ThemeProvider>
    </CentralizedContent>
  )
}
