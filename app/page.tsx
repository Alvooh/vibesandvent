import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartIcon, ShieldCheckIcon, UsersIcon } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: HeartIcon,
      title: "Affordable",
      description:
        "We believe mental health care should be accessible to everyone, prioritizing affordability without compromising quality.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Convenient",
      description:
        "Recognizing the demands of modern living, we provide flexible virtual appointments that fit seamlessly into your schedule.",
    },
    {
      icon: UsersIcon,
      title: "You-Centered",
      description:
        "Our approach revolves around you and your unique journey towards mental wellness.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold sm:text-4xl leading-relaxed mb-10">
              Sending positive <span className="text-[#00b5af]">Vibes</span> as we <br />
              listen to you <span className="text-[#f37c20]">Vent</span> out your <br />
              heart, mind, and soul.
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Begin your journey to mental wellness with our compassionate and experienced
              therapists. We're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/find-therapist">Find a Therapist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
  <div className="section-container">
    <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
      Why Choose Us?
    </h2>
    <div className="grid gap-8 md:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`rounded-2xl p-8 text-white shadow-lg transform hover:scale-105 transition ${
            index === 0
              ? "bg-teal-600"
              : index === 1
              ? "bg-gray-800"
              : "bg-orange-600"
          }`}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-gray-900 mb-6">
            <feature.icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-white/90">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="py-24 bg-gray-100 text-center">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Ready to Start Your Journey?
          </h2>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/find-therapist">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
