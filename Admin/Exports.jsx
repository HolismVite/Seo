import EntityParameters from './EntityParameter/List'
import EntitySeo from './EntityParameter/EntityAction'
import QueryParameters from './QueryParameter/List'
import Snippets from './Snippet/List'
import UpsertEntityParameter from './EntityParameter/Upsert'

const SeoRoutes = [
    {
        path: "/entityParameters",
        component: EntityParameters
    },
    {
        path: "/entityParameter",
        component: UpsertEntityParameter
    },
    {
        path: "/queryParameters",
        component: QueryParameters
    },
    {
        path: "/snippets",
        component: Snippets
    }
]

export { SeoRoutes }
export { EntitySeo }