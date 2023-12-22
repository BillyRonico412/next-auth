import ProfileServer from "../components/ProfileServer"

const Home = () => {
	return (
		<main className="w-screen h-screen flex flex-col bg-black text-white justify-center items-center">
			<div className="flex flex-col mx-auto  gap-y-8">
				<ProfileServer />
				<div className="flex gap-x-4">
					<a
						href="/api/auth/login"
						className="bg-blue-600 font-bold px-4 py-2 rounded"
					>
						Login
					</a>
					<a
						href="/api/auth/logout"
						className="bg-blue-600 font-bold px-4 py-2 rounded"
					>
						Logout
					</a>
				</div>
			</div>
		</main>
	)
}

export default Home
