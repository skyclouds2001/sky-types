export type Awaitable<P> = P extends Promise<infer A> ? A : P

export type Promisify<A> = A extends Promise<infer _> ? A : Promise<A>

export type NonNullable<T> = T & {}

export type Exclude<T, U> = T extends U ? never : T

export type Extract<T, U> = T extends U ? T : never
