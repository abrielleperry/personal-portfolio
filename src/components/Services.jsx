import React from "react";
import servicesData from "../servicesData.json";
import Devices from "@mui/icons-material/Devices";
import Storage from "@mui/icons-material/Devices";
import DatasetLinked from "@mui/icons-material/DatasetLinked";
import Api from "@mui/icons-material/Api";
import Speed from "@mui/icons-material/Speed";
import Brush from "@mui/icons-material/Brush";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Security from "@mui/icons-material/Security";

const iconMapping = {
  Devices: <Devices />,
  Storage: <Storage />,
  DatasetLinked: <DatasetLinked />,
  Api: <Api />,
  Speed: <Speed />,
  Brush: <Brush />,
  TrendingUp: <TrendingUp />,
  Security: <Security />,
};

export default function Services() {
  return (
    <div className="flex flex-col justify-center p-8">
      <h2 className="font-publicSans uppercase text-lg font-semibold tracking-widest mb-4">
        Services
      </h2>
      <p className="font-dmSerifDisplay text-5xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-12 md:space-y-0">
            {servicesData.map((service, index) => {
              return (
                <div key={index} className="service-item text-center">
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    {" "}
                    {iconMapping[service.icon]}
                  </div>
                  <h3 className="mb-2 text-lg font-bold dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
