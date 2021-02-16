import {Login} from '../models/login';

export class InterfaceUtil{
  static getEmptyLoginInterface(): Login{
    return {
      email: '',
      password: ''
    };
  }
}
