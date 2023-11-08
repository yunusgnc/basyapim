import "@/styles/globals.css";
import Layout from "../../component/layout/Layout";
import { Provider } from "react-redux";
import store from "../redux-toolkit/store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
