export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8 text-center">
          Shipping & Returns
        </h1>

        <div className="space-y-8 font-sans text-base font-light text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Shipping
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Standard Shipping
                </h3>
                <p>
                  Free for orders over 2,000,000đ. Delivery within 3-5 business
                  days.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  Express Shipping
                </h3>
                <p>50,000đ. Delivery within 1-2 business days.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">
                  International Shipping
                </h3>
                <p>
                  Available to select countries. Contact us for details and
                  pricing.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Returns
            </h2>
            <div className="space-y-4">
              <p>
                We offer a 14-day return policy. Items must be unworn, unwashed,
                and in original condition with tags attached.
              </p>
              <p>
                To initiate a return, please contact us at hello@griscat.com
                with your order number.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

