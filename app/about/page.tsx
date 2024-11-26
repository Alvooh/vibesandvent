export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          At Vibes & Vent, we believe mental health care should be accessible to everyone...
        </p>
      </div>
      
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            We're committed to making mental health support accessible, affordable, and
            convenient for everyone. Our platform connects you with qualified therapists
            who can provide the support you need, when you need it.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
          <p className="mt-4 text-gray-600">
            We prioritize accessibility, confidentiality, and quality care. Our therapists
            are carefully selected and must meet strict professional standards to ensure
            you receive the best possible support.
          </p>
        </div>
      </div>
    </div>
  );
}