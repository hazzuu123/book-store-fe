import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./style/theme";
function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName="light" />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
