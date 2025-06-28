// fly-weight class
class TreeType {
  constructor(
    private type: string,
    private texture: string,
  ) {}
}

class Treefactory {
  private static treeTypeMap: Map<string, TreeType> = new Map();

  static getTreeType(type: string, texture: string) {
    if (this.treeTypeMap.has(type)) {
      return this.treeTypeMap.get(type);
    }
    this.treeTypeMap.set(type, new TreeType(type, texture));
    return this.treeTypeMap.get(type);
  }
}

class Tree {
  constructor(
    private x: number,
    private y: number,
    private treeType: TreeType,
  ) {}
}

let forest: Tree[] = [];

for (let i = 0; i < 4; i++) {
  const mangoType = Treefactory.getTreeType("Mango", "mango.png"); // imp....
  forest.push(
    new Tree(
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      mangoType,
    ),
  );
}

console.log(forest);
