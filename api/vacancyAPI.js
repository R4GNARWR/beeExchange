import axios from "axios"

axios.defaults.baseURL = `https://beejob-dev.ru/api/`;
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

export default {
    getVacanciesList() {
        return axios.get(`vacancy`)
    },
    getCompanyVacancies(id) {
        if(id) {
            return axios.get(`vacancy/by_organization/${id}`)
        }
    },
    getVacancyInfo(id) {
        if(id) {
            return axios.get(`vacancy/${id}`)
        }
    },
    createVanacy(info) {
        if(process.client) {
            return axios.post(`vacancy/store`, {
                name: info.name,
                specialization_id: info.specialization_id,
                qualification: info.qualification,
                skills: info.skills,
                salary_from: info.salary_from,
                salary_to: info.salary_to,
                currency: info.currency,
                is_distant_work: info.is_distant_work,
                type_employment: info.type_employment,
                about_company: info.about_company,
                expectations: info.expectations,
                conditions: info.conditions,
                bonuses: info.bonuses,
                additionally: info.additionally,
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
                }
            })
        }
    },
    editVanacy(id, info) {
        if(id && process.client) {
            return axios.put(`vacancy/store/${id}`, {
                name: info.name,
                specialization_id: info.specialization_id,
                qualification: info.qualification,
                skills: info.skills,
                salary_from: info.salary_from,
                salary_to: info.salary_to,
                currency: info.currency,
                is_distant_work: info.is_distant_work,
                type_employment: info.type_employment,
                about_company: info.about_company,
                expectations: info.expectations,
                conditions: info.conditions,
                bonuses: info.bonuses,
                additionally: info.additionally,
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
                }
            })
        }
    },
    deleteVacancy(id) {
        if(id && process.client) {
            return axios.delete(`vacancy/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
                }
            }
            )
        }
    }
}