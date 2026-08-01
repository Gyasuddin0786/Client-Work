import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

import Button from "../../components/common/Button";
import Container from "../../components/common/Container";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-9xl font-extrabold text-orange-600">
            404
          </p>

          <h1 className="mt-6 text-4xl font-bold text-slate-900">
            Page Not Found
          </h1>

          <p className="mt-6 leading-8 text-slate-600">
            Sorry, the page you're looking for doesn't exist,
            has been moved, or the URL may be incorrect.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>

            <Button className="hover:border-orange-300 hover:bg-gray-50 hover:text-orange-600"
              as={Link}
              to="/contact"
              variant="outline"
            >
              Contact Us
            </Button>
          </div>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-orange-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </Container>
    </section>
  );
}

export default NotFound;