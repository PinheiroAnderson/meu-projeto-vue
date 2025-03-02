import { Service } from "../domain/Service";
import services from "../mocks/service.json";

export function getService(id: string): Service | undefined {
    const jsonService = services.find(service => service.id === id);
    return jsonService ? new Service(jsonService) : undefined;
}
