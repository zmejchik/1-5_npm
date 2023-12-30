// eslint-disable-next-line import/prefer-default-export
export const GetBacon = () => {
  const body = fetch('https://baconipsum.com/api/?type=all-meat&paras=3').then(
    (res) => res.json(),
  );

  return body;
};
