const PROFILE_STORAGE_KEY = "digitalStoreProfiles";

export function getProfile(username) {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    const allProfiles = raw ? JSON.parse(raw):{};
    return allProfiles[username] || {fullName:"", email:"", address:"", postalCode:"", phone:""}
}

export function saveProfile(username, profile) {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    const allProfiles = raw?JSON.parse(raw):{};
    allProfiles[username] = profile
    localStorage.setItem(PROFILE_STORAGE_KEY,JSON.stringify(allProfiles))
}