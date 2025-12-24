type Primitive = string | boolean | number;

export function main(value: Primitive) {
    if (typeof value === "string") {
        return;
    }
    if (typeof value === "boolean") {
        return;
    }
}

enum TrafficLightType {
    Red,
    Yellow,
    Green
}

interface RedColor {
    type: TrafficLightType.Red
    stop(): void;
}

interface YellowColor {
    type: TrafficLightType.Yellow
    wait(): void;
}

interface GreenColor {
    type: TrafficLightType.Green
    drive(): void;
}

type TrafficLight = RedColor | YellowColor | GreenColor

const trafficlight: TrafficLight = {
    type: TrafficLightType.Red,
    stop() {
       
    },
}

type FindItemPredicate = (number) | ( (value: string, index: number) => boolean );
function finditem(array: string[], predicate: FindItemPredicate) {
    if (typeof predicate === "number") {
        return array[predicate];
    } else {
        return array.find(predicate);
    }
}