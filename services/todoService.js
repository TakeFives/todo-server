const axios = require('axios');

const url = process.env.TODOS_EXTERNAL_API_URL;
const getAllEndPoint = 'todos'

exports.getExternalTodos = async () => {
  try {
    const response = await axios.get(url+getAllEndPoint);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch todos from external API');
  }
};
