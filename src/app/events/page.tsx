'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link';

export default function Events() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920"
            alt="School Events"
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
          <h1 className="text-5xl font-bold mb-6">School Events</h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Stay updated with our latest events, celebrations, and activities.
          </p>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mark your calendars for these exciting upcoming events at St. Paul's School.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Annual Sports Day</CardTitle>
                  <CardDescription>December 15, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800"
                      alt="Sports Day"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join us for our annual sports day celebration featuring track and field events, team sports, and exciting competitions.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/admissions">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Science Exhibition</CardTitle>
                  <CardDescription>January 20, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800"
                      alt="Science Exhibition"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">
                    Experience innovative projects and experiments showcased by our talented students at the annual science exhibition.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/admissions">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Cultural Program</CardTitle>
                  <CardDescription>February 10, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800"
                      alt="Cultural Program"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">
                    Celebrate diversity through dance, music, and theatrical performances at our annual cultural program.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/admissions">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Annual Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Annual Calendar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key events and activities throughout the academic year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Academic Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">First Term Examinations</h4>
                  <p className="text-gray-600">September 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold">Half-Yearly Examinations</h4>
                  <p className="text-gray-600">December 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold">Annual Examinations</h4>
                  <p className="text-gray-600">March 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Co-curricular Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Annual Sports Meet</h4>
                  <p className="text-gray-600">December 15-16, 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold">Science & Art Exhibition</h4>
                  <p className="text-gray-600">January 20-21, 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold">Annual Cultural Program</h4>
                  <p className="text-gray-600">February 10-11, 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Past Events Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Relive the memorable moments from our previous events.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Independence Day Celebration",
                date: "August 15, 2023",
                image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800"
              },
              {
                title: "Annual Sports Day",
                date: "December 2023",
                image: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?q=80&w=800"
              },
              {
                title: "Science Exhibition",
                date: "January 2024",
                image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=800"
              },
              {
                title: "Cultural Program",
                date: "February 2024",
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800"
              },
              {
                title: "Teachers' Day",
                date: "September 5, 2023",
                image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800"
              },
              {
                title: "Annual Day",
                date: "March 2024",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 