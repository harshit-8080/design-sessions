import { AWSFactory, AzureFactory, Cloudfactory } from "./cloudfactory";

let provider = "azure";

let factory: Cloudfactory;

if (provider == "aws") {
  factory = new AWSFactory();
} else {
  factory = new AzureFactory();
}

function runCloudJob(factory: Cloudfactory) {
  let storage = factory.createStorage();
  let compute = factory.createCompute();
  let database = factory.createDatabase();

  storage.save();
  compute.start();
  database.query();
}

runCloudJob(factory);
