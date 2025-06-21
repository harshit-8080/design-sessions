import { builtinModules } from "module";

class Customerrr {
  private name: string;
  private age: number;
  private address: string;
  private city: string;
  private country: string;

  private constructor(builder) {
    this.name = builder.name;
    this.age = builder.age;
    this.address = builder.address;
    this.city = builder.city;
    this.country = builder.country;
  }

  public showDetails() {
    console.log(this);
  }

  static Builder = class {
    private name: string;
    private age: number;
    private address: string;
    private city: string;
    private country: string;

    setName(name: string) {
      this.name = name;
      return this;
    }
    setAge(age: number) {
      this.age = age;
      return this;
    }
    setAddress(address: string) {
      this.address = address;
      return this;
    }
    setCity(city: string) {
      this.city = city;
      return this;
    }
    setCountry(country: string) {
      this.country = country;
      return this;
    }

    buid(): Customerrr {
      return new Customerrr(this);
    }
  };
}

// const harshit_Builder = new Customerrr.Builder();
// harshit_Builder.setName("Harshit");
// harshit_Builder.setAge(20);
// harshit_Builder.setCity("Hyd");
// harshit_Builder.setAddress("hi tech");
// harshit_Builder.setCountry("India");

// const harshit_customerr = harshit_Builder.buid();

// console.log(harshit_customerr);

const harshit_customer = new Customerrr.Builder()
  .setName("harshit")
  .setAge(20)
  .setCity("hyd")
  .setCountry("india")
  .setAddress("Hi tech")
  .buid();

console.log(harshit_customer);
