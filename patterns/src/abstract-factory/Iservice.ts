export interface IStorage {
  save(): void;
}

export interface ICompute {
  start(): void;
}

export interface IDatabase {
  query(): void;
}

export class AWS_S3 implements IStorage {
  save(): void {
    console.log("AWS s3 saving....");
  }
}

export class AWS_EC2 implements ICompute {
  start(): void {
    console.log("AWS EC2 starting....");
  }
}

export class AWS_DynamoDB implements IDatabase {
  query(): void {
    console.log("AWS DynamoDB querying....");
  }
}

/// for azure......

export class AZURE_Blob implements IStorage {
  save(): void {
    console.log("Azure blob saving....");
  }
}

export class AZURE_VM implements ICompute {
  start(): void {
    console.log("Azure VM starting....");
  }
}

export class AZURE_Cosmos implements IDatabase {
  query(): void {
    console.log("Azure Cosmos querying....");
  }
}
