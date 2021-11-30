import { Connection, Repository } from "typeorm";
import { TimeEntity } from "../entities";

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

  public async time(type: string): Promise<TimeEntity[]> {
    return await this._ormRepository.find({ where: { type: type } });
  }

  public async add({ time, name, type }: ICreateTime): Promise<boolean> {
    if (!time || !name || !type) return false;
    try {
      // because only one background insulin time should exesit ! for now atleast
      await this._ormRepository.delete({ type: type });
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

  public async meals(): Promise<TimeEntity[] | []> {
    try {
      const meals = await this._ormRepository
        .createQueryBuilder("times")
        .where("times.type like :type", { type: "MEAL_%" })
        .getMany();
      return meals;
    } catch (e) {
      console.log("Something went wrong finding meal ! ERR : ", e);
      return [];
    }
  }
}
