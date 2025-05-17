import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { format, addDays, startOfWeek, eachDayOfInterval } from "date-fns";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Type for a single meal
interface Meal {
  id: string;
  name: string;
  description: string;
  carbs: number;
  protein: number;
  fat: number;
  calories: number;
  time: string;
}

// Type for a day's meal plan
interface DayPlan {
  date: Date;
  meals: Meal[];
  notes: string;
}

const mealFormSchema = z.object({
  name: z.string().min(2, { message: "Meal name is required" }),
  description: z.string().min(2, { message: "Description is required" }),
  carbs: z.string().min(1, { message: "Carbs are required" }),
  protein: z.string().min(1, { message: "Protein is required" }),
  fat: z.string().min(1, { message: "Fat is required" }),
  calories: z.string().min(1, { message: "Calories are required" }),
  time: z.string().min(1, { message: "Time is required" }),
});

type MealFormValues = z.infer<typeof mealFormSchema>;

const MealPlanEditor = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("weekly");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMealDialog, setShowMealDialog] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mealPlans, setMealPlans] = useState<DayPlan[]>([]);
  const [dayNotes, setDayNotes] = useState("");

  // Initialize with some sample data
  useState(() => {
    const today = new Date();
    const weekStart = startOfWeek(today);

    const initialPlans: DayPlan[] = eachDayOfInterval({
      start: weekStart,
      end: addDays(weekStart, 6),
    }).map((date) => ({
      date,
      meals: [],
      notes: "",
    }));

    // Add some sample meals to first day
    initialPlans[0].meals = [
      {
        id: "1",
        name: "Breakfast",
        description: "Oatmeal with berries and nuts",
        carbs: 40,
        protein: 10,
        fat: 8,
        calories: 320,
        time: "08:00",
      },
      {
        id: "2",
        name: "Lunch",
        description: "Grilled chicken salad with olive oil dressing",
        carbs: 15,
        protein: 30,
        fat: 15,
        calories: 420,
        time: "12:30",
      },
      {
        id: "3",
        name: "Dinner",
        description: "Baked salmon with steamed vegetables",
        carbs: 20,
        protein: 28,
        fat: 12,
        calories: 380,
        time: "18:30",
      },
    ];

    setMealPlans(initialPlans);
  }, []);

  const form = useForm<MealFormValues>({
    resolver: zodResolver(mealFormSchema),
    defaultValues: {
      name: "",
      description: "",
      carbs: "",
      protein: "",
      fat: "",
      calories: "",
      time: "08:00",
    },
  });

  const onAddMeal = async (data: MealFormValues) => {
    setIsSubmitting(true);

    try {
      const selectedDayPlan = mealPlans.find(
        (plan) =>
          format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
      );

      if (selectedDayPlan) {
        const newMeal: Meal = {
          id: Date.now().toString(),
          name: data.name,
          description: data.description,
          carbs: parseFloat(data.carbs),
          protein: parseFloat(data.protein),
          fat: parseFloat(data.fat),
          calories: parseFloat(data.calories),
          time: data.time,
        };

        // Sort meals by time
        const updatedMeals = [...selectedDayPlan.meals, newMeal].sort(
          (a, b) => {
            const timeA = a.time.split(":").map(Number);
            const timeB = b.time.split(":").map(Number);
            return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1]);
          }
        );

        // Update the meal plans
        setMealPlans(
          mealPlans.map((plan) =>
            format(plan.date, "yyyy-MM-dd") ===
            format(selectedDate, "yyyy-MM-dd")
              ? { ...plan, meals: updatedMeals }
              : plan
          )
        );

        toast({
          title: "Meal Added",
          description: `${data.name} has been added to your meal plan.`,
        });

        setShowMealDialog(false);
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error adding your meal.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteMeal = (mealId: string) => {
    const selectedDayPlan = mealPlans.find(
      (plan) =>
        format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
    );

    if (selectedDayPlan) {
      const updatedMeals = selectedDayPlan.meals.filter(
        (meal) => meal.id !== mealId
      );

      setMealPlans(
        mealPlans.map((plan) =>
          format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
            ? { ...plan, meals: updatedMeals }
            : plan
        )
      );

      toast({
        title: "Meal Removed",
        description: "The meal has been removed from your plan.",
      });
    }
  };

  const saveNotes = () => {
    setMealPlans(
      mealPlans.map((plan) =>
        format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
          ? { ...plan, notes: dayNotes }
          : plan
      )
    );

    toast({
      title: "Notes Saved",
      description: "Your meal plan notes have been saved.",
    });
  };

  const saveMealPlan = () => {
    setIsSubmitting(true);

    try {
      // In a real app, this would save the meal plan to an API or database
      console.log("Meal Plans:", mealPlans);

      toast({
        title: "Meal Plan Saved",
        description: "Your meal plan has been successfully saved.",
      });

      // Navigate back after successful save
      navigate("/profile?tab=health");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error saving your meal plan.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDayMealPlan = (date: Date): DayPlan | undefined => {
    return mealPlans.find(
      (plan) => format(plan.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const dayPlan = getDayMealPlan(date);
    setDayNotes(dayPlan?.notes || "");
  };

  const navigateToPreviousWeek = () => {
    const newDate = addDays(currentDate, -7);
    setCurrentDate(newDate);
  };

  const navigateToNextWeek = () => {
    const newDate = addDays(currentDate, 7);
    setCurrentDate(newDate);
  };

  // Calculate the days of the current week
  const weekDays = eachDayOfInterval({
    start: startOfWeek(currentDate),
    end: addDays(startOfWeek(currentDate), 6),
  });

  // Get the selected day's meal plan
  const selectedDayPlan = getDayMealPlan(selectedDate);
  const meals = selectedDayPlan?.meals || [];

  // Calculate daily nutrition totals
  const dailyTotals = {
    calories: meals.reduce((sum, meal) => sum + meal.calories, 0),
    carbs: meals.reduce((sum, meal) => sum + meal.carbs, 0),
    protein: meals.reduce((sum, meal) => sum + meal.protein, 0),
    fat: meals.reduce((sum, meal) => sum + meal.fat, 0),
  };

  return (
    <Layout>
      <div className="container max-w-4xl py-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Meal Plan</h1>
            <p className="text-muted-foreground">
              Plan and track your meals for optimal nutrition
            </p>
          </div>
          <Button onClick={saveMealPlan} disabled={isSubmitting}>
            <Save className="mr-2 h-4 w-4" />
            Save Meal Plan
          </Button>
        </div>

        <Tabs
          defaultValue="weekly"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="weekly">Weekly View</TabsTrigger>
            <TabsTrigger value="daily">Daily Details</TabsTrigger>
          </TabsList>

          {/* Weekly View Tab */}
          <TabsContent value="weekly">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Week of {format(weekDays[0], "MMM d")}</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={navigateToPreviousWeek}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={navigateToNextWeek}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Select a day to view or edit meal details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {weekDays.map((day) => {
                    const isSelected =
                      format(day, "yyyy-MM-dd") ===
                      format(selectedDate, "yyyy-MM-dd");
                    const dayPlan = getDayMealPlan(day);
                    const mealCount = dayPlan?.meals.length || 0;

                    return (
                      <div
                        key={format(day, "yyyy-MM-dd")}
                        className={`border rounded-lg p-2 text-center cursor-pointer transition-colors ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                        onClick={() => handleDateSelect(day)}
                      >
                        <div className="font-medium">{format(day, "EEE")}</div>
                        <div className="text-sm">{format(day, "d")}</div>
                        {mealCount > 0 && (
                          <div
                            className={`text-xs mt-1 ${
                              isSelected
                                ? "text-primary-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {mealCount} meal{mealCount !== 1 ? "s" : ""}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Daily View Tab */}
          <TabsContent value="daily">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>
                    Meals for {format(selectedDate, "EEEE, MMMM d")}
                  </CardTitle>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      form.reset();
                      setShowMealDialog(true);
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Meal
                  </Button>
                </div>
                <CardDescription>
                  Manage your meals and nutrition for this day
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {meals.length === 0 ? (
                  <div className="text-center py-10 border border-dashed rounded-lg">
                    <Calendar className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium">No Meals Planned</h3>
                    <p className="text-muted-foreground mb-4">
                      Add your first meal to start planning for this day.
                    </p>
                    <Button
                      onClick={() => {
                        form.reset();
                        setShowMealDialog(true);
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Meal
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Daily nutrition summary */}
                    <div className="grid grid-cols-4 gap-3 bg-muted/30 p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-muted-foreground text-sm">
                          Calories
                        </div>
                        <div className="font-bold text-lg">
                          {dailyTotals.calories}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground text-sm">
                          Carbs (g)
                        </div>
                        <div className="font-bold text-lg">
                          {dailyTotals.carbs}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground text-sm">
                          Protein (g)
                        </div>
                        <div className="font-bold text-lg">
                          {dailyTotals.protein}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground text-sm">
                          Fat (g)
                        </div>
                        <div className="font-bold text-lg">
                          {dailyTotals.fat}
                        </div>
                      </div>
                    </div>

                    {/* Meals list */}
                    <div className="space-y-4">
                      {meals.map((meal) => (
                        <div
                          key={meal.id}
                          className="border rounded-lg p-4 hover:bg-muted/10 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center">
                                <h3 className="font-medium">{meal.name}</h3>
                                <span className="text-sm ml-2 text-muted-foreground">
                                  {meal.time}
                                </span>
                              </div>
                              <p className="text-sm mt-1">{meal.description}</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteMeal(meal.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-4 gap-2 mt-3 text-sm">
                            <div>
                              <span className="text-muted-foreground">
                                Calories:
                              </span>{" "}
                              {meal.calories}
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Carbs:
                              </span>{" "}
                              {meal.carbs}g
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Protein:
                              </span>{" "}
                              {meal.protein}g
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Fat:
                              </span>{" "}
                              {meal.fat}g
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Day notes */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Day Notes</h3>
                        <Button variant="outline" size="sm" onClick={saveNotes}>
                          Save Notes
                        </Button>
                      </div>
                      <Textarea
                        placeholder="Add notes for this day's meal plan..."
                        value={dayNotes}
                        onChange={(e) => setDayNotes(e.target.value)}
                        className="resize-none"
                        rows={4}
                      />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Add Meal Dialog */}
        <Dialog
          open={showMealDialog}
          onOpenChange={(open) => {
            if (!open) {
              setShowMealDialog(false);
            }
          }}
        >
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Meal</DialogTitle>
              <DialogDescription>
                Enter meal details for {format(selectedDate, "EEEE, MMMM d")}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onAddMeal)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meal Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Breakfast, Lunch, Snack"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      useIonRouter
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the meal contents..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="calories"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Calories</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="carbs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Carbs (g)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" step="0.1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="protein"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Protein (g)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" step="0.1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="fat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fat (g)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" step="0.1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowMealDialog(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding..." : "Add Meal"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default MealPlanEditor;
