'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const timetables = [
  {
    season: "Summer Timetable",
    dates: "March - September",
    schedule: [
      { time: "07:00 AM", activity: "School Opens" },
      { time: "07:15 AM", activity: "Assembly" },
      { time: "07:30 AM", activity: "First Period" },
      { time: "08:15 AM", activity: "Second Period" },
      { time: "09:00 AM", activity: "Third Period" },
      { time: "09:45 AM", activity: "Short Break" },
      { time: "10:00 AM", activity: "Fourth Period" },
      { time: "10:45 AM", activity: "Fifth Period" },
      { time: "11:30 AM", activity: "Sixth Period" },
      { time: "12:15 PM", activity: "School Ends" }
    ]
  },
  {
    season: "Winter Timetable",
    dates: "October - February",
    schedule: [
      { time: "09:30 AM", activity: "School Opens" },
      { time: "09:45 AM", activity: "Assembly" },
      { time: "10:00 AM", activity: "First Period" },
      { time: "10:45 AM", activity: "Second Period" },
      { time: "11:30 AM", activity: "Third Period" },
      { time: "12:15 PM", activity: "Lunch Break" },
      { time: "12:45 PM", activity: "Fourth Period" },
      { time: "01:30 PM", activity: "Fifth Period" },
      { time: "02:15 PM", activity: "Sixth Period" },
      { time: "03:00 PM", activity: "School Ends" }
    ]
  }
];

const holidays = [
  {
    type: "Major Vacations",
    list: [
      { name: "Summer Vacation", dates: "May 15 - June 30" },
      { name: "Puja Holidays", dates: "October 15-25" },
      { name: "Winter Break", dates: "December 25 - January 5" }
    ]
  },
  {
    type: "National Holidays",
    list: [
      { name: "Republic Day", dates: "January 26" },
      { name: "Independence Day", dates: "August 15" },
      { name: "Gandhi Jayanti", dates: "October 2" }
    ]
  },
  {
    type: "Festival Holidays",
    list: [
      { name: "Diwali", dates: "As per calendar" },
      { name: "Holi", dates: "As per calendar" },
      { name: "Christmas", dates: "December 25" }
    ]
  }
];

export default function Calendar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Download */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#001529]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1920"
            alt="Calendar"
            fill
            className="object-cover brightness-[0.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001529]/80 via-[#001529]/60 to-[#001529]" />
        </div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h1 className="text-6xl font-bold mb-6">Download Class Timetable</h1>
            <p className="text-xl max-w-3xl mx-auto font-light text-white/80">
              Select your class to download the detailed timetable
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Primary Section */}
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Primary Section</h3>
                <div className="space-y-3">
                  {['Class I', 'Class II', 'Class III', 'Class IV', 'Class V'].map((className) => (
                    <Button 
                      key={className}
                      variant="outline" 
                      className="w-full bg-white/5 hover:bg-white/20 border-white/10 text-white transition-all duration-300 py-6"
                    >
                      <span className="mr-2 text-lg">{className}</span>
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Middle Section */}
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Middle Section</h3>
                <div className="space-y-3">
                  {['Class VI', 'Class VII', 'Class VIII'].map((className) => (
                    <Button 
                      key={className}
                      variant="outline" 
                      className="w-full bg-white/5 hover:bg-white/20 border-white/10 text-white transition-all duration-300 py-6"
                    >
                      <span className="mr-2 text-lg">{className}</span>
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Secondary Section */}
              <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Secondary Section</h3>
                <div className="space-y-3">
                  {['Class IX', 'Class X', 'Class XI', 'Class XII'].map((className) => (
                    <Button 
                      key={className}
                      variant="outline" 
                      className="w-full bg-white/5 hover:bg-white/20 border-white/10 text-white transition-all duration-300 py-6"
                    >
                      <span className="mr-2 text-lg">{className}</span>
                      <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-white/60 text-sm">
              <p>All timetables are available in PDF format and include both summer and winter schedules.</p>
              <p>Last updated: March 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Important Notes</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary-100">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">•</span>
                    <span>Students should arrive at least 15 minutes before the assembly time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">•</span>
                    <span>School uniform is compulsory for all students.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">•</span>
                    <span>Late arrivals must report to the school office before joining classes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 text-xl">•</span>
                    <span>Parents should ensure timely pickup of their wards after school hours.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Daily Schedule</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timetables.map((schedule, index) => (
              <motion.div
                key={schedule.season}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{schedule.season}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary-600">
                      {schedule.dates}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {schedule.schedule.map((item, i) => (
                        <div key={i} className="flex items-center space-x-4 py-2 border-b last:border-0">
                          <div className="w-24 font-medium text-primary-600">{item.time}</div>
                          <div className="flex-1">{item.activity}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holidays Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">School Holidays</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {holidays.map((category, index) => (
              <motion.div
                key={category.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">{category.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.list.map((holiday, i) => (
                        <div key={i} className="pb-3 border-b last:border-0">
                          <div className="font-medium text-primary-600">{holiday.name}</div>
                          <div className="text-sm text-gray-600">{holiday.dates}</div>
                        </div>
                      ))}
                    </div>
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