
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RewardCard from "@/components/RewardCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Community = () => {
  const [communityFilter, setCommunityFilter] = useState<string>("all");
  
  const rewardsData = [
    {
      title: "Consistent Glucose Readings",
      description: "Log your blood glucose levels at least twice daily for 7 consecutive days",
      tokenAmount: 50,
      progress: 100,
      claimable: true,
      category: "Health Tracking",
      difficulty: "easy" as const,
    },
    {
      title: "Movement Champion",
      description: "Complete 30 minutes of physical activity for 5 days in a week",
      tokenAmount: 75,
      progress: 60,
      claimable: false,
      category: "Physical Activity",
      difficulty: "medium" as const,
    },
    {
      title: "Nutrition Master",
      description: "Log complete meal information including carb counts for 14 consecutive days",
      tokenAmount: 100,
      progress: 35,
      claimable: false,
      category: "Diet",
      difficulty: "medium" as const,
    },
    {
      title: "Target Range Hero",
      description: "Keep 90% of glucose readings within your target range for a full month",
      tokenAmount: 200,
      progress: 0,
      claimable: false,
      category: "Health Outcomes",
      difficulty: "hard" as const,
    },
    {
      title: "Community Helper",
      description: "Answer 10 questions in the community forum to help others manage their diabetes",
      tokenAmount: 80,
      progress: 70,
      claimable: false,
      category: "Community",
      difficulty: "easy" as const,
    },
    {
      title: "Perfect Prescription",
      description: "Take all prescribed medications on time for 30 consecutive days",
      tokenAmount: 150,
      progress: 90,
      claimable: false,
      category: "Treatment",
      difficulty: "medium" as const,
    },
  ];

  const communityPosts = [
    {
      id: 1,
      author: "DiabetesFighter28",
      title: "How do you manage dawn phenomenon?",
      content: "I've been experiencing high morning blood sugars even though I go to bed with normal levels. Any tips on managing this dawn phenomenon?",
      likes: 24,
      replies: 18,
      tags: ["Morning Highs", "Tips"],
      time: "2 hours ago",
    },
    {
      id: 2,
      author: "HealthyDiabetic",
      title: "New CGM system changed my life!",
      content: "I just started using the latest CGM system and it has completely transformed how I manage my diabetes. No more finger pricks!",
      likes: 56,
      replies: 32,
      tags: ["Technology", "Success Story"],
      time: "Yesterday",
    },
    {
      id: 3,
      author: "T1D_Runner",
      title: "Marathon training with T1D",
      content: "I'm training for my first marathon. Anyone else here run long distances? How do you manage your glucose during training and race day?",
      likes: 42,
      replies: 28,
      tags: ["Exercise", "Question"],
      time: "3 days ago",
    },
    {
      id: 4,
      author: "DiabetesMom",
      title: "School challenges for T1D child",
      content: "My 10-year-old was recently diagnosed and we're facing challenges at school. Looking for advice from parents who've navigated this.",
      likes: 38,
      replies: 45,
      tags: ["Kids", "School", "Support"],
      time: "4 days ago",
    },
  ];

  const leaderboardData = [
    { rank: 1, name: "HealthyDiabetic", score: 1240, streak: "45 days", achievements: 18 },
    { rank: 2, name: "GlucoseWarrior", score: 1105, streak: "32 days", achievements: 15 },
    { rank: 3, name: "T1D_Runner", score: 980, streak: "28 days", achievements: 14 },
    { rank: 4, name: "DiabetesChampion", score: 875, streak: "21 days", achievements: 12 },
    { rank: 5, name: "SugarController", score: 830, streak: "19 days", achievements: 11 },
    { rank: 6, name: "HealthyLife365", score: 790, streak: "16 days", achievements: 10 },
    { rank: 7, name: "GlucoseBalancer", score: 745, streak: "14 days", achievements: 9 },
    { rank: 8, name: "DiabetesFighter28", score: 710, streak: "12 days", achievements: 9 },
    { rank: 9, name: "HealthJourney", score: 675, streak: "10 days", achievements: 8 },
    { rank: 10, name: "BetterEveryDay", score: 640, streak: "8 days", achievements: 7 },
  ];

  const upcomingEvents = [
    {
      title: "Virtual Diabetes Support Group",
      date: "May 15, 2025",
      time: "7:00 PM - 8:30 PM",
      participants: 24,
      type: "Support Group",
    },
    {
      title: "Healthy Cooking Demo: Low-Carb Recipes",
      date: "May 20, 2025",
      time: "6:00 PM - 7:00 PM",
      participants: 45,
      type: "Workshop",
    },
    {
      title: "Ask the Endocrinologist: Live Q&A",
      date: "May 27, 2025",
      time: "12:00 PM - 1:00 PM",
      participants: 63,
      type: "AMA",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-strk-gray">
        <div className="relative bg-gradient-to-r from-strk-teal to-strk-purple text-white py-12">
          <div className="absolute inset-0 bg-grid-white opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">STRK Community</h1>
              <p className="text-lg opacity-90 mb-6">
                Connect with others, earn rewards, and improve your health journey together.
                Share experiences, participate in challenges, and build a supportive network.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-strk-teal-dark hover:bg-opacity-90">Join a Group</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">Find Events</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-6 md:grid-cols-12">
            {/* Community sidebar */}
            <div className="md:col-span-4 lg:col-span-3 space-y-6">
              {/* Profile Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-strk-teal to-strk-purple flex items-center justify-center text-white font-bold text-xl mb-4">
                      AM
                    </div>
                    <h3 className="text-xl font-bold">Alex Morgan</h3>
                    <p className="text-sm text-muted-foreground">@GlucoseWarrior</p>
                    <div className="flex items-center gap-1 mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium">Gold Member</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Health Score</span>
                        <span className="font-medium">83/100</span>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-xl font-bold">32</div>
                        <div className="text-xs text-muted-foreground">Day Streak</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">1,105</div>
                        <div className="text-xs text-muted-foreground">STRK Points</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">15</div>
                        <div className="text-xs text-muted-foreground">Achievements</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-strk-teal hover:bg-strk-teal-dark">View Profile</Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{event.title}</h4>
                          <Badge className="bg-strk-purple">{event.type}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {event.date} • {event.time}
                        </div>
                        <div className="text-sm mt-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>{event.participants} participating</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">See All Events</Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Community Content */}
            <div className="md:col-span-8 lg:col-span-9">
              <Tabs defaultValue="rewards">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="rewards">Rewards & Challenges</TabsTrigger>
                  <TabsTrigger value="discussions">Discussion Forum</TabsTrigger>
                  <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                </TabsList>
                
                {/* Rewards Tab */}
                <TabsContent value="rewards" className="space-y-6 mt-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Available Challenges</h2>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant={communityFilter === "all" ? "default" : "outline"}
                        onClick={() => setCommunityFilter("all")}
                        className={communityFilter === "all" ? "bg-strk-teal hover:bg-strk-teal-dark" : ""}
                      >
                        All
                      </Button>
                      <Button 
                        size="sm" 
                        variant={communityFilter === "easy" ? "default" : "outline"}
                        onClick={() => setCommunityFilter("easy")}
                        className={communityFilter === "easy" ? "bg-green-500 hover:bg-green-600" : ""}
                      >
                        Easy
                      </Button>
                      <Button 
                        size="sm" 
                        variant={communityFilter === "medium" ? "default" : "outline"}
                        onClick={() => setCommunityFilter("medium")}
                        className={communityFilter === "medium" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
                      >
                        Medium
                      </Button>
                      <Button 
                        size="sm" 
                        variant={communityFilter === "hard" ? "default" : "outline"}
                        onClick={() => setCommunityFilter("hard")}
                        className={communityFilter === "hard" ? "bg-red-500 hover:bg-red-600" : ""}
                      >
                        Hard
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {rewardsData
                      .filter(reward => communityFilter === "all" || reward.difficulty === communityFilter)
                      .map((reward, index) => (
                        <RewardCard
                          key={index}
                          title={reward.title}
                          description={reward.description}
                          tokenAmount={reward.tokenAmount}
                          progress={reward.progress}
                          claimable={reward.claimable}
                          category={reward.category}
                          difficulty={reward.difficulty}
                        />
                      ))
                    }
                  </div>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Community Challenges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">15,000 Step Weekend</h3>
                            <Badge>95 participants</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground my-2">Complete 15,000 steps this weekend (May 14-15) and earn bonus tokens!</p>
                          <div className="flex items-center gap-2 mt-4">
                            <div className="flex-1">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Group Progress</span>
                                <span>65%</span>
                              </div>
                              <Progress value={65} className="h-2" />
                            </div>
                            <Button size="sm" className="bg-strk-teal hover:bg-strk-teal-dark">Join</Button>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">30-Day Low Carb Challenge</h3>
                            <Badge>178 participants</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground my-2">Track your meals and stay under 100g carbs daily for improved glucose control.</p>
                          <div className="flex items-center gap-2 mt-4">
                            <div className="flex-1">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Group Progress</span>
                                <span>42%</span>
                              </div>
                              <Progress value={42} className="h-2" />
                            </div>
                            <Button size="sm" className="bg-strk-teal hover:bg-strk-teal-dark">Join</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Discussions Tab */}
                <TabsContent value="discussions" className="mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Community Discussions</h2>
                    <Button className="bg-strk-teal hover:bg-strk-teal-dark">New Post</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {communityPosts.map((post) => (
                      <Card key={post.id}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{post.title}</h3>
                            <span className="text-xs text-muted-foreground">{post.time}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <span>by {post.author}</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              {post.likes}
                            </div>
                            <span>•</span>
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                              {post.replies}
                            </div>
                          </div>
                          
                          <p className="mt-3 text-sm">{post.content}</p>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="bg-strk-purple/10 text-strk-purple-dark border-none">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="mt-4 flex gap-3">
                            <Button size="sm" variant="outline">Like</Button>
                            <Button size="sm" className="bg-strk-teal hover:bg-strk-teal-dark">Reply</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4" variant="outline">Load More</Button>
                </TabsContent>
                
                {/* Leaderboard Tab */}
                <TabsContent value="leaderboard" className="mt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Community Leaderboard</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative overflow-x-auto">
                        <table className="w-full text-left">
                          <thead className="text-xs uppercase bg-muted/50">
                            <tr>
                              <th className="px-4 py-3">Rank</th>
                              <th className="px-4 py-3">Name</th>
                              <th className="px-4 py-3">Score</th>
                              <th className="px-4 py-3">Streak</th>
                              <th className="px-4 py-3">Achievements</th>
                            </tr>
                          </thead>
                          <tbody>
                            {leaderboardData.map((user) => (
                              <tr key={user.rank} className="border-b">
                                <td className="px-4 py-3">
                                  {user.rank <= 3 ? (
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                                      user.rank === 1
                                        ? 'bg-yellow-500'
                                        : user.rank === 2
                                        ? 'bg-gray-400'
                                        : 'bg-amber-700'
                                    } text-white font-bold`}>
                                      {user.rank}
                                    </div>
                                  ) : (
                                    <span className="font-medium">{user.rank}</span>
                                  )}
                                </td>
                                <td className="px-4 py-3 font-medium">
                                  {user.name}
                                  {user.name === "GlucoseWarrior" && (
                                    <span className="ml-2 text-xs bg-strk-teal/20 text-strk-teal-dark px-2 py-0.5 rounded-full">
                                      You
                                    </span>
                                  )}
                                </td>
                                <td className="px-4 py-3">{user.score}</td>
                                <td className="px-4 py-3">{user.streak}</td>
                                <td className="px-4 py-3">{user.achievements}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-6 bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-medium">Your Stats</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="text-sm text-muted-foreground">Rank</div>
                            <div className="text-2xl font-bold">2nd</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="text-sm text-muted-foreground">Total Points</div>
                            <div className="text-2xl font-bold">1,105</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="text-sm text-muted-foreground">Monthly Gain</div>
                            <div className="text-2xl font-bold text-green-500">+215</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <div className="text-sm text-muted-foreground">To Next Rank</div>
                            <div className="text-2xl font-bold">136</div>
                          </div>
                        </div>
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

export default Community;
