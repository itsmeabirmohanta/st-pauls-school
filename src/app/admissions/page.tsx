'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Admissions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920"
            alt="Admissions"
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
          <h1 className="text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Join our community of learners and begin your educational journey with St. Paul's School.
          </p>
        </motion.div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps to apply for admission to St. Paul's School.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Submit Application",
                icon: "📝",
                description: "Complete the online application form and pay the application fee."
              },
              {
                title: "Academic Assessment",
                icon: "📚",
                description: "Schedule and complete the assessment test appropriate for your grade level."
              },
              {
                title: "Interview",
                icon: "🤝",
                description: "Attend a personal interview and campus tour with our admissions team."
              },
              {
                title: "Decision",
                icon: "✉️",
                description: "Receive the admissions decision and complete enrollment if accepted."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">📄</span>
                    Completed application form
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📚</span>
                    Previous academic records
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✍️</span>
                    Teacher recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📋</span>
                    Birth certificate or passport
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">💉</span>
                    Immunization records
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">💰</span>
                    Application fee
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📝</span>
                    Student essay (for grades 6-12)
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📋</span>
                    Parent statement
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📸</span>
                    Recent photograph
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Important Dates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key deadlines for the 2024-25 academic year admissions process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Early Decision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Application Due:</strong> December 1, 2024</p>
                <p><strong>Decision Notification:</strong> December 15, 2024</p>
                <p><strong>Enrollment Deadline:</strong> January 15, 2025</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regular Decision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Application Due:</strong> February 1, 2025</p>
                <p><strong>Decision Notification:</strong> March 15, 2025</p>
                <p><strong>Enrollment Deadline:</strong> April 15, 2025</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rolling Admission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Applications:</strong> Accepted year-round</p>
                <p><strong>Decision:</strong> Within 4-6 weeks</p>
                <p><strong>Enrollment:</strong> Deadline varies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Take the first step towards joining our community. Start your application today or contact our admissions team for more information.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Start Application</Button>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contact Admissions</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 