const STORAGE_KEY = "digitalStoreUsers";

export function getLocalUsers() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw):[]
}

export function saveLocalUser(user) {
    const users = getLocalUsers();
    users.push(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

export function findLocalUser(username, password) {
    const users = getLocalUsers()
    return users.find(
        (user)=> user.username === username && user.password === password
    )
}

export function userExists(username) {
    const users = getLocalUsers()
    return users.some(
        (user)=> user.username === username
    )
}