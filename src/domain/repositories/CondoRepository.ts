import Condo from '../objects/Condo';

export default interface CondoRepository {
  saveData: (data: Condo) => Promise<Condo>;
}
