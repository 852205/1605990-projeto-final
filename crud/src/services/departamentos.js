import api from "./api";

const getDepartamentos = async () => {
    const resp = await api.get('/departamento')
    return resp.data
}