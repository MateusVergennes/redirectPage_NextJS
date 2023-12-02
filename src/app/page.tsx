// page.tsx (da raiz)
import Redirect from './components/Redirect';
import Homepage from './homepage/page';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Homepage />
      <Redirect />
    </div>
  );
}
