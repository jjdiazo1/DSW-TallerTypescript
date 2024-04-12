"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, name, channel, seasons, description, url, imageUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
    }
}
exports.Serie = Serie;