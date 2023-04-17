import AppRouter from "./appRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import { ConfigProvider } from "antd";
import './public/styles/style.css';

function App() {
  return (
      <ConfigProvider direction="rtl">
      <AppRouter />
      </ConfigProvider>

  );
}

export default App;
