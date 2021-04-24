 SELECT
    	*,
        (
        	SELECT jsonb_agg(nested_section)
        	FROM (
	        	SELECT
		     		*
		     		
		        FROM "ServicePrerequisites"
		        WHERE "ServicePrerequisites"."ServiceId" = "Services"."ServiceId"
        	) AS nested_section
        ) AS ServicePrerequisites
    FROM "Services"
	WHERE "Slug"=$1