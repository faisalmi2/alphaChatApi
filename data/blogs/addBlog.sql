INSERT INTO "Blogs"(
	 "BlogTitle", "BlogDescription", "AddedOn", "AddedBy")
	VALUES ($1, $2, $3, $4)  RETURNING "BlogId";
