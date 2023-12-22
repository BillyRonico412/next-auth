import { getSession } from "@auth0/nextjs-auth0"

const ProfileServer = async () => {
	const session = await getSession()
	if (!session) {
		return <p className='text-center'>Not logged</p>
	}
	return <p className='text-center'>Logged ({session.user.name})</p>
}

export default ProfileServer
