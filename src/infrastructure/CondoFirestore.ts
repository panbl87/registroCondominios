import Condo from '../domain/objects/Condo';
import CondoRepository from '../domain/repositories/CondoRepository';
import { db } from '../firebase';

export default class CondoFirestore implements CondoRepository {
  private collection = 'community';
  private collectionRef = db.collection(this.collection);

  public async saveData(data: Condo): Promise<Condo> {
    try {
      const result = await this.collectionRef.add(data);
      return { uid: result.id, ...data } as Condo;
    } catch (error) {
      throw new Error(error);
    }
  }
}
