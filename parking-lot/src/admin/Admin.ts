export class Admin {
  constructor(public adminId: string) {}

  notification(message: string) {
    console.log(message);
  }
}
