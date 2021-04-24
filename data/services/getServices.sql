SELECT "ServiceId", "ServiceName", "IsActive","Slug"
	FROM "Services";



    -- SELECT
    -- 	*,
    --     (
    --     	SELECT jsonb_agg(nested_section)
    --     	FROM (
	--         	SELECT
	-- 	     		*
		     		
	-- 	        FROM "ServicePrerequisites"
	-- 	        WHERE "ServicePrerequisites"."ServiceId" = "Services"."ServiceId"
    --     	) AS nested_section
    --     ) AS ServicePrerequisites
    -- FROM "Services"


