INSERT INTO "Testimonials"(
	 "TestimonialTitle", "TestimonialDescription", "ClientName", "Rating", "AddedBy", "AddedOn","Tags")
	VALUES ( $1, $2, $3, $4, $5, $6,$7)  RETURNING "TestimonialId";