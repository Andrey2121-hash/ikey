export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
            .then((response) => response.json())
            .then(process);
    },
    wishlist(list, callback) {
        this.get((data) => {
            const result = data.filter((item) => list.includes(item.id));
            callback(result)

        })
    },
    item(value, callback) {
        const result = data.find(item => item.id === value)
        callback(result)
    }

};

