"use strict"

export class Coord{
  constructor(line, column){
      this.line = line;
      this.column = column;
  }

  line(){
    return this.line;
  }

  column(){
    return this.column;
  }
}
