
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { BriefcaseBusiness} from 'lucide-react';


const Meteo: React.FC = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Meteo</h1>
      </div>
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card className="lg:max-w-md">
          <CardHeader className="space-y-0 pb-2">
            <CardDescription>Today</CardDescription>
            <CardContent className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-4xl font-bold">14°C</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-12"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                </svg>
            </CardContent>
          </CardHeader>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-sm font-medium">Broken Cloud</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-row gap-3 mt-4 font-medium text-foreground">
                <BriefcaseBusiness />
                <p> 31/07/2024</p>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1 ">
            <CardDescription>
              Over the past 7 days, you have walked{" "}
              <span className="font-medium text-foreground">53,305</span>{" "}
              steps.
            </CardDescription>
            <CardDescription>
              You need{" "}
              <span className="font-medium text-foreground">12,584</span>{" "}
              more steps to reach your goal.
            </CardDescription>
          </CardFooter>
        </Card>
        {/* Le contenu du deuxième Card semble incomplet, vous pouvez l'ajouter ici */}
      </div>
    </main>
  );
};

export default Meteo;
