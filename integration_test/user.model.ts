interface IUser {
    id: number,
    name: string,
}

export class User {
    static async findAll () : Promise<IUser[]> {
        throw new Error("This should be stubbed in tests");
    }

    static async findOne (id: number) : Promise<IUser> {
        throw new Error("This should be stubbed in tests");
    }
}