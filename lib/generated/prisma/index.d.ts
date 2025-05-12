
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Contacto
 * 
 */
export type Contacto = $Result.DefaultSelection<Prisma.$ContactoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Contactos
 * const contactos = await prisma.contacto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Contactos
   * const contactos = await prisma.contacto.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contacto`: Exposes CRUD operations for the **Contacto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactos
    * const contactos = await prisma.contacto.findMany()
    * ```
    */
  get contacto(): Prisma.ContactoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Contacto: 'Contacto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contacto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Contacto: {
        payload: Prisma.$ContactoPayload<ExtArgs>
        fields: Prisma.ContactoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          findFirst: {
            args: Prisma.ContactoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          findMany: {
            args: Prisma.ContactoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          create: {
            args: Prisma.ContactoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          createMany: {
            args: Prisma.ContactoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          delete: {
            args: Prisma.ContactoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          update: {
            args: Prisma.ContactoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          deleteMany: {
            args: Prisma.ContactoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          upsert: {
            args: Prisma.ContactoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          aggregate: {
            args: Prisma.ContactoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacto>
          }
          groupBy: {
            args: Prisma.ContactoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    contacto?: ContactoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Contacto
   */

  export type AggregateContacto = {
    _count: ContactoCountAggregateOutputType | null
    _avg: ContactoAvgAggregateOutputType | null
    _sum: ContactoSumAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  export type ContactoAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactoSumAggregateOutputType = {
    id: number | null
  }

  export type ContactoMinAggregateOutputType = {
    id: number | null
    esCliente: string | null
    nombre: string | null
    empresa: string | null
    cuit: string | null
    domicilio: string | null
    telefono: string | null
    celular: string | null
    email: string | null
    localidad: string | null
    provincia: string | null
    horario_desde: string | null
    horario_hasta: string | null
    tipo_comercializacion: string | null
    clave: string | null
    ofertas_diarias: boolean | null
    nuevos_embarques: boolean | null
    contactar_representante: string | null
    comentarios: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactoMaxAggregateOutputType = {
    id: number | null
    esCliente: string | null
    nombre: string | null
    empresa: string | null
    cuit: string | null
    domicilio: string | null
    telefono: string | null
    celular: string | null
    email: string | null
    localidad: string | null
    provincia: string | null
    horario_desde: string | null
    horario_hasta: string | null
    tipo_comercializacion: string | null
    clave: string | null
    ofertas_diarias: boolean | null
    nuevos_embarques: boolean | null
    contactar_representante: string | null
    comentarios: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactoCountAggregateOutputType = {
    id: number
    esCliente: number
    nombre: number
    empresa: number
    cuit: number
    domicilio: number
    telefono: number
    celular: number
    email: number
    localidad: number
    provincia: number
    horario_desde: number
    horario_hasta: number
    tipo_comercializacion: number
    clave: number
    ofertas_diarias: number
    nuevos_embarques: number
    contactar_representante: number
    comentarios: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactoAvgAggregateInputType = {
    id?: true
  }

  export type ContactoSumAggregateInputType = {
    id?: true
  }

  export type ContactoMinAggregateInputType = {
    id?: true
    esCliente?: true
    nombre?: true
    empresa?: true
    cuit?: true
    domicilio?: true
    telefono?: true
    celular?: true
    email?: true
    localidad?: true
    provincia?: true
    horario_desde?: true
    horario_hasta?: true
    tipo_comercializacion?: true
    clave?: true
    ofertas_diarias?: true
    nuevos_embarques?: true
    contactar_representante?: true
    comentarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactoMaxAggregateInputType = {
    id?: true
    esCliente?: true
    nombre?: true
    empresa?: true
    cuit?: true
    domicilio?: true
    telefono?: true
    celular?: true
    email?: true
    localidad?: true
    provincia?: true
    horario_desde?: true
    horario_hasta?: true
    tipo_comercializacion?: true
    clave?: true
    ofertas_diarias?: true
    nuevos_embarques?: true
    contactar_representante?: true
    comentarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactoCountAggregateInputType = {
    id?: true
    esCliente?: true
    nombre?: true
    empresa?: true
    cuit?: true
    domicilio?: true
    telefono?: true
    celular?: true
    email?: true
    localidad?: true
    provincia?: true
    horario_desde?: true
    horario_hasta?: true
    tipo_comercializacion?: true
    clave?: true
    ofertas_diarias?: true
    nuevos_embarques?: true
    contactar_representante?: true
    comentarios?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacto to aggregate.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contactos
    **/
    _count?: true | ContactoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactoMaxAggregateInputType
  }

  export type GetContactoAggregateType<T extends ContactoAggregateArgs> = {
        [P in keyof T & keyof AggregateContacto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacto[P]>
      : GetScalarType<T[P], AggregateContacto[P]>
  }




  export type ContactoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoWhereInput
    orderBy?: ContactoOrderByWithAggregationInput | ContactoOrderByWithAggregationInput[]
    by: ContactoScalarFieldEnum[] | ContactoScalarFieldEnum
    having?: ContactoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactoCountAggregateInputType | true
    _avg?: ContactoAvgAggregateInputType
    _sum?: ContactoSumAggregateInputType
    _min?: ContactoMinAggregateInputType
    _max?: ContactoMaxAggregateInputType
  }

  export type ContactoGroupByOutputType = {
    id: number
    esCliente: string
    nombre: string
    empresa: string
    cuit: string
    domicilio: string
    telefono: string
    celular: string
    email: string
    localidad: string
    provincia: string
    horario_desde: string
    horario_hasta: string
    tipo_comercializacion: string
    clave: string
    ofertas_diarias: boolean
    nuevos_embarques: boolean
    contactar_representante: string
    comentarios: string
    createdAt: Date
    updatedAt: Date
    _count: ContactoCountAggregateOutputType | null
    _avg: ContactoAvgAggregateOutputType | null
    _sum: ContactoSumAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  type GetContactoGroupByPayload<T extends ContactoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactoGroupByOutputType[P]>
        }
      >
    >


  export type ContactoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    esCliente?: boolean
    nombre?: boolean
    empresa?: boolean
    cuit?: boolean
    domicilio?: boolean
    telefono?: boolean
    celular?: boolean
    email?: boolean
    localidad?: boolean
    provincia?: boolean
    horario_desde?: boolean
    horario_hasta?: boolean
    tipo_comercializacion?: boolean
    clave?: boolean
    ofertas_diarias?: boolean
    nuevos_embarques?: boolean
    contactar_representante?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    esCliente?: boolean
    nombre?: boolean
    empresa?: boolean
    cuit?: boolean
    domicilio?: boolean
    telefono?: boolean
    celular?: boolean
    email?: boolean
    localidad?: boolean
    provincia?: boolean
    horario_desde?: boolean
    horario_hasta?: boolean
    tipo_comercializacion?: boolean
    clave?: boolean
    ofertas_diarias?: boolean
    nuevos_embarques?: boolean
    contactar_representante?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    esCliente?: boolean
    nombre?: boolean
    empresa?: boolean
    cuit?: boolean
    domicilio?: boolean
    telefono?: boolean
    celular?: boolean
    email?: boolean
    localidad?: boolean
    provincia?: boolean
    horario_desde?: boolean
    horario_hasta?: boolean
    tipo_comercializacion?: boolean
    clave?: boolean
    ofertas_diarias?: boolean
    nuevos_embarques?: boolean
    contactar_representante?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectScalar = {
    id?: boolean
    esCliente?: boolean
    nombre?: boolean
    empresa?: boolean
    cuit?: boolean
    domicilio?: boolean
    telefono?: boolean
    celular?: boolean
    email?: boolean
    localidad?: boolean
    provincia?: boolean
    horario_desde?: boolean
    horario_hasta?: boolean
    tipo_comercializacion?: boolean
    clave?: boolean
    ofertas_diarias?: boolean
    nuevos_embarques?: boolean
    contactar_representante?: boolean
    comentarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "esCliente" | "nombre" | "empresa" | "cuit" | "domicilio" | "telefono" | "celular" | "email" | "localidad" | "provincia" | "horario_desde" | "horario_hasta" | "tipo_comercializacion" | "clave" | "ofertas_diarias" | "nuevos_embarques" | "contactar_representante" | "comentarios" | "createdAt" | "updatedAt", ExtArgs["result"]["contacto"]>

  export type $ContactoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      esCliente: string
      nombre: string
      empresa: string
      cuit: string
      domicilio: string
      telefono: string
      celular: string
      email: string
      localidad: string
      provincia: string
      horario_desde: string
      horario_hasta: string
      tipo_comercializacion: string
      clave: string
      ofertas_diarias: boolean
      nuevos_embarques: boolean
      contactar_representante: string
      comentarios: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contacto"]>
    composites: {}
  }

  type ContactoGetPayload<S extends boolean | null | undefined | ContactoDefaultArgs> = $Result.GetResult<Prisma.$ContactoPayload, S>

  type ContactoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactoCountAggregateInputType | true
    }

  export interface ContactoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacto'], meta: { name: 'Contacto' } }
    /**
     * Find zero or one Contacto that matches the filter.
     * @param {ContactoFindUniqueArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactoFindUniqueArgs>(args: SelectSubset<T, ContactoFindUniqueArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactoFindUniqueOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindFirstArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactoFindFirstArgs>(args?: SelectSubset<T, ContactoFindFirstArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindFirstOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactos
     * const contactos = await prisma.contacto.findMany()
     * 
     * // Get first 10 Contactos
     * const contactos = await prisma.contacto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactoWithIdOnly = await prisma.contacto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactoFindManyArgs>(args?: SelectSubset<T, ContactoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacto.
     * @param {ContactoCreateArgs} args - Arguments to create a Contacto.
     * @example
     * // Create one Contacto
     * const Contacto = await prisma.contacto.create({
     *   data: {
     *     // ... data to create a Contacto
     *   }
     * })
     * 
     */
    create<T extends ContactoCreateArgs>(args: SelectSubset<T, ContactoCreateArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactos.
     * @param {ContactoCreateManyArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contacto = await prisma.contacto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactoCreateManyArgs>(args?: SelectSubset<T, ContactoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contactos and returns the data saved in the database.
     * @param {ContactoCreateManyAndReturnArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contacto = await prisma.contacto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contactos and only return the `id`
     * const contactoWithIdOnly = await prisma.contacto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacto.
     * @param {ContactoDeleteArgs} args - Arguments to delete one Contacto.
     * @example
     * // Delete one Contacto
     * const Contacto = await prisma.contacto.delete({
     *   where: {
     *     // ... filter to delete one Contacto
     *   }
     * })
     * 
     */
    delete<T extends ContactoDeleteArgs>(args: SelectSubset<T, ContactoDeleteArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacto.
     * @param {ContactoUpdateArgs} args - Arguments to update one Contacto.
     * @example
     * // Update one Contacto
     * const contacto = await prisma.contacto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactoUpdateArgs>(args: SelectSubset<T, ContactoUpdateArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactos.
     * @param {ContactoDeleteManyArgs} args - Arguments to filter Contactos to delete.
     * @example
     * // Delete a few Contactos
     * const { count } = await prisma.contacto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactoDeleteManyArgs>(args?: SelectSubset<T, ContactoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactoUpdateManyArgs>(args: SelectSubset<T, ContactoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos and returns the data updated in the database.
     * @param {ContactoUpdateManyAndReturnArgs} args - Arguments to update many Contactos.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contactos and only return the `id`
     * const contactoWithIdOnly = await prisma.contacto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacto.
     * @param {ContactoUpsertArgs} args - Arguments to update or create a Contacto.
     * @example
     * // Update or create a Contacto
     * const contacto = await prisma.contacto.upsert({
     *   create: {
     *     // ... data to create a Contacto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacto we want to update
     *   }
     * })
     */
    upsert<T extends ContactoUpsertArgs>(args: SelectSubset<T, ContactoUpsertArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoCountArgs} args - Arguments to filter Contactos to count.
     * @example
     * // Count the number of Contactos
     * const count = await prisma.contacto.count({
     *   where: {
     *     // ... the filter for the Contactos we want to count
     *   }
     * })
    **/
    count<T extends ContactoCountArgs>(
      args?: Subset<T, ContactoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactoAggregateArgs>(args: Subset<T, ContactoAggregateArgs>): Prisma.PrismaPromise<GetContactoAggregateType<T>>

    /**
     * Group by Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactoGroupByArgs['orderBy'] }
        : { orderBy?: ContactoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacto model
   */
  readonly fields: ContactoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacto model
   */
  interface ContactoFieldRefs {
    readonly id: FieldRef<"Contacto", 'Int'>
    readonly esCliente: FieldRef<"Contacto", 'String'>
    readonly nombre: FieldRef<"Contacto", 'String'>
    readonly empresa: FieldRef<"Contacto", 'String'>
    readonly cuit: FieldRef<"Contacto", 'String'>
    readonly domicilio: FieldRef<"Contacto", 'String'>
    readonly telefono: FieldRef<"Contacto", 'String'>
    readonly celular: FieldRef<"Contacto", 'String'>
    readonly email: FieldRef<"Contacto", 'String'>
    readonly localidad: FieldRef<"Contacto", 'String'>
    readonly provincia: FieldRef<"Contacto", 'String'>
    readonly horario_desde: FieldRef<"Contacto", 'String'>
    readonly horario_hasta: FieldRef<"Contacto", 'String'>
    readonly tipo_comercializacion: FieldRef<"Contacto", 'String'>
    readonly clave: FieldRef<"Contacto", 'String'>
    readonly ofertas_diarias: FieldRef<"Contacto", 'Boolean'>
    readonly nuevos_embarques: FieldRef<"Contacto", 'Boolean'>
    readonly contactar_representante: FieldRef<"Contacto", 'String'>
    readonly comentarios: FieldRef<"Contacto", 'String'>
    readonly createdAt: FieldRef<"Contacto", 'DateTime'>
    readonly updatedAt: FieldRef<"Contacto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacto findUnique
   */
  export type ContactoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto findUniqueOrThrow
   */
  export type ContactoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto findFirst
   */
  export type ContactoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto findFirstOrThrow
   */
  export type ContactoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto findMany
   */
  export type ContactoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contactos to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto create
   */
  export type ContactoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data needed to create a Contacto.
     */
    data: XOR<ContactoCreateInput, ContactoUncheckedCreateInput>
  }

  /**
   * Contacto createMany
   */
  export type ContactoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contactos.
     */
    data: ContactoCreateManyInput | ContactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacto createManyAndReturn
   */
  export type ContactoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data used to create many Contactos.
     */
    data: ContactoCreateManyInput | ContactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacto update
   */
  export type ContactoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data needed to update a Contacto.
     */
    data: XOR<ContactoUpdateInput, ContactoUncheckedUpdateInput>
    /**
     * Choose, which Contacto to update.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto updateMany
   */
  export type ContactoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contactos.
     */
    data: XOR<ContactoUpdateManyMutationInput, ContactoUncheckedUpdateManyInput>
    /**
     * Filter which Contactos to update
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to update.
     */
    limit?: number
  }

  /**
   * Contacto updateManyAndReturn
   */
  export type ContactoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data used to update Contactos.
     */
    data: XOR<ContactoUpdateManyMutationInput, ContactoUncheckedUpdateManyInput>
    /**
     * Filter which Contactos to update
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to update.
     */
    limit?: number
  }

  /**
   * Contacto upsert
   */
  export type ContactoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The filter to search for the Contacto to update in case it exists.
     */
    where: ContactoWhereUniqueInput
    /**
     * In case the Contacto found by the `where` argument doesn't exist, create a new Contacto with this data.
     */
    create: XOR<ContactoCreateInput, ContactoUncheckedCreateInput>
    /**
     * In case the Contacto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactoUpdateInput, ContactoUncheckedUpdateInput>
  }

  /**
   * Contacto delete
   */
  export type ContactoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter which Contacto to delete.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto deleteMany
   */
  export type ContactoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contactos to delete
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to delete.
     */
    limit?: number
  }

  /**
   * Contacto without action
   */
  export type ContactoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactoScalarFieldEnum: {
    id: 'id',
    esCliente: 'esCliente',
    nombre: 'nombre',
    empresa: 'empresa',
    cuit: 'cuit',
    domicilio: 'domicilio',
    telefono: 'telefono',
    celular: 'celular',
    email: 'email',
    localidad: 'localidad',
    provincia: 'provincia',
    horario_desde: 'horario_desde',
    horario_hasta: 'horario_hasta',
    tipo_comercializacion: 'tipo_comercializacion',
    clave: 'clave',
    ofertas_diarias: 'ofertas_diarias',
    nuevos_embarques: 'nuevos_embarques',
    contactar_representante: 'contactar_representante',
    comentarios: 'comentarios',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactoScalarFieldEnum = (typeof ContactoScalarFieldEnum)[keyof typeof ContactoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ContactoWhereInput = {
    AND?: ContactoWhereInput | ContactoWhereInput[]
    OR?: ContactoWhereInput[]
    NOT?: ContactoWhereInput | ContactoWhereInput[]
    id?: IntFilter<"Contacto"> | number
    esCliente?: StringFilter<"Contacto"> | string
    nombre?: StringFilter<"Contacto"> | string
    empresa?: StringFilter<"Contacto"> | string
    cuit?: StringFilter<"Contacto"> | string
    domicilio?: StringFilter<"Contacto"> | string
    telefono?: StringFilter<"Contacto"> | string
    celular?: StringFilter<"Contacto"> | string
    email?: StringFilter<"Contacto"> | string
    localidad?: StringFilter<"Contacto"> | string
    provincia?: StringFilter<"Contacto"> | string
    horario_desde?: StringFilter<"Contacto"> | string
    horario_hasta?: StringFilter<"Contacto"> | string
    tipo_comercializacion?: StringFilter<"Contacto"> | string
    clave?: StringFilter<"Contacto"> | string
    ofertas_diarias?: BoolFilter<"Contacto"> | boolean
    nuevos_embarques?: BoolFilter<"Contacto"> | boolean
    contactar_representante?: StringFilter<"Contacto"> | string
    comentarios?: StringFilter<"Contacto"> | string
    createdAt?: DateTimeFilter<"Contacto"> | Date | string
    updatedAt?: DateTimeFilter<"Contacto"> | Date | string
  }

  export type ContactoOrderByWithRelationInput = {
    id?: SortOrder
    esCliente?: SortOrder
    nombre?: SortOrder
    empresa?: SortOrder
    cuit?: SortOrder
    domicilio?: SortOrder
    telefono?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    provincia?: SortOrder
    horario_desde?: SortOrder
    horario_hasta?: SortOrder
    tipo_comercializacion?: SortOrder
    clave?: SortOrder
    ofertas_diarias?: SortOrder
    nuevos_embarques?: SortOrder
    contactar_representante?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    empresa?: string
    email?: string
    AND?: ContactoWhereInput | ContactoWhereInput[]
    OR?: ContactoWhereInput[]
    NOT?: ContactoWhereInput | ContactoWhereInput[]
    esCliente?: StringFilter<"Contacto"> | string
    nombre?: StringFilter<"Contacto"> | string
    cuit?: StringFilter<"Contacto"> | string
    domicilio?: StringFilter<"Contacto"> | string
    telefono?: StringFilter<"Contacto"> | string
    celular?: StringFilter<"Contacto"> | string
    localidad?: StringFilter<"Contacto"> | string
    provincia?: StringFilter<"Contacto"> | string
    horario_desde?: StringFilter<"Contacto"> | string
    horario_hasta?: StringFilter<"Contacto"> | string
    tipo_comercializacion?: StringFilter<"Contacto"> | string
    clave?: StringFilter<"Contacto"> | string
    ofertas_diarias?: BoolFilter<"Contacto"> | boolean
    nuevos_embarques?: BoolFilter<"Contacto"> | boolean
    contactar_representante?: StringFilter<"Contacto"> | string
    comentarios?: StringFilter<"Contacto"> | string
    createdAt?: DateTimeFilter<"Contacto"> | Date | string
    updatedAt?: DateTimeFilter<"Contacto"> | Date | string
  }, "id" | "empresa" | "email">

  export type ContactoOrderByWithAggregationInput = {
    id?: SortOrder
    esCliente?: SortOrder
    nombre?: SortOrder
    empresa?: SortOrder
    cuit?: SortOrder
    domicilio?: SortOrder
    telefono?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    provincia?: SortOrder
    horario_desde?: SortOrder
    horario_hasta?: SortOrder
    tipo_comercializacion?: SortOrder
    clave?: SortOrder
    ofertas_diarias?: SortOrder
    nuevos_embarques?: SortOrder
    contactar_representante?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactoCountOrderByAggregateInput
    _avg?: ContactoAvgOrderByAggregateInput
    _max?: ContactoMaxOrderByAggregateInput
    _min?: ContactoMinOrderByAggregateInput
    _sum?: ContactoSumOrderByAggregateInput
  }

  export type ContactoScalarWhereWithAggregatesInput = {
    AND?: ContactoScalarWhereWithAggregatesInput | ContactoScalarWhereWithAggregatesInput[]
    OR?: ContactoScalarWhereWithAggregatesInput[]
    NOT?: ContactoScalarWhereWithAggregatesInput | ContactoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contacto"> | number
    esCliente?: StringWithAggregatesFilter<"Contacto"> | string
    nombre?: StringWithAggregatesFilter<"Contacto"> | string
    empresa?: StringWithAggregatesFilter<"Contacto"> | string
    cuit?: StringWithAggregatesFilter<"Contacto"> | string
    domicilio?: StringWithAggregatesFilter<"Contacto"> | string
    telefono?: StringWithAggregatesFilter<"Contacto"> | string
    celular?: StringWithAggregatesFilter<"Contacto"> | string
    email?: StringWithAggregatesFilter<"Contacto"> | string
    localidad?: StringWithAggregatesFilter<"Contacto"> | string
    provincia?: StringWithAggregatesFilter<"Contacto"> | string
    horario_desde?: StringWithAggregatesFilter<"Contacto"> | string
    horario_hasta?: StringWithAggregatesFilter<"Contacto"> | string
    tipo_comercializacion?: StringWithAggregatesFilter<"Contacto"> | string
    clave?: StringWithAggregatesFilter<"Contacto"> | string
    ofertas_diarias?: BoolWithAggregatesFilter<"Contacto"> | boolean
    nuevos_embarques?: BoolWithAggregatesFilter<"Contacto"> | boolean
    contactar_representante?: StringWithAggregatesFilter<"Contacto"> | string
    comentarios?: StringWithAggregatesFilter<"Contacto"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contacto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contacto"> | Date | string
  }

  export type ContactoCreateInput = {
    esCliente: string
    nombre: string
    empresa: string
    cuit: string
    domicilio: string
    telefono: string
    celular: string
    email: string
    localidad: string
    provincia: string
    horario_desde: string
    horario_hasta: string
    tipo_comercializacion: string
    clave: string
    ofertas_diarias: boolean
    nuevos_embarques: boolean
    contactar_representante: string
    comentarios: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactoUncheckedCreateInput = {
    id?: number
    esCliente: string
    nombre: string
    empresa: string
    cuit: string
    domicilio: string
    telefono: string
    celular: string
    email: string
    localidad: string
    provincia: string
    horario_desde: string
    horario_hasta: string
    tipo_comercializacion: string
    clave: string
    ofertas_diarias: boolean
    nuevos_embarques: boolean
    contactar_representante: string
    comentarios: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactoUpdateInput = {
    esCliente?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    horario_desde?: StringFieldUpdateOperationsInput | string
    horario_hasta?: StringFieldUpdateOperationsInput | string
    tipo_comercializacion?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    ofertas_diarias?: BoolFieldUpdateOperationsInput | boolean
    nuevos_embarques?: BoolFieldUpdateOperationsInput | boolean
    contactar_representante?: StringFieldUpdateOperationsInput | string
    comentarios?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    esCliente?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    horario_desde?: StringFieldUpdateOperationsInput | string
    horario_hasta?: StringFieldUpdateOperationsInput | string
    tipo_comercializacion?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    ofertas_diarias?: BoolFieldUpdateOperationsInput | boolean
    nuevos_embarques?: BoolFieldUpdateOperationsInput | boolean
    contactar_representante?: StringFieldUpdateOperationsInput | string
    comentarios?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoCreateManyInput = {
    id?: number
    esCliente: string
    nombre: string
    empresa: string
    cuit: string
    domicilio: string
    telefono: string
    celular: string
    email: string
    localidad: string
    provincia: string
    horario_desde: string
    horario_hasta: string
    tipo_comercializacion: string
    clave: string
    ofertas_diarias: boolean
    nuevos_embarques: boolean
    contactar_representante: string
    comentarios: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactoUpdateManyMutationInput = {
    esCliente?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    horario_desde?: StringFieldUpdateOperationsInput | string
    horario_hasta?: StringFieldUpdateOperationsInput | string
    tipo_comercializacion?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    ofertas_diarias?: BoolFieldUpdateOperationsInput | boolean
    nuevos_embarques?: BoolFieldUpdateOperationsInput | boolean
    contactar_representante?: StringFieldUpdateOperationsInput | string
    comentarios?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    esCliente?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    empresa?: StringFieldUpdateOperationsInput | string
    cuit?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    celular?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    localidad?: StringFieldUpdateOperationsInput | string
    provincia?: StringFieldUpdateOperationsInput | string
    horario_desde?: StringFieldUpdateOperationsInput | string
    horario_hasta?: StringFieldUpdateOperationsInput | string
    tipo_comercializacion?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    ofertas_diarias?: BoolFieldUpdateOperationsInput | boolean
    nuevos_embarques?: BoolFieldUpdateOperationsInput | boolean
    contactar_representante?: StringFieldUpdateOperationsInput | string
    comentarios?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContactoCountOrderByAggregateInput = {
    id?: SortOrder
    esCliente?: SortOrder
    nombre?: SortOrder
    empresa?: SortOrder
    cuit?: SortOrder
    domicilio?: SortOrder
    telefono?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    provincia?: SortOrder
    horario_desde?: SortOrder
    horario_hasta?: SortOrder
    tipo_comercializacion?: SortOrder
    clave?: SortOrder
    ofertas_diarias?: SortOrder
    nuevos_embarques?: SortOrder
    contactar_representante?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactoMaxOrderByAggregateInput = {
    id?: SortOrder
    esCliente?: SortOrder
    nombre?: SortOrder
    empresa?: SortOrder
    cuit?: SortOrder
    domicilio?: SortOrder
    telefono?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    provincia?: SortOrder
    horario_desde?: SortOrder
    horario_hasta?: SortOrder
    tipo_comercializacion?: SortOrder
    clave?: SortOrder
    ofertas_diarias?: SortOrder
    nuevos_embarques?: SortOrder
    contactar_representante?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactoMinOrderByAggregateInput = {
    id?: SortOrder
    esCliente?: SortOrder
    nombre?: SortOrder
    empresa?: SortOrder
    cuit?: SortOrder
    domicilio?: SortOrder
    telefono?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    localidad?: SortOrder
    provincia?: SortOrder
    horario_desde?: SortOrder
    horario_hasta?: SortOrder
    tipo_comercializacion?: SortOrder
    clave?: SortOrder
    ofertas_diarias?: SortOrder
    nuevos_embarques?: SortOrder
    contactar_representante?: SortOrder
    comentarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}