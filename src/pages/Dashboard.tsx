
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HealthMetric from "@/components/HealthMetric";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RewardCard from "@/components/RewardCard";

const Dashboard = () => {
  const mockHealthData = {
    bloodGlucose: {
      current: 118,
      unit: "mg/dL",
      trend: "down" as const,
      change: "-12 from last reading"
    },
    weight: {
      current: 172,
      unit: "lbs",
      trend: "stable" as const,
      change: "No change in 2 weeks"
    },
    activity: {
      current: 8240,
      unit: "steps",
      trend: "up" as const,
      change: "+1200 from yesterday"
    },
    hba1c: {
      current: 6.7,
      unit: "%",
      trend: "down" as const,
      change: "-0.3 from last quarter"
    }
  };

  const upcomingEvents = [
    {
      title: "Doctor Appointment",
      date: "May 15, 2025",
      time: "10:30 AM",
      provider: "Dr. Sarah Johnson"
    },
    {
      title: "Medication Renewal",
      date: "May 20, 2025",
      time: "Auto-renewal",
      provider: "Metro Pharmacy"
    },
    {
      title: "Lab Tests",
      date: "June 3, 2025",
      time: "9:00 AM",
      provider: "Central Clinical Labs"
    }
  ];

  const recentActivities = [
    {
      type: "Reading",
      value: "Blood glucose: 126 mg/dL",
      time: "Today, 8:30 AM"
    },
    {
      type: "Medication",
      value: "Metformin 500mg taken",
      time: "Today, 8:00 AM"
    },
    {
      type: "Exercise",
      value: "Morning walk: 25 minutes",
      time: "Today, 7:15 AM"
    },
    {
      type: "Reading",
      value: "Blood glucose: 138 mg/dL",
      time: "Yesterday, 8:30 PM"
    },
    {
      type: "Meal",
      value: "Dinner logged: 45g carbs",
      time: "Yesterday, 7:00 PM"
    }
  ];

  const tokenBalance = 450;
  const healthScore = 83;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-strk-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Patient Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Alex Morgan</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Connected</span>
              </div>
              <div className="flex items-center gap-2 bg-strk-purple/10 px-4 py-2 rounded-md text-strk-purple">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">{tokenBalance} STRK</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <HealthMetric
              title="Blood Glucose"
              value={mockHealthData.bloodGlucose.current}
              unit={mockHealthData.bloodGlucose.unit}
              trend={mockHealthData.bloodGlucose.trend}
              trendValue={mockHealthData.bloodGlucose.change}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <HealthMetric
              title="Weight"
              value={mockHealthData.weight.current}
              unit={mockHealthData.weight.unit}
              trend={mockHealthData.weight.trend}
              trendValue={mockHealthData.weight.change}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              }
            />
            <HealthMetric
              title="Daily Activity"
              value={mockHealthData.activity.current}
              unit={mockHealthData.activity.unit}
              trend={mockHealthData.activity.trend}
              trendValue={mockHealthData.activity.change}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <HealthMetric
              title="HbA1c"
              value={mockHealthData.hba1c.current}
              unit={mockHealthData.hba1c.unit}
              trend={mockHealthData.hba1c.trend}
              trendValue={mockHealthData.hba1c.change}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-12">
            {/* Health NFT Card */}
            <Card className="md:col-span-4">
              <CardHeader className="pb-2">
                <CardTitle>STRK Health NFT</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-strk-teal to-strk-purple p-6 rounded-lg text-white">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-strk-teal to-strk-purple flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Sx</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-bold">Health Score</h3>
                      <p className="text-sm text-white/80">Level 2 NFT Badge</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center my-6">
                    <div className="flex flex-col items-center">
                      <div className="text-5xl font-bold">{healthScore}</div>
                      <div className="text-sm text-white/80">out of 100</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Treatment Adherence</span>
                      <span>92%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Health Check-ins</span>
                      <span>5/7 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lifestyle Score</span>
                      <span>78/100</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-white text-strk-purple hover:bg-white/90">View Details</Button>
                </div>
              </CardContent>
            </Card>

            {/* Main content area */}
            <div className="md:col-span-8">
              <Tabs defaultValue="upcoming">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                  <TabsTrigger value="rewards">Available Rewards</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming" className="space-y-4 mt-4">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="text-sm text-muted-foreground">
                            {event.date} • {event.time}
                          </div>
                          <div className="text-sm mt-1">{event.provider}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button size="sm" className="bg-strk-teal hover:bg-strk-teal-dark">Confirm</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="outline" className="w-full">+ Add New Appointment</Button>
                </TabsContent>
                
                <TabsContent value="activity" className="mt-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                          <div key={index} className="flex items-start pb-4 border-b last:border-0 last:pb-0">
                            <div className="w-2 h-2 mt-2 rounded-full bg-strk-teal"></div>
                            <div className="ml-4 flex-1">
                              <div className="font-medium">{activity.value}</div>
                              <div className="text-sm text-muted-foreground flex items-center justify-between">
                                <span>{activity.type}</span>
                                <span>{activity.time}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4">View All Activity</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="rewards" className="mt-4">
                  <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <RewardCard
                      title="Weekly Check-in Streak"
                      description="Record your blood glucose at least once daily for 7 consecutive days"
                      tokenAmount={50}
                      progress={70}
                      claimable={false}
                      category="Health Tracking"
                      difficulty="easy"
                    />
                    <RewardCard
                      title="Perfect Med Adherence"
                      description="Take all prescribed medications on schedule for 30 days"
                      tokenAmount={100}
                      progress={100}
                      claimable={true}
                      category="Treatment"
                      difficulty="medium"
                    />
                    <RewardCard
                      title="Physical Activity Goal"
                      description="Complete at least 150 minutes of moderate exercise this week"
                      tokenAmount={75}
                      progress={40}
                      claimable={false}
                      category="Lifestyle"
                      difficulty="medium"
                    />
                    <RewardCard
                      title="Optimal Glucose Range"
                      description="Keep blood glucose readings within target range for 14 days"
                      tokenAmount={200}
                      progress={100}
                      claimable={true}
                      category="Health Outcome"
                      difficulty="hard"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 mt-6">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Reading</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span>Treatment</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span>Message</span>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
