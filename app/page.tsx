import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 hero-gradient">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl heading-gradient mb-6">
              Sending positive Vibes as we listen to you Vent
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Begin your journey to mental wellness with our compassionate and experienced therapists.
              We're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/find-therapist">
                  Find a Therapist <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Experience therapy in a safe, judgment-free environment with caring professionals."
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your privacy is our priority. All sessions are completely confidential."
              },
              {
                icon: Users,
                title: "Expert Therapists",
                description: "Connect with licensed professionals who specialize in your specific needs."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-effect rounded-2xl p-8 hover-transform">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold heading-gradient mb-8">
            Ready to Start Your Journey?
          </h2>
          <Button asChild size="lg" className="text-lg">
            <Link href="/find-therapist">
              Book Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}