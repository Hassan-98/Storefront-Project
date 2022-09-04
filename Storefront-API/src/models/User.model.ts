import bcrypt from 'bcrypt';
import database from '../configs/db.config';
import generateToken from '../utils/generateToken';

import { User as IUser } from '../types/User.interface';

const { BCRYPT_SECRET, BCRYPT_SALT } = process.env;

export default class User {
  // get all users
  async getUsers(): Promise<IUser[]> {
    try {
      const connection = await database.connect();
      const sql: string = `SELECT * FROM users`;
      const result = await connection.query(sql);
      connection.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not get all users. Error: ${err}`);
    }
  }

  // get user by id
  async getUserById(userId: number): Promise<IUser> {
    try {
      const connection = await database.connect();
      const sql: string = `SELECT * FROM users WHERE id = $1`;
      const result = await connection.query(sql, [userId]);
      connection.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get user by id. Error: ${err}`);
    }
  }

  // create a new user
  async createUser(user: IUser): Promise<IUser> {
    try {
      const { firstname, lastname, password } = user;

      const hashedPassword: string = bcrypt.hashSync(
        password + BCRYPT_SECRET,
        parseInt(BCRYPT_SALT as string)
      );

      const connection = await database.connect();
      const sql = `INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`;
      const result = await connection.query(sql, [
        firstname,
        lastname,
        hashedPassword,
      ]);
      connection.release();

      const token: string = generateToken(result.rows[0].id as number);

      const createdUser = { ...result.rows[0], token };

      return createdUser;
    } catch (err) {
      throw new Error(`Could not create user. Error: ${err}`);
    }
  }

  async authenticate(user: {
    firstname: string;
    lastname: string;
    password: string;
  }): Promise<IUser> {
    try {
      const { firstname, lastname, password } = user;

      const connection = await database.connect();
      const sql: string = `SELECT * FROM users WHERE firstname=$1 AND lastname=$2`;
      const result = await connection.query(sql, [firstname, lastname]);
      connection.release();

      let User = result.rows[0];

      if (!User) throw new Error('User is not found');

      const isPasswordMatch = bcrypt.compareSync(
        password + BCRYPT_SECRET,
        User.password
      );

      if (!isPasswordMatch) throw new Error('Password is invalid');

      const token: string = generateToken(User.id as number);

      User = { ...User, token };

      return User;
    } catch (err) {
      throw new Error(`Could not authenticate user. Error: ${err}`);
    }
  }

  // delete a user
  async deleteUser(id: number): Promise<IUser> {
    try {
      const sql: string = `DELETE FROM users WHERE id=$1 RETURNING *`;
      const connection = await database.connect();
      const result = await connection.query(sql, [id]);
      connection.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete user with id: ${id}. Error: ${err}`);
    }
  }
}
