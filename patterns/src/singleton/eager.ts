class EagerSingleton {
  static eagerinstance: EagerSingleton = new EagerSingleton();

  private constructor() {
    console.log("instance created");
  }

  public static getInstance(): EagerSingleton {
    return EagerSingleton.getInstance;
  }
}

const o12 = EagerSingleton.getInstance();
const o13 = EagerSingleton.getInstance();
