import { defineStore } from 'pinia'
import API from '~/api/vacancyAPI'

export const useVacaniesStore = defineStore('vacancies', {
    state: () => ({
        vacanciesList: 0,
        vacanciesInfo: {}
    }),
    actions: {
        // Setters
        addVacancyInfo(id, info) {
            if(!this.vacanciesInfo[id]) {
                this.vacanciesInfo[id] = info
            }
        },
        // Requests
        async getVacanciesList() {
            API.getVacanciesList().then().catch()
        },
        async getVacancyInfo() {
            API.getVacanciesList().then().catch()
        },
    },
  })