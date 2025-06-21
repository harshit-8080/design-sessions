interface IMember {
  showDetails(): void;
}

class Files implements IMember {
  constructor(private fileName: string) {}

  public showDetails() {
    console.log("FIle name: ", this.fileName);
  }
}

class Folder implements IMember {
  private members: IMember[] = []; // files || folder

  constructor(private folderName: string) {}

  addMember(newMember: IMember) {
    this.members.push(newMember);
  }

  showDetails(): void {
    // console.log(this.members);
    console.log("Folder Name: ", this.folderName);
    this.members.forEach((member) => {
      member.showDetails(); // runtime poly.........
    });
  }
}

const userController = new Files("userController.js");
const userModel = new Files("userModel.js");
const userService = new Files("userService.ts");

const controller = new Folder("controller");

const service = new Folder("service");
service.addMember(userService);

const model = new Folder("models");

controller.addMember(userController);
controller.addMember(service);
model.addMember(userModel);

const src = new Folder("src");

src.addMember(controller);
src.addMember(model);

src.showDetails();
