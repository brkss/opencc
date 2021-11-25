import { Connection, Repository } from "typeorm";
import { Record } from "../entities/Record.entity";

interface ICreateRecord {
  value: string;
  label: string;
  syncd?: boolean;
}

/*
interface ICreateRecordResponse {
  status: boolean;
  message?: string;
  record?:
}
*/
export class RecordRepository {
  private _ormRepository: Repository<Record>;

  constructor(connection: Connection) {
    this._ormRepository = connection.getRepository(Record);
  }

  public async getAll(): Promise<Record[]> {
    return await this._ormRepository.find();
  }

  public async createRecord({ value, label }: ICreateRecord): Promise<Boolean> {
    if (!value || !label) return false;
    try {
      const record = this._ormRepository.create({
        label: label,
        value: value,
        syncd: false,
      });
      await this._ormRepository.save(record);
      return true;
    } catch (e) {
      console.log("Something went wrong creating new record ! \n", e);
      return false;
    }
  }

  public async deleteRecord(id: string): Promise<boolean> {
    try {
      await this._ormRepository.delete(id);
      return true;
    } catch (e) {
      console.log(`error accured while trying to delete this record ${id}`);
      return false;
    }
  }
}
