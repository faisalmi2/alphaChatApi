
INSERT INTO "Services"( "ServiceName", "IsActive")
	VALUES ($1, $2)  RETURNING "ServiceId";