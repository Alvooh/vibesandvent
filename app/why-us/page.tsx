export default function WhyUsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Why Choose Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We offer a personalized, affordable, and convenient therapy service, with certified professionals.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-900">Personalized Care</h2>
          <p className="mt-4 text-gray-600">
            Our matching system ensures you're paired with a therapist who understands
            your unique needs and concerns.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-900">Affordable Sessions</h2>
          <p className="mt-4 text-gray-600">
            We offer competitive rates and flexible payment options to make therapy
            accessible to everyone.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-900">Certified Professionals</h2>
          <p className="mt-4 text-gray-600">
            All our therapists are licensed and have undergone rigorous screening
            to ensure quality care.
          </p>
        </div>
      </div>
    </div>
  );
}