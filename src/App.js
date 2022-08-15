import "./scss/styles.scss";
import WebpackLogo from "./assets/webpack.svg";

const App = () => {
  return `
  <div>
    <img src="${WebpackLogo}" alt="webpack logo" class="webpack-logo"/>
    <h1>Hello Webpack</h1>
    <p>Eh, What's up doc?</p>
  </div>`;
};

export { App };
