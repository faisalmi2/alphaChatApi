INSERT INTO "Testimonials"(
	 "TestimonialTitle", "TestimonialDescription", "ClientName", "Rating", "AddedBy", "AddedOn","ClientPosition")
	VALUES ( $1, $2, $3, $4, $5, $6,$7)  RETURNING "TestimonialId";