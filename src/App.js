import "./scss/styles.scss";
import "./main.css";
import WebpackLogo from "./assets/webpack.svg";

const App = () => {
  return `
  <div class="flex flex-col w-full h-screen justify-center items-center gap-4">
    <img src="${WebpackLogo}" alt="webpack logo" class="webpack-logo"/>
    <h1 class="bg-gradient-to-r from-cyan-500 to-indigo-500 text-transparent text-7xl bg-clip-text font-black">Hello Webpack</h1>
    <p class="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent text-3xl bg-clip-text font-bold">Eh, What's up doc?</p>
  </div>`;
};

export { App };
