interface IPrototype<T> {
  clone(): T;
}

// class DocumentTemplate implements IPrototype<DocumentTemplate> {
//   clone(): DocumentTemplate {
//     return new DocumentTemplate();
//   }
// }

class ResumeTemplate implements IPrototype<ResumeTemplate> {
  constructor(
    private templateName: string,
    private skills: string[],
    private roles: string[],
  ) {}

  addSkills(newSkills: string) {
    this.skills.push(newSkills);
  }
  addRoles(newRoles: string) {
    this.roles.push(newRoles);
  }

  clone(): ResumeTemplate {
    // deep copyy.......
    return structuredClone(
      new ResumeTemplate(this.templateName, this.skills, this.roles),
    );
  }
}

const dev_template = new ResumeTemplate(
  "Developer",
  ["programming", "DSA"],
  ["software developer", "SDE"],
);

const tester_template = new ResumeTemplate(
  "Testing",
  ["Automation", "Manual"],
  ["software testing", "SDET"],
);

const hr_template = new ResumeTemplate("HR", ["TA", "Payroll"], ["TA"]);

const harshit_dev = dev_template.clone();
harshit_dev.addSkills("Java");
harshit_dev.addSkills("Javascript");
harshit_dev.addSkills("node");

const ayush_tester = tester_template.clone();
ayush_tester.addSkills("selenium");

console.log(harshit_dev);
console.log(ayush_tester);
