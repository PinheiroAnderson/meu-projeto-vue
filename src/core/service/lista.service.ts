import { Service } from "../domain/Service";
import { getService as getServiceFromRepository } from "../infra/service.repository";

export const listaService = {
    getService,
};

function getService(id: string): Service | undefined {
    return getServiceFromRepository(id);
}
