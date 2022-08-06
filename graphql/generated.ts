import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DogObject = {
  __typename?: 'DogObject';
  age: Scalars['Int'];
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dog?: Maybe<DogObject>;
  dogs: Array<DogObject>;
};


export type QueryDogArgs = {
  id: Scalars['Float'];
};

export type GetDogQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetDogQuery = { __typename?: 'Query', dog?: { __typename?: 'DogObject', name: string, age: number } | null };

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'DogObject', id: number, age: number, name: string }> };


export const GetDogDocument = gql`
    query getDog($id: Float!) {
  dog(id: $id) {
    name
    age
  }
}
    `;
export const GetDogsDocument = gql`
    query getDogs {
  dogs {
    id
    age
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getDog(variables: GetDogQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDogQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogQuery>(GetDogDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDog', 'query');
    },
    getDogs(variables?: GetDogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogsQuery>(GetDogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDogs', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;