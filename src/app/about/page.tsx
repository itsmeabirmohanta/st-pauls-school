'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920"
            alt="About St Paul's School"
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
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Founded in 2010, St Paul's School has been nurturing future leaders with excellence in education.
          </p>
        </motion.div>
      </section>

      {/* School Emblem Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl font-bold mb-6">Our School Emblem</h2>
              <p className="text-gray-600 mb-6">
                The school emblem consists of sword, book, pen and feather with the school motto – "Excellence in Education with higher power".
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3">🗡️</span>
                  <span>The sword with a cross at the head symbolizes courage and St Paul's martyrdom as he died for the values of Christ.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">📖</span>
                  <span>The book indicates the Holy Bible which is the book of Truth, Justice and Wisdom. Every child who comes to this institution is reminded of these Biblical values.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✒️</span>
                  <span>The Pen and the Feather symbolize ancient wisdom which is very important for holistic learning.</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image
                src="/images/logo.png"
                alt="School Emblem"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Mission Statement */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4 text-primary-600">🎯</div>
                <CardTitle className="text-2xl mb-4">Mission Statement</CardTitle>
                <CardDescription className="text-base">
                  Our mission at St. Paul's school is to develop the unique abilities and potential of each child by offering an enriched educational program. We strive for excellence through a hands-on approach. Rich traditions rooted in our innovative curriculum grow productive, caring, and intellectually curious citizens.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Core Values */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4 text-primary-600">⭐</div>
                <CardTitle className="text-2xl mb-4">Our Core Values</CardTitle>
                <CardDescription className="text-base">
                  We have a culture that is modern, relevant, and inspires students to have a brighter future. We are determined in our approach to learning, are creative in our thinking, and bold in our ambitions.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Philosophy */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4 text-primary-600">🎓</div>
                <CardTitle className="text-2xl mb-4">Our Philosophy</CardTitle>
                <CardDescription className="text-base">
                  We, at St. Paul's School, follow a child-centered educational approach. We make sure that it is based on scientific observations from birth to adulthood. We believe that a child is naturally curious and is capable of initiating learning in a supportive and thoughtfully prepared environment.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                St Paul's School Rajibpur came into existence on 04 April 2010 in answer to the need felt of having an English medium school in Gangarampur town. The school had a modest beginning with classes KGI, KGII and class 1 with 114 students.
              </p>
              <p>
                The School is founded and run by the Diocese of Raiganj, a minority Christian religious trust having its headquarters at Raiganj, West Bengal. The year 2010 being the year of St Paul, the priest curia of the Diocese of Raiganj proposed the present name of the school which was approved by the founder body president, His Lordship Rt Rev Alphonsus D'Souza sj, the consulters and the Diocesan secretary and treasurer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aims Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Aims</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardDescription className="text-base space-y-4">
                    <p>• Run chiefly for the education of Christian children in Christian atmosphere</p>
                    <p>• To educate tribals and under privileged classes without neglecting any other section of society</p>
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription className="text-base space-y-4">
                    <p>• Impart education which is affirming, and helps in the integral development and total formation of the personality of the student and gives the student a progressive love for the country, its culture and heritage.</p>
                    <p>• To form citizens for the future who can think and act, beyond all caste and parochial boundaries and who are men and women imbued with a sense of justice and love for under privileged</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* School Rules & Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Important Rules & Information</h2>
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
    </div>
  );
} 