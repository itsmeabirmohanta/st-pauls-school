'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const quickLinks = [
  {
    title: 'About Us',
    description: 'Our history and mission',
    icon: '🏛️',
    href: '/about'
  },
  {
    title: 'Timetable',
    description: 'Class schedules',
    icon: '📅',
    href: '/academics/timetable'
  },
  {
    title: 'Facilities',
    description: 'Modern infrastructure',
    icon: '🏫',
    href: '/facilities'
  },
  {
    title: 'Alumni',
    description: 'Our proud graduates',
    icon: '🎓',
    href: '/alumni'
  },
  {
    title: 'Contact',
    description: 'Get in touch',
    icon: '📞',
    href: '/contact'
  }
];

const news = [
  {
    date: '3/15/2024',
    title: 'Annual Science Fair Winners Announced',
    description: 'Congratulations to all participants in this year\'s Science Fair...',
    image: '/news/science-fair.jpg',
    href: '/news/science-fair'
  },
  {
    date: '3/10/2024',
    title: 'Basketball Team Reaches State Finals',
    description: 'Our varsity basketball team has made it to the state championships...',
    image: '/news/basketball.jpg',
    href: '/news/basketball'
  },
  {
    date: '3/5/2024',
    title: 'New STEM Lab Opening Ceremony',
    description: 'We\'re excited to announce the opening of our state-of-the-art STEM laboratory...',
    image: '/news/stem-lab.jpg',
    href: '/news/stem-lab'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
        <Image
            src="/images/home.jpg"
            alt="School Building"
            fill
            className="object-cover brightness-[0.4]"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Welcome to St Paul's School
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Excellence in Education with Higher Power - Established 2010
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary-900 hover:bg-white/90" asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent text-white hover:bg-white/10" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need, just one click away
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={link.href}>
                  <Card className="group hover:shadow-lg transition-all duration-300 text-center h-full">
                    <CardHeader>
                      <div className="text-4xl mb-3">{link.icon}</div>
                      <CardTitle className="text-lg mb-2 group-hover:text-primary-600 transition-colors">
                        {link.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {link.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose St Paul's?</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-[400px]">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800"
                    alt="Academic Excellence"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Holistic Education</CardTitle>
                  <CardDescription className="text-base mt-2">
                    We focus on the integral development and total formation of our students, nurturing their minds, values, and character.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-[400px]">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800"
                    alt="Modern Facilities"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Modern Facilities</CardTitle>
                  <CardDescription className="text-base mt-2">
                    State-of-the-art infrastructure including computer lab, auditorium, library, and CCTV monitoring for student safety.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-[400px]">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800"
                    alt="Co-curricular Activities"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Rich Co-curricular Life</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Diverse activities including art, science club, dance, drama, music, and public speaking to develop well-rounded personalities.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Latest News & Events</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1567168544646-208fa5d408fb?q=80&w=800"
                    alt="Science Fair"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary-600 font-semibold mb-2">March 15, 2024</div>
                  <CardTitle className="text-xl mb-2">Annual Science Fair Winners Announced</CardTitle>
                  <CardDescription className="text-base">
                    Students showcase their innovative projects at our annual science exhibition.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800"
                    alt="Basketball Championship"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary-600 font-semibold mb-2">March 10, 2024</div>
                  <CardTitle className="text-xl mb-2">Basketball Team Reaches State Finals</CardTitle>
                  <CardDescription className="text-base">
                    Our varsity basketball team has made it to the state championships.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
            <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800"
                    alt="STEM Lab"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary-600 font-semibold mb-2">March 5, 2024</div>
                  <CardTitle className="text-xl mb-2">New STEM Lab Opening Ceremony</CardTitle>
                  <CardDescription className="text-base">
                    State-of-the-art STEM laboratory inaugurated to enhance practical learning.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Rules & Information */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Important Rules & Information</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">School Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>English is spoken at all times on the school grounds for practice.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Thursday school remains closed. If a national holiday falls on any weekday, there will be class on Thursday of that particular week.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Use of cell phones, gadgets and radio within the premises is strictly prohibited.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Comics, magazines and newspapers are not allowed in the school.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Damaging school property is considered highly reprehensible behaviour.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Transfer Certificate Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Application for transfer certificates should be given in writing.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>It will be issued only after all fees and other dues to the school are paid.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Three days prior notice is needed for the issue of a transfer certificate.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Students whose conduct is injurious to the moral tone of school or incompatible with strict discipline are liable to be dismissed.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">From the Principal's Desk</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
          <Image
                  src="/images/principal.jpg"
                  alt="Fr. Amrit Xalxo - Principal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-50 rounded-full -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <blockquote className="text-2xl font-serif text-gray-700 italic">
                "Education is not just about academics; it's about nurturing souls, building character, and preparing leaders who will shape tomorrow's world with wisdom and compassion."
              </blockquote>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Dear Parents and Students,
                </p>
                <p>
                  At St Paul's School, we believe in nurturing not just academic excellence, but the complete development of each child. Our mission is to create an environment where students can discover their talents, develop their abilities, and grow into responsible citizens of tomorrow.
                </p>
                <p>
                  We focus on providing a balanced education that combines strong academic foundations with moral values, cultural awareness, and social responsibility. Our dedicated team of educators works tirelessly to ensure that every student receives individual attention and guidance.
                </p>
                <p>
                  Together, let us embark on this journey of learning and growth, creating memories and building futures that will make us all proud.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-primary-900">Fr. Amrit Xalxo</h3>
                <p className="text-gray-600">Principal, St Paul's School</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920"
            alt="Contact Background"
            fill
            className="object-cover"
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Contact Us</h3>
              <div className="w-12 h-0.5 bg-white/30"></div>
              <div className="space-y-2">
                <p className="text-sm font-light">St Paul's School</p>
                <p className="text-sm font-light">Rajibpur, Gangarampur</p>
                <p className="text-sm font-light">Dakshin Dinajpur</p>
                <p className="text-sm font-light">West Bengal PIN-733124</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Get in Touch</h3>
              <div className="w-12 h-0.5 bg-white/30"></div>
              <div className="space-y-2">
                <p className="text-sm font-light flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:7797209092" className="hover:underline">7797209092</a>
                </p>
                <p className="text-sm font-light flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:stpaulsgangarampur@gmail.com" className="hover:underline break-all">stpaulsgangarampur@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Quick Links</h3>
              <div className="w-12 h-0.5 bg-white/30"></div>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/about" className="text-sm font-light hover:underline">About Us</Link>
                <Link href="/academics/timetable" className="text-sm font-light hover:underline">Timetable</Link>
                <Link href="/facilities" className="text-sm font-light hover:underline">Facilities</Link>
                <Link href="/alumni" className="text-sm font-light hover:underline">Alumni</Link>
                <Link href="/contact" className="text-sm font-light hover:underline">Contact</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">Begin Your Journey</h3>
              <div className="w-12 h-0.5 bg-white/30"></div>
              <p className="text-sm font-light mb-4">Take the first step towards excellence in education.</p>
              <Button size="sm" className="bg-white text-primary-900 hover:bg-white/90" asChild>
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} St Paul's School. All rights reserved.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
