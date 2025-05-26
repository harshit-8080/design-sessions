export class Account {
  accountNumber: number;
  balance: number;

  constructor(accountNumber: number, initialbalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialbalance;
  }

  withDraw(amount: number): void {
    if (amount > this.balance) {
      throw Error("insuffiecent balance ");
    } else {
      this.balance -= amount;
      console.log(
        `WithDraw Rs. ${amount} and updated balance : ${this.balance}`,
      );
    }
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposit Rs. ${amount} and updated balance : ${this.balance}`);
  }

  getBalance(): number {
    return this.balance;
  }
}
