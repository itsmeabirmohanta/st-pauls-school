'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    category: "Sports",
    items: [
      {
        title: "Basketball",
        description: "Competitive basketball program with regular training and tournaments",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800"
      },
      {
        title: "Cricket",
        description: "School cricket team with professional coaching",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800"
      },
      {
        title: "Athletics",
        description: "Track and field events with state-level participation",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800"
      }
    ]
  },
  {
    category: "Arts & Culture",
    items: [
      {
        title: "Music",
        description: "Vocal and instrumental music training",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800"
      },
      {
        title: "Dance",
        description: "Classical and contemporary dance classes",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800"
      },
      {
        title: "Drama",
        description: "Theater workshops and annual productions",
        image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=800"
      }
    ]
  },
  {
    category: "Academic Clubs",
    items: [
      {
        title: "Science Club",
        description: "Hands-on experiments and research projects",
        image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=800"
      },
      {
        title: "Robotics Club",
        description: "Learning robotics and participating in competitions",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800"
      },
      {
        title: "Debate Club",
        description: "Developing public speaking and argumentation skills",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800"
      }
    ]
  }
];

const achievements = [
  {
    title: "State Basketball Champions",
    year: "2023",
    description: "Winners of the State Inter-school Basketball Championship"
  },
  {
    title: "National Science Fair",
    year: "2023",
    description: "First prize in National Level Science Project Competition"
  },
  {
    title: "Classical Dance",
    year: "2024",
    description: "Best Performance Award at Cultural Festival"
  },
  {
    title: "Debate Competition",
    year: "2024",
    description: "Winners of Regional Level Debate Championship"
  }
];

export default function Activities() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1920"
            alt="School Activities"
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
          <h1 className="text-5xl font-bold mb-6">Student Activities</h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Nurturing talents and fostering holistic development through diverse co-curricular activities.
          </p>
        </motion.div>
      </section>

      {/* Activities Sections */}
      {activities.map((section, sectionIndex) => (
        <section key={section.category} className={`py-16 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">{section.category}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover opportunities in {section.category.toLowerCase()}.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <div className="relative h-48">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{activity.title}</CardTitle>
                      <CardDescription>{activity.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" asChild>
                        <Link href="/contact">Join Activity</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Achievements Section */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Recent Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating the success of our students in various activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-sm text-primary-600 font-semibold">{achievement.year}</div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join our vibrant community of learners and discover your passion through our diverse range of activities.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us to Join</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 