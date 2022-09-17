# ts-guideline

 <font size="4">

Minimalistic configuration for TS to only extend JS with types. No TS-scpecific features, no bundling. Readable maintainable code after compilation.

- **commonjs** folder for CommonJS Modules ts-configuration compatible with ECMAScript import

- **ecmascript** folder for ECMAScript Modules ts-configuration

- **js-dts** folder for JS + DTS configuration

- **js-doc** folder for JS Doc + TypeScript configuration

  </font>

# Reccomendations

<font size="4">

1.  **Avoid** using **type aliases** - example from mongoose types

    ```ts
    export type ApplyBasicQueryCasting<T> = T | T[] | (T extends (infer U)[] ? U : any) | any;
    ```

    this is unreadable and overcomplicated

    **Aliases are** good **only** for **simple** types

    ```ts
    type Fruit = 'banana' | 'orange' | 'pineapple' | 'watermelon';

    type Debt = { amount: number; dueTo: Date };
    type AccountDebt = { accountId: number; debt: Debt | null };
    ```

2.  **Never use complicated generic types** - example from mongoose types
    ```ts
    type QueryWithHelpers<ResultType, DocType, THelpers = {}, RawDocType = DocType> = Query<
      ResultType,
      DocType,
      THelpers,
      RawDocType
    > &
      THelpers;
    ```
    basically is is looks worse then
    ```ts
    type QueryWithHelpers<any> = Query<any> & any;
    ```
3.  Not everything is neccessary to cover with types.

    It requires to add useless interfaces for type like this. Better just not use this.

    ```ts
    // with typing
    interface IDynamicGeneratedClass {}

    const classGenerator = (): IDynamicGeneratedClass =>
      class DynamicGeneratedClass implements IDynamicGeneratedClass {
        args: number[];
        constructor(...args: number[]) {
          this.args = args;
        }
      };
    ```

    ```ts
    // simplified
    const classGenerator = () =>
      class DynamicGeneratedClass {
        args: number[];
        constructor(...args: number[]) {
          this.args = args;
        }
      };
    ```

4.  avoid using `any` - there is no point at all to use typescript if you need to keep using `any`.

This list will continue in future.

  </font>

# Alternatives

<font size="4">

1. You can use JS Doc @type for type definitions, typescript will work and check types for you

2. You can always use JS + DTS - it is a similar way as it is done in C++ with .h and .cpp files
   DTS files are not working perfectly. Sometimes you forced to use JS Doc @typedef to import types from d.ts files

  </font>

# Summary

<font size="4">

I prefer to use JS + DTS or JS DOC + TypeScript, because it solve every type issues, but not requires to write code in TypeScript

If it is not possible for you to follow this 2 solutions, please think about using those TS Guidelines. It will save you a lot of pain in future.

TypeScript will sync their development withing the JavaScript standard. This means there will be no TS Decorators and TypeScript will become more like JS Extension rather than a different language transpiled to JS.

  </font>

[![Good talks about Types and JS/TS future](https://img.youtube.com/vi/SdV9Xy0E4CM/0.jpg)](https://www.youtube.com/watch?v=SdV9Xy0E4CM)
