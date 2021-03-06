import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';
const cookie = localStorage.getItem('access_token'); 

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + cookie
    },
}

const api = {

    checkLogin: (loginData) =>
    axios.post(`${BASE_URL}/login`, loginData),

    checkSignup: (signupData) =>
    axios.post(`${BASE_URL}/register`, signupData),

    // Farmer APIs
    getFarmerVegetables: () =>
    axios.get(`${BASE_URL}/get_vegetables`, token),

    getFarmerTrees: () =>
    axios.get(`${BASE_URL}/get_trees`, token),

    getFarmerProfile: () =>
    axios.get(`${BASE_URL}/profile`, token),
    
    editFarmerProfile: (editProfileData) =>
    axios.post(`${BASE_URL}/edit_profile`, editProfileData, token),
    
    addVegetable: (addItemData) =>
    axios.post(`${BASE_URL}/add_vegetables`, addItemData, token),

    editVegetable: (editItemData) =>
    axios.post(`${BASE_URL}/edit_vegetable`, editItemData, token),

    deleteVegetable: (deleteItemData) =>
    axios.post(`${BASE_URL}/delete_vegetable`, deleteItemData, token),

    addTree: (addItemData) =>
    axios.post(`${BASE_URL}/add_trees`, addItemData, token),

    editTree: (editItemData) =>
    axios.post(`${BASE_URL}/edit_tree`, editItemData, token),

    deleteTree: (deleteItemData) =>
    axios.post(`${BASE_URL}/delete_tree`, deleteItemData, token),

    getCustomers: () =>
    axios.get(`${BASE_URL}/get_customers`, token),

    getTreesChart: () =>
    axios.get(`${BASE_URL}/trees_chart`, token),

    getVegetablesChart: () =>
    axios.get(`${BASE_URL}/vegetables_chart`, token),

    getTotalAdoptions: () =>
    axios.get(`${BASE_URL}/total_adoptions`, token),

    getTotalOrders: () =>
    axios.get(`${BASE_URL}/total_orders`, token),

    //Customer APIs
    getCustomerFarms: () =>
    axios.get(`${BASE_URL}/user_get_farms`, token),

    getCustomerTrees: (treeData) =>
    axios.post(`${BASE_URL}/user_get_trees`, treeData, token),

    getCustomerVegetables: (vegetableData) =>
    axios.post(`${BASE_URL}/user_get_vegetables`, vegetableData, token),

    adoptTree: (treeAdoptionData) =>
    axios.post(`${BASE_URL}/user_adopt_trees`, treeAdoptionData, token),

    getCustomerAdoptions: () =>
    axios.get(`${BASE_URL}/user_get_adoptions`, token),

    orderVegetable: (vegetableOrderData) =>
    axios.post(`${BASE_URL}/user_order_vegetables`, vegetableOrderData, token),

    getCustomerOrders: () =>
    axios.get(`${BASE_URL}/user_get_orders`, token),

    getAllTrees: () =>
    axios.get(`${BASE_URL}/get_all_trees`, token),

    getAllVegetables: () =>
    axios.get(`${BASE_URL}/get_all_vegetables`, token),
    
}
export default api;