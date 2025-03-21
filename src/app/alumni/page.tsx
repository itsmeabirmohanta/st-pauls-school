'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const alumni = [
  {
    name: "Dr. Rahul Sharma",
    batch: "2015",
    achievement: "Cardiologist at AIIMS",
    quote: "St Paul's School laid the foundation for my medical career through its excellent science program.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400"
  },
  {
    name: "Priya Patel",
    batch: "2016",
    achievement: "Software Engineer at Google",
    quote: "The analytical thinking skills I developed here have been invaluable in my tech career.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400"
  },
  {
    name: "Amit Kumar",
    batch: "2014",
    achievement: "National Award-winning Teacher",
    quote: "I learned the true value of education at St Paul's, which inspired me to become an educator.",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400"
  }
];

const achievements = [
  {
    title: "Academic Excellence",
    count: "85%",
    description: "Alumni in top universities"
  },
  {
    title: "Global Presence",
    count: "25+",
    description: "Countries with our alumni"
  },
  {
    title: "Leadership",
    count: "200+",
    description: "CEOs and founders"
  },
  {
    title: "Social Impact",
    count: "50+",
    description: "NGOs founded by alumni"
  }
];

export default function Alumni() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/alumni-main.jpg"
            alt="St. Paul's School Alumni"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Notable Alumni Of St. Paul's School</h1>
          <p className="text-2xl font-light mb-8">Building Tomorrow's Leaders Since 1964</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{achievement.count}</div>
                <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Notable Alumni</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumni.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-primary-600 font-semibold mb-1">Class of {person.batch}</div>
                    <CardTitle className="text-xl mb-2">{person.name}</CardTitle>
                    <CardDescription className="text-base font-medium mb-2">{person.achievement}</CardDescription>
                    <CardDescription className="text-sm italic">"{person.quote}"</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Connect With Our Alumni Network</h2>
            <p className="text-lg mb-8">Join our alumni association and stay connected with your alma mater</p>
            <Button size="lg" className="bg-white text-primary-900 hover:bg-white/90">
              Join Alumni Association
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 