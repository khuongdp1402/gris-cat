import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="font-sans text-lg font-light text-foreground/70">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-brand-accent mt-1" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  Email
                </h3>
                <p className="font-sans text-sm font-light text-foreground/70">
                  hello@griscat.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-brand-accent mt-1" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  Phone
                </h3>
                <p className="font-sans text-sm font-light text-foreground/70">
                  +84 123 456 789
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-brand-accent mt-1" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  Address
                </h3>
                <p className="font-sans text-sm font-light text-foreground/70">
                  123 Fashion Street<br />
                  Ho Chi Minh City, Vietnam
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sans text-sm font-light text-foreground mb-2 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-foreground/20 bg-background font-sans text-sm font-light text-foreground focus:outline-none focus:border-brand-accent transition-colors resize-none"
                />
              </div>

              <Button className="w-full bg-brand-accent text-background hover:bg-brand-accent/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

