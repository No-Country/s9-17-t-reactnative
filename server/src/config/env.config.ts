const env = {
	port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    secretKey: process.env.SECRET_KEY || 'secret'

}

export default env