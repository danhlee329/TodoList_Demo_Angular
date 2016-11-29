let nextId = 0;

export class TodoItem {
  private _id: number;
  public _name: string;
  public _isComplete: boolean;

  constructor(name: string) {
      this._id = nextId++;
      this._name = name;
    }

    getID() {
      return this._id;
    }
    getName() {
      return this._name;
    }

    setName(name: string){
      this._name = name;
    }

    setCompleted(completed: boolean){
      this._isComplete = completed;
    }
}