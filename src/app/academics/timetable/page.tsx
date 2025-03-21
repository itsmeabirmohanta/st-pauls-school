'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from 'lucide-react';
import { useCallback } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const classes = [
  "Class I", "Class II", "Class III", "Class IV", "Class V",
  "Class VI", "Class VII", "Class VIII", "Class IX", "Class X"
] as const;
type Class = typeof classes[number];

interface TimeTableRow {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

const timetableData: Record<Class, TimeTableRow[]> = {
  "Class I": [
    { time: "8:00 - 8:45", monday: "English", tuesday: "Mathematics", wednesday: "EVS", thursday: "Hindi", friday: "Art" },
    { time: "8:45 - 9:30", monday: "Mathematics", tuesday: "English", wednesday: "Physical Education", thursday: "EVS", friday: "Music" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "EVS", tuesday: "Hindi", wednesday: "Mathematics", thursday: "English", friday: "Computer" },
    { time: "10:30 - 11:15", monday: "Hindi", tuesday: "Art", wednesday: "English", thursday: "Mathematics", friday: "Library" },
  ],
  "Class II": [
    { time: "8:00 - 8:45", monday: "Mathematics", tuesday: "English", wednesday: "EVS", thursday: "Hindi", friday: "Music" },
    { time: "8:45 - 9:30", monday: "English", tuesday: "Mathematics", wednesday: "Hindi", thursday: "EVS", friday: "Art" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "EVS", tuesday: "Physical Education", wednesday: "Mathematics", thursday: "English", friday: "Computer" },
    { time: "10:30 - 11:15", monday: "Hindi", tuesday: "Library", wednesday: "English", thursday: "Mathematics", friday: "EVS" },
  ],
  "Class III": [
    { time: "8:00 - 8:45", monday: "English", tuesday: "Mathematics", wednesday: "Science", thursday: "Hindi", friday: "Computer" },
    { time: "8:45 - 9:30", monday: "Mathematics", tuesday: "Hindi", wednesday: "English", thursday: "Science", friday: "Art" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "Science", tuesday: "English", wednesday: "Physical Education", thursday: "Mathematics", friday: "Music" },
    { time: "10:30 - 11:15", monday: "Hindi", tuesday: "Library", wednesday: "Mathematics", thursday: "English", friday: "Science" },
  ],
  "Class IV": [
    { time: "8:00 - 8:45", monday: "Mathematics", tuesday: "English", wednesday: "Science", thursday: "Hindi", friday: "Social Studies" },
    { time: "8:45 - 9:30", monday: "English", tuesday: "Science", wednesday: "Mathematics", thursday: "Computer", friday: "Art" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "Science", tuesday: "Hindi", wednesday: "English", thursday: "Social Studies", friday: "Physical Education" },
    { time: "10:30 - 11:15", monday: "Hindi", tuesday: "Social Studies", wednesday: "Library", thursday: "Mathematics", friday: "Music" },
  ],
  "Class V": [
    { time: "8:00 - 8:45", monday: "English", tuesday: "Mathematics", wednesday: "Science", thursday: "Hindi", friday: "Social Studies" },
    { time: "8:45 - 9:30", monday: "Mathematics", tuesday: "Science", wednesday: "English", thursday: "Social Studies", friday: "Computer" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "Science", tuesday: "Hindi", wednesday: "Physical Education", thursday: "Mathematics", friday: "Art" },
    { time: "10:30 - 11:15", monday: "Hindi", tuesday: "Social Studies", wednesday: "Mathematics", thursday: "English", friday: "Library" },
  ],
  "Class VI": [
    { time: "8:00 - 8:45", monday: "English", tuesday: "Mathematics", wednesday: "Science", thursday: "Social Science", friday: "Hindi" },
    { time: "8:45 - 9:30", monday: "Mathematics", tuesday: "Science", wednesday: "English", thursday: "Hindi", friday: "Computer" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "Science", tuesday: "Social Science", wednesday: "Mathematics", thursday: "English", friday: "Physical Education" },
    { time: "10:30 - 11:15", monday: "Social Science", tuesday: "Hindi", wednesday: "Art", thursday: "Library", friday: "Music" },
  ],
  "Class VII": [
    { time: "8:00 - 8:45", monday: "Mathematics", tuesday: "English", wednesday: "Science", thursday: "Social Science", friday: "Hindi" },
    { time: "8:45 - 9:30", monday: "English", tuesday: "Science", wednesday: "Hindi", thursday: "Mathematics", friday: "Computer" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "Science", tuesday: "Hindi", wednesday: "Social Science", thursday: "English", friday: "Physical Education" },
    { time: "10:30 - 11:15", monday: "Social Science", tuesday: "Mathematics", wednesday: "Library", thursday: "Art", friday: "Music" },
  ],
  "Class VIII": [
    { time: "8:00 - 8:45", monday: "English", tuesday: "Mathematics", wednesday: "Science", thursday: "Social Science", friday: "Hindi" },
    { time: "8:45 - 9:30", monday: "Mathematics", tuesday: "Science", wednesday: "English", thursday: "Hindi", friday: "Computer" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "Science", tuesday: "Social Science", wednesday: "Mathematics", thursday: "English", friday: "Physical Education" },
    { time: "10:30 - 11:15", monday: "Social Science", tuesday: "Hindi", wednesday: "Art", thursday: "Library", friday: "Music" },
  ],
  "Class IX": [
    { time: "8:00 - 8:45", monday: "Mathematics", tuesday: "Science", wednesday: "English", thursday: "Social Science", friday: "Hindi" },
    { time: "8:45 - 9:30", monday: "Science", tuesday: "English", wednesday: "Mathematics", thursday: "Hindi", friday: "Computer" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "English", tuesday: "Mathematics", wednesday: "Science", thursday: "Social Science", friday: "Physical Education" },
    { time: "10:30 - 11:15", monday: "Social Science", tuesday: "Hindi", wednesday: "Computer", thursday: "Mathematics", friday: "Science" },
  ],
  "Class X": [
    { time: "8:00 - 8:45", monday: "Science", tuesday: "Mathematics", wednesday: "English", thursday: "Social Science", friday: "Hindi" },
    { time: "8:45 - 9:30", monday: "Mathematics", tuesday: "English", wednesday: "Science", thursday: "Hindi", friday: "Computer" },
    { time: "9:30 - 9:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
    { time: "9:45 - 10:30", monday: "English", tuesday: "Science", wednesday: "Mathematics", thursday: "Social Science", friday: "Physical Education" },
    { time: "10:30 - 11:15", monday: "Social Science", tuesday: "Hindi", wednesday: "Computer", thursday: "Mathematics", friday: "Science" },
  ],
};

export default function Timetable() {
  const downloadTimetable = useCallback((className: string, data: TimeTableRow[]) => {
    try {
      const pdf = new jsPDF();
      
      // Add title
      pdf.setFontSize(16);
      pdf.text(`${className} - Class Timetable (2024-25)`, 14, 15);
      pdf.setFontSize(12);
      pdf.text("St. Paul's English Medium School", 14, 25);

      // Create table data
      const tableData = data.map(row => [
        row.time,
        row.monday,
        row.tuesday,
        row.wednesday,
        row.thursday,
        row.friday
      ]);

      // Add table
      autoTable(pdf, {
        head: [['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']],
        body: tableData,
        startY: 35,
        styles: {
          fontSize: 10,
          cellPadding: 3,
        },
        headStyles: {
          fillColor: [66, 66, 66],
          textColor: 255,
          fontStyle: 'bold',
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245],
        },
      });

      // Add footer
      const pageHeight = pdf.internal.pageSize.height;
      pdf.setFontSize(10);
      pdf.text('* Assembly begins at 7:45 AM', 14, pageHeight - 20);
      pdf.text('* Students should arrive 15 minutes early', 14, pageHeight - 15);
      pdf.text('* Extra classes may be scheduled after regular hours', 14, pageHeight - 10);

      // Save PDF
      pdf.save(`${className.toLowerCase().replace(' ', '-')}-timetable.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating the PDF. Please try again.');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1920"
            alt="Timetable"
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
          <h1 className="text-5xl font-bold mb-6">Class Timetable</h1>
          <p className="text-xl max-w-3xl mx-auto font-light">
            Organized schedules for effective learning and academic excellence
          </p>
        </motion.div>
      </section>

      {/* Important Notes */}
      <section className="py-8 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="shadow-md">
              <CardHeader className="text-center border-b pb-4">
                <CardTitle className="text-2xl">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="max-w-5xl mx-auto py-6">
                <ul className="space-y-4 text-gray-600 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 text-xl">•</span>
                    <span>Students should arrive at least 15 minutes before the assembly time.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 text-xl">•</span>
                    <span>School uniform is compulsory for all students.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 text-xl">•</span>
                    <span>Late arrivals must report to the school office before joining classes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 text-xl">•</span>
                    <span>Parents should ensure timely pickup of their wards after school hours.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl font-semibold text-center mb-8">Class Timetable for Academic Year 2024-25</h2>
          
          <Card className="mt-6">
            <CardContent className="pt-6">
              <Tabs defaultValue="Class I" className="w-full">
                <TabsList className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                  {classes.map((className) => (
                    <TabsTrigger
                      key={className}
                      value={className}
                      className="data-[state=active]:bg-primary-50 data-[state=active]:text-primary-900 px-4 py-2"
                    >
                      {className}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {classes.map((className) => (
                  <TabsContent key={className} value={className}>
                    <div className="rounded-lg border border-gray-200 overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="text-left px-6 py-4 bg-gray-50 border-b font-medium">Time</th>
                            <th className="text-left px-6 py-4 bg-gray-50 border-b font-medium">Monday</th>
                            <th className="text-left px-6 py-4 bg-gray-50 border-b font-medium">Tuesday</th>
                            <th className="text-left px-6 py-4 bg-gray-50 border-b font-medium">Wednesday</th>
                            <th className="text-left px-6 py-4 bg-gray-50 border-b font-medium">Thursday</th>
                            <th className="text-left px-6 py-4 bg-gray-50 border-b font-medium">Friday</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(timetableData[className as Class] || []).map((row, index) => (
                            <tr key={row.time} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-6 py-4 border-b">{row.time}</td>
                              <td className="px-6 py-4 border-b">{row.monday}</td>
                              <td className="px-6 py-4 border-b">{row.tuesday}</td>
                              <td className="px-6 py-4 border-b">{row.wednesday}</td>
                              <td className="px-6 py-4 border-b">{row.thursday}</td>
                              <td className="px-6 py-4 border-b">{row.friday}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button
                        onClick={() => downloadTimetable(className, timetableData[className as Class] || [])}
                        className="bg-black text-white hover:bg-black/90 flex items-center gap-2"
                      >
                        <DownloadIcon className="h-4 w-4" />
                        Download {className} Timetable
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Holidays */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">School Holidays</h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Major Vacations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Major Vacations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-blue-600 font-medium">Summer Vacation</h3>
                    <p className="text-gray-600">May 15 - June 30</p>
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-medium">Puja Holidays</h3>
                    <p className="text-gray-600">October 15-25</p>
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-medium">Winter Break</h3>
                    <p className="text-gray-600">December 25 - January 5</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* National Holidays */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>National Holidays</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-blue-600 font-medium">Republic Day</h3>
                    <p className="text-gray-600">January 26</p>
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-medium">Independence Day</h3>
                    <p className="text-gray-600">August 15</p>
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-medium">Gandhi Jayanti</h3>
                    <p className="text-gray-600">October 2</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Festival Holidays */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Festival Holidays</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-blue-600 font-medium">Diwali</h3>
                    <p className="text-gray-600">As per calendar</p>
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-medium">Holi</h3>
                    <p className="text-gray-600">As per calendar</p>
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-medium">Christmas</h3>
                    <p className="text-gray-600">December 25</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 