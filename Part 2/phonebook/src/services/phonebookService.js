import axios from 'axios';

const baseUrl = 'http://localhost:3000/persons';

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
};

const create = newPerson => {
    return axios.post(baseUrl, newPerson).then(response => response.data);
};

const update = (id, updatePerson) => {
    return axios.put(`${baseUrl}/${id}`, updatePerson).then(response => response.data);
};

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`);
};

export const phonebookService =  { remove, update, create, getAll };