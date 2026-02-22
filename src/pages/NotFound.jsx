import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section className="border-t border-border py-24">
          <Container className="text-center">
            <h1 className="text-3xl font-bold text-foreground">404</h1>
            <p className="text-base text-muted-foreground mt-4">
              The page you are looking for does not exist.
            </p>
            <Link
              to="/"
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mt-6"
            >
              Back to home
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
