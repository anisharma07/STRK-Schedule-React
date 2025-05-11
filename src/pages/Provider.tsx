import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PatientCard from "@/components/PatientCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Provider = () => {
  const patients = [
    {
      name: "Emily Rodriguez",
      id: "PT-45293",
      lastReading: "Today, 8:30 AM",
      lastReadingValue: "182 mg/dL",
      riskLevel: "high" as const,
      nextAppointment: "May 18, 2025",
      adherenceScore: 65,
    },
    {
      name: "Jamal Washington",
      id: "PT-38201",
      lastReading: "Today, 7:45 AM",
      lastReadingValue: "124 mg/dL",
      riskLevel: "low" as const,
      nextAppointment: "June 3, 2025",
      adherenceScore: 92,
    },
    {
      name: "Sarah Thompson",
      id: "PT-29415",
      lastReading: "Yesterday, 9:15 PM",
      lastReadingValue: "138 mg/dL",
      riskLevel: "medium" as const,
      nextAppointment: "May 22, 2025",
      adherenceScore: 78,
    },
    {
      name: "Michael Chen",
      id: "PT-53618",
      lastReading: "Today, 6:20 AM",
      lastReadingValue: "116 mg/dL",
      riskLevel: "low" as const,
      nextAppointment: "June 15, 2025",
      adherenceScore: 88,
    },
    {
      name: "Aaliyah Johnson",
      id: "PT-42791",
      lastReading: "Yesterday, 8:05 PM",
      lastReadingValue: "165 mg/dL",
      riskLevel: "medium" as const,
      nextAppointment: "May 25, 2025",
      adherenceScore: 70,
    },
    {
      name: "Robert Miller",
      id: "PT-31847",
      lastReading: "Today, 9:10 AM",
      lastReadingValue: "192 mg/dL",
      riskLevel: "high" as const,
      nextAppointment: "May 16, 2025",
      adherenceScore: 58,
    },
  ];

  const alertsData = [
    {
      patient: "Emily Rodriguez",
      type: "High Glucose",
      value: "182 mg/dL",
      time: "Today, 8:30 AM",
      priority: "high",
    },
    {
      patient: "Robert Miller",
      type: "High Glucose",
      value: "192 mg/dL",
      time: "Today, 9:10 AM",
      priority: "high",
    },
    {
      patient: "Aaliyah Johnson",
      type: "Missed Medication",
      value: "2 days",
      time: "Yesterday",
      priority: "medium",
    },
    {
      patient: "Sarah Thompson",
      type: "Low Supplies",
      value: "Test strips: 5 remaining",
      time: "Yesterday",
      priority: "medium",
    },
  ];

  const upcomingAppointments = [
    {
      patient: "Emily Rodriguez",
      date: "May 18, 2025",
      time: "10:30 AM",
      type: "Follow-up",
    },
    {
      patient: "Robert Miller",
      date: "May 16, 2025",
      time: "2:15 PM",
      type: "Urgent Care",
    },
    {
      patient: "Sarah Thompson",
      date: "May 22, 2025",
      time: "11:00 AM",
      type: "Quarterly Review",
    },
    {
      patient: "Aaliyah Johnson",
      date: "May 25, 2025",
      time: "9:45 AM",
      type: "Follow-up",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-strk-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Provider Dashboard</h1>
              <p className="text-muted-foreground">Dr. Sarah Johnson, Endocrinology</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Today: {new Date().toLocaleDateString()}
              </Button>
              <Button className="bg-strk-teal hover:bg-strk-teal-dark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Patient
              </Button>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-12">
            {/* Sidebar with Patient List */}
            <div className="md:col-span-4 lg:col-span-3 space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Patient List</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <Input placeholder="Search patients..." className="mb-4" />
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-strk-teal hover:bg-strk-teal-dark flex-1">All</Button>
                      <Button size="sm" variant="outline" className="flex-1">High Risk</Button>
                      <Button size="sm" variant="outline" className="flex-1">Recent</Button>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4 max-h-[450px] overflow-y-auto pr-1">
                    {patients.map((patient, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md cursor-pointer border ${
                          index === 0 ? 'bg-strk-teal/10 border-strk-teal' : 'border-transparent hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{patient.name}</h3>
                            <div className="text-xs text-muted-foreground">{patient.id}</div>
                          </div>
                          {patient.riskLevel === 'high' && (
                            <span className="h-2 w-2 rounded-full bg-red-500"></span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-8 lg:col-span-9">
              <Tabs defaultValue="overview">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts</TabsTrigger>
                  <TabsTrigger value="appointments">Appointments</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6 mt-4">
                  {/* Patient Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Patient Summary - Emily Rodriguez</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Patient Information</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Age:</span>
                              <span>42</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Diabetes Type:</span>
                              <span>Type 2</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Diagnosis Date:</span>
                              <span>March 2022</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Primary Treatment:</span>
                              <span>Metformin + Diet</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Comorbidities:</span>
                              <span>Hypertension, Obesity</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-2">Recent Stats</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Avg Glucose (7d):</span>
                              <span className="font-medium text-red-500">168 mg/dL</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Latest HbA1c:</span>
                              <span className="font-medium text-yellow-500">7.8%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Check-in Rate:</span>
                              <span>5/7 days</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Treatment Adherence:</span>
                              <span className="font-medium text-yellow-500">65%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">STRK Score:</span>
                              <span>62/100</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 space-y-2">
                        <h3 className="text-lg font-medium">Recommended Actions</h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-strk-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <span>Review medication regimen - current treatment may need adjustment.</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-strk-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <span>Recommend dietary consultation - glucose pattern suggests meal planning issues.</span>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-strk-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            <span>Schedule follow-up within 2 weeks instead of standard 4-week protocol.</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-6">
                        <Button className="bg-strk-teal hover:bg-strk-teal-dark">
                          Send Message
                        </Button>
                        <Button variant="outline">
                          Update Treatment Plan
                        </Button>
                        <Button variant="outline">
                          View Complete History
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Other Patients */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Other Patients</h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {patients.slice(1, 4).map((patient, index) => (
                        <PatientCard
                          key={index}
                          name={patient.name}
                          id={patient.id}
                          lastReading={patient.lastReading}
                          lastReadingValue={patient.lastReadingValue}
                          riskLevel={patient.riskLevel}
                          nextAppointment={patient.nextAppointment}
                          adherenceScore={patient.adherenceScore}
                        />
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                {/* Alerts Tab */}
                <TabsContent value="alerts" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Patient Alerts</h2>
                        <Button variant="outline" size="sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                          </svg>
                          Filter
                        </Button>
                      </div>

                      <div className="space-y-3">
                        {alertsData.map((alert, index) => (
                          <div 
                            key={index} 
                            className={`p-4 rounded-md border ${
                              alert.priority === 'high'
                                ? 'border-red-200 bg-red-50'
                                : alert.priority === 'medium'
                                  ? 'border-yellow-200 bg-yellow-50'
                                  : 'border-blue-200 bg-blue-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className={`h-2 w-2 rounded-full ${
                                  alert.priority === 'high'
                                    ? 'bg-red-500'
                                    : alert.priority === 'medium'
                                      ? 'bg-yellow-500'
                                      : 'bg-blue-500'
                                }`}></div>
                                <h3 className="font-medium ml-2">{alert.patient}</h3>
                              </div>
                              <span className="text-sm text-muted-foreground">{alert.time}</span>
                            </div>
                            
                            <div className="mt-2">
                              <div className="text-sm">
                                <span className="font-medium">{alert.type}: </span>
                                <span>{alert.value}</span>
                              </div>
                            </div>
                            
                            <div className="mt-3 flex gap-2">
                              <Button size="sm" variant="outline">Dismiss</Button>
                              <Button
                                size="sm"
                                className={
                                  alert.priority === 'high'
                                    ? 'bg-red-500 hover:bg-red-600'
                                    : 'bg-strk-teal hover:bg-strk-teal-dark'
                                }
                              >
                                Take Action
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Appointments Tab */}
                <TabsContent value="appointments" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Today</Button>
                          <Button size="sm" variant="outline">This Week</Button>
                          <Button size="sm" className="bg-strk-teal hover:bg-strk-teal-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            New
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {upcomingAppointments.map((appointment, index) => (
                          <div key={index} className="border rounded-md p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{appointment.patient}</h3>
                                <div className="text-sm text-muted-foreground">
                                  {appointment.date} • {appointment.time}
                                </div>
                              </div>
                              <div>
                                <span className="inline-block px-2 py-1 text-xs bg-strk-purple/10 text-strk-purple-dark rounded-md">
                                  {appointment.type}
                                </span>
                              </div>
                            </div>
                            <div className="mt-3 flex gap-2">
                              <Button size="sm" variant="outline">Reschedule</Button>
                              <Button size="sm" variant="outline">Notes</Button>
                              <Button size="sm" className="bg-strk-teal hover:bg-strk-teal-dark">Start</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Provider;
