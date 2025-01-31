//FlexCalendar

class Address {
    zipCode: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    number: string;
    complement: string;
}

class Service {
    name: string;
    value: number;
    description: string;
    photos: string[];
    duration: number;
    products: Product[];
    comments: Commentary[];
    company: Company;
    isActive: boolean;
}

class Product {
    name: string;
    description: string;
    value: number;
    coments: Commentary;
    isActive: boolean;
}

class Commentary {
    text: string;
    network: string;
    client: Client;
    isActive: boolean;
}

class Calendar {
    date: string;
    time: string;
    client: Client;
    services: Service[];
    isActive: boolean;
}
class Company {
    name: string;
    address: Address;
    document: string;
    startCalendar: string;
    endCalendar: string;
    isActive: boolean;
}

//FleAccounts
//FlexTasks
