interface IDataService {
  getUserData(query: string): string;
}

class APIService implements IDataService {
  getUserData(query: string): string {
    const user = query + "_data"; // harshit_data

    return user;
  }
}

class CachingProxy implements IDataService {
  private cache: Map<string, string> = new Map();
  constructor(private apiService: APIService) {}

  getUserData(query: string): string {
    if (this.cache.has(query)) {
      console.log("Cache hit. Return data from cache");
      return this.cache.get(query);
    }

    console.log("cache miss. Fetching from DB");
    const user = this.apiService.getUserData(query);
    this.cache.set(query, user);
    return user;
  }
}

const query = new CachingProxy(new APIService());
console.log(query.getUserData("harshit"));
console.log(query.getUserData("harshit"));

console.log("============");
console.log(query.getUserData("ayush"));
console.log(query.getUserData("ayush"));
console.log(query.getUserData("ayush"));
