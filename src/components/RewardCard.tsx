
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface RewardCardProps {
  title: string;
  description: string;
  tokenAmount: number;
  progress?: number;
  claimable: boolean;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}

const RewardCard = ({
  title,
  description,
  tokenAmount,
  progress = 100,
  claimable,
  category,
  difficulty,
}: RewardCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "hard":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <Badge className="bg-strk-purple">{category}</Badge>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <div className="flex items-center">
            <Badge className={getDifficultyColor()}>{difficulty}</Badge>
          </div>
        </div>

        <p className="mt-2 text-muted-foreground text-sm">{description}</p>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>
      
      <CardFooter className="bg-muted/50 px-6 py-4 flex items-center justify-between">
        <div className="font-semibold">
          <span className="text-strk-purple-dark">{tokenAmount}</span>
          <span className="text-sm text-muted-foreground ml-1">STRK</span>
        </div>
        <Button 
          disabled={!claimable} 
          className={claimable ? "bg-strk-teal hover:bg-strk-teal-dark" : "bg-muted"}
        >
          {claimable ? "Claim Reward" : "In Progress"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RewardCard;
