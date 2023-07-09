import { useFetchContributes } from '../../core/hooks/useFetch';

export const ContributesGraph = () => {
  const { data: contributes } = useFetchContributes();

  const { weeks } = contributes.data.user.contributionsCollection.contributionCalendar;

  const size = 10;
  const margin = 1;
  const padding = 8;
  const blockBorderRadius = (size / 5) * 2;

  const width = weeks.length * (size + margin * 2) + padding * 2;
  const height = 7 * (size + margin * 2) + padding * 2;

  const weekItems = weeks.map((week) => {
    return week.contributionDays.map((day, i) => {
      return (
        <div
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: day.color,
            margin: `${margin}px`,
            borderRadius: `${blockBorderRadius}px`,
            transition: 'all 0.5s ease-in-out',
          }}
        ></div>
      );
    });
  });

  return (
    <div
      style={{
        background: 'transparent',
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: `${padding}px`,
        borderRadius: '8px',
      }}
    >
      {weekItems}
    </div>
  );
};
