'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type GradeCategory = 'Elementary' | 'Middle School' | 'High School';

const gradeInfo = {
  Elementary: {
    title: 'Elementary School',
    grades: 'Grades 1-5',
    description: 'Building strong foundations through engaging, hands-on learning experiences.',
    subjects: [
      'Early Literacy & Reading',
      'Mathematics & Numeracy',
      'Science Discovery',
      'Social Studies',
      'Arts & Music',
      'Physical Education'
    ],
    features: [
      'Small class sizes for individual attention',
      'Play-based learning approach',
      'Regular parent-teacher communication',
      'Character development focus'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800'
  },
  'Middle School': {
    title: 'Middle School',
    grades: 'Grades 6-8',
    description: 'Developing critical thinking and personal growth during crucial years.',
    subjects: [
      'Advanced Literature',
      'Pre-Algebra & Algebra',
      'Life & Earth Sciences',
      'World History & Geography',
      'Foreign Languages',
      'Technology'
    ],
    features: [
      'Project-based learning',
      'Study skills development',
      'Leadership opportunities',
      'Sports and clubs'
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800'
  },
  'High School': {
    title: 'High School',
    grades: 'Grades 9-12',
    description: 'Preparing students for college success and beyond.',
    subjects: [
      'AP English & Literature',
      'Advanced Mathematics',
      'Physics & Chemistry',
      'World & US History',
      'Foreign Languages',
      'Computer Science'
    ],
    features: [
      'College preparation focus',
      'AP and honors courses',
      'Career counseling',
      'Research opportunities'
    ],
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=800'
  }
};

const specialPrograms = [
  {
    title: 'STEM Excellence',
    description: 'Advanced programs in Science, Technology, Engineering, and Mathematics.',
    icon: '🔬'
  },
  {
    title: 'Arts Program',
    description: 'Comprehensive visual and performing arts education.',
    icon: '🎨'
  },
  {
    title: 'Language Studies',
    description: 'Multiple foreign language options with immersive learning.',
    icon: '🌍'
  },
  {
    title: 'Advanced Placement',
    description: 'Wide range of AP courses for college preparation.',
    icon: '📚'
  }
];

export default function Academics() {
  const [activeCategory, setActiveCategory] = useState<GradeCategory>('Elementary');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1920"
            alt="Academic programs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-900/40" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics & Classes</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive education tailored to nurture every student's potential
          </p>
        </div>
      </section>

      {/* Grade Level Navigation */}
      <section className="py-8 bg-primary-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.keys(gradeInfo).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category as GradeCategory)}
                className="text-lg"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Grade Level Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">{gradeInfo[activeCategory].title}</h2>
              <p className="text-xl text-muted-foreground">{gradeInfo[activeCategory].grades}</p>
              <p className="text-lg">{gradeInfo[activeCategory].description}</p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Core Subjects</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {gradeInfo[activeCategory].subjects.map((subject, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-primary-600">•</span>
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Program Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {gradeInfo[activeCategory].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-primary-600">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={gradeInfo[activeCategory].image}
                  alt={gradeInfo[activeCategory].title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Special Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-4">{program.icon}</div>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">👨‍🏫</div>
                  <CardTitle>Faculty</CardTitle>
                  <CardDescription>Meet our dedicated teaching staff</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Learn more about our experienced educators who are committed to nurturing young minds and fostering academic excellence.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/academics/faculty">View Faculty</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">📅</div>
                  <CardTitle>Timetable</CardTitle>
                  <CardDescription>Academic schedules and calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Access class schedules, exam dates, and important academic events throughout the year.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/academics/timetable">View Timetable</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Support */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Academic Support</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe every student can succeed with the right support. Our comprehensive academic support programs include:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-muted-foreground">One-on-one tutoring with qualified teachers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-muted-foreground">Study skills workshops and academic coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-muted-foreground">Learning resource center with extended hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span className="text-muted-foreground">Specialized support for students with different learning styles</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Contact Academic Support</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800"
                alt="Academic support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 