export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error(`The humidity percentage is ${humidityPercentage} ! That's too high !`);
  }
}

export function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError(`The sensor is broken.`);
  } else if (temperature < 500) {
    return;
  }
    throw new OverheatingError(temperature);
}

export function monitorTheMachine({check, alertDeadSensor, alertOverheating, shutdown}) { 
  try { 
    check();
  } catch (error) {
    if (error instanceof ArgumentError) { 
      alertDeadSensor(); 
    } else if (error instanceof OverheatingError) {  
      if (error.temperature > 600) { shutdown(); 
      } else { alertOverheating() };
    } else {
      throw error;
    }
  }
}
