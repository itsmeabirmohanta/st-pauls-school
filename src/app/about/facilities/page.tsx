'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const facilities = [
  {
    title: "Modern Classrooms",
    description: "Smart classrooms equipped with interactive whiteboards and multimedia facilities",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    features: [
      "Interactive whiteboards",
      "Comfortable seating",
      "Natural lighting",
      "Climate control"
    ]
  },
  {
    title: "Science Laboratories",
    description: "State-of-the-art labs for Physics, Chemistry, and Biology",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800",
    features: [
      "Modern equipment",
      "Safety gear",
      "Experimental stations",
      "Research facilities"
    ]
  },
  {
    title: "Computer Lab",
    description: "Advanced computing facilities with latest hardware and software",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800",
    features: [
      "High-speed internet",
      "Modern computers",
      "Coding software",
      "Digital learning tools"
    ]
  },
  {
    title: "Library",
    description: "Extensive collection of books, journals, and digital resources",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
    features: [
      "Vast book collection",
      "Digital resources",
      "Study areas",
      "Research section"
    ]
  },
  {
    title: "Sports Facilities",
    description: "Comprehensive sports infrastructure for various games",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800",
    features: [
      "Basketball court",
      "Football field",
      "Indoor games",
      "Sports equipment"
    ]
  },
  {
    title: "Auditorium",
    description: "Modern auditorium for events and performances",
    image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=800",
    features: [
      "Advanced sound system",
      "Stage lighting",
      "Seating capacity: 500",
      "Green rooms"
    ]
  }
];

export default function Facilities() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1920"
            alt="School Facilities"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-6">Our Facilities</h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Modern infrastructure and amenities to support holistic education.
          </p>
        </motion.div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">World-Class Infrastructure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our facilities are designed to provide students with the best learning environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="relative h-48">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{facility.title}</CardTitle>
                    <CardDescription>{facility.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety and Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Safety & Maintenance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We prioritize the safety and maintenance of our facilities to ensure a secure learning environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Security Measures</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    24/7 CCTV surveillance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Security personnel
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Access control system
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Emergency protocols
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regular Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Daily cleaning
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Equipment checks
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Preventive maintenance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Regular upgrades
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health & Hygiene</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Medical room
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Sanitization protocols
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    First-aid facilities
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="mr-2">•</span>
                    Health check-ups
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
} 