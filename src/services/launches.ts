// services/launches.ts
import { getLastestLaunches, getLaunchBy } from "./spacex"

export async function getLaunch(id: string) {
    if (id) {
        return await getLaunchBy({id})
    }
}

export async function getStaticPaths() {
    const launches = await getLastestLaunches();
    return launches.map((launch) => ({
        params: { id: launch.id },
    }));
}