class Links {
    constructor(name, url, type) {
        this.name = name;
        this.url = url;
        this.type = type;
    }

    static fromObject(obj) {
        return new Links(obj.name, obj.url, obj.type);
    }
}

export default Links;
