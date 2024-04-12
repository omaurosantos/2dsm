import axios from "axios";

const api = axios.create({
    baseURL:"https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
    headers: {
        "Content-Type":"application/json"
    }
});

export default api;