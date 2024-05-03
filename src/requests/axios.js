import axios from "axios";
const API = axios.create({ baseURL : 'https://opulent-giggle-55j64wp656j37w56-3001.app.github.dev/student',withCredentials:true});
export const storeStudentData = async(student) => await API.post('/',student); 