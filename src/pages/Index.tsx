import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Gagnamót
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Operations and Software Architecture Consulting in Reykjavik, Iceland
          </p>
          <p className="mb-12 text-lg text-muted-foreground max-w-2xl">
            We deliver expert consulting in operations management and software architecture, 
            helping businesses optimize their processes and build scalable technical solutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:birkir@gagnamot.is">Contact Birkir</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:gyda@gagnamot.is">Contact Gyda</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-20">
          <h2 className="mb-12 text-3xl font-bold">Our Expertise</h2>
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl">
            <article>
              <h3 className="mb-3 text-xl font-semibold">Birkir Atlason</h3>
              <p className="mb-2 text-muted-foreground">Software Engineer</p>
              <p className="text-muted-foreground leading-relaxed">
                Specializing in software architecture, system design, and technical consulting. 
                Helping organizations build robust, scalable solutions that drive business value.
              </p>
              <a 
                href="mailto:birkir@gagnamot.is" 
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                birkir@gagnamot.is
              </a>
            </article>
            <article>
              <h3 className="mb-3 text-xl font-semibold">Gyða Björk Þorsteinsdóttir</h3>
              <p className="mb-2 text-muted-foreground">Management Engineer</p>
              <p className="text-muted-foreground leading-relaxed">
                Expert in operations management, process optimization, and strategic planning. 
                Supporting companies in streamlining operations and achieving operational excellence.
              </p>
              <a 
                href="mailto:gyda@gagnamot.is" 
                className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                gyda@gagnamot.is
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h2 className="mb-6 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Based in Reykjavik, Iceland, we're ready to help with your operations and 
            software architecture needs. Reach out to discuss how we can support your business.
          </p>
          <div className="flex flex-col gap-3">
            <a 
              href="mailto:birkir@gagnamot.is"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>birkir@gagnamot.is</span>
            </a>
            <a 
              href="mailto:gyda@gagnamot.is"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>gyda@gagnamot.is</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gagnamót. Reykjavik, Iceland.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
