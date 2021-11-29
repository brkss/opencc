import { Connection, Repository } from "typeorm";
import { TimeEntity } from "../entities/Time.entity";

interface ICreateTime {
  type: string;
  time: Date;
  name: string;
}

export class TimeRepository {
  private _ormRepository: Repository<TimeEntity>;

  constructor(connection: Connection) {
    this._ormRepository = connection.getRepository(TimeEntity);
  }

  public async time(): Promise<TimeEntity[]> {
    return await this._ormRepository.find();
  }

  public async add({ time, name, type }: ICreateTime): Promise<boolean> {
    if (!time || !name || !type) return false;
    try {
      const timeRec = this._ormRepository.create({
        name: name,
        time: time,
        type: type,
      });
      await this._ormRepository.save(timeRec);
      return true;
    } catch (e) {
      console.log("Error accured while trying to create time setting ! ", e);
      return false;
    }
  }
}
