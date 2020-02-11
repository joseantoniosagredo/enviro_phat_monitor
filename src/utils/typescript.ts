export interface Callback<T = any, E extends Error = Error> {
    //(err: null, result: T): void
    //(err: E): void
    (err: null | E, result?: T): void
}