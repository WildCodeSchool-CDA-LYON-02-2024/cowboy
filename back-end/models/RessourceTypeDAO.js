import AbstractDAO from './AbstractDAO.js';

class RessourceTypeDAO extends AbstractDAO {
  constructor() {
    super();
    this.table = 'resource_type';
  }

  insert(name) {
    return new Promise((resolve, reject) => {
      this.connection.execute(
        `INSERT INTO ${this.table} (name) VALUES (?)
        `,
        [name],
        (err, result, fields) => {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    });
  }
}

export default RessourceTypeDAO;
