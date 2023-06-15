import { ContributesQuery, ContributesResponse } from '../types/github';

const TOKEN = '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';

export async function getContribution(userName: string): Promise<ContributesResponse> {
  const variables = JSON.stringify({ userName });
  const body = {
    query: ContributesQuery,
    variables,
  };
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }
  return json;
}
