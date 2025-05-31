class Singleton {
  static instance: Singleton;
  private constructor() {
    console.log("instance created");
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

const o1 = Singleton.getInstance();

const o2 = Singleton.getInstance();

console.log(o1 == o2);
