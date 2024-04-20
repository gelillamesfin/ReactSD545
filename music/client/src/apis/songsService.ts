import http from './axios';

const getAll=()=>{
    return http.get('/songs')
}


export default getAll;//does it have to be in {}
 