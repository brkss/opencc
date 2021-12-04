import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CreateRecordInput = {
  created_at: Scalars['DateTime'];
  icon: Scalars['String'];
  id: Scalars['String'];
  label: Scalars['String'];
  unit: Scalars['String'];
  value: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  saveRecords: Scalars['Boolean'];
};


export type MutationSaveRecordsArgs = {
  records: Array<CreateRecordInput>;
};

export type Query = {
  __typename?: 'Query';
  ping: Scalars['String'];
  records: Array<Record>;
};

export type Record = {
  __typename?: 'Record';
  created_at: Scalars['DateTime'];
  icon: Scalars['String'];
  id: Scalars['String'];
  label: Scalars['String'];
  local_id: Scalars['String'];
  unit: Scalars['String'];
  value: Scalars['Float'];
};

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type SaveRecordMutationVariables = Exact<{
  records: Array<CreateRecordInput> | CreateRecordInput;
}>;


export type SaveRecordMutation = { __typename?: 'Mutation', saveRecords: boolean };


export const PingDocument = gql`
    query Ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;
export const SaveRecordDocument = gql`
    mutation SaveRecord($records: [CreateRecordInput!]!) {
  saveRecords(records: $records)
}
    `;
export type SaveRecordMutationFn = Apollo.MutationFunction<SaveRecordMutation, SaveRecordMutationVariables>;

/**
 * __useSaveRecordMutation__
 *
 * To run a mutation, you first call `useSaveRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveRecordMutation, { data, loading, error }] = useSaveRecordMutation({
 *   variables: {
 *      records: // value for 'records'
 *   },
 * });
 */
export function useSaveRecordMutation(baseOptions?: Apollo.MutationHookOptions<SaveRecordMutation, SaveRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveRecordMutation, SaveRecordMutationVariables>(SaveRecordDocument, options);
      }
export type SaveRecordMutationHookResult = ReturnType<typeof useSaveRecordMutation>;
export type SaveRecordMutationResult = Apollo.MutationResult<SaveRecordMutation>;
export type SaveRecordMutationOptions = Apollo.BaseMutationOptions<SaveRecordMutation, SaveRecordMutationVariables>;