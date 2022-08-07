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
  gender: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dog?: Maybe<DogObject>;
  dogs: Array<DogObject>;
  user?: Maybe<UserObject>;
  users: Array<UserObject>;
};


export type QueryDogArgs = {
  id: Scalars['Float'];
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type UserObject = {
  __typename?: 'UserObject';
  age: Scalars['Int'];
  gender: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GetDogQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetDogQuery = { __typename?: 'Query', dog?: { __typename?: 'DogObject', name: string, age: number } | null };

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'DogObject', id: number, age: number, name: string }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'UserObject', age: number, name: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserObject', age: number, name: string }> };


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
export const GetUserDocument = gql`
    query getUser($id: Float!) {
  user(id: $id) {
    age
    name
  }
}
    `;
export const GetUsersDocument = gql`
    query getUsers {
  users {
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
    },
    getUser(variables: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUser', 'query');
    },
    getUsers(variables?: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsers', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;