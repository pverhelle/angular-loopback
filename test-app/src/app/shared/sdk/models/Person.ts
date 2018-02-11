/* tslint:disable */

declare var Object: any;
export interface PersonInterface {
  "name": string;
  "firstname": string;
  "username": string;
  "email": string;
  "id"?: number;
}

export class Person implements PersonInterface {
  "name": string;
  "firstname": string;
  "username": string;
  "email": string;
  "id": number;
  constructor(data?: PersonInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Person`.
   */
  public static getModelName() {
    return "Person";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Person for dynamic purposes.
  **/
  public static factory(data: PersonInterface): Person{
    return new Person(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Person',
      plural: 'People',
      path: 'People',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "firstname": {
          name: 'firstname',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
