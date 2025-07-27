import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Trusted by growing communities and member-first businesses
          </h2>
          <p>
            From gyms and yoga studios to coworking spaces and online communities — our
            platform helps organizations simplify billing, reduce churn, and engage
            their members with ease.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <img
                className="h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Nike Logo"
                height="24"
                width="auto"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  We’ve cut down admin time by over 70%. Automated reminders and
                  recurring payments mean fewer cancellations and more happy members.
                  This platform just works — seamlessly.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/shekinah.webp"
                      alt="Shekinah Tshiokufila"
                    />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">
                      Shekinah Tshiokufila
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Owner, Movement Studio
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Billing used to be our biggest headache. Now it’s fully automated.
                  Our members love the renewal reminders — and we love getting paid
                  on time.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/jonathan.webp"
                      alt="Jonathan Yombo"
                    />
                    <AvatarFallback>JY</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Jonathan Yombo</cite>
                    <span className="text-muted-foreground block text-sm">
                      Community Manager, Founders Hub
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Onboarding new members is now instant. The dashboard is intuitive,
                  and support has been excellent from day one.
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/yucel.webp"
                      alt="Yucel Faruksahan"
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">
                      Yucel Faruksahan
                    </cite>
                    <span className="text-muted-foreground block text-sm">
                      Co-Founder, Urban Cowork
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  We’ve tried several tools — this is the only one that scales with us.
                  Whether you have 50 or 500 members, everything just flows.
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://tailus.io/images/reviews/rodrigo.webp"
                      alt="Rodrigo Aguilar"
                    />
                    <AvatarFallback>RA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Rodrigo Aguilar</p>
                    <span className="text-muted-foreground block text-sm">
                      Founder, Digital Creators Circle
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
