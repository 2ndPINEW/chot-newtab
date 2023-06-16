import { ContributesResponse } from '../types/github';

export async function getContribution(userName: string): Promise<ContributesResponse> {
  const res = await fetch(`https://contributes.obake.land/api/contributes?userName=${userName}`, {
    method: 'GET',
  });
  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }
  return json;
}
