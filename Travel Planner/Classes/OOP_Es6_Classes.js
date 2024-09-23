class Trip {
  #destination;
  #duration;
  #distance;
  #activites;

  constructor(destination, duration, distance) {
    this.#destination = destination;
    this.#duration = duration;
    this.#distance = distance;
    this.#activites = [];
  }

  get destination() {
    return this.#destination;
  }

  get duration() {
    return this.#duration;
  }

  get distance() {
    return this.#distance;
  }

  set destination(des) {
    if (typeof des !== "string") {
      console.error("Destination must be string!");
      return;
    }

    if (des.length === 0) {
      console.error("Destination must not be empty!");
      return;
    }

    this.#destination = des;
    console.log(`The new destination is: ${this.#destination}`);
  }

  set duration(dur) {
    if (!Number.isInteger(dur) && dur <= 0) {
      console.error("Duration must be positive number only");
    }

    this.#duration = dur;
    console.log(`The new duration is: ${this.#duration}`);
  }

  set distance(dis) {
    if (!Number.isInteger(dur) && dur <= 0) {
      console.error("Distance must be positive number only");
    }

    this.#distance = dis;
    console.log(`The new distance is: ${this.#distance}`);
  }
}
