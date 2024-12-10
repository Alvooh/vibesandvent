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
    name: 'Dr. Amina Njoroge',
    specialty: 'Anxiety & Depression',
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Dr. Kamau Otieno',
    specialty: 'Relationship Counseling',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Dr. Wanjiru Mwangi',
    specialty: 'Trauma & PTSD',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Dr. Okoth Nyong’o',
    specialty: 'Child & Adolescent Therapy',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1512374382149-e4eb32a05b84?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Dr. Nyambura Kiplagat',
    specialty: 'Grief Counseling',
    experience: '6 years',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Dr. Omondi Achieng',
    specialty: 'Stress Management',
    experience: '14 years',
    image: 'https://images.unsplash.com/photo-1603415526960-f8f76e44f0d8?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];


export default function FindTherapistPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');

  const filteredTherapists = therapists.filter((therapist) => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty === 'all' || therapist.specialty === specialty;
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
                <SelectItem value="all">All Specialties</SelectItem>
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
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition">
                       Book Consultation
              </Button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}