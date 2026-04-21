'use server';

let likes = 0;

export async function incrementLikes() {
    likes++;
    return likes;
}

export async function getLikes() {
    return likes;
}
