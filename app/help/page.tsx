export default function HelpPage() {
    return (
        <div className="pt-48 pb-20 px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-playfair font-medium text-gris-dark mb-8">
                    Help & Support
                </h1>
                <p className="text-gris-medium mb-6">
                    We're here to help you with any questions or concerns.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="border border-gris-light p-6 rounded-sm">
                        <h2 className="text-xl font-bold text-gris-dark mb-3">Contact Us</h2>
                        <p className="text-sm text-gris-medium">
                            Email: support@gris-cat.com<br />
                            Phone: +84 123 456 789
                        </p>
                    </div>

                    <div className="border border-gris-light p-6 rounded-sm">
                        <h2 className="text-xl font-bold text-gris-dark mb-3">FAQs</h2>
                        <p className="text-sm text-gris-medium">
                            Find answers to commonly asked questions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
