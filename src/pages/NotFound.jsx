import { Link } from "react-router-dom";
import Header from "../components/Header"; // Correct relative path
import Footer from "../components/Footer"; // Correct relative path

export default function NotFound() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="not-found">
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/">Return to Home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
