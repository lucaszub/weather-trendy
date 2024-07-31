import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import DatePicker from "@/components/DatePicker";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import {Component} from "../components/AreChart"
import { Chart } from "@/components/Chart";

const Tendances: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log('Date sélectionnée:', date);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Les tendances</h1>
      </div>
      <div className="flex flex-1 flex-col rounded-lg border border-dashed shadow-sm p-4">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 mx-auto">
          <div className="flex flex-col gap-y-2 lg:gap-y-1">
            <Label htmlFor="region">Votre Régions</Label>
            <Select>
              <SelectTrigger
                id="region"
                aria-label="Séléctionner votre Régions"
                className="border border-gray-300 rounded-lg"
              >
                <SelectValue placeholder="Pays de la Loire" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pays de la loire">Pays de la loire</SelectItem>
                <SelectItem value="Ile de France">Ile de France</SelectItem>
                <SelectItem value="Bretagne">Bretagne</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-1">
            <Label htmlFor="subcategory">Subcategory (optional)</Label>
            <Select>
              <SelectTrigger
                id="subcategory"
                aria-label="Select subcategory"
                className="border border-gray-300 rounded-lg"
              >
                <SelectValue placeholder="Select subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="t-shirts">T-Shirts</SelectItem>
                <SelectItem value="hoodies">Hoodies</SelectItem>
                <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-1">
            <Label htmlFor="start-date">Date de début</Label>
            <DatePicker
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-1">
            <Label htmlFor="end-date">Date de fin</Label>
            <DatePicker
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-3 mt-10">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mb-3 mt-5">
          
          <Chart />
          <Component />
          
        </div>
      </div>
    </main>
  );
};

export default Tendances;
