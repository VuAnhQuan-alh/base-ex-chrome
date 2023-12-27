import { PropTypes } from "prop-types";
import "./App.css";

function App(props) {
  return (
    <section className="text-center">
      <section className="flex justify-center gap-x-3 mb-2">
        <img
          src="https://www.svgrepo.com/show/8815/coin.svg"
          className="logo"
          alt="Vite logo"
        />
        <img
          src="https://www.svgrepo.com/show/452092/react.svg"
          className="logo react"
          alt="React logo"
        />
      </section>

      <section>
        <button
          className="rounded bg-slate-200 text-slate-700"
          onClick={props.mount}
        >
          Mount Icon
        </button>
        <p className="py-2 font-[SVN-Gilroy] text-[14px] font-medium">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </section>

      <p className="read-the-docs">
        Click on the Coin and React logos to learn more
      </p>
    </section>
  );
}

App.propTypes = {
  mount: PropTypes.func,
};

export default App;
