import { Link } from "react-router";
import Hero from "../components/Hero";
import { pageMeta } from "../utils/meta";

export const meta = () =>
  pageMeta({
    title: "Page not found | Taminoturoko Briggs",
    description: "This page doesn't exist.",
    path: "/404",
    noindex: true,
  });

function NotFound() {
  return (
    <div>
      <Hero text1="404" text2="This page doesn’t exist" />
      <div className="wrapper notFound">
        <p>The link may be out of date, or the address mistyped.</p>
        <Link to="/" className="link-arrow">
          Go to the home page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
