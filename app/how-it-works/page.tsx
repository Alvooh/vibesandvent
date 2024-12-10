'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorksPage() {
  const steps = [
    {
      title: 'Book a Free Consultation',
      description: 'Schedule a complimentary consultation to discuss your needs and preferences.',
    },
    {
      title: 'Get Matched with a Therapist',
      description: 'We will connect you with a therapist who specializes in your areas of concern.',
    },
    {
      title: 'Schedule a Session',
      description: 'Choose a convenient time for your therapy sessions and begin your journey.',
    },
  ];

  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">How It Works</h1>
        <p className="mt-4 text-lg text-gray-600">
          Getting started with therapy has never been easier. Follow these simple steps:
        </p>
      </div>

      <div className="mt-16">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 md:left-1/2" />
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                custom={index % 2 === 0 ? 'left' : 'right'}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={variants}
              >
                <div className="flex items-center md:justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div
                  className={`mt-4 md:mt-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
