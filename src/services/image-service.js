export default class ImageService {
    async getResource(count) {
        const url = `https://api.thecatapi.com/v1/images/search?limit=${count}`;
        const result = await fetch(url);

        if (!result.ok) {
            throw new Error (`Could not fetch ${url}`)
        }

        const body = await result.json();

        return body
    };
}