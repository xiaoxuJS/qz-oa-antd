import {
    http,
    ip
} from './http';

export function sofClueFindClue(data) {
    const url = ip + '/sof-clue/find/clue';
    return http(url, "post", data)
}