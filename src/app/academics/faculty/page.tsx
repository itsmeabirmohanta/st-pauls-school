'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const facultyMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal",
    department: "Administration",
    education: "Ph.D. in Educational Leadership",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    description: "With over 20 years of experience in education, Dr. Johnson leads our school with vision and dedication."
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of Science Department",
    department: "Science",
    education: "Ph.D. in Physics",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400",
    description: "An expert in physics and robotics, Prof. Chen brings cutting-edge STEM education to our students."
  },
  {
    name: "Ms. Emily Rodriguez",
    role: "Head of Languages",
    department: "Languages",
    education: "M.A. in Literature",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400",
    description: "A passionate educator fostering love for literature and languages among students."
  },
  {
    name: "Mr. David Park",
    role: "Mathematics Chair",
    department: "Mathematics",
    education: "M.S. in Mathematics",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=400",
    description: "Making mathematics engaging and accessible for all students."
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Arts Director",
    department: "Fine Arts",
    education: "D.A. in Fine Arts",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=400",
    description: "Bringing creativity and artistic excellence to our school community."
  },
  {
    name: "Coach James Wilson",
    role: "Athletic Director",
    department: "Physical Education",
    education: "M.S. in Sports Science",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400",
    description: "Leading our athletic programs with enthusiasm and expertise."
  }
];

const departments = [
  "Administration",
  "Science",
  "Mathematics",
  "Languages",
  "Fine Arts",
  "Physical Education"
];

export default function Faculty() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920"
            alt="Faculty"
            fill
            className="object-cover brightness-75"
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
          <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Meet our dedicated team of educators committed to nurturing the next generation of leaders.
          </p>
        </motion.div>
      </section>

      {/* Department Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept}
                className="px-6 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all text-primary-600 font-medium"
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-primary-600 font-semibold mb-1">{member.department}</div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <div className="text-sm text-gray-600 mb-2">{member.role}</div>
                    <div className="text-sm text-gray-600 italic mb-3">{member.education}</div>
                    <CardDescription className="text-base">
                      {member.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 