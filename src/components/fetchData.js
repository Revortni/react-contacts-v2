export const url =
  'https://cors-anywhere.herokuapp.com/https://mock-io.herokuapp.com/users';

export const fetchUserData = async () => {
  const response = await fetch(url).then(data => {
    return data.json();
  });
  return response;
};
