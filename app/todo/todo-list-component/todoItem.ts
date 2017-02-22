let nextId = 1;

export class TodoItem {
  private _id: number;
  public Name: string;
  private CreatedDate: Date;
  public Priority: Number = 0;
  public IsComplete: boolean;

  constructor(name: string) {
      this._id = nextId++;
      this.Name = name;
      this.CreatedDate = new Date();
    }

    getID() {
      return this._id;
    }

    getCreatedDate(){
      return this.CreatedDate;
    }

    setName(name: string){
      this.Name = name;
    }
}