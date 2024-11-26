'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const therapists = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Anxiety & Depression',
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Relationship Counseling',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Trauma & PTSD',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function FindTherapistPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');

  const filteredTherapists = therapists.filter((therapist) => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !specialty || therapist.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Find Your Therapist
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Browse our network of licensed therapists and find the right match for you.
        </p>
      </div>

      <div className="mt-16 space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="search">Search by name</Label>
            <Input
              id="search"
              placeholder="Enter therapist name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Filter by specialty</Label>
            <Select value={specialty} onValueChange={setSpecialty}>
              <SelectTrigger>
                <SelectValue placeholder="Select specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Specialties</SelectItem>
                <SelectItem value="Anxiety & Depression">Anxiety & Depression</SelectItem>
                <SelectItem value="Relationship Counseling">Relationship Counseling</SelectItem>
                <SelectItem value="Trauma & PTSD">Trauma & PTSD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTherapists.map((therapist) => (
            <div
              key={therapist.id}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{therapist.name}</h3>
                  <p className="text-sm text-gray-600">{therapist.specialty}</p>
                  <p className="text-sm text-gray-600">{therapist.experience} experience</p>
                </div>
              </div>
              <div className="mt-4">
                <Button className="w-full">Book Consultation</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}