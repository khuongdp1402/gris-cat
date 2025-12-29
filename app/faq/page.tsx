import { Accordion, AccordionItem } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 14-day return policy. Items must be unworn, unwashed, and in original condition with tags attached. Please contact us at hello@griscat.com to initiate a return.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping is free for orders over 2,000,000đ and takes 3-5 business days. Express shipping (50,000đ) takes 1-2 business days.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to select countries. Please contact us for details and pricing for your location.",
  },
  {
    question: "How do I care for my garments?",
    answer:
      "Care instructions are provided with each product. Most of our silk items require dry cleaning. Please refer to the care label on your garment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer via Vietcombank. You can pay via QR code or direct bank transfer. Account details will be provided at checkout.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or cancelled within 24 hours of placement, provided they haven't been shipped. Please contact us immediately if you need to make changes.",
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="mt-8">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

