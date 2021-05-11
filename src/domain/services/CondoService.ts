import Condo from '../objects/Condo';
import CondoRepository from '../repositories/CondoRepository';

export const saveDataService = (repository: CondoRepository) => async (
  data: Condo
): Promise<Condo> => {
  try {
    const result = await repository.saveData(data);
    return result as Condo;
  } catch (error) {
    throw new Error(error);
  }
};
