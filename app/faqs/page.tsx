'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How much does therapy cost?',
    answer: 'Our therapy sessions are competitively priced and vary based on the type of service and therapist. We offer flexible payment options and accept most insurance plans.',
  },
  {
    question: 'How long are the sessions?',
    answer: 'Standard therapy sessions are 50 minutes long. We also offer extended sessions of 80 minutes for those who need more time.',
  },
  {
    question: 'Can I change therapists if I \'m not satisfied?',
    answer: 'Yes, absolutely. We want you to feel comfortable with your therapist. If you \'re not satisfied, we\'ll help you find a better match at no additional cost.',
  },
  {
    question: 'Is online therapy as effective as in-person therapy?',
    answer: 'Research shows that online therapy can be just as effective as in-person therapy for many conditions. It offers the added benefits of convenience and accessibility.',
  },
  {
    question: 'How do I know if therapy is right for me?',
    answer: 'Therapy can benefit anyone looking to improve their mental health, work through challenges, or gain personal insights. Our free consultation can help you determine if it\'s the right choice for you.',
  },
];

export default function FAQsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Find answers to common questions about our therapy services.
        </p>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}