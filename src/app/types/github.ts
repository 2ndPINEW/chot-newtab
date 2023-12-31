type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
};

export type ContributesResponse = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: ContributionDay[];
          }[];
        };
      };
    };
  };
  errors?: {
    type: 'NOT_FOUND' | 'FORBIDDEN' | 'BAD_REQUEST' | 'UNAUTHORIZED';
    path: string[];
    locations: [
      {
        line: number;
        column: number;
      }
    ];
    message: string;
  }[];
};
