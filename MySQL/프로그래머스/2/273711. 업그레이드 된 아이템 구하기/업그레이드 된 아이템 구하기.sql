SELECT C.ITEM_ID, C.ITEM_NAME, C.RARITY
FROM ITEM_INFO C
    JOIN (
        SELECT A.ITEM_ID AS 'CHILD_ID', B.ITEM_ID AS 'RARE_ID'
        FROM ITEM_TREE A
            JOIN (
                SELECT ITEM_ID
                FROM ITEM_INFO
                WHERE RARITY = 'RARE'
            ) B
            ON A.PARENT_ITEM_ID = B.ITEM_ID
    ) D
    ON C.ITEM_ID = D.CHILD_ID
ORDER BY C.ITEM_ID DESC




# ITEM_ID	RARITY
# 0	        RARE
# 1	        RARE
# 3	        RARE
# 4	        RARE