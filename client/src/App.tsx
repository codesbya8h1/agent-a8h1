import { Router, Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/lib/cart";
import { AnimatePresence } from "framer-motion";
import LandingPage from "@/pages/LandingPage";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Projects from "@/pages/Projects";
import PrintShop from "@/pages/PrintShop";
import Cart from "@/pages/Cart";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Base path for GitHub Pages (e.g. /personal-portfolio). Empty for local dev or custom domain.
const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

function RouterContent() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {location !== "/" && <Navbar />}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:id" component={BlogPost} />
            <Route path="/projects" component={Projects} />
            <Route path="/print-shop" component={PrintShop} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </main>
      {location !== "/" && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router base={basePath || "/"}>
          <RouterContent />
        </Router>
        <Toaster />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;