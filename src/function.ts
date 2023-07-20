export type Function = (...args: any[]) => any

export type Constructor = abstract new (...args: any[]) => any

export type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

export type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any

export type ConstructorParameters<T extends abstract new (...args: any[]) => any> = T extends abstract new (...args: infer P) => any ? P : never

export type InstanceType<T extends abstract new (...args: any[]) => any> = T extends abstract new (...args: any[]) => infer R ? R : any
