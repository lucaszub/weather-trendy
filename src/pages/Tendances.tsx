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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
            <Label htmlFor="subcategory">Votre Département</Label>
            <Select>
              <SelectTrigger
                id="Votre Département"
                aria-label="Votre Département"
                className="border border-gray-300 rounded-lg"
              >
                <SelectValue placeholder="Votre Département" />
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
                Température Maximal 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24°C</div>
              
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Température Minimum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8°C</div>
              
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Température Moyenne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14°C</div>
              
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Précipitation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">223 mm</div>
             
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
