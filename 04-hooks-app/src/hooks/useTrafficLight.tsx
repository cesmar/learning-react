import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColors = keyof typeof colors;

export default function useTrafficLight() {
  const [light, setLight] = useState<TrafficLightColors>("red");
  const [countdown, setCountdown] = useState(5);

  //Countdown effect
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  //Change light color effect
  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === "red") {
      setLight("green");
      return;
    }
    if (light === "green") {
      setLight("yellow");
      return;
    }
    if (light === "yellow") {
      setLight("red");
      return;
    }
  }, [countdown, light]);

  return {
    //Properties
    countdown,
    // light,
    // colors,

    //Computed
    // percentage: 0
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors[light] : "bg-gray-500",
    redLight: light === "red" ? colors[light] : "bg-gray-500",
    yellowLight: light === "yellow" ? colors[light] : "bg-gray-500",

    //Methods / Actions
    //
  };
}
