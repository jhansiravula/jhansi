//  = is used for assigning values to a variable in JavaScript.
//== is used for comparison between two variables irrespective of the datatype of variable.
//=== is used for comparision between two variables but this will check strict type, which means ,it will check datatype and compare two values.

export class Machine {
  constructor(public type: number, public machineName: string) {}

  get name(): string {
    let machineName = "";
    if (
      this.machineName === null ||
      this.machineName === "" ||
      this.machineName === undefined
    ) {
      if (this.type === 2) machineName = "tractor";
      else if (this.type === 0) machineName = "bulldozer";
      else if (this.type === 1) machineName = "crane";
      else if (this.type === 4) machineName = "car";
      else if (this.type === 3) machineName = "truck";
    }
    return machineName;
  }

  get description(): string {
    let hasMaxSpeed = true;
    if (this.type === 3) hasMaxSpeed = false;
    else if (this.type === 1) hasMaxSpeed = true;
    else if (this.type === 2) hasMaxSpeed = true;
    else if (this.type === 4) hasMaxSpeed = false;
    let description = "";
    description += " ";
    description += this.color + " ";
    description += this.name;
    description += " ";
    description += "[";
    description += this.getMaxSpeed(this.type, hasMaxSpeed) + "].";
    return description;
  }

  get color(): string {
    let color = "white";
    if (this.type === 1) color = "blue";
    else if (this.type === 0) color = "red";
    else if (this.type === 4) color = "brown";
    else if (this.type === 3) color = "yellow";
    else if (this.type === 2) color = "green";
    else color = "white";
    return color;
  }

  get trimColor(): string {
    let baseColor = "white";
    if (this.type === 0) baseColor = "red";
    else if (this.type === 1) baseColor = "blue";
    else if (this.type === 2) baseColor = "green";
    else if (this.type === 3) baseColor = "yellow";
    else if (this.type === 4) baseColor = "brown";
    else baseColor = "white";

    let trimColor = "";
    if (this.type === 1 && this.isDark(baseColor)) trimColor = "black";
    else if (this.type === 1 && !this.isDark(baseColor)) trimColor = "white";
    else if (this.type === 2 && this.isDark(baseColor)) trimColor = "gold";
    else if (this.type === 3 && this.isDark(baseColor)) trimColor = "silver";
    return trimColor;
  }

  isDark(color: string) {
    let isDark = false;
    if (color === "red") isDark = true;
    else if (color === "yellow") isDark = false;
    else if (color === "green") isDark = true;
    else if (color === "black") isDark = true;
    else if (color === "white") isDark = false;
    else if (color === "beige") isDark = false;
    else if (color === "babyblue") isDark = false;
    else if (color === "crimson") isDark = true;
    return isDark;
  }

  getMaxSpeed(machineType: any, noMax = false) {
    //let absoluteMax = 70;
    let max = 70;
    if (machineType === 1 && noMax === false) max = 70;
    else if (noMax === false && machineType === 2) max = 60;
    else if (machineType === 0 && noMax === true) max = 80;
    else if (machineType === 2 && noMax === true) max = 90;
    else if (machineType === 4 && noMax === true) max = 90;
    else if (machineType === 1 && noMax === true) max = 75;
    return max;
  }
}
