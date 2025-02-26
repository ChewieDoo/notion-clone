import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values"; // import validators - helps validate structure of stored data

export default defineSchema({ // exports schema configuration so it can be used throughout the application
    documents: defineTable({ // defines a table named "documents"
        title: v.string(),
        userID: v.string(),
        isArchived: v.boolean(),
        parentDocument: v.optional(v.id("documents")),
        content: v.optional(v.string()),
        coverImage: v.optional(v.string()),
        icon: v.optional(v.string()),
        isPublished: v.boolean(),
        lastModified: v.optional(v.number()), // since convex doesn't have a date type, we use a number to represent a date
    })
    .index("by_user", ["userID"]) // help make database lookup faster
    .index("by_user_parent",["userID", "parentDocument"]) //create another index called "by_user-parent that helps find nested documents"
})
