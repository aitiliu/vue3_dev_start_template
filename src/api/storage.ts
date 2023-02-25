const Storage = {
    set(key:string, value:any):void{
        localStorage.setItem(key, value);
    },
    get(key:string):any{
        return localStorage.getItem(key);
    },
    remove(key:string):void{
        localStorage.removeItem(key);
    }
}

export default Storage;