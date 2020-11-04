import axios from 'axios';
import qs from 'qs';
import { optimize } from 'webpack';

class HTTP {
    axiosPost(options){
        axios({
            url:options.url,
            method:'post',
            header:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:qs.stringify(optimize.data)
        }).then((res)=>{
            options.success(res.data);
        }).catch((err)=>{
            options.error(err)
        })
    }
}

export { HTTP };