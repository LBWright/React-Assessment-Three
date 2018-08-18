require('es6-promise').polyfill();
require('isomorphic-fetch');

export const fetchData = async () => {
  try {
    const response = await fetch(
      'https://practiceapi.devmountain.com/api/tasks'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const postData = async body => {
  // The server doesn't seem to be responding with the description of any of the tasks
  try {
    const response = await fetch(
      'https://practiceapi.devmountain.com/api/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const patchData = async ({ id, title, description }) => {
  // The server doesn't seem to be responding with the description of any of the tasks
  try {
    console.log(
      'sending title and description to the server:',
      title,
      description
    );
    const response = await fetch(
      `https://practiceapi.devmountain.com/api/tasks/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      }
    );
    const data = await response.json();
    console.log('recieved response of:', data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async id => {
  try {
    const response = await fetch(
      `https://practiceapi.devmountain.com/api/tasks/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const putData = async id => {
  try {
    const response = await fetch(
      `https://practiceapi.devmountain.com/api/tasks/${id}`,
      {
        method: 'PUT'
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
