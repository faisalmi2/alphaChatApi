
INSERT INTO "Services"( "ServiceName", "IsActive","Slug")
	VALUES ($1, $2, $3)  RETURNING "ServiceId";