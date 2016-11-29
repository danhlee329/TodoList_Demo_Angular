let nextId = 1;

export class TodoItem {
  private _id: number;
  public Name: string;
  public IsComplete: boolean;

  constructor(name: string) {
      this._id = nextId++;
      this.Name = name;
    }

    getID() {
      return this._id;
    }

    setName(name: string){
      this.Name = name;
    }

    // setCompleted(completed: boolean){
    //   this.IsComplete = completed;
    // }
}