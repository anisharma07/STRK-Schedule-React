import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Plus,
  Save,
  Clock,
  Trash2,
  Activity,
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
import { cn } from "@/lib/utils";

// Type for a single exercise
interface Exercise {
  id: string;
  name: string;
  type: string;
  duration: number;
  intensity: string;
  sets?: number;
  reps?: number;
  weight?: number;
  notes: string;
}

// Type for a day's workout plan
interface DayPlan {
  date: Date;
  exercises: Exercise[];
  totalDuration: number;
  completed: boolean;
  notes: string;
}

const exerciseFormSchema = z.object({
  name: z.string().min(2, { message: "Exercise name is required" }),
  type: z.enum(["cardio", "strength", "flexibility", "balance"]),
  duration: z.string().min(1, { message: "Duration is required" }),
  intensity: z.enum(["low", "moderate", "high"]),
  sets: z.string().optional(),
  reps: z.string().optional(),
  weight: z.string().optional(),
  notes: z.string().optional(),
});

type ExerciseFormValues = z.infer<typeof exerciseFormSchema>;

const ExercisePlanEditor = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("weekly");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExerciseDialog, setShowExerciseDialog] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workoutPlans, setWorkoutPlans] = useState<DayPlan[]>([]);
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
      exercises: [],
      totalDuration: 0,
      completed: false,
      notes: "",
    }));

    // Add some sample exercises to first day
    initialPlans[0].exercises = [
      {
        id: "1",
        name: "Walking",
        type: "cardio",
        duration: 30,
        intensity: "moderate",
        notes: "Morning walk around the neighborhood",
      },
      {
        id: "2",
        name: "Squats",
        type: "strength",
        duration: 15,
        intensity: "moderate",
        sets: 3,
        reps: 12,
        weight: 0,
        notes: "Body weight squats",
      },
    ];
    initialPlans[0].totalDuration = 45;

    // Add exercise to second day
    initialPlans[1].exercises = [
      {
        id: "3",
        name: "Swimming",
        type: "cardio",
        duration: 45,
        intensity: "moderate",
        notes: "Laps at the community pool",
      },
    ];
    initialPlans[1].totalDuration = 45;

    setWorkoutPlans(initialPlans);
  }, []);

  const form = useForm<ExerciseFormValues>({
    resolver: zodResolver(exerciseFormSchema),
    defaultValues: {
      name: "",
      type: "cardio",
      duration: "",
      intensity: "moderate",
      sets: "",
      reps: "",
      weight: "",
      notes: "",
    },
  });

  // Show/hide strength training fields based on exercise type
  const watchExerciseType = form.watch("type");
  const isStrengthTraining = watchExerciseType === "strength";

  const onAddExercise = async (data: ExerciseFormValues) => {
    setIsSubmitting(true);

    try {
      const selectedDayPlan = workoutPlans.find(
        (plan) =>
          format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
      );

      if (selectedDayPlan) {
        const newExercise: Exercise = {
          id: Date.now().toString(),
          name: data.name,
          type: data.type,
          duration: parseInt(data.duration),
          intensity: data.intensity,
          notes: data.notes || "",
        };

        if (isStrengthTraining) {
          newExercise.sets = data.sets ? parseInt(data.sets) : undefined;
          newExercise.reps = data.reps ? parseInt(data.reps) : undefined;
          newExercise.weight = data.weight
            ? parseFloat(data.weight)
            : undefined;
        }

        const updatedExercises = [...selectedDayPlan.exercises, newExercise];
        const totalDuration = updatedExercises.reduce(
          (sum, exercise) => sum + exercise.duration,
          0
        );

        // Update the workout plans
        setWorkoutPlans(
          workoutPlans.map((plan) =>
            format(plan.date, "yyyy-MM-dd") ===
            format(selectedDate, "yyyy-MM-dd")
              ? { ...plan, exercises: updatedExercises, totalDuration }
              : plan
          )
        );

        toast({
          title: "Exercise Added",
          description: `${data.name} has been added to your workout plan.`,
        });

        setShowExerciseDialog(false);
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error adding your exercise.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteExercise = (exerciseId: string) => {
    const selectedDayPlan = workoutPlans.find(
      (plan) =>
        format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
    );

    if (selectedDayPlan) {
      const updatedExercises = selectedDayPlan.exercises.filter(
        (exercise) => exercise.id !== exerciseId
      );

      const totalDuration = updatedExercises.reduce(
        (sum, exercise) => sum + exercise.duration,
        0
      );

      setWorkoutPlans(
        workoutPlans.map((plan) =>
          format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
            ? { ...plan, exercises: updatedExercises, totalDuration }
            : plan
        )
      );

      toast({
        title: "Exercise Removed",
        description: "The exercise has been removed from your plan.",
      });
    }
  };

  const toggleCompleted = () => {
    setWorkoutPlans(
      workoutPlans.map((plan) =>
        format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
          ? { ...plan, completed: !plan.completed }
          : plan
      )
    );

    const selectedPlan = workoutPlans.find(
      (plan) =>
        format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
    );

    if (selectedPlan) {
      const newCompletedState = !selectedPlan.completed;
      toast({
        title: newCompletedState ? "Workout Completed" : "Workout Incomplete",
        description: newCompletedState
          ? "Great job! Your workout has been marked as completed."
          : "Your workout has been marked as incomplete.",
      });
    }
  };

  const saveNotes = () => {
    setWorkoutPlans(
      workoutPlans.map((plan) =>
        format(plan.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
          ? { ...plan, notes: dayNotes }
          : plan
      )
    );

    toast({
      title: "Notes Saved",
      description: "Your workout notes have been saved.",
    });
  };

  const saveWorkoutPlan = () => {
    setIsSubmitting(true);

    try {
      // In a real app, this would save the workout plan to an API or database
      console.log("Workout Plans:", workoutPlans);

      toast({
        title: "Exercise Plan Saved",
        description: "Your exercise plan has been successfully saved.",
      });

      // Navigate back after successful save
      navigate("/profile?tab=health");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error saving your exercise plan.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDayWorkoutPlan = (date: Date): DayPlan | undefined => {
    return workoutPlans.find(
      (plan) => format(plan.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const dayPlan = getDayWorkoutPlan(date);
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

  // Get the selected day's workout plan
  const selectedDayPlan = getDayWorkoutPlan(selectedDate);
  const exercises = selectedDayPlan?.exercises || [];
  const isCompleted = selectedDayPlan?.completed || false;

  return (
    <Layout>
      <div className="container max-w-4xl py-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Exercise Plan</h1>
            <p className="text-muted-foreground">
              Schedule and track your workouts
            </p>
          </div>
          <Button onClick={saveWorkoutPlan} disabled={isSubmitting}>
            <Save className="mr-2 h-4 w-4" />
            Save Exercise Plan
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
                      onClick={nuseIonRouteravigateToNextWeek}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Select a day to view or edit workout details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {weekDays.map((day) => {
                    const isSelected =
                      format(day, "yyyy-MM-dd") ===
                      format(selectedDate, "yyyy-MM-dd");
                    const dayPlan = getDayWorkoutPlan(day);
                    const exerciseCount = dayPlan?.exercises.length || 0;
                    const isDayCompleted = dayPlan?.completed || false;

                    return (
                      <div
                        key={format(day, "yyyy-MM-dd")}
                        className={cn(
                          "border rounded-lg p-2 text-center cursor-pointer transition-colors relative",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : isDayCompleted
                            ? "bg-green-100 border-green-300 hover:bg-green-200"
                            : "hover:bg-muted"
                        )}
                        onClick={() => handleDateSelect(day)}
                      >
                        {isDayCompleted && (
                          <div className="absolute top-1 right-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={
                                isSelected
                                  ? "text-primary-foreground"
                                  : "text-green-600"
                              }
                            >
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </div>
                        )}
                        <div className="font-medium">{format(day, "EEE")}</div>
                        <div className="text-sm">{format(day, "d")}</div>
                        {exerciseCount > 0 && (
                          <div
                            className={`text-xs mt-1 ${
                              isSelected
                                ? "text-primary-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {exerciseCount} exercise
                            {exerciseCount !== 1 ? "s" : ""}
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
                  <div>
                    <div className="flex items-center">
                      <CardTitle>
                        Workout for {format(selectedDate, "EEEE, MMMM d")}
                      </CardTitle>
                      {isCompleted && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                    <CardDescription>
                      Manage your exercises for this day
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={isCompleted ? "outline" : "default"}
                      size="sm"
                      onClick={toggleCompleted}
                    >
                      {isCompleted ? "Mark Incomplete" : "Mark Completed"}
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => {
                        form.reset();
                        setShowExerciseDialog(true);
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Exercise
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {exercises.length === 0 ? (
                  <div className="text-center py-10 border border-dashed rounded-lg">
                    <Dumbbell className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium">
                      No Exercises Planned
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Add your first exercise to start planning your workout.
                    </p>
                    <Button
                      onClick={() => {
                        form.reset();
                        setShowExerciseDialog(true);
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Exercise
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Daily workout summary */}
                    <div className="flex items-center justify-between bg-muted/30 p-4 rounded-lg">
                      <div>
                        <h3 className="font-medium">Total Duration</h3>
                        <div className="flex items-center mt-1">
                          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-lg font-bold">
                            {selectedDayPlan?.totalDuration} minutes
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Exercise Types</h3>
                        <div className="flex items-center gap-2 mt-1">
                          {Array.from(
                            new Set(exercises.map((e) => e.type))
                          ).map((type) => (
                            <span
                              key={type}
                              className={cn(
                                "text-xs px-2 py-1 rounded-full",
                                type === "cardio"
                                  ? "bg-blue-100 text-blue-800"
                                  : type === "strength"
                                  ? "bg-red-100 text-red-800"
                                  : type === "flexibility"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-purple-100 text-purple-800"
                              )}
                            >
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Exercises list */}
                    <div className="space-y-4">
                      {exercises.map((exercise) => (
                        <div
                          key={exercise.id}
                          className={cn(
                            "border rounded-lg p-4 hover:bg-muted/10 transition-colors",
                            exercise.type === "cardio"
                              ? "border-blue-200"
                              : exercise.type === "strength"
                              ? "border-red-200"
                              : exercise.type === "flexibility"
                              ? "border-green-200"
                              : "border-purple-200"
                          )}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center">
                                <h3 className="font-medium">{exercise.name}</h3>
                                <span
                                  className={cn(
                                    "text-xs ml-2 px-2 py-0.5 rounded-full",
                                    exercise.type === "cardio"
                                      ? "bg-blue-100 text-blue-800"
                                      : exercise.type === "strength"
                                      ? "bg-red-100 text-red-800"
                                      : exercise.type === "flexibility"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-purple-100 text-purple-800"
                                  )}
                                >
                                  {exercise.type}
                                </span>
                                <span
                                  className={cn(
                                    "text-xs ml-2 px-2 py-0.5 rounded-full",
                                    exercise.intensity === "low"
                                      ? "bg-green-100 text-green-800"
                                      : exercise.intensity === "moderate"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-red-100 text-red-800"
                                  )}
                                >
                                  {exercise.intensity} intensity
                                </span>
                              </div>

                              <div className="flex items-center text-sm mt-1">
                                <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                                <span>{exercise.duration} minutes</span>
                              </div>

                              {exercise.type === "strength" && (
                                <div className="flex items-center gap-3 text-sm mt-1">
                                  {exercise.sets && (
                                    <span>{exercise.sets} sets</span>
                                  )}
                                  {exercise.reps && (
                                    <span>{exercise.reps} reps</span>
                                  )}
                                  {exercise.weight && (
                                    <span>{exercise.weight} kg</span>
                                  )}
                                </div>
                              )}

                              {exercise.notes && (
                                <p className="text-sm mt-2 text-muted-foreground">
                                  {exercise.notes}
                                </p>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteExercise(exercise.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Day notes */}
                    <div className="mt-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Workout Notes</h3>
                        <Button variant="outline" size="sm" onClick={saveNotes}>
                          Save Notes
                        </Button>
                      </div>
                      <Textarea
                        placeholder="Add notes for this workout..."
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

        {/* Add Exercise Dialog */}
        <Dialog
          open={showExerciseDialog}
          onOpenChange={(open) => {
            if (!open) {
              setShowExerciseDialog(false);
            }
          }}
        >
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Exercise</DialogTitle>
              <DialogDescription>
                Enter exercise details for{" "}
                {format(selectedDate, "EEEE, MMMM d")}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onAddExercise)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Exercise Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., Walking, Push-ups, Yoga"
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
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Exercise Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cardio">Cardio</SelectItem>
                            <SelectItem value="strength">Strength</SelectItem>
                            <SelectItem value="flexibility">
                              Flexibility
                            </SelectItem>
                            <SelectItem value="balance">Balance</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="intensity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Intensity</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select intensity" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration (minutes)</FormLabel>
                      <FormControl>
                        <Input type="number" min="1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {isStrengthTraining && (
                  <div className="grid grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="sets"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sets</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="reps"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reps</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="weight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight (kg)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="0"
                              step="0.5"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add additional details about this exercise..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowExerciseDialog(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding..." : "Add Exercise"}
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

export default ExercisePlanEditor;
