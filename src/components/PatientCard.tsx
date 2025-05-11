
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PatientCardProps {
  name: string;
  id: string;
  lastReading: string;
  lastReadingValue: string;
  riskLevel: "low" | "medium" | "high";
  nextAppointment?: string;
  adherenceScore: number;
  className?: string;
}

const PatientCard = ({
  name,
  id,
  lastReading,
  lastReadingValue,
  riskLevel,
  nextAppointment,
  adherenceScore,
  className,
}: PatientCardProps) => {
  const getRiskBadge = () => {
    if (riskLevel === "high") {
      return <Badge className="bg-red-500">High Risk</Badge>;
    } else if (riskLevel === "medium") {
      return <Badge className="bg-yellow-500">Medium Risk</Badge>;
    } else {
      return <Badge className="bg-green-500">Low Risk</Badge>;
    }
  };

  const getAdherenceColor = () => {
    if (adherenceScore >= 80) {
      return "text-green-500";
    } else if (adherenceScore >= 60) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  return (
    <Card className={cn("overflow-hidden hover:shadow-md transition-shadow", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">ID: {id}</p>
          </div>
          {getRiskBadge()}
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last Reading:</span>
            <span>{lastReading}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Blood Glucose:</span>
            <span className="font-medium">{lastReadingValue}</span>
          </div>
          {nextAppointment && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Next Appointment:</span>
              <span>{nextAppointment}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Treatment Adherence:</span>
            <span className={cn("font-medium", getAdherenceColor())}>{adherenceScore}%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 px-6 py-3 flex justify-between">
        <Button variant="outline" size="sm">View History</Button>
        <Button className="bg-strk-teal hover:bg-strk-teal-dark" size="sm">Send Message</Button>
      </CardFooter>
    </Card>
  );
};

export default PatientCard;
