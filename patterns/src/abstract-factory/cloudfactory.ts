import {
  AWS_DynamoDB,
  AWS_EC2,
  AWS_S3,
  AZURE_Blob,
  AZURE_Cosmos,
  AZURE_VM,
  ICompute,
  IDatabase,
  IStorage,
} from "./Iservice";

export interface Cloudfactory {
  createStorage(): IStorage;
  createCompute(): ICompute;
  createDatabase(): IDatabase;
}

export class AWSFactory implements Cloudfactory {
  createStorage(): IStorage {
    return new AWS_S3();
  }

  createCompute(): ICompute {
    return new AWS_EC2();
  }

  createDatabase(): IDatabase {
    return new AWS_DynamoDB();
  }
}

export class AzureFactory implements Cloudfactory {
  createStorage(): IStorage {
    return new AZURE_Blob();
  }
  createCompute(): ICompute {
    return new AZURE_VM();
  }
  createDatabase(): IDatabase {
    return new AZURE_Cosmos();
  }
}
