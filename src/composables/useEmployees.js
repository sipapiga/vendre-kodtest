import { ref, watch } from "vue";
const API_URL = `https://reqres.in/api/users`;

export function useEmployees() {
    const isLoading = ref(false);
    const currentPage = ref(1);
    const totalPages = ref(0);
    const employeesList = ref([]);

    async function fetchData(page = 1) {
        try {
            isLoading.value = true;
            const res = await fetch(`${API_URL}?page=${page}`);
            if (!res.ok) throw new Error(res.status.toString());
            const data = await res.json();
            employeesList.value = data.data;
            totalPages.value = data.total_pages;
            isLoading.value = false;
        } catch (error) {
            console.log("Error fetching data: " + error);
            isLoading.value = false;
        }
    }

    watch(currentPage, (newPage) => {
        fetchData(newPage);
    });

    return {
        isLoading,
        currentPage,
        totalPages,
        employeesList,
        fetchData,
    };
}
