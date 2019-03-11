declare module "styled-components" {
  import styled, {DefaultTheme, ThemeProviderComponent} from "styled-components";

  export const ThemeProvider: ThemeProviderComponent<AnyIfEmpty<DefaultTheme>>;
  export interface ThemeInterface {
    primaryColor: string;
  }
  export default styled;
}