export class Usersignup {

  id: number;
  userName: string;
  email: string;
  gender: string;
  terms: boolean;
  isAdmin: boolean;
    // Both the passwords are in a single object
    password: {
      pwd: string;
      confirmPwd: string;
 };
constructor(values: Object = {}) {
// Constructor initialization
      Object.assign(this, values);
  }
}

