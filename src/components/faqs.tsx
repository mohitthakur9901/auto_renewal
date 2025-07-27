export default function FAQs() {
  return (
    <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              Frequently <br className="hidden lg:block" /> Asked{" "}
              <br className="hidden lg:block" />
              Questions
            </h2>
            <p>Your top questions answered. Still curious? Reach out to our team.</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            <div className="pb-6">
              <h3 className="font-medium">What is your refund policy?</h3>
              <p className="text-muted-foreground mt-4">
                We offer a 30-day money-back guarantee. If you're not fully
                satisfied with your membership, request a refund within 30 days
                of purchase.
              </p>
              <ol className="list-outside list-decimal space-y-2 pl-4">
                <li className="text-muted-foreground">
                  Contact support with your account email and reason for refund.
                </li>
                <li className="text-muted-foreground">
                  Refunds are processed within 3–5 business days.
                </li>
                <li className="text-muted-foreground">
                  Refunds are only available for new users and limited to one
                  per account.
                </li>
              </ol>
            </div>

            <div className="py-6">
              <h3 className="font-medium">How do I cancel my subscription?</h3>
              <p className="text-muted-foreground mt-4">
                Log into your dashboard, navigate to “Billing,” and click
                “Cancel Subscription.” Your access will remain active until the
                end of the billing period.
              </p>
            </div>

            <div className="py-6">
              <h3 className="font-medium">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground my-4">
                Yes, plan changes can be made at any time through your account
                settings.
              </p>
              <ul className="list-outside list-disc space-y-2 pl-4">
                <li className="text-muted-foreground">
                  Upgrades take effect immediately and are pro-rated.
                </li>
                <li className="text-muted-foreground">
                  Downgrades are applied at the end of your current billing cycle.
                </li>
              </ul>
            </div>

            <div className="py-6">
              <h3 className="font-medium">Is phone support available?</h3>
              <p className="text-muted-foreground mt-4">
                We currently offer support via email and live chat. Our team
                typically responds within 24 hours on weekdays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
