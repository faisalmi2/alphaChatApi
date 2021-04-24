INSERT INTO "Blogs"(
	 "BlogTitle", "BlogDescription", "AddedOn", "AddedBy","Tags")
	VALUES ($1, $2, $3, $4, $5)  RETURNING "BlogId";
