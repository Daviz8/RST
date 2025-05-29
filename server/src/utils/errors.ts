export class BadRequest extends Error {
    constructor(message: string) {
      super(message);
      this.name = "BadRequest";
    }
  }


  export interface AppValidationError {
    [key: string]: string;
  }
  
  